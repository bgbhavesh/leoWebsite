
Meteor.methods({
    insertGallery:function (galleryDetails) {
        check(galleryDetails,Object);
        return new LeoGalleryProcessor({
            gallery:galleryDetails
        }).insertGalleryProcessor()
    },
    updateGallery:function (galleryId,galleryDetails) {
        check(galleryId,String);
        check(galleryDetails,Object);

        return new LeoGalleryProcessor({
            gallery:galleryDetails,
            galleryId:galleryId
        }).updateGalleryProcessor()
    }
});