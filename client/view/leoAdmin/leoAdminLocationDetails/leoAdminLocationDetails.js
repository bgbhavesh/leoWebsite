// import {imageUpload} from '../../../cloudinary.config.js'
Template.leoAdminLocationDetails.onCreated(function () {
    let self = this;
    self.permissions = new ReactiveVar();
    self.permissions.set([]);
    this.subscribe("leoRoles",{},{});
    let params = Router.current().params;
    Cloudinary.collection.remove({});
    if(params && params.catId){
        let location = LeoCollections.LeoLocation.findOne({_id:params.catId});
        if(location && location.permissions){
            self.permissions.set(location.permissions);
        }
        if(location && location.images && location.images.length>0){
            _.each(location.images,function (image) {
                let obj = image;
                obj.percent_uploaded = 100;
                obj.response = obj.response||{};
                obj.response.secure_url = (image.response && image.response.secure_url)?image.response.secure_url:"";
                obj.response.public_id = (image.response && image.response.public_id)?image.response.public_id:"";
                Cloudinary.collection.insert(obj);
            })

        }
    }
});
Template.leoAdminLocationDetails.onRendered(function () {
    let utilObj = new LeoUtils();
    utilObj.applyValidationAndFloatingLabel($('#location'));
    // imageUpload.cloudinary.imageUpload($('#productCategoryImage'));
});
Template.leoAdminLocationDetails.events({
    "click [data-action='cancel']":function(e){
        e.preventDefault();
        Router.go("leoAdminLocation")
    },
    "click [data-action='save']":function(e,t){
        e.preventDefault();
        let formData =$("#location");
        let insertObject = {};
        new LeoUtils().getFormValues(formData,function (data) {
            insertObject.tags = data.tags.split(",");
            insertObject.title = data.title;
            insertObject.description = data.description;
            insertObject.isActive = $("[name='isActive']").prop( "checked" );
            insertObject.permissions = t.permissions.get();
        });
        let images = [];
        _.map(Cloudinary.collection.find().fetch(),function(image){
            let obj = {};
            obj.isActive= image.isActive||false;
            obj.isDefault= image.isDefault||false;
            obj.resource_type = image.resource_type||"image";
            obj.seq = image.seq||1;
            obj.response = obj.response||{};
            obj.response.secure_url = (image.response && image.response.secure_url)?image.response.secure_url:"";
            obj.response.public_id = (image.response && image.response.public_id)?image.response.public_id:"";
            images.push(obj);
        })
        insertObject.images = images;
        if(getRouterParams('locationId')){
            Meteor.call('updateLocation',getRouterParams('locationId'),insertObject,function(err,data){
                if(data){
                    // $('#productCategory')[0].reset();
                    Cloudinary.collection.remove();
                    toastr.clear();
                    toastr.success("Location Updated");
                    Router.go("leoAdminLocation")
                }
                if(err){
                    toastr.clear();
                    toastr.error(err.reason);

                }
            })
        }else{
            Meteor.call('insertLocation',insertObject,function(err,data){
                if(data){
                    // $('#productCategory')[0].reset();
                    Cloudinary.collection.remove();
                    toastr.clear();
                    toastr.success("Location Created");
                    Router.go("leoAdminLocation")
                }
                if(err){
                    toastr.clear();
                    toastr.error(err.reason);

                }
            })
        }
    },
    "click #reset":function(){
        // $('#productCategory')[0].reset();
    },
});
Template.leoAdminLocationDetails.helpers({
    showTags:function(){
        let tempData = Template.instance().data;
        if(tempData && tempData.Location && tempData.Location.tags){
            return tempData.Location.tags.toString()
        }
        else return '';
    },

});//

Template.leoAdminLocationDetails.onDestroyed(function () {
    Cloudinary.collection.remove()
});