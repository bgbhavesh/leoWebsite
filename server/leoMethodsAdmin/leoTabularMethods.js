Meteor.methods({
    updateKeyOfIds: function (collectionName, key, ids, value) {
        check(collectionName, String);
        check(key, String);
        check(ids, Array);
        check(value, Match.OneOf(Boolean, String, Object));
        let obj = {};
        obj[key] = value;
        if(collectionName.indexOf('.')>=0)
           return global[collectionName.split(".")[0]][collectionName.split(".")[1]].update({_id: {$in: ids}},{$set:obj},{multi:true});
        else
           return global[collectionName].update({_id: {$in: ids}},{$set:obj},{multi:true});

    }
});