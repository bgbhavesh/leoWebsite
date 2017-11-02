Template.signIn.onCreated(function () {

});

Template.signIn.onRendered(function () {
    var utilObj = new LeoUtils();
    utilObj.applyValidationAndFloatingLabel($('#signIn'));
});
Template.signIn.events({
    'click #submitSignIn': function (e) {
        e.preventDefault();
        var formData = $("#signIn");
        var insertObject = {};
        new LeoUtils().getFormValues(formData, function (data) {
            insertObject.username = data.username;
            insertObject.password = data.password;
            // Meteor.call("signInUser",insertObject,function (err,data) {
            //
            // })
        })
    }
})