Router.map(function () {
    this.route('landingPage', {
        layoutTemplate:"leoLayout",
        path: '/',
        // layoutTemplate:'',
        waitOn: function () {
            // Meteor.subscribe("leoCompany",{},{})
        },
        data: function () {
            routerTitle:'HOME';
            // leoCompany:LeoCollections.LeoCompany.findOne();
        }
    });
});