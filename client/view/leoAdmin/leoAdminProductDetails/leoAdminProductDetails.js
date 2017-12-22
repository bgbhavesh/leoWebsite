// import {imageUpload} from '../../../cloudinary.config.js'
Template.leoAdminProductDetails.onCreated(function () {
    let params = Router.current().params;
    Cloudinary.collection.remove({});
    if(params && params.catId){
        let product = LeoCollections.LeoProduct.findOne({_id:params.catId})
        if(product && product.images && product.images.length>0){
            _.each(product.images,function (image) {
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
Template.leoAdminProductDetails.onRendered(function () {
    let utilObj = new LeoUtils();
    utilObj.applyValidationAndFloatingLabel($('#product'));
    // imageUpload.cloudinary.imageUpload($('#productImage'));
});
Template.leoAdminProductDetails.events({
    "click [data-action='cancel']":function(e){
        e.preventDefault();
        Router.go("leoAdminProduct");
    },
    "click [data-action='save']":function(){
        let formData =$("#product");
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
            obj.response = obj.response||{};
            obj.response.secure_url = (image.response && image.response.secure_url)?image.response.secure_url:"";
            obj.response.public_id = (image.response && image.response.public_id)?image.response.public_id:"";
            images.push(obj);
        })
        insertObject.images = images;
        if(getRouterParams('productId')){
            Meteor.call('updateProduct',getRouterParams('productId'),insertObject,function(err,data){
                if(data){
                    // $('#product')[0].reset();
                    new LeoUtils().clearFormValues(formData,function(){});
                    Cloudinary.collection.remove();
                    toastr.clear();
                    toastr.success("Product Updated");
                    // $('#product')[0].reset();
                    Router.go("leoAdminProduct");
                }
                if(err){
                    toastr.clear();
                    toastr.error(err.reason);

                }
            })
        }else{
            Meteor.call('insertProduct',insertObject,function(err,data){
                if(data){
                    new LeoUtils().clearFormValues(formData,function(){});
                    toastr.clear();
                    toastr.success("Product created");
                    // $('#product')[0].reset();
                    Cloudinary.collection.remove();
                    Router.go("leoAdminProduct");
                }
                if(err){
                    toastr.clear();
                    toastr.error(err.reason);

                }
            })
        }
    },
    "click #reset":function(){
        // $('#product')[0].reset();
        new LeoUtils().clearFormValues($('#product'),function(){});
    }
})
Template.leoAdminProductDetails.helpers({
    showTags:function(){
        let tempData = Template.instance().data;
        if(tempData && tempData.product && tempData.product.tags){
            return tempData.product.tags.toString()
        }
        else return ''
    },
    LeoAutoCompleteSettings:function () {
        return {
            collectionName: "LeoCollections.LeoProductCategory",
            limit: 10,
            matchCase:{isActive:true},
            extraAttributes:{
                mandatory:"true"
            }
        };
    }
});//
Template.leoAdminProductDetails.onDestroyed(function () {
    Cloudinary.collection.remove()
});