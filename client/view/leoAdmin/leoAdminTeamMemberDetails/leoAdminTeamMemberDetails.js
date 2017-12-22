// import {imageUpload} from '../../../cloudinary.config.js'

import {getAddressFormValues} from '../../leoCommon/leoAddress/leoAddress.js'
import {getImagesFormValues} from '../../leoCommon/imageUpload/imageUpload.js'
Template.leoAdminTeamMemberDetails.onCreated(function () {
    let params = Router.current().params;
    Cloudinary.collection.remove({});
    if(params && params.memberId){
        let teamMember = LeoCollections.LeoTeamMember.findOne({_id:params.memberId})
        if(teamMember && teamMember.images && teamMember.images.length>0){
            _.each(teamMember.images,function (image) {
                let obj = image;
                obj.percent_uploaded = 100;
                obj.response = obj.response||{};
                obj.response.secure_url = (image.response && image.response.secure_url)?image.response.secure_url:"";
                obj.response.public_id = (image.response && image.response.public_id)?image.response.public_id:"";
                Cloudinary.collection.insert(obj);
            })

        }
    }
})
Template.leoAdminTeamMemberDetails.onRendered(function () {
    let utilObj = new LeoUtils();

    utilObj.applyValidationAndFloatingLabel($('#teamMember'));
    // utilObj.attachdatepicker($("[name='dob']"),{autoclose: true});

    // imageUpload.cloudinary.imageUpload($('#teamMemberImage'));
})
Template.leoAdminTeamMemberDetails.events({
    "click [data-action='cancel']":function(e){
        e.preventDefault();
        Router.go("leoAdminTeamMember");
    },
    "click [data-action='save']":function(){
        let formData =$("#teamMember");
        let insertObject = {};
        new LeoUtils().getFormValues(formData,function (data) {
            insertObject.name = data.name;
            insertObject.tags = data.tags.split(",");
            insertObject.title = data.title;
            insertObject.description = data.description;
            insertObject.dob = data.dob||new Date();
            insertObject.email = data.email||"";
            insertObject.number = data.number||"";
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
        insertObject.images = getImagesFormValues();
        insertObject.address = getAddressFormValues();
        if(getRouterParams('memberId')){
            Meteor.call('updateTeamMember',getRouterParams('memberId'),insertObject,function(err,data){
                if(data){
                    // $('#teamMember')[0].reset();
                    Cloudinary.collection.remove();
                    new LeoUtils().clearFormValues(formData,function(){});
                    toastr.clear();
                    toastr.success("Member Updated");
                    Router.go("leoAdminTeamMember");
                }
                if(err){
                    toastr.clear();
                    toastr.error(err.reason);

                }
            })
        }else{
            Meteor.call('insertTeamMember',insertObject,function(err,data){
                if(data){
                    // $('#teamMember')[0].reset();
                    Cloudinary.collection.remove();
                    new LeoUtils().clearFormValues(formData,function(){});
                    toastr.clear();
                    toastr.success("Member Added");
                    Router.go("leoAdminTeamMember");
                }
                if(err){
                    toastr.clear();
                    toastr.error(err.reason);

                }
            })
        }
    },
    "click #reset":function(){
        let formData =$("#teamMember");
        new LeoUtils().clearFormValues(formData,function(){});
    }
})
Template.leoAdminTeamMemberDetails.helpers({
    socialLinks:function () {
        return socialLinks;
    },
    showTags:function(){
        let tempData = Template.instance().data;
        if(tempData && tempData.teamMember && tempData.teamMember.tags){
            return tempData.teamMember.tags.toString()
        }
        else return ''
    },
    socialLinksUrl:function () {
        let tempData = Template.instance().data;
        if(tempData && tempData.teamMember && tempData.teamMember.socialLinks && tempData.teamMember.socialLinks.length>0){
            let dbValues = tempData.teamMember.socialLinks;
            let index = _.findWhere(dbValues, {code:this.code});
            if(index) {
                return index.url || ""
            }else return""
        }
    }
});//
Template.leoAdminTeamMemberDetails.onDestroyed(function () {
    Cloudinary.collection.remove()
})