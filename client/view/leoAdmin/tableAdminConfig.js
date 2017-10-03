let tableAdminConfig = {};
tableAdminConfig.leoAdminProductCategory= function () {
    return {
        collectionsName: 'LeoCollections.LeoProductCategory',
        aggregateQuery: 'leoProductCategory',
        aggregateFullQuery:null,
        name: 'leoProductCategory',
        order: [1, "desc"],
        exportCsv: false,
        canPrint: false,
        tabView: false,
        alphaFilter: false,
        isFilter:false,
        filterFields: [
        ],
        tableViewConfig: {
            extraFields: [],
            columns: [
                {data: "type", Title: "Contract Type"},
                {data: "type", Title: "Contract Type"},
            ]
        }
    }
}
Template.registerHelper("tableAdminConfig", tableAdminConfig);

