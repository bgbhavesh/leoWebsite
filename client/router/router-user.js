Router.map(function () {
    this.route('landingPage', {
        layoutTemplate:"leoLayout",
        path: '/',
        waitOn: function () {
            // Meteor.subscribe("leoCompany",{},{})
        },
        data: function () {
            routerTitle:'HOME';
            // leoCompany:LeoCollections.LeoCompany.findOne();
        }
    });
    this.route('contactUs', {
        layoutTemplate:"leoFullLayout",
        path: '/contactUs',
        waitOn: function () {
            // Meteor.subscribe("leoCompany",{},{})
        },
        data: function () {
            routerTitle:'Contact Us';
            // leoCompany:LeoCollections.LeoCompany.findOne();
        }
    });
    this.route('aboutUs', {
        layoutTemplate:"leoFullLayout",
        path: '/aboutUs',
        waitOn: function () {
            Meteor.subscribe("leoAboutUs",{isActive:true},{})
        },
        data: function () {
            routerTitle:'About Us';
            leoAboutUs:LeoCollections.LeoAboutUs.find().fetch();
        }
    });
});