Template.leoSerCat.onCreated(function () {
	let self = this;
	self.autorun(function(){
		let catId = (Router.current().params && Router.current().params.catId)
		if(catId){			
			self.LeoServiceCategory = self.subscribe("leoServiceCategoryService",{title:catId},{})
		}
	}.bind(this))
});
Template.leoSerCat.onRendered(function () {
	let self = this;
	self.autorun(function(){

	}.bind(this))
});
Template.leoSerCat.events({
});
Template.leoSerCat.helpers({
	serviceCat:function(){
		let title = (Router.current().params && Router.current().params.catId)
		if(title){		
			return LeoCollections.LeoServiceCategory.findOne({title:title});
		}
		return {}
	},	
	relatedServiceCat:function(){
		let title = (Router.current().params && Router.current().params.catId)?Router.current().params.catId:null;
		if(title){		
			let category = LeoCollections.LeoServiceCategory.findOne({title:title});
			if(category && category.tags)
			return LeoCollections.LeoServiceCategory.find({isActive:true ,tags:{$in:category.tags}},{sort:{seq:1}});
		}
		return []
	},	
	service:function(){
		let title = (Router.current().params && Router.current().params.catId)?Router.current().params.catId:null;
		if(title){		
			let category = LeoCollections.LeoServiceCategory.findOne({title:title});
			if(category && category._id)
			return LeoCollections.LeoService.find({isActive:true ,categoryId:category._id},{sort:{seq:1}}).fetch()
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
