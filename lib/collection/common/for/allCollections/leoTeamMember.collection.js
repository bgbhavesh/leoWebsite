let LeoTeamMember = new Mongo.Collection("leoTeamMember");
let LeoTeamMemberSchema = new SimpleSchema({
    images: {
        type: [LeoSchemas.LeoImageSchema],
        optional: true
    },
    name: {
        type: String,
        unique:true
    },
    title: {//designation
        type: String
    },
    email: {//
        type: String,
        optional: true
    },
    number:{
        type:String,
        optional: true
    },
    dob:{
        type:Date,
        optional:true
    },
    socialLink:{
        type:[Object],
        optional:true
    },
    socialLinks:{
        type:[LeoSchemas.LeoSocialLinks],
        optional:true
    },
    tags: {
        type: [String],
        optional: true,
    },
    teamMemberId: {
        optional: true,
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