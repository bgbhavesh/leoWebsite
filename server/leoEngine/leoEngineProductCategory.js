LeoProductCategoryProcessor = function(){
    LeoProductCategoryProcessorClass = function(options){
        this.options = _.extend({}, options);
    }
    LeoProductCategoryProcessorClass.prototype.insertProductCategoryProcessor = function(){
        var category = this.options.category;
        LeoIdService.productCategory(category);
        LeoCollections.LeoProductCategory.insert(category)
    }
    return LeoProductCategoryProcessorClass
}();