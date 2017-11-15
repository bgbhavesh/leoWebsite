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
        toastr.error(getLeoMessage("selectOnlyOne"));
    }else{
        toastr.clear();
        toastr.error(getLeoMessage("selectAtLeastOneRow"));
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
        toastr.error(getLeoMessage("selectAtLeastOneRow"));
    }
}
let updateTabularCollection = function (ids,value,key,collectionName) {
    if(ids.length>0){
        if(confirm(getLeoMessage("areYouSure"))){
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