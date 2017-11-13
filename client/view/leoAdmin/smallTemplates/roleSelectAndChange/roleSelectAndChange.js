let userRolesList = [
    {
        _id:123,
        role:'GUEST-USER',
        group:"guest-group"
    },
    {
        _id:234,
        role:'NEW-USER',
        group:"guest-group"
    },
    {
        _id:345,
        role:'ADMIN-USER',
        group:"admin-group"
    },
]
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
        }else
        if(this.roles['admin-group']){
            let guest = this.roles['admin-group'];
            if(guest.indexOf('ADMIN-USER')>=0){
                return 'ADMIN-USER'
            }else if(guest.indexOf('ADMIN-SUPER')>=0){
                return 'ADMIN-SUPER'
            }
        }
        console.log(this)
    }
});
Template.changeUserRole.helpers({
    currentRole:function () {
        if(this.roles['guest-group']){
            let guest = this.roles['guest-group'];
            if(guest.indexOf('NEW-USER')>=0){
                return 'NEW-USER'
            }else if(guest.indexOf('GUEST-USER')>=0){
                return 'GUEST-USER'
            }
        }
    },
    restRoles:function(){
        return userRolesList
    }
});
Template.changeUserRole.events({
    "click .rolesList .roleItem":function (e) {
        e.preventDefault();
        let userId = $(e.currentTarget).attr('userId');
        let role = $(e.currentTarget).attr('role');
        let group = $(e.currentTarget).attr('group');
        Meteor.call("setUserToRole",userId,role,group,function(err,data){
            toastr.clear();
            toastr.info(leoMessages["refreshToSeeChange"]);
            toastr.success(leoMessages["userRoleChanged"]);
        });

    }
});