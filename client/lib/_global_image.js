import './_global_function.js'
import './_gloabl_variable.js'

getCdnUrl = function () {
    if (Meteor.settings && Meteor.settings.public && Meteor.settings.public.CDNUrl) {
        return Meteor.settings.public.CDNUrl
    }
    return "";
};
getCloudName = function () {
    if (Meteor.settings && Meteor.settings.public && Meteor.settings.public.cloudinary.cloud_name) {
        return Meteor.settings.public.cloudinary.cloud_name
    }
    return "www-leoquip-com";
};
getStyledUrls = function (urls, style) {
    if (Array.isArray(urls)) {
        let newUrls = []
        _.each(urls, function (url) {
            newUrls.push(styleUrl(urls, style));
        })
        return newUrls;
    } else if (_.isString(urls)) {
        return styleUrl(urls, style);
    }
}
styleUrl = function (basicUrl, style) {
    let cl = new cloudinary.Cloudinary({cloud_name: getCloudName()});
    let splitUrl = basicUrl.split('upload');
    if (splitUrl && splitUrl.length>1) {
        return cl.url(splitUrl[1], style)
    }
    return cl.url(basicUrl, style)
}

getAllActiveUrl = function (images, style) {
    let urls = [];
    if (Array.isArray(images)) {
        let activeObject = _.filter(images, function (obj) {
            if (obj.isActive || obj.isDefault) {
                return obj
            }
        });
        _.each(activeObject, function (obj) {
            urls.push(getSingleImageUrl(obj, style));
        })
    } else {
        urls = images || defaultImage;
    }
};
getSingleImageUrl = function (images, style) {


    //c_pad,h_222,w_222,b_rgb:ffffff
    style = _.union(style, ['c_pad']);
    let cdnUrl = getCdnUrl();
    let obj = {};
    let url = "";
    if (Array.isArray(images)) {
        obj = getSingleImageObj(images) || {};
    }
    else if (typeof images === Object) {
        obj = images || {};
    }
    if (_.isString(images)) {
        url = images || defaultImage;
    }
    else {
        url = obj.secure_url || defaultImage;
    }
    return url;
};
getSingleImageObj = function (images) {
    if (Array.isArray(images)) {
        let defaultObject = _.filter(images, function (obj) {
            if (obj.isDefault) {
                return obj
            }
        })
        if (defaultObject && defaultObject.length > 0) {
            return defaultObject[0];
        }

        let activeObject = _.filter(images, function (obj) {
            if (obj.isActive) {
                return obj
            }
        })
        if (activeObject && activeObject.length > 0) {
            return activeObject[0];
        }
        if (images && images.length > 0) {
            return images[0];
        }
    }
}