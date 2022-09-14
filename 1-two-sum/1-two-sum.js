/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 
 i: array of numbers, target
 o: array of index in that array that equals to the target
 c: time complexity?
 e: ?? 
 
 //create an empty array
 //iterate over the nums array
 //check to see if the curr element + next element is equal to the target
 //if so, add it to the empty array return it 
 //if not return null...?
 */
var twoSum = function(nums, target) {
    //var storeIndex = []
    for (var i = 0; i < nums.length; i++) {
        for (var k = i + 1; k < nums.length; k++) {
            if ( nums[i] + nums[k] === target) {
                return [i,k]
            }
        }
    }
    
    return null;
    
    
};