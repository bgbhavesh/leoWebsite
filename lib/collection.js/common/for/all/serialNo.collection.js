LeoCollections.SerialNumbers = new Mongo.Collection("serialNumbers");
if(Meteor.isClient){
    LeoGroundCollections.SerialNumbers = Ground.Collection(LeoCollections.SerialNumbers,{cleanupLocalData: false});
}
