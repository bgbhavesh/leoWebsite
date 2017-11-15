Meteor.publish("leoRoles", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    return Meteor.roles.find(selector, project)
});