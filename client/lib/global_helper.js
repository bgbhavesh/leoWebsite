
Template.registerHelper("timeAgo", function (date) {
    return moment(date).fromNow();
});
Template.registerHelper('equals', function (a, b) {
    return a === b;
});
Template.registerHelper('checkEqual', function (a, b, result, falseResult) {
    return (a === b) ? result : falseResult;
});

Template.registerHelper('bloodGroup', function (obj) {
    return bloodGroup;
});
Template.registerHelper('getAlbhabet', function (lowerCase) {
    if (lowerCase) {
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split("");
    }
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
});

Template.registerHelper('not', (value) => {
    return !value;
});

Template.registerHelper('getSessionVar', function (name) {
    return Session.get(name);
});
Template.registerHelper('isCordova', function () {
    return Meteor.isCordova;

});