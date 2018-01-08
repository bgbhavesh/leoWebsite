adminContext = "socius";
let adminLoginPath = 'leoLogin';
let adminDashboardPath = 'leoAdminCompanyDetails';
let clientLoginPath = "leoLogin";
let clientDashboardPath = "";
let goToDashboard = function(){
	let isAdminPath = Router.current().url.indexOf(adminContext) >= 0;
	if(isAdminPath){}
		this.next();
};
let loginrequired =function(req, res, next){
	this.next();
};
let exceptedRoutes = ['verifyEmail'];
Router.onBeforeAction(loginrequired, {
    except: exceptedRoutes
});
Router.onBeforeAction(goToDashboard, {
    only: ['']	
});
Router.configure({
    // notFoundTemplate: "notFound",
    // loadingTemplate: 'loading',
    waitOn:function(){
        Meteor.subscribe("leoCompany",{},{});
    }
});


export {
    adminContext// there is nothing wrong in export this way
};