Template.leoHeader.onCreated(function () {
});
Template.leoHeader.onRendered(function () {
});
Template.leoHeader.events({
});
Template.leoHeader.helpers({
    leoCompany:function(){
        return LeoCollections.LeoCompany.findOne();
    },
    leoLogo:function () {
        let leoCompany = LeoCollections.LeoCompany.findOne();
        if(leoCompany && leoCompany.images && leoCompany.images.length>0){
            return getDefaultUrl(leoCompany.images,{width:154,height:154});
        }
    },
    ceckData:function(){
        var x =10;
        debugger;
        return x;
    }
});
