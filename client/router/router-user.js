Router.map(function () {
    this.route('landingPage', {
        layoutTemplate:"leoLayout",
        path: '/',
        // layoutTemplate:'',
        waitOn: function () {

        },
        data: function () {
            routerTitle:'HOME'
        }
    });
});