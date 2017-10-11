let LeoUsers = Meteor.users;
let LeoUsersSchema = new SimpleSchema({
    createdAt:{
        type:Date,

    },
    isActive:{
        type:Boolean,
        defaultValue:true
    },
    username: {
        type: String,
        optional: true
    },
    profile:{
        type:Object,
        blackbox:true
    },
    services:{
        type:Object,
        blackbox:true
    },
    roles:{
        type:Object,
        blackbox:true,
        optional:true
    },
    status: {
        type: Object,
        optional: true,
        blackbox: true
    },
    emails: {
        type: [Object],
        optional:true
    },
    "emails.$.address": {
        type: String,
        label: "Email",
        optional:true
    },
    "emails.$.verified": {
        type: Boolean,
        label: "Verified",
        optional:true
    },

});

if (Meteor.isClient && Meteor.isCordova) {
    LeoGroundCollections.LeoUsers = Ground.Collection(LeoCollections.LeoUsers, {cleanupLocalData: false});
}
LeoSchemas.LeoUsersSchema = LeoUsersSchema;
LeoCollections.LeoUsers = LeoUsers;
LeoCollections.LeoUsers.attachSchema(LeoSchemas.LeoUsersSchema);