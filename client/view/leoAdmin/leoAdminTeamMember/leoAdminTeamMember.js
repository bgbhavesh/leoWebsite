import {
    checkIdsCollectionUpdate,
    updateTabularCollection,
    singleSelectedId
} from '../smallTemplates/isActiveTemplateForTabular/isActiveTemplateForTabular'
Template.leoAdminTeamMember.onCreated(function () {

});
Template.leoAdminTeamMember.onRendered(function () {

});
Template.leoAdminTeamMember.events({
    "click [data-action='add']":function(e){
        e.preventDefault();
        Router.go("leoAdminTeamMemberDetails")
    },
    "click [data-action='edit']":function(e){
        e.preventDefault();
        let memberId = singleSelectedId();
        if(memberId)
        Router.go("leoAdminTeamMemberDetails",{memberId:memberId})
    },
    "click [data-action='inActive']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(false,'isActive','LeoCollections.LeoTeamMember')
    },
    "click [data-action='active']":function(e){
        e.preventDefault();
        checkIdsCollectionUpdate(true,'isActive','LeoCollections.LeoTeamMember')
    },
    "click .isActiveTemplateForTabular .text-success":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],false,'isActive','LeoCollections.LeoTeamMember')
    },
    "click .isActiveTemplateForTabular .text-danger":function (e) {
        e.preventDefault();
        updateTabularCollection([this._id],true,'isActive','LeoCollections.LeoTeamMember')
    }
});
Template.leoAdminTeamMember.helpers({
    teamMemberSelector:function(){
        return {
            // isActive:true
        }

    }
});
