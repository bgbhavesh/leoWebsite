leoMethodQuery = {};
leoMethodQuery.leoProductCategory= function (selector, sort,fields) {
    return [
        {
            "$match": selector
        },
        {"$sort": sort},
        {'$project':fields},
    ]
};
leoMethodQuery.leoAddress= function (selector, sort,fields) {
    return [
        {
            "$match": selector
        },
        {"$sort": sort},
        {'$project':fields},
    ]
};
leoMethodQuery.leoModule= function (selector, sort,fields) {
    return [
        {
            "$match": selector
        },
        {"$sort": sort},
        {'$project':fields},
    ]
};
leoMethodQuery.leoProduct = function (selector, sort,fields) {
    return [
        {
            "$match": selector
        },
        {"$sort": sort},
        {'$project':fields},
    ]
};
leoMethodQuery.leoNewsFeed = function (selector, sort,fields) {
    return [
        {
            "$match": selector
        },
        {"$sort": sort},
        {'$project':fields},
    ]
};
leoMethodQuery.leoTeamMember = function (selector, sort,fields) {
    return [
        {
            "$match": selector
        },
        {"$sort": sort},
        {'$project':fields},
    ]
}
leoMethodQuery.leoUsers = function (selector, sort,fields) {
    return [
        {
            "$match": selector
        },
        // {
        //     '$addFields': {
        //         'email': {
        //             $reduce: {
        //                 input: '$emails',
        //                 initialValue: '',
        //                 in: {$concat: ['$$value' ,"$$this.address" , " , "]}
        //             }
        //         }
        //     }
        // },
        // {
        //     '$addFields': {
        //         'verified': {
        //             $reduce: {
        //                 input: '$emails',
        //                 initialValue: '',
        //                 in: {$concat: ['$$value' ,"$$this.verified" , "  "]}
        //             }
        //         }
        //     }
        // },
        {"$sort": sort},
        // {'$project':fields},
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
