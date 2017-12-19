Template.leoHeader.onCreated(function () {
    let self = this;
    self.autorun(function () {
        self.leoShowCaseSlider = self.subscribe("leoShowCaseSlider",{isActive:true},{});
    }.bind(this))
});
Template.leoHeader.onRendered(function () {
    let self = this;
    self.autorun(function () {
        if(self.leoShowCaseSlider.ready()){
            console.log("leoShowCaseSlider ready");
            setTimeout(function(){attachSwiper($("#header .swiper-container"))},100);
        }
    }.bind(this))
});
Template.leoHeader.events({
});
Template.leoHeader.helpers({
    leoSwiperImages:function(){
        let slides =  LeoCollections.LeoShowCaseSlider.find({isActive:true}).fetch();
        let images = [];
        let width = $("#header .swiper-container").width();
        let style = {radius: 8,gravity: "center",height: 360,width:width, crop: "pad"}
        _.each(slides,function(slide){
            images.push(getDefaultUrl(slide.images,style));
        });
        console.log(images);
        
        return images
    },
    leoCompany:function(){
        return LeoCollections.LeoCompany.findOne();
    },
    leoLogo:function () {
        let leoCompany = LeoCollections.LeoCompany.findOne();
        if(leoCompany && leoCompany.images && leoCompany.images.length>0){
            return getDefaultUrl(leoCompany.images,{width:154,height:154});
        }
    },
    ceckData:function(){
        var x =10;
        debugger;
        return x;
    }
});

var attachSwiper = function(container){
    var swiper = new Swiper(container, {
        effect: 'cube',
        loop:true,
        autoplay: 2000,
        speed: 1000,
        grabCursor: true, 
        preloadImages: true,
        preloadImages: true,
        // lazy: true,
        cubeEffect: {
        shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
}