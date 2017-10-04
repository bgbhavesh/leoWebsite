var LeoProductCategory = new Mongo.Collection("leoProductCategory");
var LeoProductCategorySchema = new SimpleSchema({
    images: {
        type: [Object],
        optional: true
    },
    "images.$.isDefault": {
        type: Boolean,
        defaultValue: false
    },
    "images.$.url": {
        type: String,
        defaultValue: false
    },
    "images.$.seq": {
        type: Number,
        defaultValue: false
    },
    tags: {
        type: [String],
        optional: true,
    },
    productCategoryId: {
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
if (Meteor.isClient) {
    LeoGroundCollections.LeoProductCategory = Ground.Collection(LeoCollections.LeoProductCategory, {cleanupLocalData: false});
}
LeoSchemas.LeoProductCategorySchema = LeoProductCategorySchema;
LeoCollections.LeoProductCategory = LeoProductCategory;