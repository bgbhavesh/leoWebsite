import {
    checkIdsCollectionUpdate,
    updateTabularCollection,
    singleSelectedId
} from '../smallTemplates/isActiveTemplateForTabular/isActiveTemplateForTabular'
Template.leoAdminGallery.onCreated(function () {

});
Template.leoAdminGallery.onRendered(function () {

});
Template.leoAdminGallery.events({
    "click [data-action='add']":function(e){
        e.preventDefault();
        Router.go("leoAdminGalleryDetails")
    },
    "click [data-action='edit']":function(e){
        e.preventDefault();
        var galleryId = singleSelectedId();
        if(galleryId)
        Router.go("leoAdminGalleryDetails",{galleryId:galleryId})
    },
    "click [data-action='inActive']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(false,'isActive','LeoCollections.LeoGallery')
    },
    "click [data-action='active']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(true,'isActive','LeoCollections.LeoGallery')
    },
    "click .isActiveTemplateForTabular .text-success":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],false,'isActive','LeoCollections.LeoGallery')
    },
    "click .isActiveTemplateForTabular .text-danger":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],true,'isActive','LeoCollections.LeoGallery')
    }
});
Template.leoAdminProductCategory.helpers({
    gallerySelector:function(){
        return {
            // isActive:true
        }

    }
});
