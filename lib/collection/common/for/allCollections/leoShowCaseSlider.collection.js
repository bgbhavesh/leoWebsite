var LeoShowCaseSlider = new Mongo.Collection("leoShowCaseSlider");
var LeoShowCaseSliderSchema = new SimpleSchema({
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
    }
});
if (Meteor.isClient && Meteor.isCordova) {
    LeoGroundCollections.LeoShowCaseSlider = Ground.Collection(LeoCollections.LeoShowCaseSlider, {cleanupLocalData: false});
}
LeoSchemas.LeoShowCaseSliderSchema = LeoShowCaseSliderSchema;
LeoCollections.LeoShowCaseSlider = LeoShowCaseSlider;
LeoCollections.LeoShowCaseSlider.attachSchema(LeoSchemas.LeoShowCaseSliderSchema);