let LeoUsers = Meteor.users;
let LeoUsersSchema = new SimpleSchema({
    cratedAt:{
        type:Date,

    },
    username:{
        type:String,
    },
    profile:{
        type:Object,
        blackbox:true
    },
    services:{
        type:Object,
        blackbox:true
    },
    role:{
        type:Object,
        blackbox:true
    },
    status: {
        type: Object,
        optional: true,
        blackbox: true
    }
});

if (Meteor.isClient && Meteor.isCordova) {
    LeoGroundCollections.LeoUsers = Ground.Collection(LeoCollections.LeoUsers, {cleanupLocalData: false});
}
LeoSchemas.LeoUsersSchema = LeoUsersSchema;
LeoCollections.LeoUsers = LeoUsers;
LeoCollections.LeoUsers.attachSchema(LeoSchemas.LeoUsersSchema);