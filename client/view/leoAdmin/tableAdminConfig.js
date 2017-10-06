let tableAdminConfig = {};
tableAdminConfig.leoAdminProductCategory= function () {
    return {
        collectionsName: 'LeoCollections.LeoProductCategory',
        aggregateQuery: 'leoMethodQuery.leoProductCategory',
        aggregateFullQuery:null,
        name: 'leoProductCategory',
        order: [1, "desc"],
        exportCsv: false,
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
                {data: "productCategoryId", Title: "Id",sort:true},
                {data: "description", Title: "Description",sort:true},
            ]
        }
    }
}
Template.registerHelper("tableAdminConfig", tableAdminConfig);

