LeoServiceProcessor = function(){
    LeoServiceProcessorClass = function(options){
        this.options = _.extend({}, options);
    };
    LeoServiceProcessorClass.prototype.insertServiceProcessor = function(){
        let service = this.options.service;
        LeoIdService.service(service);
        LeoCollections.LeoService.insert(service)
    };
    LeoServiceProcessorClass.prototype.updateServiceProcessor = function(){
        let service = this.options.service;
        let serviceId = this.options.serviceId;
        if(LeoCollections.LeoService.findOne({_id:serviceId})){
            try{
                return LeoCollections.LeoService.update({_id:serviceId},{$set:service})
            }
            catch(e){
                throw new Meteor.Error(e)
            }
        }
        else{
            throw new Meteor.Error(404,getLeoMessage("idNotMatching"))
        }

    };
    return LeoServiceProcessorClass
}();