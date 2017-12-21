

Meteor.startup(function () {
    if(Meteor.isClient){
    	Session.set("googleapis",false);
		$.ajax({
            url: `https://maps.googleapis.com/maps/api/js?key=${Meteor.settings.public.GoogleApiKey}&libraries=places`,
            dataType: "script",
            success: function () {
    			Session.set("googleapis",true);
                console.log("GoogleApiKey success")
            }
        });
    };
});