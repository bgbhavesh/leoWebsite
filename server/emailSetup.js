Meteor.startup(function (){
    var smtp = {
        username: Meteor.settings.private["smtp"]["username"], // eg: server@gentlenode.com
        password: Meteor.settings.private["smtp"]["password"], // eg: 3eeP1gtizk5eziohfervU
        server: Meteor.settings.private["smtp"]["server"], // eg: mail.gandi.net
        port: Meteor.settings.private["smtp"]["port"]   // eg. 25
    };
    // console.log("server",smtp.server);
    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
    // console.log('process.env.MAIL_URL',process.env.MAIL_URL);
});