// import {imageUpload} from '../../../cloudinary.config.js'
Template.leoAdminAboutDetails.onCreated(function () {
    let self = this;
    let params = Router.current().params;        
    self.aboutType = new ReactiveVar();
    self.aboutType.set("PARAGRAPH");//      
    self.aboutItemList = new ReactiveVar();
    self.aboutItemList.set([]);//
    if(params && params.aboutId){
        let aboutUs = LeoCollections.LeoAboutUs.findOne({_id:params.aboutId})
        let aboutType = aboutUs.aboutType || "PARAGRAPH";
        self.aboutType.set(aboutType);//
        let aboutItemList = aboutUs.aboutItemList || [];
        self.aboutItemList.set(aboutItemList);//        
    }
});
Template.leoAdminAboutDetails.onRendered(function () {
    let utilObj = new LeoUtils();
    utilObj.applyValidationAndFloatingLabel($('#aboutUs'));
    // imageUpload.cloudinary.imageUpload($('#productCategoryImage'));
});
Template.leoAdminAboutDetails.events({
    "click [data-action='cancel']":function(e){
        e.preventDefault();
        Router.go("leoAdminAboutUs")
    },
    "click [data-action='save']":function(e,t){
        let formData =$("#aboutUs");
        let insertObject = {};
        new LeoUtils().getFormValues(formData,function (data) {
            insertObject.tags = data.tags.split(",");
            insertObject.title = data.title;
            insertObject.seq = data.seq;
            insertObject.description = data.description;
            insertObject.isActive = $("[name='isActive']").prop( "checked" );
        });
        insertObject.aboutType = t.aboutType.get();
        insertObject.aboutItemList = t.aboutItemList.get();
        if(getRouterParams('aboutId')){
            Meteor.call('updateAboutUs',getRouterParams('aboutId'),insertObject,function(err,data){
                if(data){
                    // $('#productCategory')[0].reset();
                    Cloudinary.collection.remove();
                    new LeoUtils().clearFormValues(formData,function(){});
                    toastr.clear();
                    toastr.success("About Updated");
                    Router.go("leoAdminAbout");
                }
                if(err){
                    toastr.clear();
                    toastr.error(err.reason);

                }
            })
        }else{
            Meteor.call('insertAboutUs',insertObject,function(err,data){
                if(data){
                    // $('#productCategory')[0].reset();
                    new LeoUtils().clearFormValues(formData,function(){});
                    toastr.clear();
                    toastr.success("Slide Created");
                    Router.go("leoAdminAbout");
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
        let formData =$("#aboutUs");
        new LeoUtils().clearFormValues(formData,function(){});
    },
    "click #addAboutUsItem":function(e,t){
        let aboutItemList = t.aboutItemList.get();        
        let formData =$("#getAboutTypeDetails");
        let insertObject = {};
        new LeoUtils().getFormValues(formData,function (data) {
            _.extend(insertObject,data);
            _.extend(insertObject,{_id:Random.id()});
        });
        new LeoUtils().clearFormValues(formData,function(){});
        aboutItemList.push(insertObject);
        t.aboutItemList.set(aboutItemList);
        console.log(t.aboutItemList.get())
    },
    "click #removeAboutUsItem":function(e,t){
        console.log(this)
        let aboutItemList = t.aboutItemList.get();        
        let clickId = this._id
        let index = aboutItemList.findIndex(function(x){
            if(x._id === clickId){
                return x;
            }
        })
        if(index>=0){
            aboutItemList.splice(index,1);
        }
        t.aboutItemList.set(aboutItemList);
    },
    "click #changeAboutType a":function(e,t){
        let componentType = $(e.currentTarget).data('component');
        t.aboutType.set(componentType); 
        t.aboutItemList.set([]);
    }
})
Template.leoAdminAboutDetails.helpers({
    showTags:function(){
        let tempData = Template.instance().data;
        if(tempData && tempData.aboutUs && tempData.aboutUs.tags){
            return tempData.aboutUs.tags.toString()
        }
        else return ''
    },
    aboutType:function () {
        return Template.instance().aboutType.get();
    },
    aboutItemList:function () {
        return Template.instance().aboutItemList.get();
    },
});//
Template.leoAdminAboutDetails.onDestroyed(function () {
})