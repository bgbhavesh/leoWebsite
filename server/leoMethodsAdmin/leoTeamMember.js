
Meteor.methods({
    insertTeamMember:function (teamMemberDetails) {
        check(teamMemberDetails,Object);
        return new LeoTeamMemberProcessor({
            teamMember:teamMemberDetails
        }).insertTeamMemberProcessor()
    },
    updateTeamMember:function (teamMemberId,teamMemberDetails) {
        check(teamMemberId,String);
        check(teamMemberDetails,Object);

        return new LeoTeamMemberProcessor({
            teamMember:teamMemberDetails,
            teamMemberId:teamMemberId
        }).updateTeamMemberProcessor()
    }
});