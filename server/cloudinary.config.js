let cloud_name = Meteor.settings.public.cloudinary.cloud_name;
let api_key = Meteor.settings.public.cloudinary.api_key;
let unsigned = Meteor.settings.public.cloudinary.unsigned;
let api_secret = Meteor.settings.public.cloudinary.api_secret;
Cloudinary.config({
    cloud_name: cloud_name,
    api_key: api_key,
    api_secret: api_secret
});