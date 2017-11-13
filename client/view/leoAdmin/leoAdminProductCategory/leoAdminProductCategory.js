import {
    checkIdsCollectionUpdate,
    updateTabularCollection,
    singleSelectedId
} from '../smallTemplates/isActiveTemplateForTabular/isActiveTemplateForTabular'
Template.leoAdminProductCategory.onCreated(function () {

});
Template.leoAdminProductCategory.onRendered(function () {

});
Template.leoAdminProductCategory.events({
    "click [data-action='add']":function(e){
        e.preventDefault();
        Router.go("leoAdminProductCategoryDetails")
    },
    "click [data-action='edit']":function(e){
        e.preventDefault();
        var catId = singleSelectedId();
        if(catId)
        Router.go("leoAdminProductCategoryDetails",{catId:catId})
    },
    "click [data-action='inActive']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(false,'isActive','LeoCollections.LeoProductCategory')
    },
    "click [data-action='active']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(true,'isActive','LeoCollections.LeoProductCategory')
    },
    "click .isActiveTemplateForTabular .text-success":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],false,'isActive','LeoCollections.LeoProductCategory')
    },
    "click .isActiveTemplateForTabular .text-danger":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],true,'isActive','LeoCollections.LeoProductCategory')
    }
});
Template.leoAdminProductCategory.helpers({
    productCategorySelector:function(){
        return {
            // isActive:true
        }

    }
});
