LeoGalleryProcessor = function(){
    LeoGalleryProcessorClass = function(options){
        this.options = _.extend({}, options);
    };
    LeoGalleryProcessorClass.prototype.insertGalleryProcessor = function(){
        let gallery = this.options.gallery;
        LeoIdService.gallery(gallery);
        LeoCollections.LeoGallery.insert(gallery)
    };
    LeoGalleryProcessorClass.prototype.updateGalleryProcessor = function(){
        let gallery = this.options.gallery;
        let galleryId = this.options.galleryId;
        if(LeoCollections.LeoGallery.findOne({_id:galleryId})){
            try{
                return LeoCollections.LeoGallery.update({_id:galleryId},{$set:gallery})
            }
            catch(e){
                throw new Meteor.Error(e)
            }
        }
        else{
            throw new Meteor.Error(404,getMessage("idNotMatching"))
        }

    };
    return LeoGalleryProcessorClass
}();