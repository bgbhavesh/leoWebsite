var LeoGallery = new Mongo.Collection("leoGallery");
var LeoGallerySchema = new SimpleSchema({
    images: {
        type: [LeoSchemas.LeoImageSchema],
        optional: true
    },
    tags: {
        type: [String],
        optional: true,
    },
    galleryId: {
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
    LeoGroundCollections.LeoGallery = Ground.Collection(LeoCollections.LeoGallery, {cleanupLocalData: false});
}
LeoSchemas.LeoGallerySchema = LeoGallerySchema;
LeoCollections.LeoGallery = LeoGallery;
LeoCollections.LeoGallery.attachSchema(LeoSchemas.LeoGallerySchema);