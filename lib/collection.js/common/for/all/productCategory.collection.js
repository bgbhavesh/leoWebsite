var LeoProductCategory = new Mongo.Collection("leoProductCategory");
var LeoProductCategorySchema = new SimpleSchema({
    images: {
        type: [LeoSchemas.LeoImageSchema],
        optional: true
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
LeoCollections.LeoProductCategory.attachSchema(LeoSchemas.LeoProductCategorySchema);