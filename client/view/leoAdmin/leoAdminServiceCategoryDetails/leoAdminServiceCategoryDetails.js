// import {imageUpload} from '../../../cloudinary.config.js'
Template.leoAdminServiceCategoryDetails.onCreated(function () {
    let params = Router.current().params;
    Cloudinary.collection.remove({});
    if(params && params.catId){
        let serviceCategory = LeoCollections.LeoServiceCategory.findOne({_id:params.catId})
        if(serviceCategory && serviceCategory.images && serviceCategory.images.length>0){
            _.each(serviceCategory.images,function (image) {
                let obj = image;
                obj.percent_uploaded = 100;
                if(image.secure_url){
                    obj.response = {};
                    obj.response.secure_url = image.secure_url
                }
                Cloudinary.collection.insert(obj);
            })

        }
    }
})
Template.leoAdminServiceCategoryDetails.onRendered(function () {
    var utilObj = new LeoUtils();
    utilObj.applyValidationAndFloatingLabel($('#serviceCategory'));
    // imageUpload.cloudinary.imageUpload($('#serviceCategoryImage'));
})
Template.leoAdminServiceCategoryDetails.events({
    "click [data-action='cancel']":function(e){
        e.preventDefault();
        Router.go("leoAdminServiceCategory")
    },
    "click [data-action='save']":function(){
        let formData =$("#serviceCategory");
        let insertObject = {};
        new LeoUtils().getFormValues(formData,function (data) {
            insertObject.name = data.name;
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
            obj.secure_url = image.response.secure_url||"";
            images.push(obj);
        })
        insertObject.images = images;
        if(getRouterParams('catId')){
            Meteor.call('updateServiceCategory',getRouterParams('catId'),insertObject,function(err,data){
                if(data){
                    // $('#serviceCategory')[0].reset();
                    Cloudinary.collection.remove();
                }
                if(err){
                    toastr.clear();
                    toastr.error(err.reason);

                }
            })
        }else{
            Meteor.call('insertServiceCategory',insertObject,function(err,data){
                if(data){
                    // $('#serviceCategory')[0].reset();
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
        // $('#serviceCategory')[0].reset();
    }
})
Template.leoAdminServiceCategoryDetails.helpers({
    showTags:function(){
        let tempData = Template.instance().data;
        if(tempData && tempData.serviceCategory && tempData.serviceCategory.tags){
            return tempData.serviceCategory.tags.toString()
        }
        else return ''


    }
});//
Template.leoAdminServiceCategoryDetails.onDestroyed(function () {
    Cloudinary.collection.remove()
})