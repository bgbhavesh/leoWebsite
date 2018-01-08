Template.aboutUs.onCreated(function () {
	let self = this;
	self.autorun(function(){
	}.bind(this))
});
Template.aboutUs.onRendered(function () {
	let self = this;
	self.autorun(function(){
		
	}.bind(this))
});
Template.aboutUs.events({
});
Template.aboutUs.helpers({
	allAboutUs:function(){
		return LeoCollections.LeoAboutUs.find({},{sort:{seq:1}}).fetch();
	},
	style:function(){
		return {
			width:380,
			height:500
		}
	}
});
