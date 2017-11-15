LeoModuleProcessor = function(){
    LeoModuleProcessorClass = function(options){
        this.options = _.extend({}, options);
    };
    LeoModuleProcessorClass.prototype.insertModuleProcessor = function(){
        let module = this.options.module;
        LeoIdService.module(module);

        console.log(module);
        return LeoCollections.LeoModule.insert(module)
    };
    LeoModuleProcessorClass.prototype.updateModuleProcessor = function(){
        let module = this.options.module;
        let moduleId = this.options.moduleId;
        if(LeoCollections.LeoModule.findOne({_id:moduleId})){
            try{
                return LeoCollections.LeoModule.update({_id:moduleId},{$set:module})
            }
            catch(e){
                throw new Meteor.Error(e)
            }
        }
        else{
            throw new Meteor.Error(404,getLeoMessage("idNotMatching"))
        }

    };
    return LeoModuleProcessorClass
}();