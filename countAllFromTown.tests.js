describe('countAllTown' , function(){
    it('should return the number of registration from Cape Town' , function(){
        assert.equal(countAllFromTown('CA 182,CA 523,CA 812'), (3));
    });
    it('should return the registration numbers from Paarl' , function(){
        assert.equal(countAllFromTown('CY 523,CY 812'), (2));
    });
});