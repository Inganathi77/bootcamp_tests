describe('findItemsOver' , function(){
    it('should return item that are over' , function(){

        assert.deepEqual(findItemsOver([{"name":"bananas","qty":27},{"name":"apples","qty":3}]), [{"name":"bananas","qty":27}]);
    });
    it('should return false if there are items that are under' , function(){

        assert.deepEqual(findItemsOver([{"name":"bananas","qty":27},{"name":"apples","qty":3}]), [{"name":"bananas","qty":27}]);
    });
});