LeoIdService = function(){
    if(Meteor.isServer){
        let leoId = LeoCollections.SerialNumbers.findOne({_id:"leoId"});
        if(!leoId){
            LeoCollections.SerialNumbers.insert({_id:"leoId", seq:0});
        }
        let leoProductCategory = LeoCollections.SerialNumbers.findOne({_id:"productCategoryId"});
        if(!leoProductCategory){
            LeoCollections.SerialNumbers.insert({_id:"productCategoryId", seq:0});
        }
        let prodId = LeoCollections.SerialNumbers.findOne({_id:"prodId"});
        if(!prodId){
            LeoCollections.SerialNumbers.insert({_id:"prodId", seq:0});
        }
        let leoServiceCategory = LeoCollections.SerialNumbers.findOne({_id:"serviceCategoryId"});
        if(!leoServiceCategory){
            LeoCollections.SerialNumbers.insert({_id:"serviceCategoryId", seq:0});
        }
        let serviceId = LeoCollections.SerialNumbers.findOne({_id:"serviceId"});
        if(!serviceId){
            LeoCollections.SerialNumbers.insert({_id:"serviceId", seq:0});
        }
        let galleryId = LeoCollections.SerialNumbers.findOne({_id:"galleryId"});
        if(!galleryId){
            LeoCollections.SerialNumbers.insert({_id:"galleryId", seq:0});
        }
        let showCaseId = LeoCollections.SerialNumbers.findOne({_id:"showCaseId"});
        if(!showCaseId){
            LeoCollections.SerialNumbers.insert({_id:"showCaseId", seq:0});
        }
        function getNextSequence(name) {
            //if(Meteor.isServer){
            let ret = LeoCollections.SerialNumbers.findOne({ _id: name });
            ret.seq = ret.seq + 1;
            LeoCollections.SerialNumbers.update({ _id: name },{$set:{seq:ret.seq}});
            return ret.seq;
            //}
        }


        return {
            leoId:function(obj){
                obj.leoId = 'LEO-'+FormatUtil.leadingZeros(getNextSequence("leoId"), 8);
            },
            productCategory:function(obj){
                obj.productCategoryId = 'LEO-PC-'+FormatUtil.leadingZeros(getNextSequence("productCategoryId"), 8);
            },
            product:function(obj){
                obj.productId = 'LEO-PR-'+FormatUtil.leadingZeros(getNextSequence("prodId"), 8);
            },
            gallery:function(obj){
                obj.galleryId = 'LEO-GE-'+FormatUtil.leadingZeros(getNextSequence("galleryId"), 8);
            },
            showCase:function(obj){
                obj.showCaseId = 'LEO-SC-'+FormatUtil.leadingZeros(getNextSequence("showCaseId"), 8);
            },
            serviceCategory:function(obj){
                obj.serviceCategoryId = 'LEO-SC-'+FormatUtil.leadingZeros(getNextSequence("serviceCategoryId"), 8);
            },
            service:function(obj){
                obj.serviceId = 'LEO-SE-'+FormatUtil.leadingZeros(getNextSequence("serviceId"), 8);
            },

        }
    }

}();
function prefixZero(num, size) {
    var s = "0000000000" + num;
    return s.substr(s.length-size);
}

FormatUtil = {
    leadingZeros: prefixZero
};