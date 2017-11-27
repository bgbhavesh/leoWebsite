let LeoNewsFeed = new Mongo.Collection("leoNewsFeed");
let LeoNewsFeedSchema = new SimpleSchema({
    images: {
        type: [LeoSchemas.LeoImageSchema],
        optional: true
    },
    tags: {
        type: [String],
        optional: true,
    },
    newsFeedId: {
        optional: true,
        type: String
    },
    title: {
        type: String
    },
    author: {
        type: String,
        optional:true
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
    LeoGroundCollections.LeoNewsFeed = Ground.Collection(LeoCollections.LeoNewsFeed, {cleanupLocalData: false});
}
LeoSchemas.LeoNewsFeedSchema = LeoNewsFeedSchema;
LeoCollections.LeoNewsFeed = LeoNewsFeed;
LeoCollections.LeoNewsFeed.attachSchema(LeoSchemas.LeoNewsFeedSchema);