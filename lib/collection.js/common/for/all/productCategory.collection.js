var LeoProductCategory = new Mongo.Collection("leoProductCategory");
var LeoProductCategorySchema = new SimpleSchema({
    images:{
        type:[Object]
    },
    "images.$.isDefault":{
        type:Boolean,
        defaultValue:false
    },
    "images.$.url":{
        type:String,
        defaultValue:false
    },
    tags:{
        type:[String],
        optional:true
    },
    name:{
        type:String
    },
    displayName:{
        type:String
    },
    description:{
        type:String
    },
    audit:{
        type: LeoSchemas.LeoAuditSchema
    },

});
if(Meteor.isClient){
    LeoGroundCollections.LeoProductCategory = Ground.Collection(LeoCollections.LeoProductCategory,{cleanupLocalData: false});
}
LeoSchemas.LeoProductCategorySchema = LeoProductCategorySchema;
LeoCollections.LeoProductCategory = LeoProductCategory;