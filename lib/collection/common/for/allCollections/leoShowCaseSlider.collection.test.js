/*bhavesh test case*/
import './collectionPreRequisites/_common.js';
import  './leoShowCaseSlider.collection';

var expect = require('chai').expect;

describe("LeoShowCaseSlider Schema test ",function(){
    beforeEach(function(){

    });
    afterEach(function(){

    });
    it('should work', () => {
        // expect.assertions(1)
        expect(1).to.eq(1)
    })
    it("test schema definition ",function () {
        let OBJECT = LeoCollections.LeoShowCaseSlider.simpleSchema();
         console.log('*********',OBJECT._schema);
        expect(OBJECT._schema.showCaseId.type.name).to.be.equal("String");
        expect(OBJECT._schema.showCaseId.optional).to.be.equal(true);
        //expect(OBJECT._schema.title.type.definitions[0].type.name).to.be.equal("String");
        //expect(OBJECT._schema.title.optional).to.be.equal(false);  //--option not present
        //expect(OBJECT._schema.description.type.definitions[0].type.name).to.be.equal("String");
        //expect(OBJECT._schema.description.optional).to.be.equal(false); //--option not present
        //expect(OBJECT._schema.isActive.type.definitions[0].type.name).to.be.equal("Boolean");
        expect(OBJECT._schema.isActive.defaultValue).to.be.equal(true);
        //expect(OBJECT._schema.audit.type.definitions[0].type.name).to.be.equal("Object");
        //expect(OBJECT._schema.audit.optional).to.be();
    })
});
//showCaseId
//title
//description