// Template.leoAutoComplete.onCreated(function () {
//     let template = this;
//
//     template.selectedList = new ReactiveVar();
//     template.selectedList.set([]);
//     template.searchList = new ReactiveVar();
//     template.searchList.set([]);
//     template.isFocused = new ReactiveVar();
//     template.isFocused.set(false);
//     template.primaryKey = new ReactiveVar();
//     template.primaryKey.set(Template.currentData().primaryKey || "_id");
//     template.key = new ReactiveVar();
//     template.key.set(Template.currentData().key || "_id");
//     template.value = new ReactiveVar();
//     template.value.set(Template.currentData().value || "");
//     template.isMulti = new ReactiveVar();
//     template.isMulti.set((Template.currentData().multi === true || Template.currentData().multi === "true"));
//     template.selector = new ReactiveVar();
//     let limit = Template.currentData().limit || {};
//     template.selector.set(limit);
//     let matchCase = Template.currentData().matchCase || {};
//     template.selector.set(matchCase);
//     let field = Template.currentData().field || {};
//     template.selector.set(field);
//     // leoAutoCompleteVal()
//     template.autorun(function () {
//         let table = Template.currentData().table;
//         let selector = Template.currentData().settings || {};
//         template.selector.set(selector);
//     });
//     setPassedValues(template, Template.currentData());
// });
// Template.leoAutoComplete.onRendered(function () {
// });
//
// Template.leoAutoComplete.helpers({
//     primaryKey: function (obj) {
//         let key = Template.instance().primaryKey.get() || "_id";
//         return obj[key]
//     },
//     viewKey: function (obj) {
//         let key = Template.instance().key.get() || "_id";
//         return obj[key]
//     },
//     title: function () {
//         return this.title || "";
//     },
//     name: function () {
//         return this.name || "";
//     },
//     value: function () {
//         let isMulti = Template.instance().isMulti.get();
//         let primaryKey = Template.instance().primaryKey.get() || "_id";
//         let selectedList = Template.instance().selectedList.get();
//         let primaryKeys = _.map(selectedList, function (list) {
//             return list[primaryKey]
//         });
//         if (isMulti)
//             return primaryKeys
//         else return primaryKeys[0]||""
//     },
//     focused: function () {
//         return Template.instance().isFocused.get();
//     },
//     dropdownWidth: function () {
//         return $('.leoAutoComplete-input').width();
//     },
//     searchList: function () {
//         return Template.instance().searchList.get()
//     },
//     selectedList: function () {
//         return Template.instance().selectedList.get()
//     }
// });
// Template.leoAutoComplete.events({
//     "click li.searchList": function (e, t) {
//         let selectedList = t.selectedList.get();
//         let primaryKey = t.primaryKey.get();
//         let key = t.key.get();
//         let isMulti = t.isMulti.get()
//         if (isMulti) {
//             selectedList.push({
//                 [primaryKey]: this[primaryKey],
//                 [key]: this[key]
//             });
//         }
//         else {
//             selectedList = [{
//                 [primaryKey]: this[primaryKey],
//                 [key]: this[key]
//             }]
//         }
//
//         t.selectedList.set(selectedList);
//         // console.log(selectedList)
//         focusOnInput(e, t);
//     },
//     "click li.selectedList": function (e, t) {
//         let thisItem = this;
//         let selectedList = t.selectedList.get();
//         let primaryKey = t.primaryKey.get();
//         let key = t.key.get();
//         let index = selectedList.findIndex(function (item) {
//             if (item[primaryKey] === thisItem[primaryKey]) {
//                 return item
//             }
//         });
//         if (index >= 0) {
//             selectedList.splice(index, 1);
//         }
//         t.selectedList.set(selectedList);
//         // console.log(selectedList)
//         focusOnInput(e, t);
//     },
//     "keyup .leoAutoComplete-input": function (e, t) {
//         console.log(e.keyCode);
//         focusOnInput(e, t);
//     },
//     "blur .leoAutoComplete-input": function (e, t) {
//         // if ($(e.currentTarget) === $(".leoAutoComplete-dropDown")) {
//         //
//         // } else
//         //     t.isFocused.set(false);
//     },
//     "click .leoAutoComplete-mask": function (e, t) {
//         t.isFocused.set(false);
//     },
//     "click .leoAutoComplete-dropDown": function (e, t) {
//         e.preventDefault();
//         // focusOnInput(e, t);
//     },
//     "focus .leoAutoComplete-input": function (e, t) {
//         focusOnInput(e, t)
//     },
// });
//
// function setPassedValues(t, currentData) {
//     let settings = t.selector.curValue;
//     let collectionName = settings.collectionName;
//     let limit = settings.limit || 10;
//     let primaryKey = t.primaryKey.get() || _id;
//     let key = t.key.get() || _id;
//     let matchCase = settings.matchCase || {};
//     let textValue = $(".leoAutoComplete-input").text() || "";
//     textValue = textValue.trim();
//     // $(".leoAutoComplete-input").focus();
//     let sort = {[key]: 1};
//     let value = t.value.get();
//     let isMulti = t.isMulti.get();
//     // console.log(value, isMulti);
//     let selectedList = (isMulti) ? value : [value];
//     Meteor.call("leoAutoCompleteValue", selectedList, collectionName, limit, primaryKey, key, textValue, matchCase, sort, function (err, data) {
//         if (err) {
//             console.log(err);
//         }
//         if (data) {
//             if (isMulti) {
//                 selectedList.push({
//                     [primaryKey]: data[primaryKey],
//                     [key]: data[key]
//                 });
//             }
//             else {
//                 selectedList = [{
//                     [primaryKey]: data[primaryKey],
//                     [key]: data[key]
//                 }]
//             }
//             t.selectedList.set(data);
//         }
//     })
// }
// function focusOnInput(e, t) {
//     t.isFocused.set(true);
//     let settings = t.selector.curValue;
//     let collectionName = settings.collectionName;
//     let limit = settings.limit || 10;
//     let primaryKey = t.primaryKey.get() || _id;
//     let key = t.key.get() || _id;
//     let matchCase = settings.matchCase || {};
//     let textValue = $(".leoAutoComplete-input").text() || "";
//     textValue = textValue.trim();
//     let selectedList = t.selectedList.get();
//     // $(".leoAutoComplete-input").focus();
//     let sort = {[key]: 1};
//     Meteor.call("leoAutoCompleteSearch", selectedList, collectionName, limit, primaryKey, key, textValue, matchCase, sort, function (err, data) {
//         if (err) {
//             console.log(err);
//         }
//         if (data) {
//             t.searchList.set(data);
//         }
//     })
// }
//
