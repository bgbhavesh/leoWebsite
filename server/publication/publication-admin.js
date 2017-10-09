Meteor.publish("leoProductCategory", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    if (selector && !_.isEmpty(selector)) {
        return LeoCollections.LeoProductCategory.find(selector, project)
    }
    else {
        console.log('-leoProductCategory-');
        this.ready();
    }
});