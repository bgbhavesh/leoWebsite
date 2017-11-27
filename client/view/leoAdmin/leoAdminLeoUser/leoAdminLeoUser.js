import {
    checkIdsCollectionUpdate,
    updateTabularCollection,
    singleSelectedId
} from '../smallTemplates/isActiveTemplateForTabular/isActiveTemplateForTabular'
Template.leoAdminLeoUsers.onCreated(function () {

});
Template.leoAdminLeoUsers.onRendered(function () {

});
Template.leoAdminLeoUsers.events({
    "click [data-action='add']":function(e){
        e.preventDefault();
        Router.go("leoAdminLeoUserDetails")
    },
    "click [data-action='edit']":function(e){
        e.preventDefault();
        let leoUserId = singleSelectedId();
        if(leoUserId)
        Router.go("leoAdminLeoUserDetails",{leoUserId:leoUserId})
    },
    "click [data-action='inActive']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(false,'isActive','LeoCollections.LeoLeoUsers')
    },
    "click [data-action='active']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(true,'isActive','LeoCollections.LeoLeoUsers')
    },
    "click .isActiveTemplateForTabular .text-success":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],false,'isActive','LeoCollections.LeoUsers')
    },
    "click .isActiveTemplateForTabular .text-danger":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],true,'isActive','LeoCollections.LeoUsers')
    }
});
Template.leoAdminLeoUsers.helpers({
    leoUserSelector:function(){
        return {
            // isActive:true
        }

    }
});
