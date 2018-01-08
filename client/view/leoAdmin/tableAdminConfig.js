let tableAdminConfig = {};
tableAdminConfig.leoAdminLocation = function () {
    return {
        collectionsName: 'LeoCollections.LeoLocation',
        aggregateQuery: 'leoMethodQuery.basicCoreQuery',
        aggregateFullQuery:null,
        name: 'LeoLocation',
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
tableAdminConfig.leoAdminModule = function () {
    return {
        collectionsName: 'LeoCollections.LeoModule',
        aggregateQuery: 'leoMethodQuery.basicCoreQuery',
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
        aggregateQuery: 'leoMethodQuery.basicCoreQuery',
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

tableAdminConfig.leoAdminAboutUs= function () {
    return {
        collectionsName: 'LeoCollections.LeoAboutUs',
        aggregateQuery: 'leoMethodQuery.basicCoreQuery',
        aggregateFullQuery:null,
        name: 'LeoAboutUs',
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
                {data: "aboutUsId", Title: "Code",sort:true},
                {data: "seq", Title: "Sequence",sort:true},
                {data: "aboutType", Title: "Type",sort:true},
                {data: "description", Title: "Description",sort:true},
            ]
        }
    }
};
tableAdminConfig.leoAdminAddress= function () {
    return {
        collectionsName: 'LeoCollections.LeoAddress',
        aggregateQuery: 'leoMethodQuery.basicCoreQuery',
        aggregateFullQuery:null,
        name: 'leoAddress',
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
                {data: "addressId", Title: "Code",sort:true},
                {data: "description", Title: "Description",sort:true},
            ]
        }
    }
};
tableAdminConfig.leoAdminGallery= function () {
    return {
        collectionsName: 'LeoCollections.LeoGallery',
        aggregateQuery: 'leoMethodQuery.basicCoreQuery',
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
        aggregateQuery: 'leoMethodQuery.basicCoreQuery',
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
        aggregateQuery: 'leoMethodQuery.basicCoreQuery',
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
        aggregateQuery: 'leoMethodQuery.basicCoreQuery',
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
        aggregateQuery: 'leoMethodQuery.basicCoreQuery',
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
        aggregateQuery: 'leoMethodQuery.basicCoreQuery',
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
                {data: "teamMemberId", Title: "Code",sort:true},
                {data: "email", Title: "Email",sort:true},
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
        aggregateQuery: 'leoMethodQuery.basicCoreQuery',
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

