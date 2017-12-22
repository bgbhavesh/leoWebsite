Template.leoContactUsForm.onCreated(function () {
	let self = this;
	self.autorun(function(){
	}.bind(this))
});
Template.leoContactUsForm.onRendered(function () {
	let self = this;
	self.autorun(function(){
	}.bind(this))
	Meteor.defer(function(){
		let utilObj = new LeoUtils();
	    utilObj.applyValidationAndFloatingLabel($('#leoContactUsForm'));
	})
});
Template.leoContactUsForm.events({
	'click #send':function(e){
		e.preventDefault();
		let formData =$("#leoContactUsForm");
        let insertObject = {};
        new LeoUtils().getFormValues(formData,function (data) {
            insertObject.name = data.name;
            insertObject.email = data.email;
            insertObject.number = data.number;
            insertObject.comment = data.comment;
        });
        new LeoUtils().clearFormValues(formData,function(){});
        Meteor.call('insertContactUsForm',insertObject,function(err,data){
            if(data){
                // $('#teamMember')[0].reset();
                // Cloudinary.collection.remove();
                toastr.clear();
                toastr.success("Info sent");
            }
            if(err){
                toastr.clear();
                toastr.error(err.reason);

            }
        })
	}
});
Template.leoContactUsForm.helpers({

});
