let LeoProduct = new Mongo.Collection("leoProduct");
let LeoProductSchema = new SimpleSchema({
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
    productId: {
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
    LeoGroundCollections.LeoProduct = Ground.Collection(LeoCollections.LeoProduct, {cleanupLocalData: false});
}
LeoSchemas.LeoProductSchema = LeoProductSchema;
LeoCollections.LeoProduct = LeoProduct;
LeoCollections.LeoProduct.attachSchema(LeoSchemas.LeoProductSchema);