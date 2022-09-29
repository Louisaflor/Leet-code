/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //store the num counts in a object key: num, value: counter
    
    //iterate over the nums and check if the curr obj has a value 
    //if yes return true
    
    //if done iterating just return false 
    
    var countObj = {}
    
    for (var i = 0; i < nums.length; i++) {
        var currNum = nums[i]
        if (countObj[currNum]) {
            return true
        } else {
            countObj[currNum] = 1
        }
    }
    
    return false
    
};