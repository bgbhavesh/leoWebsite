// signUpUser
Meteor.methods({
    setUserToRole:function (userId,role,group) {
        check(userId,String);
        check(role,String);
        check(group,String);
        LeoCollections.LeoUsers.update({_id:userId},{$unset:{roles:{}}});
        return Roles.addUsersToRoles(userId,role,group)
    },
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
        Roles.addUsersToRoles(userId, "GUEST-USER", "guest-group");
        Meteor.setTimeout(function () {
            return Accounts.sendVerificationEmail(userId);
        }, 2 * 100);
        return userId;
    }
});