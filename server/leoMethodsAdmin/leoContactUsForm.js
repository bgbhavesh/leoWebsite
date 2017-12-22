
Meteor.methods({
    insertContactUsForm:function (contactUsFormDetails) {
        check(contactUsFormDetails,Object);
        return new LeoContactUsFormProcessorClass({
            contactUsForm:contactUsFormDetails
        }).insertContactUsFormProcessor()
    },
    // updateTeamMember:function (teamMemberId,teamMemberDetails) {
    //     check(teamMemberId,String);
    //     check(teamMemberDetails,Object);

    //     return new LeoTeamMemberProcessor({
    //         teamMember:teamMemberDetails,
    //         teamMemberId:teamMemberId
    //     }).updateTeamMemberProcessor()
    // }
});