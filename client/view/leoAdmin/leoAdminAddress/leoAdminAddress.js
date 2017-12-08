import {
    checkIdsCollectionUpdate,
    updateTabularCollection,
    singleSelectedId
} from '../smallTemplates/isActiveTemplateForTabular/isActiveTemplateForTabular'
Template.leoAdminAddress.onCreated(function () {

});
Template.leoAdminAddress.onRendered(function () {

});
Template.leoAdminAddress.events({
    "click [data-action='add']":function(e){
        e.preventDefault();
        Router.go("leoAdminAddressDetails")
    },
    "click [data-action='edit']":function(e){
        e.preventDefault();
        let addressId = singleSelectedId();
        if(addressId)
        Router.go("leoAdminAddressDetails",{addressId:addressId})
    },
    "click [data-action='inActive']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(false,'isActive','LeoCollections.LeoAddress')
    },
    "click [data-action='active']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(true,'isActive','LeoCollections.LeoAddress')
    },
    "click .isActiveTemplateForTabular .text-success":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],false,'isActive','LeoCollections.LeoAddress')
    },
    "click .isActiveTemplateForTabular .text-danger":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],true,'isActive','LeoCollections.LeoAddress')
    }
});
Template.leoAdminProductCategory.helpers({
    addressSelector:function(){
        return {
            // isActive:true
        }

    }
});
