import {
    checkIdsCollectionUpdate,
    updateTabularCollection,
    singleSelectedId
} from '../isActiveTemplateForTabular/isActiveTemplateForTabular'
Template.leoAdminNewsFeed.onCreated(function () {

});
Template.leoAdminNewsFeed.onRendered(function () {

});
Template.leoAdminNewsFeed.events({
    "click [data-action='add']":function(e){
        e.preventDefault();
        Router.go("leoAdminNewsFeedDetails")
    },
    "click [data-action='edit']":function(e){
        e.preventDefault();
        var newsFeedId = singleSelectedId();
        if(newsFeedId)
        Router.go("leoAdminNewsFeedDetails",{newsFeedId:newsFeedId})
    },
    "click [data-action='inActive']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(false,'isActive','LeoCollections.LeoNewsFeed')
    },
    "click [data-action='active']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(true,'isActive','LeoCollections.LeoNewsFeed')
    },
    "click .isActiveTemplateForTabular .text-success":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],false,'isActive','LeoCollections.LeoNewsFeed')
    },
    "click .isActiveTemplateForTabular .text-danger":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],true,'isActive','LeoCollections.LeoNewsFeed')
    }
});
Template.leoAdminProductCategory.helpers({
    newsFeedSelector:function(){
        return {
            // isActive:true
        }

    }
});
