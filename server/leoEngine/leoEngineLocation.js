LeoLocationProcessor = function(){
    LeoLocationProcessorClass = function(options){
        this.options = _.extend({}, options);
    };
    LeoLocationProcessorClass.prototype.insertLocationProcessor = function(){
        let location = this.options.location;
        LeoIdService.location(location);
        return LeoCollections.LeoLocation.insert(location)
    };
    LeoLocationProcessorClass.prototype.updateLocationProcessor = function(){
        let location = this.options.location;
        let locationId = this.options.locationId;
        if(LeoCollections.LeoLocation.findOne({_id:locationId})){
            try{
                return LeoCollections.LeoLocation.update({_id:locationId},{$set:location})
            }
            catch(e){
                throw new Meteor.Error(e)
            }
        }
        else{
            throw new Meteor.Error(404,getLeoMessage("idNotMatching"))
        }

    };
    return LeoLocationProcessorClass
}();