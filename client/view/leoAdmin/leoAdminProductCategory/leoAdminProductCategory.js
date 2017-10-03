Template.leoAdminProductCategory.onCreated(function () {

})
Template.leoAdminProductCategory.onRendered(function () {

})
Template.leoAdminProductCategory.events({
    "click [data-action='add']":function(e){
        e.preventDefault();
        Router.go("leoAdminProductCategoryDetails")
    }
})
Template.leoAdminProductCategory.helpers({
    productCategorySelector:function(){
        return {
            isActive:true
        }

    }
})