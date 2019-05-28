describe('findItemsOver' , function(){
    it('should return items that have a higher quantity' , function(){

        assert.deepEqual(findItemsOver(itemslist,threshold), result)
    });
    it('should return an empty array for products that are not over threshold' , function(){

        assert.deepEqual(findItemsOver( [{"name":"apples","qty":3},{"name":"bananas","qty":17}], 10), [{"name":"bananas","qty":17}]);
    });
});