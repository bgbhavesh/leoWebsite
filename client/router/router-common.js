Router.map(function () {
    this.route('signup',{
        path:'/signup',
        // layoutTemplate:'',
        waitOn:function(){

        },
        data:function(){
            routerTitle:'Sign Up'
        }
    });
    this.route('verifyEmail', {
        controller: 'verifyEmailController',
        path: '/#/verify-email/:token'

    });
})
this.verifyEmailController = RouteController.extend({
    template: "verifyEmail",
    action: function () {
        var token = this.params.token;
        Accounts.verifyEmail(this.params.token, function (err) {
            console.log(err);
            if (err != null) {
                if (err.message = 'Verify email link expired [403]' && !verificationFlag) {
                    //  $("#login-flow").modal("show");
                    //Router.go('/smtMrAndAsmChangePassword');
                    // pageSession.set("clientLoginError", { 'alert-danger': informationMessages.varificationTokenExpired });
                }
            } else {
                //    $("#login-flow").modal("show");
                // FlashMessages.sendSuccess("informationMessages.emailConfirmed");
                Router.go('leoAdminProductCategory');
            }
        });
    },
    onBeforeAction: function () {
        this.next();
    }
});