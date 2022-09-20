/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     var results = []
//     //edge cases
//     if (nums.length < 3) {
//         return results
//     }
    
//     if (nums.length === 3) {
//         if (nums[0] + nums[1] + nums[2] === 0) {
//             results.push(nums)
//             return results 
//         } else {
//             return results
//         }
//     }
    
//     for (var i = 0; i < nums.length; i++) {
//         var firstNum = nums[i]
//         for (var k = i + 1; k < nums.length; k++) {
//             var secNum = nums[k]
//             for (var p = k + 1; p < nums.length; p++) {
//                 var thirdNum = nums[p]
//                 if (firstNum + secNum + thirdNum === 0) {
//                     var create = [firstNum, secNum, thirdNum]
//                     results.push(create)
//                 }
//             }
//         }
//     }
    
//     return results;
// };

var threeSum = function(nums) {
    //sort the nums array
    nums.sort((a,b) => a -b);
    var results = []
    //console.log('nums:', nums)
    
    //iterate over nums array
    for (var i = 0; i < nums.length; i++){
    //we do no want to use any duplicates numbers
        if (nums[i] === nums[i - 1] && i > 0) continue; 
        var target = 0 - nums[i]
        var left = i + 1
        var right = nums.length -1 
    //create while loop to check on the left and right indexes 
        while (right > left) {
            var sum = nums[left] + nums[right]
      //if the sum is larger than target, we decrement right by 1
      //meaning we dont need the number 
            if (sum > target) {
                right-- 
            } else if (sum < target) { //same if the left is smaller than target
            //we dont need this index since we will never hit the target
                left++
            } else {
            //so now we know that sum === to target we can push it 
            //cause that mean that it will equal to 0 
                results.push([nums[i], nums[left], nums[right]])
            //but now we have to check if there are any duplicates in the 
            //left and right side 
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right --;
                left++;
                right--
            }
            
        }
    }
    
    return results;
}