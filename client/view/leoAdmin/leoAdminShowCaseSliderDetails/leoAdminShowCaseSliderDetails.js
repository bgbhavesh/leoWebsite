// import {imageUpload} from '../../../cloudinary.config.js'
Template.leoAdminShowCaseSliderDetails.onCreated(function () {
    let params = Router.current().params;
    Cloudinary.collection.remove({});
    if(params && params.showCaseId){
        let showCase = LeoCollections.LeoShowCaseSlider.findOne({_id:params.showCaseId})
        if(showCase && showCase.images && showCase.images.length>0){
            _.each(showCase.images,function (image) {
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
Template.leoAdminShowCaseSliderDetails.onRendered(function () {
    let utilObj = new LeoUtils();
    utilObj.applyValidationAndFloatingLabel($('#showCase'));
    // imageUpload.cloudinary.imageUpload($('#productCategoryImage'));
});
Template.leoAdminShowCaseSliderDetails.events({
    "click [data-action='cancel']":function(e){
        e.preventDefault();
        Router.go("leoAdminShowCase")
    },
    "click [data-action='save']":function(){
        let formData =$("#showCase");
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
        if(getRouterParams('showCaseId')){
            Meteor.call('updateShowCaseSlider',getRouterParams('showCaseId'),insertObject,function(err,data){
                if(data){
                    // $('#productCategory')[0].reset();
                    Cloudinary.collection.remove();
                    new LeoUtils().clearFormValues(formData,function(){});
                    toastr.clear();
                    toastr.success("Slide Updated");
                    Router.go("leoAdminShowCaseSlider");
                }
                if(err){
                    toastr.clear();
                    toastr.error(err.reason);

                }
            })
        }else{
            Meteor.call('insertShowCaseSlider',insertObject,function(err,data){
                if(data){
                    // $('#productCategory')[0].reset();
                    Cloudinary.collection.remove();
                    new LeoUtils().clearFormValues(formData,function(){});
                    toastr.clear();
                    toastr.success("Slide Created");
                    Router.go("leoAdminShowCaseSlider");
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
        let formData =$("#showCase");
        new LeoUtils().clearFormValues(formData,function(){});
    }
})
Template.leoAdminShowCaseSliderDetails.helpers({
    showTags:function(){
        let tempData = Template.instance().data;
        if(tempData && tempData.showCase && tempData.showCase.tags){
            return tempData.showCase.tags.toString()
        }
        else return ''


    }
});//
Template.leoAdminShowCaseSliderDetails.onDestroyed(function () {
    Cloudinary.collection.remove()
})