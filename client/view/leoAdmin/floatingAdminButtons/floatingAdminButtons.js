Template.floatingAdminButtons.onCreated(function () {
    $('[data-toggle="tooltip"]').tooltip()

})
Template.floatingAdminButtons.onRendered(function () {

})
Template.floatingAdminButtons.events({
    "click .fab":function(){
        $(this).toggleClass('active');
        $('.option').toggleClass('scale-on');
        if($('.floatingAdminButtons .dropdown-menu.dropdown-menu-right').css('display')==='none'){
            $('.floatingAdminButtons .dropdown-menu.dropdown-menu-right').css({display:'block'})
        }
        else{
            $('.floatingAdminButtons .dropdown-menu.dropdown-menu-right').css({display:'none'})
        }
    },
    "click .disabled": function (e, t) {
        e.preventDefault();
        toastr.clear();
        toastr.error(getMessage("actionNotPermitted"));
    },
})
Template.floatingAdminButtons.helpers({

})