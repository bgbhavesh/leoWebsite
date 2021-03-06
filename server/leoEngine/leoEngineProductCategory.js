LeoProductCategoryProcessor = function(){
    LeoProductCategoryProcessorClass = function(options){
        this.options = _.extend({}, options);
    };
    LeoProductCategoryProcessorClass.prototype.insertProductCategoryProcessor = function(){
        let category = this.options.category;
        LeoIdService.productCategory(category);
        return LeoCollections.LeoProductCategory.insert(category)
    };
    LeoProductCategoryProcessorClass.prototype.updateProductCategoryProcessor = function(){
        let category = this.options.category;
        let catId = this.options.catId;
        if(LeoCollections.LeoProductCategory.findOne({_id:catId})){
            try{
                return LeoCollections.LeoProductCategory.update({_id:catId},{$set:category})
            }
            catch(e){
                throw new Meteor.Error(e)
            }
        }
        else{
            throw new Meteor.Error(404,getLeoMessage("idNotMatching"))
        }

    };
    return LeoProductCategoryProcessorClass
}();