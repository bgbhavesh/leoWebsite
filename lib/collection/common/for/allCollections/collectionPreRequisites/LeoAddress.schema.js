import './_common.js';
var LeoAddressSchema = new SimpleSchema({
    "addressLine1":{
        type: String,
        optional: true
    },
    "addressLine2":{
        type: String,
        optional: true
    },
    "addressLine3":{
        type: String,
        optional: true
    },
    "city":{
        type: String,
        optional: true
    },
    "state":{
        type: String,
        optional: true
    },
    "zipCode":{
        type: String,
        optional: true
    },
    "country":{
        type: String,
        optional: true
    },    
    "isDefault":{
        type: Boolean,
        optional: true
    }, 
    "locality":{
        type: String,
        optional: true
    },  
    "cords":{
        type:LeoSchemas.LeoLocationSchema,
        optional:true
    }
});

var LeoLocationSchema = new SimpleSchema({
    "latitude": {
        type: String,
        optional: false
    },
    "longitude": {
        type: String,
        optional: false
    }
});

LeoSchemas.LeoLocationSchema = LeoLocationSchema;
LeoSchemas.LeoAddressSchema = LeoAddressSchema;