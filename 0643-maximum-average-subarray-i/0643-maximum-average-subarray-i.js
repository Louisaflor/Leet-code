/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 
 find the max avg of subarray

 max val avg
 sum
 
   create for loop starting from start and ending in k 
    add the val to the total
    
    make the max equal to the total
 
    itereate over the nums starting at k
        subtract sum from the value of i - k and them add value of i
        compare the max value 
        
        return the max value divide by k
    
 */
var findMaxAverage = function(nums, k) {
    let sum = 0
    let max = 0
    
    for (let i = 0; i < k; i++) {
        sum+=nums[i]
    }
    
    max = sum
    
    for (let i = k; i < nums.length; i++) {
        //sutract the first item and slide the next item
        sum = sum - nums[i - k] + nums[i]
        max = Math.max(max, sum)
    }
    
    return max / k 
    
    
};