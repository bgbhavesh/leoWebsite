// import {imageUpload} from '../../../cloudinary.config.js'
Template.leoAdminNewsFeedDetails.onCreated(function () {
    let params = Router.current().params;
    Cloudinary.collection.remove({});
    if(params && params.catId){
        let newsFeed = LeoCollections.LeoNewsFeed.findOne({_id:params.catId});
        if(newsFeed && newsFeed.images && newsFeed.images.length>0){
            _.each(newsFeed.images,function (image) {
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
Template.leoAdminNewsFeedDetails.onRendered(function () {
    let utilObj = new LeoUtils();
    utilObj.applyValidationAndFloatingLabel($('#newsFeed'));
    // imageUpload.cloudinary.imageUpload($('#productCategoryImage'));
});
Template.leoAdminNewsFeedDetails.events({
    "click [data-action='cancel']":function(e){
        e.preventDefault();
        Router.go("leoAdminNewsFeed")
    },
    "click [data-action='save']":function(){
        let formData =$("#newsFeed");
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
        });
        insertObject.images = images;
        if(getRouterParams('newsFeedId')){
            Meteor.call('updateNewsFeed',getRouterParams('newsFeedId'),insertObject,function(err,data){
                if(data){
                    // $('#productCategory')[0].reset();
                    Cloudinary.collection.remove();
                    toastr.clear();
                    toastr.success("Updated news feed");
                }
                if(err){
                    toastr.clear();
                    toastr.error(err.reason);

                }
            })
        }else{
            Meteor.call('insertNewsFeed',insertObject,function(err,data){
                if(data){
                    // $('#productCategory')[0].reset();
                    Cloudinary.collection.remove();
                    toastr.clear();
                    toastr.success("News feed created");
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
Template.leoAdminNewsFeedDetails.helpers({
    showTags:function(){
        let tempData = Template.instance().data;
        if(tempData && tempData.NewsFeed && tempData.NewsFeed.tags){
            return tempData.NewsFeed.tags.toString()
        }
        else return ''


    }
});//
Template.leoAdminNewsFeedDetails.onDestroyed(function () {
    Cloudinary.collection.remove();
});