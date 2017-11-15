
Meteor.methods({
    insertModule:function (moduleDetails) {
        check(moduleDetails,Object);
        return new LeoModuleProcessor({
            module:moduleDetails
        }).insertModuleProcessor()
    },
    updateModule:function (moduleId,moduleDetails) {
        check(moduleId,String);
        check(moduleDetails,Object);

        return new LeoModuleProcessor({
            module:moduleDetails,
            moduleId:moduleId
        }).updateModuleProcessor()
    }
});