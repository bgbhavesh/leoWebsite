// import {imageUpload} from '../../../cloudinary.config.js'
Template.leoAdminAddressDetails.onCreated(function () {
    let params = Router.current().params;
    Cloudinary.collection.remove({});
    if(params && params.catId){
        let address = LeoCollections.LeoAddress.findOne({_id:params.catId});
        if(address && address.images && address.images.length>0){
            _.each(address.images,function (image) {
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
Template.leoAdminAddressDetails.onRendered(function () {
    let utilObj = new LeoUtils();
    utilObj.applyValidationAndFloatingLabel($('#address'));
    // imageUpload.cloudinary.imageUpload($('#productCategoryImage'));
});
Template.leoAdminAddressDetails.events({
    "click [data-action='cancel']":function(e){
        e.preventDefault();
        Router.go("leoAdminAddress")
    },
    "click [data-action='save']":function(){
        let formData =$("#address");
        let insertObject = {};
        new LeoUtils().getFormValues(formData,function (data) {
            insertObject.tags = data.tags.split(",");
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
            obj.response = obj.response||{};
            obj.response.secure_url = (image.response && image.response.secure_url)?image.response.secure_url:"";
            obj.response.public_id = (image.response && image.response.public_id)?image.response.public_id:"";
            images.push(obj);
        })
        insertObject.images = images;
        if(getRouterParams('addressId')){
            Meteor.call('updateAddress',getRouterParams('addressId'),insertObject,function(err,data){
                if(data){
                    // $('#productCategory')[0].reset();
                    Cloudinary.collection.remove();
                    toastr.clear();
                    toastr.success("Address updated");
                }
                if(err){
                    toastr.clear();
                    toastr.error(err.reason);
                }
            })
        }else{
            Meteor.call('insertAddress',insertObject,function(err,data){
                if(data){
                    // $('#productCategory')[0].reset();
                    Cloudinary.collection.remove();
                    toastr.clear();
                    toastr.success("Address Item Created");
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
    }
});
Template.leoAdminAddressDetails.helpers({
    showTags:function(){
        let tempData = Template.instance().data;
        if(tempData && tempData.Address && tempData.Address.tags){
            return tempData.Address.tags.toString()
        }
        else return '';
    }
});//
Template.leoAdminAddressDetails.onDestroyed(function () {
    Cloudinary.collection.remove();
});