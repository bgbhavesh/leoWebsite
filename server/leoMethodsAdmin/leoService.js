
Meteor.methods({
    insertService:function (serviceDetails) {
        check(serviceDetails,Object);
        return new LeoServiceProcessor({
            service:serviceDetails
        }).insertServiceProcessor()
    },
    updateService:function (serviceId,serviceDetails) {
        check(serviceId,String);
        check(serviceDetails,Object);

        return new LeoServiceProcessor({
            service:serviceDetails,
            serviceId:serviceId
        }).updateServiceProcessor()
    }
});