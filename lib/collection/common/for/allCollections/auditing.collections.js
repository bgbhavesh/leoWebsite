
let LeoAuditSchema = new SimpleSchema({
    createdAt: {
        type: Date,
        autoValue: function () {
            if(this.isInsert || this.isUpsert){
                return new Date();
            }
        },
        optional:true
    },
    updatedAt:{
        type: Date,
        optional: true,
        autoValue: function () {
            if(this.isUpdate){
                return new Date();
            }
        }
    },
    updatedBy:{/// doubt, if there is no username? so, I used user Id
        type: String,
        optional: true
    },
    createdBy:{
        type: String,
        optional: true
    }
});
LeoSchemas.LeoAuditSchema = LeoAuditSchema;