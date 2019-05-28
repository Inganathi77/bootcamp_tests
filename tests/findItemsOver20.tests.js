describe('findItemsOver20' , function(){
    it('should return item that is over 20' , function(){

        assert.deepEqual(findItemsOver20([{"name":"bananas","qty":27},{"name":"apples","qty":3}]), [{"name":"bananas","qty":27}]);
    });
    it('should return false if items are less than 20' , function(){

        assert.deepEqual(findItemsOver20([{"name":"bananas","qty":27},{"name":"apples","qty":3}]), [{"name":"bananas","qty":27}]);
    });

});