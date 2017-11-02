let tableAdminConfig = {};
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
        isFilter:false,
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
}
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
        isFilter:false,
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
}
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
        isFilter:false,
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
        isFilter:false,
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
        isFilter:false,
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
        isFilter:false,
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
        isFilter:false,
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

