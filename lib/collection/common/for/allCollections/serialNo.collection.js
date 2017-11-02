LeoCollections.SerialNumbers = new Mongo.Collection("serialNumbers");
if(Meteor.isClient && Meteor.isCordova){
    LeoGroundCollections.SerialNumbers = Ground.Collection(LeoCollections.SerialNumbers,{cleanupLocalData: false});
}
