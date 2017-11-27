import {
    checkIdsCollectionUpdate,
    updateTabularCollection,
    singleSelectedId
} from '../smallTemplates/isActiveTemplateForTabular/isActiveTemplateForTabular'
Template.leoAdminServiceCategory.onCreated(function () {

});
Template.leoAdminServiceCategory.onRendered(function () {

});
Template.leoAdminServiceCategory.events({
    "click [data-action='add']":function(e){
        e.preventDefault();
        Router.go("leoAdminServiceCategoryDetails")
    },
    "click [data-action='edit']":function(e){
        e.preventDefault();
        let catId = singleSelectedId();
        if(catId)
        Router.go("leoAdminServiceCategoryDetails",{catId:catId});
    },
    "click [data-action='inActive']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(false,'isActive','LeoCollections.LeoServiceCategory')
    },
    "click [data-action='active']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(true,'isActive','LeoCollections.LeoServiceCategory')
    },
    "click .isActiveTemplateForTabular .text-success":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],false,'isActive','LeoCollections.LeoServiceCategory')
    },
    "click .isActiveTemplateForTabular .text-danger":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],true,'isActive','LeoCollections.LeoServiceCategory')
    }
});
Template.leoAdminServiceCategory.helpers({
    serviceCategorySelector:function(){
        return {
            // isActive:true
        }

    }
});
