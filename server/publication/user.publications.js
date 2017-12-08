Meteor.publish("leoShowCaseSlider", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    console.log("-leoShowCaseSlider-")
    return LeoCollections.LeoShowCaseSlider.find(selector, {fields:project});
});