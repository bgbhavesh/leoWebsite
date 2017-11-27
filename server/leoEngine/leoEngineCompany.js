LeoCompanyProcessor = function(){
    LeoCompanyProcessorClass = function(options){
        this.options = _.extend({}, options);
    };
    LeoCompanyProcessorClass.prototype.insertCompanyProcessor = function(){
        let company = this.options.company;
        LeoIdService.company(company);
        return LeoCollections.LeoCompany.insert(company)
    };
    LeoCompanyProcessorClass.prototype.updateCompanyProcessor = function(){
        let company = this.options.company;
        let companyId = this.options.companyId;
        if(LeoCollections.LeoCompany.findOne({_id:companyId})){
            try{
                return LeoCollections.LeoCompany.update({_id:companyId},{$set:company})
            }
            catch(e){
                throw new Meteor.Error(e)
            }
        }
        else{
            throw new Meteor.Error(404,getLeoMessage("idNotMatching"))
        }

    };
    return LeoCompanyProcessorClass
}();