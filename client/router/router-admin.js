import {
    adminContext
} from './routerConfig.js'
Meteor.startup(function () {})
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

        },
        data:function(){
            routerTitle:'Products-Category'
        }
    })
});