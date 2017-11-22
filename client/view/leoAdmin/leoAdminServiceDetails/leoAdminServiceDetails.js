// import {imageUpload} from '../../../cloudinary.config.js'
Template.leoAdminServiceDetails.onCreated(function () {
    let params = Router.current().params;
    Cloudinary.collection.remove({});
    if(params && params.catId){
        let service = LeoCollections.LeoService.findOne({_id:params.catId})
        if(service && service.images && service.images.length>0){
            _.each(service.images,function (image) {
                let obj = image;
                obj.percent_uploaded = 100;
                if(image.secure_url){
                    obj.response = {};
                    obj.response.secure_url = image.secure_url;
                    obj.public_id = image.public_id;
                }
                Cloudinary.collection.insert(obj);
            })

        }
    }
})
Template.leoAdminServiceDetails.onRendered(function () {
    var utilObj = new LeoUtils();
    utilObj.applyValidationAndFloatingLabel($('#service'));
    // imageUpload.cloudinary.imageUpload($('#serviceImage'));
})
Template.leoAdminServiceDetails.events({
    "click [data-action='cancel']":function(e){
        e.preventDefault();
        Router.go("leoAdminService")
    },
    "click [data-action='save']":function(){
        let formData =$("#service");
        let insertObject = {};
        new LeoUtils().getFormValues(formData,function (data) {
            insertObject.name = data.name;
            insertObject.tags = data.tags.split(",");
            insertObject.categoryId = data.categoryId;
            insertObject.title = data.title;
            insertObject.description = data.description;
            insertObject.isActive = $("[name='isActive']").prop( "checked" );
        });
        let images = [];
        _.map(Cloudinary.collection.find().fetch(),function(image){
            let obj = {};
            obj.isActive= image.isActive||false;
            obj.isDefault= image.isDefault||false;
            obj.resource_type = image.resource_type||"image";
            obj.seq = image.seq||1;
            obj.secure_url = image.response.secure_url||"";
            obj.public_id = image.response.public_id||"";
            images.push(obj);
        })
        insertObject.images = images;
        if(getRouterParams('serviceId')){
            Meteor.call('updateService',getRouterParams('serviceId'),insertObject,function(err,data){
                if(data){
                    // $('#service')[0].reset();
                    Cloudinary.collection.remove();
                }
                if(err){
                    toastr.clear();
                    toastr.error(err.reason);

                }
            })
        }else{
            Meteor.call('insertService',insertObject,function(err,data){
                if(data){
                    // $('#service')[0].reset();
                    Cloudinary.collection.remove();
                }
                if(err){
                    toastr.clear();
                    toastr.error(err.reason);

                }
            })
        }
    },
    "click #reset":function(){
        // $('#service')[0].reset();
    }
})
Template.leoAdminServiceDetails.helpers({
    showTags:function(){
        let tempData = Template.instance().data;
        if(tempData && tempData.service && tempData.service.tags){
            return tempData.service.tags.toString()
        }
        else return ''
    },
    LeoAutoCompleteSettings:function () {
        return {
            collectionName: "LeoCollections.LeoServiceCategory",
            limit: 10,
            template:"",
            matchCase:{isActive:true},
            position: "top",
        };
    }
});//
Template.leoAdminServiceDetails.onDestroyed(function () {
    Cloudinary.collection.remove()
})