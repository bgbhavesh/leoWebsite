
Meteor.methods({
    insertGallery:function (galleryDetails) {
        check(galleryDetails,Object);
        new LeoGalleryProcessor({
            gallery:galleryDetails
        }).insertGalleryProcessor()
    },
    updateGallery:function (galleryId,galleryDetails) {
        check(galleryId,String);
        check(galleryDetails,Object);

        new LeoGalleryProcessor({
            gallery:galleryDetails,
            galleryId:galleryId
        }).updateGalleryProcessor()
    }
});