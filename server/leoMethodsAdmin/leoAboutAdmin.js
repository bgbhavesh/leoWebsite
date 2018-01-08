
Meteor.methods({
    insertAboutUs:function (adminAboutDetails) {
        check(adminAboutDetails,Object);
        return new LeoAboutUsProcessor({
            adminAboutDetails:adminAboutDetails
        }).insertAboutUsProcessor()
    },
    updateAboutUs:function (aboutId,adminAboutDetails) {
        check(aboutId,String);
        check(adminAboutDetails,Object);

        return new LeoAboutUsProcessor({
            adminAboutDetails:adminAboutDetails,
            aboutId:aboutId
        }).updateAboutUsProcessor()
    }
});
