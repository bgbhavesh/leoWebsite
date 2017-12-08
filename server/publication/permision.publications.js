Meteor.publish("leoRoles", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    return Meteor.roles.find(selector, project)
});
Meteor.publish("leoCompany", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    // console.log("-leoCompany-")
    return LeoCollections.LeoCompany.find(selector, project)
});