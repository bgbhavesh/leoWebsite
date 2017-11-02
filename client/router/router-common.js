Router.map(function () {
    this.route('signup', {
        path: '/signup',
        // layoutTemplate:'',
        waitOn: function () {

        },
        data: function () {
            routerTitle:'Sign Up'
        }
    });
    this.route('verifyEmail', {
        // controller: 'verifyEmailTokenController',
        path: '/verify-email/:token',
        action: function () {
            var token = this.params.token;
            console.log(token);
            debugger
            Accounts.verifyEmail(this.params.token, function (err) {
                console.log(err);
                if (err && err !== null) {
                    if (err.message = 'Verify email link expired [403]') {
                        toastr.clear();
                        toastr.error(err.reason);
                        //  $("#login-flow").modal("show");
                        //Router.go('/smtMrAndAsmChangePassword');
                        // pageSession.set("clientLoginError", { 'alert-danger': informationMessages.varificationTokenExpired });
                    }
                    else{
                        toastr.clear();
                        toastr.error(err.reason);
                    }
                } else {
                    //    $("#login-flow").modal("show");
                    // FlashMessages.sendSuccess("informationMessages.emailConfirmed");
                    Router.go('leoAdminProductCategory');

                    if (Roles.userIsInRole(Meteor.userId(), 'GUEST-USER', 'guest-group'))
                        Meteor.call("addUserToRole",Meteor.userId(), 'NEW-USER', 'guest-group')

                }
            });
        },
        onBeforeAction: function () {
            this.next();
        }
    });
})
