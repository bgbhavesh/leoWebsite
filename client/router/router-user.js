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
    this.route('leoProCat', {
        layoutTemplate:"leoFullLayout",
        path: '/leoProCat/:catId?',
        waitOn: function () {
            // Meteor.subscribe("leoAboutUs",{isActive:true},{})
        },
        data: function () {
            routerTitle:'Product Cat';
            // leoAboutUs:LeoCollections.LeoAboutUs.find().fetch();
        }
    });
    this.route('leoSerCat', {
        layoutTemplate:"leoFullLayout",
        path: '/leoSerCat/:catId?',
        waitOn: function () {
            // Meteor.subscribe("leoAboutUs",{isActive:true},{})
        },
        data: function () {
            routerTitle:'Service Cat';
            // leoAboutUs:LeoCollections.LeoAboutUs.find().fetch();
        }
    });
});