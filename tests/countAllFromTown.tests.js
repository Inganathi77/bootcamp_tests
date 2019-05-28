describe('countAllFromTown' , function(){
    it('should count the number of registration Town' , function(){
        assert.deepEqual(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3);
        
    });
    it('should return nothing if the registration is not from Town' , function(){
        assert.deepEqual(countAllFromTown('CA'), 0);
        
    });
});