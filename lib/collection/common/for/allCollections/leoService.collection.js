var LeoService = new Mongo.Collection("leoService");
var LeoServiceSchema = new SimpleSchema({
    images: {
        type: [LeoSchemas.LeoImageSchema],
        optional: true
    },
    tags: {
        type: [String],
        optional: true,
    },
    categoryId: {
        optional: true,
        type: String
    },
    serviceId: {
        optional: true,
        type: String
    },
    name: {
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
    LeoGroundCollections.LeoService = Ground.Collection(LeoCollections.LeoService, {cleanupLocalData: false});
}
LeoSchemas.LeoServiceSchema = LeoServiceSchema;
LeoCollections.LeoService = LeoService;
LeoCollections.LeoService.attachSchema(LeoSchemas.LeoServiceSchema);