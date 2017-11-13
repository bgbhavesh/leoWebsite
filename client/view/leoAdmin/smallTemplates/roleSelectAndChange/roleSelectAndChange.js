Template.roleSelectAndChange.onCreated(function () {

});
Template.roleSelectAndChange.onRendered(function () {

});
Template.roleSelectAndChange.events({});
Template.roleSelectAndChange.helpers({
    currentRole:function () {
        if(this.roles['guest-group']){
            let guest = this.roles['guest-group'];
            if(guest.indexOf('NEW-USER')>=0){
                return 'NEW-USER'
            }else if(guest.indexOf('GUEST-USER')>=0){
                return 'GUEST-USER'
            }
        }
        console.log(this)
    }
});