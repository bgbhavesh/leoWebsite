// import {imageUpload} from '../../../cloudinary.config.js'
Template.leoAdminCompanyDetails.onCreated(function () {
    let params = Router.current().params;
    Cloudinary.collection.remove({});
    if(params && params.companyId){
        let company = LeoCollections.LeoCompany.findOne({_id:params.companyId});
        if(company && company.images && company.images.length>0){
            _.each(company.images,function (image) {
                let obj = image;
                obj.percent_uploaded = 100;
                obj.response = obj.response||{};
                obj.response.secure_url = (image.response && image.response.secure_url)?image.response.secure_url:"";
                obj.response.public_id = (image.response && image.response.public_id)?image.response.public_id:"";//image.response.public_id||"";
                Cloudinary.collection.insert(obj);
            })

        }
    }
});
Template.leoAdminCompanyDetails.onRendered(function () {
    let utilObj = new LeoUtils();
    utilObj.applyValidationAndFloatingLabel($('#company'));
    utilObj.applyValidationAndFloatingLabel($('#socialLinks'));
    // imageUpload.cloudinary.imageUpload($('#productCategoryImage'));
});
Template.leoAdminCompanyDetails.events({
    "click [data-action='cancel']":function(e){
        e.preventDefault();
        Router.go("leoAdminCompany")
    },
    "click [data-action='save']":function(){
        let formData =$("#company");
        let insertObject = {};
        new LeoUtils().getFormValues(formData,function (data) {
            insertObject.tags = data.tags.split(",");
            insertObject.tagLine = data.tagLine;
            insertObject.title = data.title;
            insertObject.description = data.description;
            insertObject.isActive = $("[name='isActive']").prop( "checked" );
        });
        let form2Data =$("#socialLinks");
        new LeoUtils().getFormValues(form2Data,function (data) {
            let SL = socialLinks;
            insertObject.socialLinks = [];
            _.each(SL,function (slrec) {
                if(data[slrec.code]){
                    insertObject.socialLinks.push({url:data[slrec.code],code:slrec.code});
                }
            })
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

        if(getRouterParams('companyId')){
            Meteor.call('updateCompany',getRouterParams('companyId'),insertObject,function(err,data){
                if(data){
                    // $('#productCategory')[0].reset();
                    Cloudinary.collection.remove();
                    toastr.clear();
                    toastr.success("Company updated successfully");
                    Router.go("leoAdminCompanyDetails",{companyId:getRouterParams('companyId')});
                }
                if(err){
                    toastr.clear();
                    toastr.error(err.reason);

                }
            })
        }else{
            Meteor.call('insertCompany',insertObject,function(err,data){
                if(data){
                    // $('#productCategory')[0].reset();
                    Cloudinary.collection.remove();
                    toastr.clear();
                    toastr.success("Company Item Created");
                    // Router.go("leoAdminCompanyDetails",{companyId:data});
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
Template.leoAdminCompanyDetails.helpers({
    socialLinks:function () {
        return socialLinks;
    },
    showTags:function(){
        let tempData = Template.instance().data;
        if(tempData && tempData.Company && tempData.Company.tags){
            return tempData.Company.tags.toString()
        }
        else return ''
    },
    socialLinksUrl:function () {
        let tempData = Template.instance().data;
        if(tempData && tempData.Company && tempData.Company.socialLinks && tempData.Company.socialLinks.length>0){
            let dbValues = tempData.Company.socialLinks;
            let index = _.findWhere(dbValues, {code:this.code});
            if(index) {
                return index.url || ""
            }else return""
        }
    }

});//
Template.leoAdminCompanyDetails.onDestroyed(function () {
    Cloudinary.collection.remove()
})