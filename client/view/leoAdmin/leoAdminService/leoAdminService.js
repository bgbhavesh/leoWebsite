import {
    checkIdsCollectionUpdate,
    updateTabularCollection,
    singleSelectedId
} from '../isActiveTemplateForTabular/isActiveTemplateForTabular'
Template.leoAdminService.onCreated(function () {

});
Template.leoAdminService.onRendered(function () {

});
Template.leoAdminService.events({
    "click [data-action='add']":function(e){
        e.preventDefault();
        Router.go("leoAdminServiceDetails")
    },
    "click [data-action='edit']":function(e){
        e.preventDefault();
        var serviceId = singleSelectedId();
        if(serviceId)
        Router.go("leoAdminServiceDetails",{serviceId:serviceId})
    },
    "click [data-action='inActive']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(false,'isActive','LeoCollections.LeoService')
    },
    "click [data-action='active']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(true,'isActive','LeoCollections.LeoService')
    },
    "click .isActiveTemplateForTabular .text-success":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],false,'isActive','LeoCollections.LeoService')
    },
    "click .isActiveTemplateForTabular .text-danger":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],true,'isActive','LeoCollections.LeoService')
    }
});
Template.leoAdminServiceCategory.helpers({
    serviceSelector:function(){
        return {
            // isActive:true
        }

    }
});
