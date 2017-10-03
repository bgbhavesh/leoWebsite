leoMethodQuery = {}
leoMethodQuery.leoProductCategory = function (selector, sort,fields) {
    return [
        {
            "$match": selector
        },
        {"$sort": sort},
        {'$project':fields},
    ]
}
