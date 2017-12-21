Template.leoAddress.onCreated(function () {

})
Template.leoAddress.onRendered(function () {
    let self = this;
	Meteor.defer(function(){
        // let utilObj = new LeoUtils();
        // utilObj.applyValidationAndFloatingLabel($('#location'));
        self.autorun(function(){
            if(Session.get("googleapis")){
                setTimeout(initAutocomplete,100);        
            }
        })
        
        
    })
})
Template.leoAddress.events({
	'focus #autocomplete':function(){
        geolocate()
    }
})
Template.leoAddress.helpers({

})
let getAddressFormValues = function(){
    let formData =$("#leoAddress");
    let insertObject = {};
    new LeoUtils().getFormValues(formData,function (data) {
        insertObject.fullAddress = data.fullAddress;
        insertObject.street_number = data.street_number;
        insertObject.route = data.route;
        insertObject.locality = data.locality;
        insertObject.administrative_area_level_1 = data.administrative_area_level_1;
        insertObject.postal_code = data.postal_code;
        insertObject.country = data.country;
        insertObject.latitude = data.latitude;
        insertObject.longitude = data.longitude;
    })
    return insertObject;
}
initAutocomplete = function () {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
    var input = document.getElementById('autocomplete');
    var options = {
        types: ['address'],
        /* componentRestrictions: {country: "IN"}*/
    };
    if (input) {
        autocomplete = new google.maps.places.Autocomplete(input, options);
        google.maps.event.addListener(autocomplete, 'place_changed', fillInAddress);
    }
}
function fillInAddress() {
        // Get the place details from the autocomplete object.
        var place = autocomplete.getPlace();

        for (var component in componentForm) {
          document.getElementById(component).value = '';
          document.getElementById(component).disabled = false;
        }

        // Get each component of the address from the place details
        // and fill the corresponding field on the form.
        for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];
            if (componentForm[addressType]) {
                var val = place.address_components[i][componentForm[addressType]];
                document.getElementById(addressType).value = val;
        }
    }
}
function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
        });
    }
}
var placeSearch, autocomplete;
var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name',
};

function fillInAddress() {
// Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();

    for (var component in componentForm) {
        document.getElementById(component).value = '';
        document.getElementById(component).disabled = false;
    }

    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
            var val = place.address_components[i][componentForm[addressType]];
            document.getElementById(addressType).value = val;
        }
    }
    //place.geometry.location.lat()
    if(place && place.geometry && place.geometry.location){
    	document.getElementById('latitude').value = place.geometry.location.lat();
    	document.getElementById('longitude').value = place.geometry.location.lng();
    }
}
export {
    getAddressFormValues
}