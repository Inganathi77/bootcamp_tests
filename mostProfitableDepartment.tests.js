describe('mostProfitableDepartment' , function(){
    
    it('should return the  most profitable department' , function(){
        assert.deepEqual(theMostProfitable,departmentResults);
    });
    it('should return 0 if entered false data' , function(){
        assert.equal(mostProfitableDepartment('ABC'),0);
    });
});