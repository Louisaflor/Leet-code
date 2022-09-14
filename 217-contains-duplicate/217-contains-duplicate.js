/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
i: aray of numbers 
o: boolean, if there are duplicate numbers in the array 
c:?? 
e:?? 

//create an empty arr to store non duplicate num
//iterate over the nums array
//check if that char is in the arr
//if not, add into arr
//if yes, return true
*/
// var containsDuplicate = function(nums) {
//     var nonDupArr = []
    
//     for (var i = 0; i < nums.length; i++) {
//         var char = nums[i]
//         if (nonDupArr.includes(char)) {
//             return true
//         }
        
//         nonDupArr.push(char)
//     }
    
//     return false 
    
// };

//create a new Set
//iterate over the nums array
//add in the char to the set
//check if the set is the same as the nums arr
//if yes, return false 
//otherwise return true

var containsDuplicate = function(nums) {
    var nonDup = new Set()
    
    for (var i = 0; i < nums.length; i++) {
        nonDup.add(nums[i])
    }
    
    if (nonDup.size === nums.length) {
        return false 
    } else {
        return true
    }
   
    
};