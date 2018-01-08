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

Meteor.publish("leoAboutUs", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    console.log("-leoAboutUs-")
    return LeoCollections.LeoAboutUs.find(selector, {fields:project});
});

Meteor.publish("leoServiceCategory", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    console.log("-leoServiceCategory-")
    return LeoCollections.LeoServiceCategory.find(selector, {fields:project});
});

Meteor.publish("leoService", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    console.log("-leoService-")
    return LeoCollections.LeoService.find(selector, {fields:project});
});



Meteor.publish("leoProductCategory", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    console.log("-leoProductCategory-")
    return LeoCollections.LeoProductCategory.find(selector, {fields:project});
});



Meteor.publish("leoProduct", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    console.log("-leoProduct-")
    return LeoCollections.LeoProduct.find(selector, {fields:project});
});

