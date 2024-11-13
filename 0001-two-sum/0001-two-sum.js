/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 
 create an empty arr that will store the index 
 create a var that will have the first index of the nums
 while the var is not the last index
    create for loop that begins with the var
        if the var + the curr index equal to the target
            store the index in the arr OR return and arr with the index
        return the new arr
 */
var twoSum = function(nums, target) {
    let currIndex = 0;
    while (currIndex !== nums.length - 1) {
        for (let i = currIndex + 1; i < nums.length; i++) {
            if (nums[currIndex] + nums[i] === target) {
                return [currIndex, i]
            }
        }
        currIndex++
    }
    
};