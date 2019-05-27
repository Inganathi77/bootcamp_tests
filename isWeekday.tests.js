describe('isWeekday' , function(){
    it('should return false if its a weekday ' , function(){
        assert.equal(isWeekday('Saturday'), false);
         
    });
    it('should return true if its a weekday' , function(){
        assert.equal(isWeekday('Monday'), true);
         
    });
});
        
