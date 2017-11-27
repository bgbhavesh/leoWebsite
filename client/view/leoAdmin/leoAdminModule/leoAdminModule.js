import {
    checkIdsCollectionUpdate,
    updateTabularCollection,
    singleSelectedId
} from '../smallTemplates/isActiveTemplateForTabular/isActiveTemplateForTabular'
Template.leoAdminModule.onCreated(function () {
});
Template.leoAdminModule.onRendered(function () {

});
Template.leoAdminModule.events({
    "click [data-action='add']":function(e){
        e.preventDefault();
        Router.go("leoAdminModuleDetails")
    },
    "click [data-action='edit']":function(e){
        e.preventDefault();
        let moduleId = singleSelectedId();
        if(moduleId)
            Router.go("leoAdminModuleDetails",{moduleId:moduleId})
    },
    "click [data-action='inActive']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(false,'isActive','LeoCollections.LeoModule')
    },
    "click [data-action='active']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(true,'isActive','LeoCollections.LeoModule')
    },
    "click .isActiveTemplateForTabular .text-success":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],false,'isActive','LeoCollections.LeoModule')
    },
    "click .isActiveTemplateForTabular .text-danger":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],true,'isActive','LeoCollections.LeoModule')
    }
});
Template.leoAdminProductCategory.helpers({
    moduleSelector:function(){
        return {
            // isActive:true
        }

    }
});
