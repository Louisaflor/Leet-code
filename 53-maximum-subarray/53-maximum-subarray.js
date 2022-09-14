
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//     //edge case 
//     //if the length is 0, return 0
//     if (nums.length === 0) {
//         return 0;
//     }
//     //if the length is 1, return that number
//     if (nums.length === 1) {
//         return nums[0]
//     }
    
//     //set sum to 0
//     var curr_subarr = 0
//     //assumme the max arr is negative infinity b/c we are looking for the highest num 
//     var max_subarr = -Infinity
    
//     //itereate over the nums array
//     for (var i = 0; i < nums.length; i++) {
//         console.log('what is nums', nums[i])
//         //add curr_sub to nums[i]
//         curr_subarr+=nums[i]
//         //compare which one is the largest 
//         max_subarr = Math.max(curr_subarr, max_subarr)
//         if (curr_subarr < 0) {
//             curr_subarr = 0
//         }
        
//         console.log('largest: ', max_subarr)
        
//     }
    
//     //return 
//     return max_subarr
    
// };


 var maxSubArray = function(nums) {
     if (nums.length === 0) return 0
     if (nums.length === 1) return nums[0]
     
     var curr_subarr = 0
     var max_subarr = -Infinity 
     
     for (var i = 0; i < nums.length; i++) {
          curr_subarr+=nums[i]
         max_subarr = Math.max(curr_subarr, max_subarr)
        if (curr_subarr < 0) {
            curr_subarr = 0
        }
     }
     return max_subarr
 }