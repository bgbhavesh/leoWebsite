PAGE_LIMIT = 10;
// PAGE_LIMIT_MR = 10;
LeoUtils = function () {
	var LeoUtilsClass = function () {

    };
    LeoUtilsClass.prototype.applyValidationAndFloatingLabel = function (formObject) {
        setInterval(function () {
            $('.floating-labe1 .form-control').each(function () {
                if ($(this).val() && $(this).val() != "" && $(this).val().length > 0) {
                    $(this).parents('.form-group').toggleClass('focused', true);
                }
            })
        })
        $('.floating-labe1 .form-control').on('focus blur', function (e) {
            $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus'));
        }).trigger('blur');

        $('.floating-labe1 .form-control').focus(function () {
            $(this).data('placeholder', $(this).attr('placeholder'))
                .attr('placeholder', '');
        }).blur(function () {
            $(this).attr('placeholder', $(this).data('placeholder'));
        });
        formObject.find("input,select,textarea").each(function () {
            var inputObject = $(this);
            let mandatory = false;
            if (inputObject.attr("mandatory") === true || inputObject.attr("mandatory") === 'true') {
                mandatory = true;
            }
            let validationType = ['email','mobileNumber','domain','number','zipCode','IP','alphaNum','alpha' ,'singleLine', 'decimal' , 'alphaNumMinusSpace'];
            let self = this;
            _.each(validationType,function(validType){
                if (inputObject.attr("validationType") === validType) {
                    $(self).on('blur focus keyup', function (e) {
                        validateFields(e, mandatory,validType);
                    })
                }
            })
            if (mandatory) {
                $(this).on('blur', function (e) {
                    validateNonEmpty(e)
                })
            }
            // if (inputObject.attr("type") == "checkbox") {
            //
            // }
            // else if (inputObject.attr("type") == "radio") {
            //
            // }
            // else{
            //
            // }
        })
    }
    LeoUtilsClass.prototype.validatedFormInputValues = function (inputObject) {
        var fieldName = inputObject.attr("name");

        var validationType = inputObject.attr("validationType");
        var fieldValue = $.trim(inputObject.val());
        let mandatory = false;
        if (inputObject.attr("mandatory") === true || inputObject.attr("mandatory") === 'true') {
            mandatory = true;
        }
        if(validationType){
            // console.log(inputObject.attr('placeholder'));
            return testRegEx(fieldValue,mandatory,selectRegEx(validationType))
        }
        if(mandatory){
            if(!fieldValue ||fieldValue ==="")return false;
        }
        return true;
    }
    LeoUtilsClass.prototype.getFormValues = function (formObject, submitCallback) {

        var values = {};
        let util = this;
        let clientValidation = true;
        formObject.find("input,select,textarea").each(function () {
            var inputObject = $(this);
            {
                if(clientValidation && !util.validatedFormInputValues(inputObject)){
                    clientValidation = false;
                    let field = $(inputObject).siblings('label').text() || inputObject.attr('placeholder') || inputObject.attr('name')|| 'Value';
                    toastr.clear();
                    toastr.error('Enter '+field+' Properly ');
                }
            }
        })
        if(clientValidation ){
            formObject.find("input,select,textarea").each(function () {
                var inputObject = $(this);
                var fieldName = inputObject.attr("name");
                var fieldValue = $.trim(inputObject.val());

                if (inputObject.attr("type") == "checkbox") {
                    // auto set data type for checkbox
                    if (!inputObject.attr("data-type")) {

                        // single checkbox with that name means dataType="BOOL" else it is "ARRAY"
                        if (formObject.find("input[name='" + fieldName + "']").length == 1 && !inputObject.attr("data-custom")) {
                            dataType = "BOOL";
                        }
                        else {
                            dataType = "ARRAY";
                        }
                    }
                    if (dataType == "BOOL") fieldValue = inputObject.is(":checked");
                    if (dataType == "ARRAY") fieldValue = inputObject.is(":checked") ? fieldValue : "off";
                    if (dataType == "ARRAY") {
                        if ($.isArray(values[fieldName]) && values[fieldName].length != 0) {
                            if (fieldValue != "") {
                                values[fieldName].push(fieldValue)
                            }
                        } else {
                            values[fieldName] = [];
                            if (fieldValue != "") {
                                values[fieldName].push(fieldValue)
                            }

                        }
                    } else {
                        values[fieldName] = fieldValue;
                    }

                }
                else if (inputObject.attr("type") == "radio") {
                    if (inputObject.is(":checked")) {
                        values[fieldName] = $.trim(fieldValue);
                    }
                } else {
                    if (!inputObject.attr("data-custom")) {
                        values[fieldName] = $.trim(fieldValue);
                    } else {
                        dataTypeInput = "ARRAY";
                        if (dataTypeInput == "ARRAY") {
                            if ($.isArray(values[fieldName]) && values[fieldName].length != 0) {
                                values[fieldName].push($.trim(fieldValue))

                            } else {
                                values[fieldName] = [];

                                values[fieldName].push($.trim(fieldValue))


                            }
                        } else {
                            values[fieldName] = $.trim(fieldValue);
                        }
                    }

                }
            });
            if (submitCallback) {
                submitCallback(values);
            }

        }
        else return false;
    };
    return LeoUtilsClass;
}();