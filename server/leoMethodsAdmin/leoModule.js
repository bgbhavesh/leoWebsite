
Meteor.methods({
    insertNewsFeed:function (moduleDetails) {
        check(moduleDetails,Object);
        return new LeoModuleProcessor({
            module:moduleDetails
        }).insertNewsFeedProcessor()
    },
    updateNewsFeed:function (moduleId,moduleDetails) {
        check(moduleId,String);
        check(moduleDetails,Object);

        return new LeoModuleProcessor({
            module:moduleDetails,
            moduleId:moduleId
        }).updateNewsFeedProcessor()
    }
});