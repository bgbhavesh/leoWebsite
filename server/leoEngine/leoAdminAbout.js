LeoAboutUsProcessor = function(){
    LeoAboutUsProcessorClass = function(options){
        this.options = _.extend({}, options);
    };
    LeoAboutUsProcessorClass.prototype.insertAboutUsProcessor = function(){
        let adminAboutDetails = this.options.adminAboutDetails;
        LeoIdService.aboutUs(adminAboutDetails);
        console.log(adminAboutDetails)
        return LeoCollections.LeoAboutUs.insert(adminAboutDetails)
    };
    LeoAboutUsProcessorClass.prototype.updateAboutUsProcessor = function(){
        let adminAboutDetails = this.options.adminAboutDetails;
        let aboutId = this.options.aboutId;
        if(LeoCollections.LeoAboutUs.findOne({_id:aboutId})){
            try{
                return LeoCollections.LeoAboutUs.update({_id:aboutId},{$set:adminAboutDetails})
            }
            catch(e){
                throw new Meteor.Error(e)
            }
        }
        else{
            throw new Meteor.Error(404,getLeoMessage("idNotMatching"))
        }

    };
    return LeoAboutUsProcessorClass
}();
