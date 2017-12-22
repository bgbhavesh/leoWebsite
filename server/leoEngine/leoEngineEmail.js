LeoEmailProcessor = function () {
    var LeoEmailProcessor = function (options){
        this.options = _.extend({from:"stats@fieldeagles.com",type:"text"}, options);
    };

    LeoEmailProcessor.prototype.sendEmailHtml = function (){
        var arg = this.options;
        var finalEmailObj = {
            to:arg.to,
            from: arg.from,
            subject: arg.subject,
            html: arg.body
        };

        Email.send(finalEmailObj);
    };

    LeoEmailProcessor.prototype.sendEmailText = function (){
        var arg = this.options;
        var finalEmailObj = {
            to:arg.to,
            from: arg.from,
            subject: arg.subject,
            text: arg.body
        };
        Email.send(finalEmailObj);
    };

    LeoEmailProcessor.prototype.sendEmailWithAttachment = function (){

    };

    LeoEmailProcessor.prototype.sendEmailFromHtmlFile = function (){

    };

    return LeoEmailProcessor;
}();


export default LeoEmailProcessor;