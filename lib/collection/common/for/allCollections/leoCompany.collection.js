let LeoCompany = new Mongo.Collection("leoCompany");
let LeoCompanySchema = new SimpleSchema({
    images: {
        type: [LeoSchemas.LeoImageSchema],
        optional: true
    },
    tags: {
        type: [String],
        optional: true,
    },
    companyId: {
        optional: true,
        type: String
    },
    title: {
        type: String
    },
    tagLine: {
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
    },
    socialLinks:{
        type:[LeoSchemas.LeoSocialLinks],
        optional:true
    }
});
if (Meteor.isClient && Meteor.isCordova) {
    LeoGroundCollections.LeoCompany = Ground.Collection(LeoCollections.LeoCompany, {cleanupLocalData: false});
}
LeoSchemas.LeoCompanySchema = LeoCompanySchema;
LeoCollections.LeoCompany = LeoCompany;
LeoCollections.LeoCompany.attachSchema(LeoSchemas.LeoCompanySchema);