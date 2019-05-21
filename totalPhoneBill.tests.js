describe('totalPhoneBill' , function(){
    it('should take in a string for the calls made and sms sent' , function(){
        assert.equal(totalPhoneBill("call, sms, call, sms, sms"),"R7.45");
    });
    it('should take in a string for the calls made' , function(){
        assert.equal(totalPhoneBill("call, call"),"R5.50");
    });
    it('should take in a string for the sms sent' , function(){
        assert.equal(totalPhoneBill("sms, sms, sms"),"R1.95");
    });
});