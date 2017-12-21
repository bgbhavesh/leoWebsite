Template.leoMap.onCreated(function () {
	let self = this;
	self.mapSize = new ReactiveVar();
	self.mapSize.set(500);//
	self.markerDetails = new ReactiveVar();
	self.mapSize.set([]);//
	$(window).resize(function(){
	    let mapSize = $(".leoMapFrame").width()-10;
		self.mapSize.set(mapSize);//
	});
	self.autorun(function(){
		self.leoTeamMember = self.subscribe("leoTeamMember",{
			isActive:true,
			address:{$exists:true},
			"address.latitude":{$exists:true},
			"address.longitude":{$exists:true}
		},{})
		self.leoLocation = self.subscribe("leoLocation",{
			isActive:true,
			address:{$exists:true},
			"address.latitude":{$exists:true},
			"address.longitude":{$exists:true}
		},{})
	}.bind(this))
});
Template.leoMap.onRendered(function () {
	let self = this;
    let mapSize = $(".leoMapFrame").width()-10;
	self.mapSize.set(mapSize);//
	
	Meteor.defer(function(){
		
		self.autorun(function(){
			let mapSize = self.mapSize.get();
			console.log(mapSize)
			if(self.leoTeamMember.ready() && self.leoLocation.ready()){
				console.log("leoTeamMember ready");
				console.log("leoLocation ready");
				getMarkerData(self)
			}
		}.bind(this))	
		self.autorun(function(){
			let mapSize = self.mapSize.get();
			console.log(mapSize)
			let markerDetails = self.markerDetails.get()
			if(markerDetails && markerDetails.length>0 && Session.get("googleapis")){
				console.log("leoTeamMember ready");
				console.log("leoLocation ready");
				// google.maps.event.addDomListener(window, 'load', initialize);
				 initialize(markerDetails)
			}
		}.bind(this))	
	})
	
});
Template.leoMap.events({
});
Template.leoMap.helpers({
	mapSize: function () {
        return Template.instance().mapSize.get() || 500
    },
	allMembers:function(){
		return LeoCollections.LeoTeamMember.find().fetch();
	},
	style:function(){
		return {
			width:380,
			height:500
		}
	}
});
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

var initialize = function (markerDetails) {
	var bangalore = markerDetails[0];
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 9,
	  center: bangalore
	});

	// This event listener calls addMarker() when the map is clicked.
	google.maps.event.addListener(map, 'click', function(event) {
	  addMarker(event.latLng, map);
	});
	_.each(markerDetails,function(marker){
		addMarker(marker, map);
	})
	// Add a marker at the center of the map.
	
}

// Adds a marker to the map.
function addMarker(location, map) {
// Add the marker at the clicked location, and add the next-available label
// from the array of alphabetical characters.
	var marker = new google.maps.Marker({
	  position: { lat: parseFloat(location.lat), lng: parseFloat(location.lng) },
	  label: location.label,//labels[labelIndex++ % labels.length],
	  map: map
	});
}
function getMarkerData(self){
	let markerDetails = [];
	let member = LeoCollections.LeoTeamMember.find().fetch();
	let location = LeoCollections.LeoLocation.find().fetch();
	_.each(member,function(d){
		let obj = {};
		obj.label = d.name;
		obj.lat = (d.address && d.address.latitude)?d.address.latitude:false;
		obj.lng = (d.address && d.address.longitude)?d.address.longitude:false;
		if(obj.lat && obj.lng){
			markerDetails.push(obj)
		}
	})
	_.each(location,function(d){
		let obj = {};
		obj.label = d.title;
		obj.lat = (d.address && d.address.latitude)?d.address.latitude:false;
		obj.lng = (d.address && d.address.longitude)?d.address.longitude:false;
		if(obj.lat && obj.lng){
			markerDetails.push(obj)
		}
	})	
	self.markerDetails.set(markerDetails);
}