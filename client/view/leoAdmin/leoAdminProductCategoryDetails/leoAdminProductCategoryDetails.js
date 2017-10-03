// applyValidationAndFloatingLabel
Template.leoAdminProductCategoryDetails.onCreated(function () {

})
Template.leoAdminProductCategoryDetails.onRendered(function () {
    var utilObj = new LeoUtils();
    utilObj.applyValidationAndFloatingLabel($('#productCategory'));
})
Template.leoAdminProductCategoryDetails.events({

})
Template.leoAdminProductCategoryDetails.helpers({
    productCategorySelector:function(){
        return {
            isActive:true
        }

    }
})