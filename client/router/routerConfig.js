adminContext = "socius";
var adminLoginPath = 'leoLogin';
var adminDashboardPath = '';
var clientLoginPath = "leoLogin";
var clientDashboardPath = "";
var goToDashboard = function(){
	var isAdminPath = Router.current().url.indexOf(adminContext) >= 0;
	if(isAdminPath){}
		this.next();
}
var loginrequired =function(req, res, next){
	this.next();
}
var exceptedRoutes = [''];
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

    }
});
export default{
	adminContext
}
Router.map(function () {
    this.route('leoLogin',{
    	path:'/login'
    })
});
export {
	adminContext
}