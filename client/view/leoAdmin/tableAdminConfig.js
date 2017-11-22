let tableAdminConfig = {};
tableAdminConfig.leoAdminModule = function () {
    return {
        collectionsName: 'LeoCollections.LeoModule',
        aggregateQuery: 'leoMethodQuery.leoModule',
        aggregateFullQuery:null,
        name: 'LeoModule',
        order: [1, "desc"],
        exportCsv: true,
        canPrint: false,
        tabView: false,
        alphaFilter: false,
        isFilter:true,
        filterFields: [
            'title'
        ],
        tableViewConfig: {
            extraFields: [],
            columns: [
                {tmpl:"selectTemplateForTabular","Title":'Select'},
                {tmpl:"isActiveTemplateForTabular","Title":'Active',data:"isActive"},
                {data: "title", Title: "Title",sort:true},
                {data: "showCaseId", Title: "Code",sort:true},
                {data: "description", Title: "Description",sort:true},
            ]
        }
    }
};
tableAdminConfig.leoAdminShowCaseSlider= function () {
    return {
        collectionsName: 'LeoCollections.LeoShowCaseSlider',
        aggregateQuery: 'leoMethodQuery.leoShowCaseSlider',
        aggregateFullQuery:null,
        name: 'LeoShowCaseSlider',
        order: [1, "desc"],
        exportCsv: true,
        canPrint: false,
        tabView: false,
        alphaFilter: false,
        isFilter:true,
        filterFields: [
            'title'
        ],
        tableViewConfig: {
            extraFields: [],
            columns: [
                {tmpl:"selectTemplateForTabular",Title:'Select'},
                {tmpl:"isActiveTemplateForTabular",Title:'Active',data:"isActive"},
                {data: "title", Title: "Title",sort:true},
                {data: "showCaseId", Title: "Code",sort:true},
                {data: "description", Title: "Description",sort:true},
            ]
        }
    }
};
tableAdminConfig.leoAdminGallery= function () {
    return {
        collectionsName: 'LeoCollections.LeoGallery',
        aggregateQuery: 'leoMethodQuery.leoGallery',
        aggregateFullQuery:null,
        name: 'leoGallery',
        order: [1, "desc"],
        exportCsv: true,
        canPrint: false,
        tabView: false,
        alphaFilter: false,
        isFilter:true,
        filterFields: [
            'title'
        ],
        tableViewConfig: {
            extraFields: [],
            columns: [
                {tmpl:"selectTemplateForTabular","Title":'Select'},
                {tmpl:"isActiveTemplateForTabular","Title":'Active',data:"isActive"},
                {data: "title", Title: "Title",sort:true},
                {data: "galleryId", Title: "Code",sort:true},
                {data: "description", Title: "Description",sort:true},
            ]
        }
    }
};
tableAdminConfig.leoAdminNewsFeed= function () {
    return {
        collectionsName: 'LeoCollections.LeoNewsFeed',
        aggregateQuery: 'leoMethodQuery.leoNewsFeed',
        aggregateFullQuery:null,
        name: 'leoNewsFeed',
        order: [1, "desc"],
        exportCsv: true,
        canPrint: false,
        tabView: false,
        alphaFilter: false,
        isFilter:true,
        filterFields: [
            'title'
        ],
        tableViewConfig: {
            extraFields: [],
            columns: [
                {tmpl:"selectTemplateForTabular","Title":'Select'},
                {tmpl:"isActiveTemplateForTabular","Title":'Active',data:"isActive"},
                {data: "title", Title: "Title",sort:true},
                {data: "galleryId", Title: "Code",sort:true},
                {data: "description", Title: "Description",sort:true},
            ]
        }
    }
};
tableAdminConfig.leoAdminProductCategory= function () {
    return {
        collectionsName: 'LeoCollections.LeoProductCategory',
        aggregateQuery: 'leoMethodQuery.leoProductCategory',
        aggregateFullQuery:null,
        name: 'leoProductCategory',
        order: [1, "desc"],
        exportCsv: true,
        canPrint: false,
        tabView: false,
        alphaFilter: false,
        isFilter:true,
        filterFields: [
            'name',
            'title'
        ],
        tableViewConfig: {
            extraFields: [],
            columns: [
                {tmpl:"selectTemplateForTabular","Title":'Select'},
                {tmpl:"isActiveTemplateForTabular","Title":'Active',data:"isActive"},
                {data: "name", Title: "Name",sort:true},
                {data: "title", Title: "Title",sort:true},
                {data: "productCategoryId", Title: "Code",sort:true},
                {data: "description", Title: "Description",sort:true},
            ]
        }
    }
}
tableAdminConfig.leoAdminProduct= function () {
    return {
        collectionsName: 'LeoCollections.LeoProduct',
        aggregateQuery: 'leoMethodQuery.leoProduct',
        aggregateFullQuery:null,
        name: 'leoProduct',
        order: [1, "desc"],
        exportCsv: true,
        canPrint: false,
        tabView: false,
        alphaFilter: false,
        isFilter:true,
        filterFields: [
            'name',
            'title'
        ],
        tableViewConfig: {
            extraFields: [],
            columns: [
                {tmpl:"selectTemplateForTabular","Title":'Select'},
                {tmpl:"isActiveTemplateForTabular","Title":'Active',data:"isActive"},
                {data: "name", Title: "Name",sort:true},
                {data: "title", Title: "Title",sort:true},
                {data: "productId", Title: "code",sort:true},
                {data: "description", Title: "Description",sort:true},
            ]
        }
    }
}
tableAdminConfig.leoAdminServiceCategory= function () {
    return {
        collectionsName: 'LeoCollections.LeoServiceCategory',
        aggregateQuery: 'leoMethodQuery.leoServiceCategory',
        aggregateFullQuery:null,
        name: 'leoServiceCategory',
        order: [1, "desc"],
        exportCsv: true,
        canPrint: false,
        tabView: false,
        alphaFilter: false,
        isFilter:true,
        filterFields: [
            'name',
            'title'
        ],
        tableViewConfig: {
            extraFields: [],
            columns: [
                {tmpl:"selectTemplateForTabular","Title":'Select'},
                {tmpl:"isActiveTemplateForTabular","Title":'Active',data:"isActive"},
                {data: "name", Title: "Name",sort:true},
                {data: "title", Title: "Title",sort:true},
                {data: "serviceCategoryId", Title: "Code",sort:true},
                {data: "description", Title: "Description",sort:true},
            ]
        }
    }
}
tableAdminConfig.leoAdminTeamMember= function () {
    return {
        collectionsName: 'LeoCollections.LeoTeamMember',
        aggregateQuery: 'leoMethodQuery.leoTeamMember',
        aggregateFullQuery:null,
        name: 'leoTeamMember',
        order: [1, "desc"],
        exportCsv: true,
        canPrint: false,
        tabView: false,
        alphaFilter: false,
        isFilter:true,
        filterFields: [
            'name',
            'title'
        ],
        tableViewConfig: {
            extraFields: [],
            columns: [
                {tmpl:"selectTemplateForTabular","Title":'Select'},
                {tmpl:"isActiveTemplateForTabular","Title":'Active',data:"isActive"},
                {data: "name", Title: "Name",sort:true},
                {data: "title", Title: "Title",sort:true},
                {data: "teamMember", Title: "Code",sort:true},
                {data: "description", Title: "Description",sort:true},
            ]
        }
    }
}
tableAdminConfig.leoAdminLeoUsers= function () {
    return {
        collectionsName: 'LeoCollections.LeoUsers',
        aggregateQuery: 'leoMethodQuery.leoUsers',
        aggregateFullQuery:null,
        name: 'leoUsers',
        order: [1, "desc"],
        exportCsv: true,
        canPrint: false,
        tabView: false,
        alphaFilter: false,
        isFilter:true,
        filterFields: [
            'name',
        ],
        tableViewConfig: {
            extraFields: [],
            columns: [
                {tmpl:"selectTemplateForTabular","Title":'Select'},
                {tmpl:"isActiveTemplateForTabular","Title":'Active',data:"isActive"},
                {data: "profile.firstname", Title: "F-name",sort:true},
                {data: "profile.lastname", Title: "L-name",sort:true},
                {data: "status.online", Title: "Status",
                    render: function (val, type, doc) {
                        if (doc && doc.status) {
                            return (doc.status.online)?"true":"false";
                        }
                        return "N/A";
                    }},
                {data: "roles", Title: "Role",tmpl:'roleSelectAndChange'},
                {data: "username", Title: "Username",sort:true},
                {data: "createdAt", Title: "CreatedOn",sort:true,
                    render: function (val, type, doc) {
                        if (doc && doc.createdAt) {
                            return Blaze._globalHelpers.formatDate(doc.createdAt, "DD/MM/YYYY HH:mm")
                        }
                        return "N/A";
                    }},
                {data: "emails", Title: "Email",sort:true,tmpl:"emailsListWithVerify"},
                {data: "emails", Title: "Verified",render: function (val, type, doc) {
                    if (doc && doc.emails) {
                        return (doc.emails[0].verified)?"true":"false";
                    }
                    return "N/A";
                }},
            ]
        }
    }
}
tableAdminConfig.leoAdminService= function () {
    return {
        collectionsName: 'LeoCollections.LeoService',
        aggregateQuery: 'leoMethodQuery.leoService',
        aggregateFullQuery:null,
        name: 'leoService',
        order: [1, "desc"],
        exportCsv: true,
        canPrint: false,
        tabView: false,
        alphaFilter: false,
        isFilter:true,
        filterFields: [
            'name',
            'title'
        ],
        tableViewConfig: {
            extraFields: [],
            columns: [
                {tmpl:"selectTemplateForTabular","Title":'Select'},
                {tmpl:"isActiveTemplateForTabular","Title":'Active',data:"isActive"},
                {data: "name", Title: "Name",sort:true},
                {data: "title", Title: "Title",sort:true},
                {data: "serviceId", Title: "code",sort:true},
                {data: "description", Title: "Description",sort:true},
            ]
        }
    }
}
Template.registerHelper("tableAdminConfig", tableAdminConfig);

