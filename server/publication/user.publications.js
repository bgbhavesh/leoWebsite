Meteor.publish("leoShowCaseSlider", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    console.log("-leoShowCaseSlider-")
    return LeoCollections.LeoShowCaseSlider.find(selector, {fields:project});
});
Meteor.publish("leoTeamMember", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    console.log("-leoTeamMember-")
    return LeoCollections.LeoTeamMember.find(selector, {fields:project});
});
Meteor.publish("leoLocation", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    console.log("-leoLocation-")
    return LeoCollections.LeoLocation.find(selector, {fields:project});
});