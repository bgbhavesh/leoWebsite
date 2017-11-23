// import {imageUpload} from '../../../cloudinary.config.js'
Template.leoAdminTeamMemberDetails.onCreated(function () {
    let params = Router.current().params;
    Cloudinary.collection.remove({});
    if(params && params.catId){
        let teamMember = LeoCollections.LeoTeamMember.findOne({_id:params.catId})
        if(teamMember && teamMember.images && teamMember.images.length>0){
            _.each(teamMember.images,function (image) {
                let obj = image;
                obj.percent_uploaded = 100;
                obj.response = obj.response||{};
                obj.response.secure_url = image.response.secure_url||"";
                obj.response.public_id = image.response.public_id||"";
                Cloudinary.collection.insert(obj);
            })

        }
    }
})
Template.leoAdminTeamMemberDetails.onRendered(function () {
    var utilObj = new LeoUtils();
    utilObj.applyValidationAndFloatingLabel($('#teamMember'));
    // imageUpload.cloudinary.imageUpload($('#teamMemberImage'));
})
Template.leoAdminTeamMemberDetails.events({
    "click [data-action='cancel']":function(e){
        e.preventDefault();
        Router.go("leoAdminTeamMember")
    },
    "click [data-action='save']":function(){
        let formData =$("#teamMember");
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
            obj.response = obj.response||{};
            obj.response.secure_url = image.response.secure_url||"";
            obj.response.public_id = image.response.public_id||"";
            images.push(obj);
        })
        insertObject.images = images;
        if(getRouterParams('catId')){
            Meteor.call('updateTeamMember',getRouterParams('catId'),insertObject,function(err,data){
                if(data){
                    // $('#teamMember')[0].reset();
                    Cloudinary.collection.remove();
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
                }
                if(err){
                    toastr.clear();
                    toastr.error(err.reason);

                }
            })
        }
    },
    "click #reset":function(){
        // $('#teamMember')[0].reset();
    }
})
Template.leoAdminTeamMemberDetails.helpers({
    showTags:function(){
        let tempData = Template.instance().data;
        if(tempData && tempData.teamMember && tempData.teamMember.tags){
            return tempData.teamMember.tags.toString()
        }
        else return ''


    }
});//
Template.leoAdminTeamMemberDetails.onDestroyed(function () {
    Cloudinary.collection.remove()
})