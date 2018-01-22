
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
Template.registerHelper('getDefaultUrl', function (images,style) {
    return getDefaultUrl(images,style);
});
Template.registerHelper('getActivetUrl', function (images,style) {
    return getActivetUrl(images,style);
});

Template.registerHelper('getSessionVar', function (name) {
    return Session.get(name);
});
Template.registerHelper('toString', function (x) {
    console.log(x);
    return x.toString();

});

Template.registerHelper("formatDate", function (date, format, custom) {
    return formatDate(date, format, custom);
});
Template.registerHelper("getStyledUrls", function (public_id,style) {
    console.log(public_id);
    return getStyledUrls(public_id,style);
});
Template.registerHelper('isCordova', function () {
    return Meteor.isCordova;

});
