let LeoContactUsForm = new Mongo.Collection("leoContactUsForm");
let LeoContactUsFormSchema = new SimpleSchema({
    images: {
        type: [LeoSchemas.LeoImageSchema],
        optional: true
    },
    name: {
        type: String,
        unique:true
    },    
    contactUsFormId: {
        optional: true,
        type: String
    },
    number:{
        type:String,
        optional: true
    },  
    comment: {
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
    LeoGroundCollections.LeoContactUsForm = Ground.Collection(LeoCollections.LeoContactUsForm, {cleanupLocalData: false});
}
LeoSchemas.LeoContactUsFormSchema = LeoContactUsFormSchema;
LeoCollections.LeoContactUsForm = LeoContactUsForm;
LeoCollections.LeoContactUsForm.attachSchema(LeoSchemas.LeoContactUsFormSchema);