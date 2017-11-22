// import {imageUpload} from '../../../cloudinary.config.js'
Template.leoAdminProductCategoryDetails.onCreated(function () {
    let params = Router.current().params;
    Cloudinary.collection.remove({});
    if(params && params.catId){
        let productCategory = LeoCollections.LeoProductCategory.findOne({_id:params.catId})
        if(productCategory && productCategory.images && productCategory.images.length>0){
            _.each(productCategory.images,function (image) {
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
Template.leoAdminProductCategoryDetails.onRendered(function () {
    var utilObj = new LeoUtils();
    utilObj.applyValidationAndFloatingLabel($('#productCategory'));
    // imageUpload.cloudinary.imageUpload($('#productCategoryImage'));
})
Template.leoAdminProductCategoryDetails.events({
    "click [data-action='cancel']":function(e){
        e.preventDefault();
        Router.go("leoAdminProductCategory")
    },
    "click [data-action='save']":function(){
        let formData =$("#productCategory");
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
            obj.public_id = image.response.public_id||"";
            images.push(obj);
        })
        insertObject.images = images;
        if(getRouterParams('catId')){
            Meteor.call('updateProductCategory',getRouterParams('catId'),insertObject,function(err,data){
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
            Meteor.call('insertProductCategory',insertObject,function(err,data){
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
Template.leoAdminProductCategoryDetails.helpers({
    showTags:function(){
        let tempData = Template.instance().data;
        if(tempData && tempData.productCategory && tempData.productCategory.tags){
            return tempData.productCategory.tags.toString()
        }
        else return ''


    }
});//
Template.leoAdminProductCategoryDetails.onDestroyed(function () {
    Cloudinary.collection.remove()
})