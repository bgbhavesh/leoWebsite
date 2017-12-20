leoMethodQuery = {};

leoMethodQuery.basicCoreQuery= function (selector, sort,fields) {
    return [
        {
            "$match": selector
        },
        {"$sort": sort},
        {'$project':fields},
    ]
};
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
