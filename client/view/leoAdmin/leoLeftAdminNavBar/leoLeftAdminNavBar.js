
Template.leoLeftAdminNavBar.helpers({
    Brand:function () {
        let company  = LeoCollections.LeoCompany.findOne({});
        if(company){
            return company.title||"Brand";
        }
        return 'Brand';
    }
});