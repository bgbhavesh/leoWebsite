var LeoTeamMember = new Mongo.Collection("leoTeamMember");
var LeoTeamMemberSchema = new SimpleSchema({
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
    teamMemberId: {
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
    LeoGroundCollections.LeoTeamMember = Ground.Collection(LeoCollections.LeoTeamMember, {cleanupLocalData: false});
}
LeoSchemas.LeoTeamMemberSchema = LeoTeamMemberSchema;
LeoCollections.LeoTeamMember = LeoTeamMember;
LeoCollections.LeoTeamMember.attachSchema(LeoSchemas.LeoTeamMemberSchema);