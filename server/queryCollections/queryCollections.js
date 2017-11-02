leoMethodQuery = {};
leoMethodQuery.leoTeamMember = function (selector, sort,fields) {
    return [
        {
            "$match": selector
        },
        {"$sort": sort},
        {'$project':fields},
    ]
}
leoMethodQuery.leoShowCaseSlider = function (selector, sort,fields) {
    return [
        {
            "$match": selector
        },
        {"$sort": sort},
        {'$project':fields},
    ]
}
leoMethodQuery.leoGallery = function (selector, sort,fields) {
    return [
        {
            "$match": selector
        },
        {"$sort": sort},
        {'$project':fields},
    ]
};
leoMethodQuery.leoServiceCategory = function (selector, sort,fields) {
    return [
        {
            "$match": selector
        },
        {"$sort": sort},
        {'$project':fields},
    ]
}
leoMethodQuery.leoService = function (selector, sort,fields) {
    return [
        {
            "$match": selector
        },
        {"$sort": sort},
        {'$project':fields},
    ]
}
