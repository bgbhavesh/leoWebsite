Session.setDefault("viewLoginPage","toSignIn");
Template.leoLogin.onCreated(function () {
    Session.set("viewLoginPage","toSignIn");
});
Template.leoLogin.events({
    "click #toSignUp":function (e) {
        e.preventDefault()
        Session.set("viewLoginPage","toSignUp");
    },
    "click #toSignIn":function (e) {
        e.preventDefault()
        Session.set("viewLoginPage","toSignIn");
    }
});

Template.leoLogin.helpers({
    "viewLoginPage":function (e) {
        return (Session.get("viewLoginPage")==='toSignIn')?"signIn":"signUp";
    }
});
