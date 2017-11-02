
Meteor.methods({
    insertTeamMember:function (teamMemberDetails) {
        check(teamMemberDetails,Object);
        new LeoTeamMemberProcessor({
            teamMember:teamMemberDetails
        }).insertTeamMemberProcessor()
    },
    updateTeamMember:function (teamMemberId,teamMemberDetails) {
        check(teamMemberId,String);
        check(teamMemberDetails,Object);

        new LeoTeamMemberProcessor({
            teamMember:teamMemberDetails,
            teamMemberId:teamMemberId
        }).updateTeamMemberProcessor()
    }
});