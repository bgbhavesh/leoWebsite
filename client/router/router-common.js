Router.map(function () {
    this.route('signup',{
        path:'/signup',
        // layoutTemplate:'',
        waitOn:function(){

        },
        data:function(){
            routerTitle:'Sign Up'
        }
    })
})