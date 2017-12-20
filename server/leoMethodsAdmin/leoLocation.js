
Meteor.methods({
    insertLocation:function (locationDetails) {
        check(locationDetails,Object);
        return new LeoLocationProcessor({
            location:locationDetails
        }).insertLocationProcessor()
    },
    updateLocation:function (locationId,locationDetails) {
        check(locationId,String);
        check(locationDetails,Object);

        return new LeoLocationProcessor({
            location:locationDetails,
            locationId:locationId
        }).updateLocationProcessor()
    }
});