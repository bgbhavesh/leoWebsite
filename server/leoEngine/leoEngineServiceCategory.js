LeoServiceCategoryProcessor = function(){
    LeoServiceCategoryProcessorClass = function(options){
        this.options = _.extend({}, options);
    };
    LeoServiceCategoryProcessorClass.prototype.insertServiceCategoryProcessor = function(){
        let category = this.options.category;
        LeoIdService.serviceCategory(category);
        return LeoCollections.LeoServiceCategory.insert(category)
    };
    LeoServiceCategoryProcessorClass.prototype.updateServiceCategoryProcessor = function(){
        let category = this.options.category;
        let catId = this.options.catId;
        if(LeoCollections.LeoServiceCategory.findOne({_id:catId})){
            try{
                return LeoCollections.LeoServiceCategory.update({_id:catId},{$set:category})
            }
            catch(e){
                throw new Meteor.Error(e)
            }
        }
        else{
            throw new Meteor.Error(404,getLeoMessage("idNotMatching"))
        }

    };
    return LeoServiceCategoryProcessorClass
}();