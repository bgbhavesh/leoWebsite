SimpleSchema.RegEx.Number = /[0-9]|\./;
SimpleSchema.RegEx.decimalNumber = /[0-9]+(\.[0-9][0-9]?)?/;
SimpleSchema.RegEx.alphaOrAlphaNum = /^[A-Za-z_][A-Za-zd_0-9\s]*$/;
SimpleSchema.RegEx.alpha = /^[A-Za-z_][A-Za-zd_]*$/;
SimpleSchema.RegEx.mailId = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+[.][a-zA-Z0-9]{2}/;
SimpleSchema.RegEx.alphaNum = /^[A-Za-zd_0-9]*$/;
SimpleSchema.RegEx.alphaNumMinusSpace = /^[\w\-\s]+$/;
SimpleSchema.RegEx.singleLine = /^[ A-Za-z0-9_@,'":;?!{*}.%$/|)<>[\](=#&+-]*$/
// SimpleSchema.RegEx.pinCode = /^[1-9][0-9]{5}$///ZipCode