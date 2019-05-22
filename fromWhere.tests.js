describe('fromWhere' , function(){
    it('should take a car registration number and return Bellville' , function(){
        assert.equal(fromWhere("CY"),"Bellville");
    });
    it('should take a car registration number and return Paarl' , function(){
        assert.equal(fromWhere("CJ"),"Paarl");
    });
    it('should take a car registration number and return Cape Town' , function(){
        assert.equal(fromWhere("CA"),"Cape Town");
    });
     it('should take a car registration number and return Some other place!' , function(){
        assert.equal(fromWhere("L") ,"Some other place!");
     });
});