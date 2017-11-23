
Meteor.methods({
    insertProduct:function (productDetails) {
        check(productDetails,Object);
        return new LeoProductProcessor({
            product:productDetails
        }).insertProductProcessor();
    },
    updateProduct:function (productId,productDetails) {
        check(productId,String);
        check(productDetails,Object);

        return new LeoProductProcessor({
            product:productDetails,
            productId:productId
        }).updateProductProcessor()
    }
});