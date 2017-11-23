
Meteor.methods({
    insertServiceCategory:function (categoryDetails) {
        check(categoryDetails,Object);
        return new LeoServiceCategoryProcessor({
            category:categoryDetails
        }).insertServiceCategoryProcessor()
    },
    updateServiceCategory:function (catId,categoryDetails) {
        check(catId,String);
        check(categoryDetails,Object);

        return new LeoServiceCategoryProcessor({
            category:categoryDetails,
            catId:catId
        }).updateServiceCategoryProcessor()
    }
});