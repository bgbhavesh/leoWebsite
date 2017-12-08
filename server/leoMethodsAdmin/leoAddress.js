
Meteor.methods({
    insertAddress:function (addressDetails) {
        check(addressDetails,Object);
        return new LeoAddressProcessor({
            address:addressDetails
        }).insertAddressProcessor()
    },
    updateAddress:function (addressId,addressDetails) {
        check(addressId,String);
        check(addressDetails,Object);

        return new LeoAddressProcessor({
            address:addressDetails,
            addressId:addressId
        }).updateAddressProcessor()
    }
});