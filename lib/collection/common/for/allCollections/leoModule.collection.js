var LeoModule = new Mongo.Collection("leoModule");
var LeoModuleSchema = new SimpleSchema({
    images: {
        type: [LeoSchemas.LeoImageSchema],
        optional: true
    },
    tags: {
        type: [String],
        optional: true,
    },
    showCaseId: {
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
    },
    permissions:{
        type:[Object],
        optional:true
    },
    'permissions.$.userType':{
        type:String,
    },
    'permissions.$.operations':{
        type:[String],
    }

});
if (Meteor.isClient && Meteor.isCordova) {
    LeoGroundCollections.LeoModule = Ground.Collection(LeoCollections.LeoModule, {cleanupLocalData: false});
}
LeoSchemas.LeoModuleSchema = LeoModuleSchema;
LeoCollections.LeoModule = LeoModule;
LeoCollections.LeoModule.attachSchema(LeoSchemas.LeoModuleSchema);