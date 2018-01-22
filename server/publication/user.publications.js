Meteor.publish("leoShowCaseSlider", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    console.log("-leoShowCaseSlider-")
    return LeoCollections.LeoShowCaseSlider.find(selector, {fields:project});
});
Meteor.publish("leoTeamMember", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    console.log("-leoTeamMember-")
    return LeoCollections.LeoTeamMember.find(selector, {fields:project});
});
Meteor.publish("leoLocation", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    console.log("-leoLocation-")
    return LeoCollections.LeoLocation.find(selector, {fields:project});
});

Meteor.publish("leoAboutUs", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    console.log("-leoAboutUs-")
    return LeoCollections.LeoAboutUs.find(selector, {fields:project});
});

Meteor.publish("leoServiceCategory", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    console.log("-leoServiceCategory-")
    return LeoCollections.LeoServiceCategory.find(selector, {fields:project});
});

Meteor.publish("leoService", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    console.log("-leoService-")
    return LeoCollections.LeoService.find(selector, {fields:project});
});

//

Meteor.publish("leoProductCategory", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    console.log("-leoProductCategory-");
    console.log(selector);
    return LeoCollections.LeoProductCategory.find(selector, {fields:project});
});
Meteor.publishComposite("leoProductCategoryProduct", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    console.log("-leoProductCategoryProduct-");
    console.log(selector);
    return {
        find:function(){
            return LeoCollections.LeoProductCategory.find(selector, {fields:project});
        },
        children:function(){
            return {
                    find:function(pc){
                        if(pc && pc._id){
                            return LeoCollections.LeoProduct.find({isActive:true ,categoryId:pc._id},{sort:{seq:1}});
                        }
                    }
            },{
                find:function(pc){
                    if(pc && pc.tags){
                        return LeoCollections.LeoProductCategory.find(isActive:true,tags:{$in:pc.tags},{sort:{seq:1}});
                    }
                }
            }
        }
    }
});



Meteor.publish("leoProduct", function (selector, project) {
    check(selector, Object);
    check(project, Object);
    console.log("-leoProduct-")
    return LeoCollections.LeoProduct.find(selector, {fields:project});
});

