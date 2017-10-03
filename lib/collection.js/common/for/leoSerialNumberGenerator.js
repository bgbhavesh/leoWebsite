LeoIdService = function(){

    let leoId = LeoCollections.SerialNumbers.findOne({_id:"leoId"});
    if(!leoId){
        LeoCollections.SerialNumbers.insert({_id:"leoId", seq:0});
    }
    let leoProductCategory = LeoCollections.SerialNumbers.findOne({_id:"leoProductCategory"});
    if(!leoProductCategory){
        LeoCollections.SerialNumbers.insert({_id:"leoProductCategory", seq:0});
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
    		obj.leoId = 'leo-'+FormatUtil.leadingZeros(getNextSequence("leoId"), 8);
    	},
    	productCategory:function(obj){
    		obj.leoId = 'leo-PC-'+FormatUtil.leadingZeros(getNextSequence("leoProductCategory"), 8);
    	},
    }
}();
function prefixZero(num, size) {
    var s = "0000000000" + num;
    return s.substr(s.length-size);
}

FormatUtil = {
    leadingZeros: prefixZero
};