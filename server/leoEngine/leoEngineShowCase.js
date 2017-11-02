LeoShowCaseProcessor = function(){
    LeoShowCaseProcessorClass = function(options){
        this.options = _.extend({}, options);
    };
    LeoShowCaseProcessorClass.prototype.insertShowCaseProcessor = function(){
        let showCaseSliderDetails = this.options.showCaseSliderDetails;
        LeoIdService.showCase(showCaseSliderDetails);
        LeoCollections.LeoShowCaseSlider.insert(showCaseSliderDetails)
    };
    LeoShowCaseProcessorClass.prototype.updateShowCaseProcessor = function(){
        let showCaseSliderDetails = this.options.showCaseSliderDetails;
        let showCaseId = this.options.showCaseId;
        if(LeoCollections.LeoShowCaseSlider.findOne({_id:showCaseId})){
            try{
                return LeoCollections.LeoShowCaseSlider.update({_id:showCaseId},{$set:showCaseSliderDetails})
            }
            catch(e){
                throw new Meteor.Error(e)
            }
        }
        else{
            throw new Meteor.Error(404,getMessage("idNotMatching"))
        }

    };
    return LeoShowCaseProcessorClass
}();