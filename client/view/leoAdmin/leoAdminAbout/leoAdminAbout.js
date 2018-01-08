import {
    checkIdsCollectionUpdate,
    updateTabularCollection,
    singleSelectedId
} from '../smallTemplates/isActiveTemplateForTabular/isActiveTemplateForTabular'
Template.leoAdminAbout.onCreated(function () {

});
Template.leoAdminAbout.onRendered(function () {

});
Template.leoAdminAbout.events({
    "click [data-action='add']":function(e){
        e.preventDefault();
        Router.go("leoAdminAboutDetails")
    },
    "click [data-action='edit']":function(e){
        e.preventDefault();
        let aboutId = singleSelectedId();
        if(aboutId)
        Router.go("leoAdminAboutDetails",{aboutId:aboutId})
    },
    "click [data-action='inActive']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(false,'isActive','LeoCollections.LeoAboutUs')
    },
    "click [data-action='active']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(true,'isActive','LeoCollections.LeoAboutUs')
    },
    "click .isActiveTemplateForTabular .text-success":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],false,'isActive','LeoCollections.LeoAboutUs')
    },
    "click .isActiveTemplateForTabular .text-danger":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],true,'isActive','LeoCollections.LeoAboutUs')
    }
});
Template.leoAdminAbout.helpers({
    leoAdminAboutSelector:function(){
        return {
            // isActive:true
        }

    }
});
