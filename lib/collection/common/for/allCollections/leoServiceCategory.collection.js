let LeoServiceCategory = new Mongo.Collection("leoServiceCategory");
let LeoServiceCategorySchema = new SimpleSchema({
    images: {
        type: [LeoSchemas.LeoImageSchema],
        optional: true
    },
    tags: {
        type: [String],
        optional: true,
    },
    serviceId: {
        optional: true,
        type: String
    },
    name: {
        type: String,
        unique:true
    },
    seq:{
        type:Number,
        defaultValue:1
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
    LeoGroundCollections.LeoServiceCategory = Ground.Collection(LeoCollections.LeoServiceCategory, {cleanupLocalData: false});
}
LeoSchemas.LeoServiceCategorySchema = LeoServiceCategorySchema;
LeoCollections.LeoServiceCategory = LeoServiceCategory;
LeoCollections.LeoServiceCategory.attachSchema(LeoSchemas.LeoServiceCategorySchema);