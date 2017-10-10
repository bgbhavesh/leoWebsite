selectRegEx = function (regex) {
    switch(regex){
        case 'email':
            return SimpleSchema.RegEx.mailId;
            break;
        case 'mobileNumber':
            return SimpleSchema.RegEx.Phone;
            break;
        case 'domain':
            return SimpleSchema.RegEx.WeakDomain;//Domain
            break;
        case 'zipCode':
            return SimpleSchema.RegEx.ZipCode;
            break;
        case 'IP':
            return SimpleSchema.RegEx.IP;
            break;
        case 'alphaNum':
            return SimpleSchema.RegEx.alphaOrAlphaNum;
            break;
        case 'alpha':
            return SimpleSchema.RegEx.alpha;
            break;
        case 'decimal':
            return SimpleSchema.RegEx.decimalNumber;
            break;
        case 'number':
            return SimpleSchema.RegEx.Number;
            break;

        case 'alphaNumMinusSpace':
            return SimpleSchema.RegEx.alphaNumMinusSpace;
            break;
        case 'singleLine':
            return SimpleSchema.RegEx.singleLine;
            break;
    }
}
validateFields = function (evt,mandatory,validationType) {
    let key = $(evt.currentTarget).val();
    let parent = $(evt.currentTarget).parent();
    if (!$(parent).hasClass("form-group")) {
        return;
    }
    if (!testRegEx(key,mandatory,selectRegEx(validationType))) {
        if (!$(parent).hasClass("has-error")) {
            $(parent).addClass("has-error")
        }
    }
    else {
        $(parent).removeClass("has-error")
    }
}
validateNonEmpty = function (evt) {
    let key = $(evt.currentTarget).val();
    let parent = $(evt.currentTarget).parent();
    if (!$(parent).hasClass("form-group")) {
        return;
    }
    if (!testNonEmpty(key)) {
        if (!$(parent).hasClass("has-error")) {
            $(parent).addClass("has-error")
        }
    }
    else {
        $(parent).removeClass("has-error")
    }
}
testNonEmpty = function (key) {
    if (key == "" || key == null || key == undefined) {
        return false
    }
    return true;
}
testRegEx = function(key,mandatory,regex){
    if(mandatory && key === ""){
        return false
    }
    else if(mandatory){
        if(!regex ){
            return true;
        }
        else if(regex && regex.test(key)){
            return true
        }
        return false
    }
    else {
        if(!regex ){
            return true;
        }
        else if(regex && regex.test(key)){
            return true
        }
        return false
    }
}
validateNumber = function (evt) {
    let theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    if (key != 8 || key != 46 || key != 43 || key != 45 || key != 35 || key != 36 || key != 37 || key != 38 || key != 39 || key != 40) {
        key = String.fromCharCode(key);
        let regex = SimpleSchema.RegEx.Number;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    }
}