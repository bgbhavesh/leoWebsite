LeoContactUsFormProcessor = function(){
    LeoContactUsFormProcessorClass = function(options){
        this.options = _.extend({}, options);
    };
    LeoContactUsFormProcessorClass.prototype.insertContactUsFormProcessor = function(){
        let contactUsForm = this.options.contactUsForm;
        let x = LeoIdService.contactUsForm(contactUsForm);
        let z = this.mailContactUsFormProcessor(contactUsForm);
        let y = LeoCollections.LeoContactUsForm.insert(contactUsForm)
        return {x,y,z}
    };    
    LeoContactUsFormProcessorClass.prototype.mailContactUsFormProcessor = function(){
        var arg = this.options.contactUsForm;    
        console.log(arg)
        let to = Meteor.settings.private.emailId||"bgbhavesh@gmail.com";
        let subject = "Some One trying to contact you ";
        let from = "bgbhavesh@gmail.com"
        let comment = arg.email+" "+arg.number+ " "+ arg.comment
        return new LeoEmailProcessor({
            to:to,
            from: from,
            subject: subject,
            body: comment
        }).sendEmailHtml()
    };

    return LeoContactUsFormProcessorClass
}();