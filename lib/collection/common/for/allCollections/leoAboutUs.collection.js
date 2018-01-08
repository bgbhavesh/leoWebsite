let LeoAboutUs = new Mongo.Collection("leoAboutUs");
let LeoAboutUsSchema = new SimpleSchema({   
    tags: {
        type: [String],
        optional: true,
    },
    aboutUsId: {
        optional: false,
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    seq: {
        type: Number,
        defaultValue:1
    },
    audit: {
        type: LeoSchemas.LeoAuditSchema
    },
    isActive: {
        type: Boolean,
        defaultValue: true,
    },
    aboutType:{
        type:String,
        allowedValues:["TABS","PARAGRAPH","CHECKBOX","PERCENTAGE"],
        optional:true,
        defaultValue:"PARAGRAPH"
    },
    aboutItemList:{
        type:[Object],
        optional:true,
        blackbox:true
    },
});
if (Meteor.isClient && Meteor.isCordova) {
    LeoGroundCollections.LeoAboutUs = Ground.Collection(LeoCollections.LeoAboutUs, {cleanupLocalData: false});
}
LeoSchemas.LeoAboutUsSchema = LeoAboutUsSchema;
LeoCollections.LeoAboutUs = LeoAboutUs;
LeoCollections.LeoAboutUs.attachSchema(LeoSchemas.LeoAboutUsSchema);