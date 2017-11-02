
Meteor.methods({
    insertServiceCategory:function (categoryDetails) {
        check(categoryDetails,Object);
        new LeoServiceCategoryProcessor({
            category:categoryDetails
        }).insertServiceCategoryProcessor()
    },
    updateServiceCategory:function (catId,categoryDetails) {
        check(catId,String);
        check(categoryDetails,Object);

        new LeoServiceCategoryProcessor({
            category:categoryDetails,
            catId:catId
        }).updateServiceCategoryProcessor()
    }
});