
Meteor.methods({
    insertProduct:function (productDetails) {
        check(productDetails,Object);
        let product = new LeoProductProcessor({
            product:productDetails
        }).insertProductProcessor();
        return product
    },
    updateProduct:function (productId,productDetails) {
        check(productId,String);
        check(productDetails,Object);

        new LeoProductProcessor({
            product:productDetails,
            productId:productId
        }).updateProductProcessor()
    }
});