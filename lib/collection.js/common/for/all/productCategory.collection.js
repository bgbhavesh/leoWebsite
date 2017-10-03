LeoCollections.LeoProductCategory = new Mongo.Collection("leoProductCategory");
if(Meteor.isClient){
    LeoGroundCollections.LeoProductCategory = Ground.Collection(LeoCollections.LeoProductCategory,{cleanupLocalData: false});
}