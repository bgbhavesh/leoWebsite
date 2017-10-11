// signUpUser
Meteor.methods({
    signUpUser:function(userObject){
        check(userObject,Object);
        var option = {
            email: userObject.email,
            username: userObject.username,
            profile: {
                firstname: userObject.firstname,
                lastname: userObject.lastname,
            },
            password: userObject.password,
        };
        var userId = Accounts.createUser(option);
        Roles.addUsersToRoles(userId, "NEW-USER", "guest-group");
        Meteor.setTimeout(function () {
            return Accounts.sendVerificationEmail(userId);
        }, 2 * 1000);
    }
});