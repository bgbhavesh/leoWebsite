Template.leoLocation.onCreated(function () {
	let self = this;
	self.autorun(function(){
		self.leoLocation = self.subscribe("leoLocation",{isActive:true},{})
	}.bind(this))
});
Template.leoLocation.onRendered(function () {
	let self = this;
	self.autorun(function(){
		if(self.leoLocation.ready()){
			console.log("leoLocation ready");
		}
	}.bind(this))
});
Template.leoLocation.events({
});
Template.leoLocation.helpers({
	allLocation:function(){
		return LeoCollections.LeoLocation.find().fetch();
	},
	style:function(){
		return {
			width:380,
			height:500
		}
	}
});
