import {
    checkIdsCollectionUpdate,
    updateTabularCollection,
    singleSelectedId
} from '../smallTemplates/isActiveTemplateForTabular/isActiveTemplateForTabular'
Template.leoAdminProduct.onCreated(function () {

});
Template.leoAdminProduct.onRendered(function () {

});
Template.leoAdminProduct.events({
    "click [data-action='add']":function(e){
        e.preventDefault();
        Router.go("leoAdminProductDetails")
    },
    "click [data-action='edit']":function(e){
        e.preventDefault();
        let productId = singleSelectedId();
        if(productId)
        Router.go("leoAdminProductDetails",{productId:productId})
    },
    "click [data-action='inActive']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(false,'isActive','LeoCollections.LeoProduct')
    },
    "click [data-action='active']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(true,'isActive','LeoCollections.LeoProduct')
    },
    "click .isActiveTemplateForTabular .text-success":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],false,'isActive','LeoCollections.LeoProduct')
    },
    "click .isActiveTemplateForTabular .text-danger":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],true,'isActive','LeoCollections.LeoProduct')
    }
});
Template.leoAdminProductCategory.helpers({
    productSelector:function(){
        return {
            // isActive:true
        }

    }
});
