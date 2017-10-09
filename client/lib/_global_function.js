getRouterParams = function (id) {
    if(Router.current().params && Router.current().params[id])
    return Router.current().params[id];
}
