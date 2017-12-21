import './_common.js';
var LeoAddressSchema = new SimpleSchema({
    "fullAddress":{
        type: String,
        optional: true
    },
    "street_number":{
        type: String,
        optional: true
    },
    "addressLine3":{
        type: String,
        optional: true
    },
    "route":{
        type: String,
        optional: true
    },
    "locality":{
        type: String,
        optional: true
    },
    "administrative_area_level_1":{
        type: String,
        optional: true
    },
    "postal_code":{
        type: Number,
        optional: true,
        regEx:SimpleSchema.RegEx.ZipCode
    },    
    "country":{
        type: String,
        optional: true
    },   
    "latitude": {
        type: Number,
        decimal: true,
        optional: true
    },
    "longitude": {
        type: Number,
        decimal: true,
        optional: true
    }
});

LeoSchemas.LeoAddressSchema = LeoAddressSchema;
/*
insertObject.fullAddress = data.fullAddress;
        insertObject.street_number = data.street_number;
        insertObject.route = data.route;
        insertObject.locality = data.locality;
        insertObject.administrative_area_level_1 = data.administrative_area_level_1;
        insertObject.postal_code = data.postal_code;
        insertObject.country = data.country;
        insertObject.latitude = data.latitude;
        insertObject.longitude = data.longitude;
        */