let LeoImageSchema = new SimpleSchema({
    "isDefault": {
        type: Boolean,
        defaultValue: false,
        optional: true
    },
    "isActive": {
        type: Boolean,
        defaultValue: true,
        optional: true
    },
    "seq": {
        type: Number,
        defaultValue: 1,
        optional: true
    },
    "resource_type":{
        type:String,
        defaultValue:"image",
        optional: true
    },
    "response": {
        type: Object,
        defaultValue: '',
        optional: true
    },
    "response.secure_url": {
        type: String,
        defaultValue: '',
        optional: true
    },
    "response.public_id": {
        type: String,
        defaultValue: '',
        optional: true
    }
})
LeoSchemas.LeoImageSchema = LeoImageSchema;