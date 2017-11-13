LeoProductProcessor = function(){
    LeoProductProcessorClass = function(options){
        this.options = _.extend({}, options);
    };
    LeoProductProcessorClass.prototype.insertProductProcessor = function(){
        let product = this.options.product;
        LeoIdService.product(product);
        return LeoCollections.LeoProduct.insert(product);
    };
    LeoProductProcessorClass.prototype.updateProductProcessor = function(){
        let product = this.options.product;
        let productId = this.options.productId;
        if(LeoCollections.LeoProduct.findOne({_id:productId})){
            try{
                return LeoCollections.LeoProduct.update({_id:productId},{$set:product})
            }
            catch(e){
                throw new Meteor.Error(e)
            }
        }
        else{
            throw new Meteor.Error(404,getMessage("idNotMatching"))
        }

    };
    return LeoProductProcessorClass
}();