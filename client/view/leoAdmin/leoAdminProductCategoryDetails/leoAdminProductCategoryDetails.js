// import {imageUpload} from '../../../cloudinary.config.js'
Template.leoAdminProductCategoryDetails.onCreated(function () {

})
Template.leoAdminProductCategoryDetails.onRendered(function () {
    var utilObj = new LeoUtils();
    utilObj.applyValidationAndFloatingLabel($('#productCategory'));
    // imageUpload.cloudinary.imageUpload($('#productCategoryImage'));
})
Template.leoAdminProductCategoryDetails.events({
    // 'change #productCategoryImage':function(){
    //     var file = $('#productCategoryImage')[0].files[0];
    //     console.log(file)
    //     Cloudinary.upload(file,{}, function(err, res) {
    //         console.log("Upload Error: " + err);
    //         console.log("Upload Result: " + res);
    //     });
    // },
    "click #addCategory":function(){
        var formData =$("#productCategory");
        var insertObject = {};
        new LeoUtils().getFormValues(formData,function (data) {
            insertObject.name = data.name;
            insertObject.tags = data.tags.split(",");
            insertObject.title = data.title;
            insertObject.description = data.description;
        });
        let images = [];
        _.map(Cloudinary.collection.find().fetch(),function(image){
            let obj = {};
            obj.isActive= image.isActive||false;
            obj.isDefault= image.isDefault||false;
            obj.resource_type = image.resource_type||"image";
            obj.seq = image.seq||1;
            obj.secure_url = image.secure_url||"";
            images.push(obj);
        })
        insertObject.images = images
        Meteor.call('insertProductCategory',insertObject,function(data,err){
            if(data){
                $('#productCategory')[0].reset();
                Cloudinary.collection.remove();
            }
            if(err){
                toastr.clear();
                toastr.error(err.message);

            }
        })
    },
    "click #reset":function(){
        $('#productCategory')[0].reset();
    }
})
Template.leoAdminProductCategoryDetails.helpers({
    productCategorySelector:function(){
        return {
            isActive:true
        }

    }
})