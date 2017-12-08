Meteor.startup(function () {
    if(Meteor.isServer){
        if(!LeoCollections.LeoCompany.findOne()){
            let companyObj = {
                _id:"company",
                tagLine:"Enter Tag line",
                title:"Enter Title",
                description:"Enter description"
            }
            LeoIdService.company(companyObj);
            LeoCollections.LeoCompany.insert(companyObj)
        }
    }
})    