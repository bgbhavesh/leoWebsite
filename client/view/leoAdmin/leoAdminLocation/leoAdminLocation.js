import {
    checkIdsCollectionUpdate,
    updateTabularCollection,
    singleSelectedId
} from '../smallTemplates/isActiveTemplateForTabular/isActiveTemplateForTabular'
Template.leoAdminLocation.onCreated(function () {
});
Template.leoAdminLocation.onRendered(function () {

});
Template.leoAdminLocation.events({
    "click [data-action='add']":function(e){
        e.preventDefault();
        Router.go("leoAdminLocationDetails")
    },
    "click [data-action='edit']":function(e){
        e.preventDefault();
        let locationId = singleSelectedId();
        if(locationId)
            Router.go("leoAdminLocationDetails",{locationId:locationId})
    },
    "click [data-action='inActive']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(false,'isActive','LeoCollections.LeoLocation')
    },
    "click [data-action='active']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(true,'isActive','LeoCollections.LeoLocation')
    },
    "click .isActiveTemplateForTabular .text-success":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],false,'isActive','LeoCollections.LeoLocation')
    },
    "click .isActiveTemplateForTabular .text-danger":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],true,'isActive','LeoCollections.LeoLocation')
    }
});
Template.leoAdminProductCategory.helpers({
    locationSelector:function(){
        return {
            // isActive:true
        }

    }
});
