// signUpUser
Meteor.methods({
    signUpUser:function(userObject){
        check(userObject,Object);
        var option = {
            username: userObject.username,
            profile: {
                firstname: userObject.firstname,
                lastname: userObject.lastname,
            },
            emails: [{address: userObject.email, verified: true}],
            password: userObject.password,
        };
        var user = Accounts.createUser(option);
        Roles.addUsersToRoles(user, "GUEST-USER", "guest-group");
    }
});