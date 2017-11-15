LeoTeamMemberProcessor = function(){
    LeoTeamMemberProcessorClass = function(options){
        this.options = _.extend({}, options);
    };
    LeoTeamMemberProcessorClass.prototype.insertTeamMemberProcessor = function(){
        let teamMember = this.options.teamMember;
        LeoIdService.teamMember(teamMember);
        LeoCollections.LeoTeamMember.insert(teamMember)
    };
    LeoTeamMemberProcessorClass.prototype.updateTeamMemberProcessor = function(){
        let teamMember = this.options.teamMember;
        let teamMemberId = this.options.teamMemberId;
        if(LeoCollections.LeoTeamMember.findOne({_id:teamMemberId})){
            try{
                return LeoCollections.LeoTeamMember.update({_id:teamMemberId},{$set:teamMember})
            }
            catch(e){
                throw new Meteor.Error(e)
            }
        }
        else{
            throw new Meteor.Error(404,getLeoMessage("idNotMatching"))
        }

    };
    return LeoTeamMemberProcessorClass
}();