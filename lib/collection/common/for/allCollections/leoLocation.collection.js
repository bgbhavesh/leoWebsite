let LeoLocation = new Mongo.Collection("leoLocation");
let LeoLocationSchema = new SimpleSchema({
    images: {
        type: [LeoSchemas.LeoImageSchema],
        optional: true
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
    LeoGroundCollections.LeoLocation = Ground.Collection(LeoCollections.LeoLocation, {cleanupLocalData: false});
}
LeoSchemas.LeoLocationSchema = LeoLocationSchema;
LeoCollections.LeoLocation = LeoLocation;
LeoCollections.LeoLocation.attachSchema(LeoSchemas.LeoLocationSchema);