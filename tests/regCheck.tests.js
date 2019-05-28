describe('regCheck' , function(){
    it('should check if a registration number is for GP, L, EC, MP registration plates' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
    });
    it('should return false if a registration number is not for GP, L, EC, MP registration plates' , function(){
        assert.equal(regCheck('DV 23 LP GP', 'MP'), false);
    });
});