Template.leoProCat.onCreated(function () {
	let self = this;
	self.autorun(function(){
		let catId = (Router.current().params && Router.current().params.catId)
		if(catId){			
			self.LeoProductCategory = self.subscribe("leoProductCategoryProduct",{title:catId},{})
		}
	}.bind(this))
});
Template.leoProCat.onRendered(function () {
	let self = this;
	self.autorun(function(){

	}.bind(this))
});
Template.leoProCat.events({
});
Template.leoProCat.helpers({
	productCat:function(){
		let title = (Router.current().params && Router.current().params.catId)
		if(title){		
			return LeoCollections.LeoProductCategory.findOne({title:title});
		}
		return {}
	},	
	relatedProductCat:function(){
		let title = (Router.current().params && Router.current().params.catId)?Router.current().params.catId:null;
		if(title){		
			let category = LeoCollections.LeoProductCategory.findOne({title:title});
			if(category && category.tags)
			return LeoCollections.LeoProductCategory.find({isActive:true ,tags:{$in:category.tags}},{sort:{seq:1}});
		}
		return []
	},	
	product:function(){
		let title = (Router.current().params && Router.current().params.catId)?Router.current().params.catId:null;
		if(title){		
			let category = LeoCollections.LeoProductCategory.findOne({title:title});
			if(category && category._id)
			return LeoCollections.LeoProduct.find({isActive:true ,categoryId:category._id},{sort:{seq:1}}).fetch()
		}
		return []
	},
	style:function(){
		return {
			width:380,
			height:500
		}
	}
});
