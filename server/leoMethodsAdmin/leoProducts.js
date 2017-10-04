
Meteor.methods({
    insertProductCategory:function (category) {
        check(category,Object);
        new LeoProductCategoryProcessor({
            category:category
        }).insertProductCategoryProcessor()
    }
});