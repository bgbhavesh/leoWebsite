let LeoAddress = new Mongo.Collection("leoAddress");
let LeoAddressSchema = new SimpleSchema({
    images: {
        type: [LeoSchemas.LeoImageSchema],
        optional: true
    },
    address:{
        type:LeoSchemas.LeoAddressSchema,
        optional:true
    },
    tags: {
        type: [String],
        optional: true,
    },
    addressId: {
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
    LeoGroundCollections.LeoAddress = Ground.Collection(LeoCollections.LeoAddress, {cleanupLocalData: false});
}
LeoSchemas.LeoAddressSchema = LeoAddressSchema;
LeoCollections.LeoAddress = LeoAddress;
LeoCollections.LeoAddress.attachSchema(LeoSchemas.LeoAddressSchema);