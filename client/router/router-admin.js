import {
    adminContext
} from './routerConfig.js'
// Meteor.startup(function () {})
Router.map(function () {
    /**
     * Admin Routes
     */
    // this.route('verifyEmail', {
    //     controller: 'verifyEmailController',
    //     path: '/#/verify-email/:token'

    // });
    // this.route('resetPassword', {
    //     path: '/reset-password/:token',
    //     layoutTemplate:"smtMrLayout"
    // });
    this.route('leoAdminProductCategory',{
        path:adminContext+'/leoAdminProductCategory',
        // layoutTemplate:'',
        waitOn:function(){

        },
        data:function(){
            routerTitle:'Products-Category'
        }
    })
    this.route('leoAdminProductCategoryDetails',{
        path:adminContext+'/leoAdminProductCategoryDetails/:catId?',
        // layoutTemplate:'',
        waitOn:function(){
            var subArray=[];
            if(this.params.catId){
                subArray.push(Meteor.subscribe("leoProductCategory", {_id:this.params.catId},{}));
            }
            return subArray;
        },
        data:function(){
            let data = {}
            data.routerTitle='Products-Category';
            data.productCategory=LeoCollections.LeoProductCategory.findOne({_id:this.params.catId});
            return data
        }
    })
});