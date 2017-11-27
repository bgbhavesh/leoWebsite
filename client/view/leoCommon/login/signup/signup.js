
Template.signUp.onCreated(function () {

});

Template.signUp.onRendered(function () {
    let utilObj = new LeoUtils();
    utilObj.applyValidationAndFloatingLabel($('#signup'));
});
Template.signUp.events({
    'click #submitSignUp':function(e){
        e.preventDefault();
        let formData =$("#signup");
        let insertObject = {};
        new LeoUtils().getFormValues(formData,function (data) {
            if(!data.terms){
                toastr.clear();
                toastr.error(getLeoMessage('acceptTerms'));
                return ;
            }
            insertObject.firstname = data.firstname;
            insertObject.lastname = data.lastname;
            insertObject.email = data.email;
            insertObject.username = data.username;
            insertObject.password = data.password;
            insertObject.confirmPassword = data.confirmPassword;
            if(data.password !== data.confirmPassword ){
                toastr.clear();
                toastr.error(getLeoMessage('passwordAndConfirmMatch'));
                return ;
            }else{
                Meteor.call("signUpUser",insertObject,function (err,data) {
                    if(err){
                        toastr.clear();
                        toastr.error(err.reason);
                    }else{
                        toastr.clear();
                        toastr.success(getLeoMessage('userCreated'));
                        toastr.info(getLeoMessage('verificationTokenSendToEmail'));
                    }
                    console.log(data)
                })
            }
        })
    }
})