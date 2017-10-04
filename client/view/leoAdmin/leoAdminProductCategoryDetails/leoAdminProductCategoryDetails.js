// applyValidationAndFloatingLabel
Template.leoAdminProductCategoryDetails.onCreated(function () {

})
Template.leoAdminProductCategoryDetails.onRendered(function () {
    var utilObj = new LeoUtils();
    utilObj.applyValidationAndFloatingLabel($('#productCategory'));
})
Template.leoAdminProductCategoryDetails.events({
    "click #addCategory":function(){
        var formData =$("#productCategory");
        var insertObject = {};
        new LeoUtils().getFormValues(formData,function (data) {
            insertObject.name = data.name;
            insertObject.tags = data.tags.split(",");
            insertObject.title = data.title;
            insertObject.description = data.description;
        });
        Meteor.call('insertProductCategory',insertObject,function(data,err){

        })
    },
    "click #reset":function(){
        $('#productCategory')[0].reset();
    }
})
Template.leoAdminProductCategoryDetails.helpers({
    productCategorySelector:function(){
        return {
            isActive:true
        }

    }
})