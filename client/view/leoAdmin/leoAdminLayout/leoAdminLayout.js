Template.leoAdminLayout.helpers({});
Template.leoAdminLayout.events({
    'click button[data-toggle="offcanvas"]':function () {
        $('#wrapper').toggleClass('toggled');
    },
    'click .hamburger':function () {
        hamburger_cross();
    }
});

Template.leoAdminLayout.onCreated(function () {

    //
    // $('[data-toggle="offcanvas"]').click(function () {
    //     $('#wrapper').toggleClass('toggled');
    // });
});
let isClosed = false;

// trigger.click(function () {
//     hamburger_cross();
// });

function hamburger_cross() {

    let trigger = $('.hamburger');
    let overlay = $('.leoAdminOverlay');
    if (isClosed === true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
    } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
    }
};