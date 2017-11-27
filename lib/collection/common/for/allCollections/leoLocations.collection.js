let LeoLocations = new Mongo.Collection("leoLocations");
let LeoLocationsSchema = new SimpleSchema({
    images: {
        type: [LeoSchemas.LeoImageSchema],
        optional: true
    },
    signature:{
        type:String,//HQ HO branch office
        optional: true,
    },
    email:{
        type:String,
        optional: true,
    },
    phone:{
        type:String,
        optional: true,
    },
    mobile:{
        type:String,
        optional: true,
    },
    website:{
        type:String,
        optional: true,
    },
    workingHours:{
        type:[Object],
        optional:true
    },
    address:{
        type:[Object],
        optional:true
    },
    tags: {
        type: [String],
        optional: true,
    },
    locationId: {
        optional: true,
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    audit: {
        type: LeoSchemas.LeoAuditSchema
    },
    isActive: {
        type: Boolean,
        defaultValue: true,
    }
});
if (Meteor.isClient && Meteor.isCordova) {
    LeoGroundCollections.LeoLocations = Ground.Collection(LeoCollections.LeoLocations, {cleanupLocalData: false});
}
LeoSchemas.LeoLocationsSchema = LeoLocationsSchema;
LeoCollections.LeoLocations = LeoLocations;
LeoCollections.LeoLocations.attachSchema(LeoSchemas.LeoLocationsSchema);