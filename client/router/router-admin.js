import {
    adminContext
} from './routerConfig.js'
// Meteor.startup(function () {})
Router.map(function () {
    this.route('leoAdminModule',{
        path:adminContext+'/leoAdminModule',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){

        },
        data:function(){
            let data = {};
            data.routerTitle='Modules';
            return data;
        }
    });//leoAdminCompanyDetails
    this.route('leoAdminModuleDetails',{
        path:adminContext+'/leoAdminModuleDetails/:moduleId?',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){
            let subArray=[];
            if(this.params.moduleId){
                subArray.push(Meteor.subscribe("singleDocWithId","LeoCollections.LeoModule", this.params.moduleId,{}));
            }
            return subArray;
        },
        data:function(){
            let data = {};
            data.routerTitle='Module';
            data.Module=LeoCollections.LeoModule.findOne({_id:this.params.moduleId});
            return data
        }
    });

    this.route('leoAdminLocation',{
        path:adminContext+'/leoAdminLocation',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){

        },
        data:function(){
            let data = {};
            data.routerTitle='Location';
            return data;
        }
    });//leoAdminCompanyDetails
    this.route('leoAdminLocationsDetails',{
        path:adminContext+'/leoAdminLocationsDetails/:locationId?',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){
            let subArray=[];
            if(this.params.locationId){
                subArray.push(Meteor.subscribe("singleDocWithId","LeoCollections.LeoLocation", this.params.locationId,{}));
            }
            return subArray;
        },
        data:function(){
            let data = {};
            data.routerTitle='Location';
            data.Location=LeoCollections.LeoLocation.findOne({_id:this.params.locationId});
            return data
        }
    });
    this.route('leoAdminCompanyDetails',{
        path:adminContext+'/leoAdminCompanyDetails/:companyId?',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){
            let subArray=[];
            if(this.params.companyId){
                subArray.push(Meteor.subscribe("singleDocWithId","LeoCollections.LeoCompany", this.params.companyId,{}));
            }
            return subArray;
        },
        data:function(){
            let data = {};
            data.routerTitle='Company-Details';
            data.Company=LeoCollections.LeoCompany.findOne({_id:this.params.companyId});
            return data
        },
        onAfterAction:function () {
            if(!this.params.companyId){
                let company = LeoCollections.LeoCompany.findOne();
                if( company && company._id){
                    Router.go("leoAdminCompanyDetails",{companyId:company._id});
                }
            }
            // this.next();
        }
    });
    this.route('leoAdminShowCaseSlider',{
        path:adminContext+'/leoAdminShowCaseSlider',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){

        },
        data:function(){
            let data = {};
            data.routerTitle='Show-Case';
            return data;
        }
    });
    this.route('leoAdminShowCaseSliderDetails',{
        path:adminContext+'/leoAdminShowCaseSliderDetails/:showCaseId?',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){
            let subArray=[];
            if(this.params.showCaseId){
                subArray.push(Meteor.subscribe("singleDocWithId","LeoCollections.LeoShowCaseSlider", this.params.showCaseId,{}));
            }
            return subArray;
        },
        data:function(){
            let data = {};
            data.routerTitle='Show-Case';
            data.showCase=LeoCollections.LeoShowCaseSlider.findOne({_id:this.params.showCaseId});
            return data
        }
    });
    this.route('leoAdminNewsFeed',{
        path:adminContext+'/leoAdminNewsFeed',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){

        },
        data:function(){
            let data = {};
            data.routerTitle='News-Feed';
            return data;
        }
    });
    this.route('leoAdminNewsFeedDetails',{
        path:adminContext+'/leoAdminNewsFeedDetails/:newsFeedId?',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){
            let subArray=[];
            if(this.params.newsFeedId){
                subArray.push(Meteor.subscribe("singleDocWithId","LeoCollections.LeoNewsFeed", this.params.newsFeedId,{}));
            }
            return subArray;
        },
        data:function(){
            let data = {};
            data.routerTitle='News-Feed';
            data.NewsFeed=LeoCollections.LeoNewsFeed.findOne({_id:this.params.newsFeedId});
            return data
        }
    });
    this.route('leoAdminGallery',{
        path:adminContext+'/leoAdminGallery',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){

        },
        data:function(){
            let data = {};
            data.routerTitle='Gallery';
            return data;
        }
    });
    this.route('leoAdminGalleryDetails',{
        path:adminContext+'/leoAdminGalleryDetails/:galleryId?',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){
            let subArray=[];
            if(this.params.galleryId){
                subArray.push(Meteor.subscribe("singleDocWithId","LeoCollections.LeoGallery", this.params.galleryId,{}));
            }
            return subArray;
        },
        data:function(){
            let data = {};
            data.routerTitle='Gallery';
            data.Gallery=LeoCollections.LeoGallery.findOne({_id:this.params.galleryId});
            return data
        }
    });

    this.route('leoAdminAddress',{
        path:adminContext+'/leoAdminAddress',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){

        },
        data:function(){
            let data = {};
            data.routerTitle='Address';
            return data;
        }
    });
    this.route('leoAdminAddressDetails',{
        path:adminContext+'/leoAdminAddressDetails/:addressId?',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){
            let subArray=[];
            if(this.params.productId){
                subArray.push(Meteor.subscribe("singleDocWithId",'LeoCollections.LeoAddress', this.params.productId,{}));
            }
            return subArray;
        },
        data:function(){
            let data = {}
            data.routerTitle='Address';
            data.Address=LeoCollections.LeoAddress.findOne({_id:this.params.addressId});
            return data
        }
    });
    this.route('leoAdminProduct',{
        path:adminContext+'/leoAdminProduct',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){

        },
        data:function(){
            let data = {};
            data.routerTitle='Products';
            return data;
        }
    });
    this.route('leoAdminProductDetails',{
        path:adminContext+'/leoAdminProductDetails/:productId?',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){
            let subArray=[];
            if(this.params.productId){
                subArray.push(Meteor.subscribe("singleDocWithId",'LeoCollections.LeoProduct', this.params.productId,{}));
            }
            return subArray;
        },
        data:function(){
            let data = {}
            data.routerTitle='Product';
            data.product=LeoCollections.LeoProduct.findOne({_id:this.params.productId});
            return data
        }
    });
    this.route('leoAdminLeoUsers',{
        path:adminContext+'/leoAdminLeoUsers',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){

        },
        data:function(){
            let data = {};
            data.routerTitle='Leo User';
            return data;
        }
    });
    this.route('leoAdminTeamMember',{
        path:adminContext+'/leoAdminTeamMember',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){

        },
        data:function(){
            let data = {};
            data.routerTitle='Team Members';
            return data;
        }
    });
    this.route('leoAdminTeamMemberDetails',{
        path:adminContext+'/leoAdminTeamMemberDetails/:memberId?',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){
            let subArray=[];
            if(this.params.memberId){
                subArray.push(Meteor.subscribe("singleDocWithId","LeoCollections.LeoTeamMember", this.params.memberId,{}));
            }
            return subArray;
        },
        data:function(){
            let data = {}
            data.routerTitle='Team Member';
            data.teamMember=LeoCollections.LeoTeamMember.findOne({_id:this.params.memberId});
            return data
        }
    });
    this.route('leoAdminProductCategory',{
        path:adminContext+'/leoAdminProductCategory',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){

        },
        data:function(){
            let data = {};
            data.routerTitle='Products-Category';
            return data;
        }
    });
    this.route('leoAdminProductCategoryDetails',{
        path:adminContext+'/leoAdminProductCategoryDetails/:catId?',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){
            let subArray=[];
            if(this.params.catId){
                subArray.push(Meteor.subscribe("singleDocWithId","LeoCollections.LeoProductCategory", this.params.catId,{}));
            }
            return subArray;
        },
        data:function(){
            let data = {};
            data.routerTitle='Products-Category';
            data.productCategory=LeoCollections.LeoProductCategory.findOne({_id:this.params.catId});
            return data
        }
    });
    this.route('leoAdminService',{
        path:adminContext+'/leoAdminService',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){

        },
        data:function(){
            let data = {};
            data.routerTitle='Service';
            return data;
        }
    });
    this.route('leoAdminServiceDetails',{
        path:adminContext+'/leoAdminServiceDetails/:serviceId?',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){
            let subArray=[];
            if(this.params.serviceId){
                subArray.push(Meteor.subscribe("singleDocWithId","LeoCollections.LeoService", this.params.serviceId,{}));
            }
            return subArray;
        },
        data:function(){
            let data = {};
            data.routerTitle='Service';
            data.service=LeoCollections.LeoService.findOne({_id:this.params.serviceId});
            return data
        }
    });
    this.route('leoAdminServiceCategory',{
        path:adminContext+'/leoAdminServiceCategory',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){

        },
        data:function(){
            let data = {};
            data.routerTitle='Service-Category';
            return data;
        }
    });
    this.route('leoAdminServiceCategoryDetails',{
        path:adminContext+'/leoAdminServiceCategoryDetails/:catId?',
        layoutTemplate:'leoAdminLayout',
        waitOn:function(){
            let subArray=[];
            if(this.params.catId){
                subArray.push(Meteor.subscribe("singleDocWithId","LeoCollections.LeoServiceCategory", this.params.catId,{}));
            }
            return subArray;
        },
        data:function(){
            let data = {}
            data.routerTitle='Service-Category';
            data.serviceCategory=LeoCollections.LeoServiceCategory.findOne({_id:this.params.catId});
            return data
        }
    });
});