Template.leoImageUpload.onCreated(function(){});
Template.leoImageUpload.onRendered(function(){});
Template.leoImageUpload.helpers({
    imagesUploadedInLocal:function(){
        return Cloudinary.collection.find({},{sort:{seq:1}}).fetch();
    },
    divWidth:function () {
        return Cloudinary.collection.find().count()*155;
    },
    imageStyle:function () {
        return {width:150, crop: "pad",height:100,format:"png"};
    }
});
Template.leoImageUpload.events({
    'change #leoImageUpload':function () {
        var file = $('#leoImageUpload')[0].files[0];
        // console.log(file);
        if(file && file!==""){
            Cloudinary.upload(file,{}, function(err, res) {
                console.log("Upload Error: " + err);
                console.log("Upload Result: " + res);
            })
        }
        $('#leoImageUpload').val('')
    },
    'click .removeUploadedImage':function () {
        Cloudinary.collection.remove({_id:this._id})
    },
    "click .leoImageUpload .isDefault":function () {
        Cloudinary.collection.update({},{$set:{isDefault:false}},{multi:true});
        Cloudinary.collection.update({_id:this._id},{$set:{isDefault:true}})
    },
    "click .leoImageUpload .isActive":function () {
        Cloudinary.collection.update({_id:this._id},{$set:{isActive:true}})
    },
    "change .leoImageUpload .seq":function (e) {
        var seq= $(e.currentTarget).val()
        seq = parseInt(seq);
        Cloudinary.collection.update({_id:this._id},{$set:{seq:seq}})
    },
});