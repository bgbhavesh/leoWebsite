// import {imageUpload} from '../../../cloudinary.config.js'
Template.leoAdminModuleDetails.onCreated(function () {
    let self = this;
    self.permissions = new ReactiveVar();
    self.permissions.set([]);
    this.subscribe("leoRoles",{},{});
    let params = Router.current().params;
    Cloudinary.collection.remove({});
    if(params && params.catId){
        let module = LeoCollections.LeoModule.findOne({_id:params.catId});
        if(module && module.permissions){
            self.permissions.set(module.permissions);
        }
        if(module && module.images && module.images.length>0){
            _.each(module.images,function (image) {
                let obj = image;
                obj.percent_uploaded = 100;
                obj.response = obj.response||{};
                obj.response.secure_url = (image.response && image.response.secure_url)?image.response.secure_url:"";
                obj.response.public_id = (image.response && image.response.public_id)?image.response.public_id:"";
                Cloudinary.collection.insert(obj);
            })

        }
    }
});
Template.leoAdminModuleDetails.onRendered(function () {
    let utilObj = new LeoUtils();
    utilObj.applyValidationAndFloatingLabel($('#module'));
    // imageUpload.cloudinary.imageUpload($('#productCategoryImage'));
});
Template.leoAdminModuleDetails.events({
    "click [data-action='cancel']":function(e){
        e.preventDefault();
        Router.go("leoAdminModule");
    },
    "click [data-action='save']":function(e,t){
        e.preventDefault();
        let formData =$("#module");
        let insertObject = {};
        new LeoUtils().getFormValues(formData,function (data) {
            insertObject.tags = data.tags.split(",");
            insertObject.title = data.title;
            insertObject.description = data.description;
            insertObject.isActive = $("[name='isActive']").prop( "checked" );
            insertObject.permissions = t.permissions.get();
        });
        let images = [];
        _.map(Cloudinary.collection.find().fetch(),function(image){
            let obj = {};
            obj.isActive= image.isActive||false;
            obj.isDefault= image.isDefault||false;
            obj.resource_type = image.resource_type||"image";
            obj.seq = image.seq||1;
            obj.response = obj.response||{};
            obj.response.secure_url = (image.response && image.response.secure_url)?image.response.secure_url:"";
            obj.response.public_id = (image.response && image.response.public_id)?image.response.public_id:"";
            images.push(obj);
        })
        insertObject.images = images;
        if(getRouterParams('moduleId')){
            Meteor.call('updateModule',getRouterParams('moduleId'),insertObject,function(err,data){
                if(data){
                    // $('#productCategory')[0].reset();
                    Cloudinary.collection.remove();
                    toastr.clear();
                    toastr.success("Module Updated");
                    Router.go("leoAdminModule");
                }
                if(err){
                    toastr.clear();
                    toastr.error(err.reason);

                }
            })
        }else{
            Meteor.call('insertModule',insertObject,function(err,data){
                if(data){
                    // $('#productCategory')[0].reset();
                    Cloudinary.collection.remove();
                    toastr.clear();
                    toastr.success("Module Created");
                    Router.go("leoAdminModule");
                }
                if(err){
                    toastr.clear();
                    toastr.error(err.reason);

                }
            })
        }
    },
    "click #reset":function(){
        // $('#productCategory')[0].reset();
    },
    "click .crudOperation":function(e,t){
        e.preventDefault();
        let permissions = t.permissions.get();
        let role = $(e.currentTarget).attr('role');
        let code = $(e.currentTarget).attr('operation');
        let preValue = $(e.currentTarget).attr('preValue');
        let newValue = (preValue ==='no');
        let index = permissions.findIndex(function(p){
            if(p.userType === role){
                return p
            }
        });
        if(index<0){
            permissions.push({userType:role,operations:[code]})
        }
        else{
            let operations = permissions[index].operations;
            let charIndex = operations.indexOf(code);
            if(charIndex<0){
                permissions[index].operations.push(code)
            }else{
                permissions[index].operations.splice(charIndex,1)
            }
        }
        t.permissions.set(permissions)
    }
});
Template.leoAdminModuleDetails.helpers({
    showTags:function(){
        let tempData = Template.instance().data;
        if(tempData && tempData.Module && tempData.Module.tags){
            return tempData.Module.tags.toString()
        }
        else return '';
    },
    rolesList:function(){
        return Meteor.roles.find().fetch();
    },
    exists:function (role,code) {
        let roleObject = role;
        let permissions = Template.instance().permissions.get();
        let index = permissions.findIndex(function(p){
            if(p.userType === roleObject.name){
                return p
            }
        });
        if(index>=0){
            let operations = permissions[index].operations;
            return (operations.indexOf(code)>=0)?'yes':'no';
        }
        return 'no'
    },
    operations:function(){
        return ['C','R','U','D']
    }

});//

Template.leoAdminModuleDetails.onDestroyed(function () {
    Cloudinary.collection.remove()
});