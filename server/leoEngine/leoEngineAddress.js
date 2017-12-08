LeoAddressProcessor = function(){
    LeoAddressProcessorClass = function(options){
        this.options = _.extend({}, options);
    };
    LeoAddressProcessorClass.prototype.insertAddressProcessor = function(){
        let address = this.options.address;
        LeoIdService.address(address);
        return LeoCollections.LeoAddress.insert(address)
    };
    LeoAddressProcessorClass.prototype.updateAddressProcessor = function(){
        let address = this.options.address;
        let addressId = this.options.addressId;
        if(LeoCollections.LeoAddress.findOne({_id:addressId})){
            try{
                return LeoCollections.LeoAddress.update({_id:addressId},{$set:address})
            }
            catch(e){
                throw new Meteor.Error(e)
            }
        }
        else{
            throw new Meteor.Error(404,getLeoMessage("idNotMatching"))
        }

    };
    return LeoAddressProcessorClass
}();