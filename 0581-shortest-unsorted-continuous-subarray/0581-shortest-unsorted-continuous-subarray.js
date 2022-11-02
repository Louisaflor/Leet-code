/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let start = 0
    let end = nums.length - 1
    
    while (start < nums.length - 1 && nums[start] <= nums[start + 1]) start++
    //console.log("what is start: ", start)
    if (start === nums.length - 1) return 0
    
    while (end > 0 && nums[end] >= nums[end - 1]) {
        end--
    } 
    
   let min = Infinity 
   let max = -Infinity 
   
  //console.log('ahh234: ', start, end)
   
   for (let i = start; i <= end; i++) {
       min = Math.min(min, nums[i])
       max = Math.max(max, nums[i])
   }
    
    //console.log("min: ", min, 'max: ', max)
    
    while (start > 0 && nums[start - 1] > min) start--
    
    while (end < nums.length - 1 && nums[end + 1] < max) end++
    
     //console.log('ahh: ', start, end)
    
    return end - start + 1 
    
   
    
};