Template.leoTeam.onCreated(function () {
	let self = this;
	self.autorun(function(){
		self.leoTeamMember = self.subscribe("leoTeamMember",{isActive:true},{})
	}.bind(this))
});
Template.leoTeam.onRendered(function () {
	let self = this;
	self.autorun(function(){
		if(self.leoTeamMember.ready()){
			console.log("leoTeamMember ready");
		}
	}.bind(this))
});
Template.leoTeam.events({
});
Template.leoTeam.helpers({
	allMembers:function(){
		return LeoCollections.LeoTeamMember.find().fetch({isActive:true});
	},
	style:function(){
		return {
			width:380,
			height:500
		}
	}
});
