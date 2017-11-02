Session.setDefault("viewLoginPage","signIn");
Template.leoLogin.onCreated(function () {
    Session.set("viewLoginPage","signIn");
});
Template.leoLogin.events({
    "click #signUp":function (e) {
        e.preventDefault()
        Session.set("viewLoginPage","signIn");
    },
    "click #signIn":function (e) {
        e.preventDefault()
        Session.set("viewLoginPage","signUp");
    }
});

Template.leoLogin.helpers({
    "viewLoginPage":function (e) {
        return Session.get("viewLoginPage");
    }
});
