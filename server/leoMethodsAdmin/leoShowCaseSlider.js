
Meteor.methods({
    insertShowCaseSlider:function (showCaseSliderDetails) {
        check(showCaseSliderDetails,Object);
        return new LeoShowCaseProcessor({
            showCaseSliderDetails:showCaseSliderDetails
        }).insertShowCaseProcessor()
    },
    updateShowCaseSlider:function (showCaseId,showCaseSliderDetails) {
        check(showCaseId,String);
        check(showCaseSliderDetails,Object);

        return new LeoShowCaseProcessor({
            showCaseSliderDetails:showCaseSliderDetails,
            showCaseId:showCaseId
        }).updateShowCaseProcessor()
    }
});