describe('transportFee' , function(){
    it('should return the right price for the morning shift' , function(){
        assert.equal(transportFee('morning'),"R20");
    });
    it('should return the price for the afternoon shift' , function(){
        assert.equal(transportFee('afternoon'),"R10");
    });
    it('should return free for the night shift' , function(){
        assert.equal(transportFee('night'),"free");
    });
});