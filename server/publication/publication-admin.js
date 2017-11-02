Meteor.publish("singleDocWithId",function (collectionName,id,project) {
    check(id, String);
    check(collectionName, String);
    check(project, Object);
    if (id) {
        return global[collectionName.split(".")[0]][collectionName.split(".")[1]].find({_id:id},project)
        // return LeoCollections.LeoProductCategory.find(selector, project)
    }
    else {
        console.log('-'+collectionName+'-');
        this.ready();
    }
})
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