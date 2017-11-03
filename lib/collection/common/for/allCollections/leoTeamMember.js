var LeoTeamMember = new Mongo.Collection("leoTeamMember");
var LeoTeamMemberSchema = new SimpleSchema({
    images: {
        type: [LeoSchemas.LeoImageSchema],
        optional: true
    },
    name: {
        type: String
    },
    title: {//designation
        type: String
    },
    email: {//designation
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
    'socialLink.$.domain':{
        type:String,//FACEBOOK//TWITTER//INSTAGRAM//GOOGLEp
        optional:true,
    },
    'socialLink.$.link':{
        type:String,
        optional:true,
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