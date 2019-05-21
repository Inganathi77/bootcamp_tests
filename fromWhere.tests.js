describe('fromWhere' , function(){
    it('should take a car registration number and return the town the car is from' , function(){
        assert.equal(fromWhere("CY"),"Bellville");
    });
    it('should take a car registration number and return the town the car is from' , function(){
        assert.equal(fromWhere("CJ"),"Paarl");
    });
    it('should take a car registration number and return the town the car is from' , function(){
        assert.equal(fromWhere("CA"),"Cape Town");
    });
     it('should take a car registration number and return the town the car is from' , function(){
        assert.equal(fromWhere("L") ,"Some other place!");
     });
});