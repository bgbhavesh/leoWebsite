Template.leoClientLeftNav.onCreated(function () {
	let self = this;
    self.autorun(function () {
        self.productCategory = self.subscribe("leoProductCategory",{isActive:true},{});
        self.product = self.subscribe("leoProduct",{isActive:true},{});
        self.serviceCategory = self.subscribe("leoServiceCategory",{isActive:true},{});
        self.service = self.subscribe("leoService",{isActive:true},{});
    }.bind(this))
});
Template.leoClientLeftNav.onRendered(function () {
	let self = this;
	self.autorun(function(){
		if(self.productCategory.ready()){
			console.log("productCategory ready")
		}
		if(self.product.ready()){
			console.log("product ready")
		}
		if(self.serviceCategory.ready()){
			console.log("serviceCategory ready")
		}
		if(self.service.ready()){
			console.log("service ready")
		}		
	}.bind(this))
});
Template.leoClientLeftNav.events({
	"click .menu li.chapter":function(e){
		// e.preventDefault();
		let component = $(e.currentTarget);
	    if ($(component).hasClass('activado')) {
	      $(component).removeClass('activado');
	      $(component).children('ul').slideUp();
	    }else{
	      $('.menu li ul').slideUp();
	      $('.menu li').removeClass('activado');
	      $(component).addClass('activado');
	      $(component).children('ul').slideDown();
	    }
	}
});
Template.leoClientLeftNav.helpers({
	leoProductCategory:function(){
		return LeoCollections.LeoProductCategory.find({isActive:true},{sort:{seq:1}}).fetch();
	},

	leoServiceCategory:function(){
		return LeoCollections.LeoServiceCategory.find({isActive:true},{sort:{seq:1}}).fetch();
	},	
	leoProduct:function(categoryId){
		return LeoCollections.LeoProduct.find({isActive:true ,categoryId:categoryId},{sort:{seq:1}}).fetch();
	},

	leoService:function(categoryId){
		return LeoCollections.LeoService.find({isActive:true,categoryId:categoryId},{sort:{seq:1}}).fetch();
	},	
	

});
