
Template.signup.onCreated(function () {

});

Template.signup.onRendered(function () {
    var utilObj = new LeoUtils();
    utilObj.applyValidationAndFloatingLabel($('#signup'));
});
Template.signup.events({
    'click #submitSignUp':function(e){
        e.preventDefault();
        var formData =$("#signup");
        var insertObject = {};
        new LeoUtils().getFormValues(formData,function (data) {
            insertObject.firstname = data.firstname;
            insertObject.lastname = data.lastname;
            insertObject.email = data.email;
            insertObject.username = data.username;
            insertObject.password = data.password;
            insertObject.confirmPassword = data.confirmPassword;
            if(data.password !== data.confirmPassword){
                toastr.clear();
                toastr.error(getMessage('passwordAndConfirmMatch'));
                return ;
            }else{
                Meteor.call("signUpUser",insertObject,function (err,data) {
                    
                })
            }
        })
    }
})