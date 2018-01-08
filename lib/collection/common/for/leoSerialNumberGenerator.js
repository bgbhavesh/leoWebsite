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
        let addressId = LeoCollections.SerialNumbers.findOne({_id:"addressId"});
        if(!addressId){
            LeoCollections.SerialNumbers.insert({_id:"addressId", seq:0});
        }
        let showCaseId = LeoCollections.SerialNumbers.findOne({_id:"showCaseId"});
        if(!showCaseId){
            LeoCollections.SerialNumbers.insert({_id:"showCaseId", seq:0});
        }
        let teamMemberId = LeoCollections.SerialNumbers.findOne({_id:"teamMemberId"});
        if(!teamMemberId){
            LeoCollections.SerialNumbers.insert({_id:"teamMemberId", seq:0});
        }
        let moduleId = LeoCollections.SerialNumbers.findOne({_id:"moduleId"});
        if(!moduleId){
            LeoCollections.SerialNumbers.insert({_id:"moduleId", seq:0});
        }
        let locationId = LeoCollections.SerialNumbers.findOne({_id:"locationId"});
        if(!locationId){
            LeoCollections.SerialNumbers.insert({_id:"locationId", seq:0});
        }
        let companyId = LeoCollections.SerialNumbers.findOne({_id:"companyId"});
        if(!companyId){
            LeoCollections.SerialNumbers.insert({_id:"companyId", seq:0});
        }
        let aboutUsId = LeoCollections.SerialNumbers.findOne({_id:"aboutUsId"});
        if(!aboutUsId){
            LeoCollections.SerialNumbers.insert({_id:"aboutUsId", seq:0});
        }

        let contactUsFormId = LeoCollections.SerialNumbers.findOne({_id:"contactUsFormId"});
        if(!contactUsFormId){
            LeoCollections.SerialNumbers.insert({_id:"contactUsFormId", seq:0});
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
            teamMember:function(obj){
                obj.teamMemberId = 'LEO-TM-'+FormatUtil.leadingZeros(getNextSequence("teamMemberId"), 8);
            },
            module:function(obj){
                obj.moduleId = 'LEO-MO-'+FormatUtil.leadingZeros(getNextSequence("moduleId"), 8);
            },
            company:function(obj){
                obj.teamMemberId = 'LEO-CO-'+FormatUtil.leadingZeros(getNextSequence("companyId"), 8);
            },
            location:function(obj){
                obj.locationId = 'LEO-LO-'+FormatUtil.leadingZeros(getNextSequence("locationId"), 8);
            },
            aboutUs:function(obj){
                obj.aboutUsId = 'LEO-AU-'+FormatUtil.leadingZeros(getNextSequence("aboutUsId"), 8);
            },
            contactUsForm:function(obj){
                obj.contactUsFormId = 'LEO-CF-'+FormatUtil.leadingZeros(getNextSequence("contactUsFormId"), 8);
            },

        }
    }

}();
function prefixZero(num, size) {
    let s = "0000000000" + num;
    return s.substr(s.length-size);
}

FormatUtil = {
    leadingZeros: prefixZero
};