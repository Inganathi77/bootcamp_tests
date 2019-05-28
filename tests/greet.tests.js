describe('greet' , function(){
    it('should greet a person' , function(){
        assert.equal(greet('Inga'),'Hello, Inga');
    });
    it('should greet a person' , function(){
        assert.equal(greet('Siya'),'Hello, Siya');
    });
});