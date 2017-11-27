
Meteor.methods({
    insertCompany:function (companyDetails) {
        check(companyDetails,Object);
        return new LeoCompanyProcessor({
            company:companyDetails
        }).insertCompanyProcessor()
    },
    updateCompany:function (companyId,companyDetails) {
        check(companyId,String);
        check(companyDetails,Object);

        return new LeoCompanyProcessor({
            company:companyDetails,
            companyId:companyId
        }).updateCompanyProcessor()
    }
});