import './_global_image.js'
import './_gloabl_variable.js'
getRouterParams = function (id) {
    if(Router.current().params && Router.current().params[id])
    return Router.current().params[id];
}
formatDate = function (date, format, custom) {
    /*
    IF date is undefined return current date as moment object
    else if format
     return date in this format

     if no format then use company specified format

     */
    var condition = "DD-MM-YYYY";
    if(!date){
        if(custom)
            return '';
        else{
            date = new Date().toISOString();
        }
    }else{
        if(date instanceof Date){
            date = date.toISOString();
        }else {
            date = new Date(date).toISOString();
        }
    }
    if(!format){
        format=condition;
    }
    return moment(date).format(format);
};