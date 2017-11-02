import {
    checkIdsCollectionUpdate,
    updateTabularCollection,
    singleSelectedId
} from '../isActiveTemplateForTabular/isActiveTemplateForTabular'
Template.leoAdminShowCaseSlider.onCreated(function () {

});
Template.leoAdminShowCaseSlider.onRendered(function () {

});
Template.leoAdminShowCaseSlider.events({
    "click [data-action='add']":function(e){
        e.preventDefault();
        Router.go("leoAdminShowCaseSliderDetails")
    },
    "click [data-action='edit']":function(e){
        e.preventDefault();
        var showCaseId = singleSelectedId();
        if(showCaseId)
        Router.go("leoAdminShowCaseSliderDetails",{showCaseId:showCaseId})
    },
    "click [data-action='inActive']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(false,'isActive','LeoCollections.LeoShowCaseSlider')
    },
    "click [data-action='active']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(true,'isActive','LeoCollections.LeoShowCaseSlider')
    },
    "click .isActiveTemplateForTabular .text-success":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],false,'isActive','LeoCollections.LeoShowCaseSlider')
    },
    "click .isActiveTemplateForTabular .text-danger":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],true,'isActive','LeoCollections.LeoShowCaseSlider')
    }
});
Template.leoAdminProductCategory.helpers({
    leoAdminShowCaseSliderSelector:function(){
        return {
            // isActive:true
        }

    }
});
