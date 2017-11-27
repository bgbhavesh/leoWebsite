Template.signIn.onCreated(function () {

});

Template.signIn.onRendered(function () {
    let utilObj = new LeoUtils();
    utilObj.applyValidationAndFloatingLabel($('#signIn'));
});
Template.signIn.events({
    'click #submitSignIn': function (e) {
        e.preventDefault();
        let formData = $("#signIn");
        let insertObject = {};
        new LeoUtils().getFormValues(formData, function (data) {
            insertObject.username = data.username;
            insertObject.password = data.password;
            // Meteor.call("signInUser",insertObject,function (err,data) {
            //
            // })
        })
    }
})