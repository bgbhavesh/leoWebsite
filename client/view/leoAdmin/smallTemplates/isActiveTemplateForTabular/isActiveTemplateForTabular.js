let singleSelectedId = function () {
    let ids=[];
    $(":checked").each(function () {
        ids.push($(this).attr("id"));
    });
    ids = _.difference(ids,[undefined]);
    if(ids.length===1){
        return ids[0]
    }else if(ids.length > 1){
        toastr.clear();
        toastr.error(getMessage("selectOnlyOne"));
    }else{
        toastr.clear();
        toastr.error(getMessage("selectAtLeastOneRow"));
    }
    return false;
}
let checkIdsCollectionUpdate = function (value,key,collectionName) {
    let ids=[];
    $(":checked").each(function () {
        ids.push($(this).attr("id"));
    });
    ids = _.difference(ids,[undefined]);
    if(ids.length>0){
        updateTabularCollection(ids,value,key,collectionName)
    }else{
        toastr.clear();
        toastr.error(getMessage("selectAtLeastOneRow"));
    }
}
let updateTabularCollection = function (ids,value,key,collectionName) {
    if(ids.length>0){
        if(confirm(getMessage("areYouSure"))){
            Meteor.call("updateKeyOfIds",collectionName,key,ids,value,function (err,data) {
                if(err){
                    console.log(err)
                }
                if(data){
                    console.log(data,'data')
                    Session.set("methodTabularCallReceivedTime",new Date())
                }
            })
        }
    }
}
export {
    checkIdsCollectionUpdate,
    updateTabularCollection,
    singleSelectedId
}