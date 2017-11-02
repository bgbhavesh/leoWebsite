
Meteor.methods({
    insertProductCategory:function (categoryDetails) {
        check(categoryDetails,Object);
        new LeoProductCategoryProcessor({
            category:categoryDetails
        }).insertProductCategoryProcessor()
    },
    updateProductCategory:function (catId,categoryDetails) {
        check(catId,String);
        check(categoryDetails,Object);

        new LeoProductCategoryProcessor({
            category:categoryDetails,
            catId:catId
        }).updateProductCategoryProcessor()
    }
});