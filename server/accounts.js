// Accounts.onCreateUser((options, user) => {
//
// });
Accounts.emailTemplates.siteName = "Leo-Quip";
// Accounts.emailTemplates.from = "leoquip@gmail.com";
Accounts.emailTemplates.verifyEmail.subject= function(user){
    return 'Verify your account with Leo-Quip'
}
SSR.compileTemplate("verifyEmailTemplate",Assets.getText("emailTemplates/verifyEmailTemplate.html"));
Accounts.emailTemplates.verifyEmail.html = function(user, url) {
    let template = "verifyEmailTemplate";
    let html = SSR.render(template, {
        SITE_URL: Meteor.absoluteUrl(),
        SITE_NAME: "LeoQuip Engineering Works",
        EMAIL_LOGO: Meteor.settings.public.CDNUrl + "/images/smart-logo4.png",
        VERIFY_URL: url.replace('/#',''),
    });
    console.log("verification: "+url)
    return html;
};