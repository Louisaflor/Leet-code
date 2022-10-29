/**
 * @param {number[]} nums
 * @return {number[]}
 
 while the start is less than the end 
 if the start index value is greater than or equal to the end index value
 make the start index value equal the curr position for the results array
 decrement the position by 1
 increment the start by 1 
 
 if the start index value is less than the end inex value
 make the curr position for result the end index value 
 decrement the position by 1
 decrement the end by 1 
 
 return the result array
 */
var sortedSquares = function(nums) {
    let start = 0
    let end = nums.length - 1
    let position = end 
    let result = []
    
    while (start <= end) {
        if (nums[start] ** 2 >= nums[end] ** 2) {
            result[position] = nums[start] ** 2
            position--
            start++
        } else {
            result[position] = nums[end] ** 2
            position--
            end--
        }
    }
    
    return result
    
};