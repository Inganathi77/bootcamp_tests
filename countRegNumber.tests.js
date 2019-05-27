describe('countRegNumber' , function(){
    it('should return the number of registration numbers in the string' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), (3));
    });

    it('should not return the number of registration numbers in the string' , function(){
    assert.equal(countRegNumber('CY 523519'), (1));
    });

});
