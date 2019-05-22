describe('findItemsOver' , function(){
    it('should return item that is over' , function(){

        assert.deepEqual(findItemsOver20([{"name":"bananas","qty":27},{"name":"apples","qty":3}]), [{"name":"bananas","qty":27}]);
    });
    it('should return false if there is no item that is over' , function(){

        assert.deepEqual(findItemsOver20([{"name":"bananas","qty":27},{"name":"apples","qty":3}]), [{"name":"bananas","qty":27}]);
    });
});