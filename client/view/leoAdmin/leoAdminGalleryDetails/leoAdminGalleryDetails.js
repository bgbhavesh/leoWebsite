// import {imageUpload} from '../../../cloudinary.config.js'
Template.leoAdminGalleryDetails.onCreated(function () {
    let params = Router.current().params;
    Cloudinary.collection.remove({});
    if(params && params.catId){
        let gallery = LeoCollections.LeoGallery.findOne({_id:params.catId})
        if(gallery && gallery.images && gallery.images.length>0){
            _.each(gallery.images,function (image) {
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
Template.leoAdminGalleryDetails.onRendered(function () {
    var utilObj = new LeoUtils();
    utilObj.applyValidationAndFloatingLabel($('#gallery'));
    // imageUpload.cloudinary.imageUpload($('#productCategoryImage'));
})
Template.leoAdminGalleryDetails.events({
    "click [data-action='cancel']":function(e){
        e.preventDefault();
        Router.go("leoAdminGallery")
    },
    "click [data-action='save']":function(){
        let formData =$("#gallery");
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
            obj.secure_url = image.response.secure_url||"";
            images.push(obj);
        })
        insertObject.images = images;
        if(getRouterParams('galleryId')){
            Meteor.call('updateGallery',getRouterParams('galleryId'),insertObject,function(err,data){
                if(data){
                    // $('#productCategory')[0].reset();
                    Cloudinary.collection.remove();
                }
                if(err){
                    toastr.clear();
                    toastr.error(err.reason);

                }
            })
        }else{
            Meteor.call('insertGallery',insertObject,function(err,data){
                if(data){
                    // $('#productCategory')[0].reset();
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
        // $('#productCategory')[0].reset();
    }
})
Template.leoAdminGalleryDetails.helpers({
    showTags:function(){
        let tempData = Template.instance().data;
        if(tempData && tempData.Gallery && tempData.Gallery.tags){
            return tempData.Gallery.tags.toString()
        }
        else return ''


    }
});//
Template.leoAdminGalleryDetails.onDestroyed(function () {
    Cloudinary.collection.remove()
})