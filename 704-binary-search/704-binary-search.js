/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 
 i: array of numbers, target
 o: index 
 c: O(log n)
 e: ?? if the length is 0 return -1. if 1 check if target is in the array
 */
// var search = function(nums, target) {
//     //edge cases
//     if (nums.length === 0){
//         return -1
//     }
    
//     if (nums.length === 1) {
//         if (nums[0] === target) {
//             return 0
//         } else {
//             return -1
//         }
//     }
    
//     //middle 
    
//     //left
//     var left = 0
//     //right
//     var right = nums.length -1
//     var middle = Math.floor((left + right) / 2)
//     //console.log('middle outside:', middle)
    
//     //while right is greater than left 
//     while (right >= left) {
//         //console.log('index', nums[middle], middle)
//         //check if the middle is the target
//         if (nums[middle] === target) {
//             //if yes, return index
//             return middle
//         }
        
//     //check if target it greater than or less than middle
//         if (nums[middle] < target) {
//             //if greater than left = middle + 1
//             left = middle + 1
//         } else {
//             //if less than right = middle - 1
//             right = middle - 1
//         }
//       //change middle Math.floor()
//        // console.log('what is left:', left)
//         //console.log('what is right:', right)
//         middle = Math.floor((left + right) / 2)
//         //console.log('inside middle:', middle)
    
//     }
    
    
    
//     return -1
    
// };















var search = function(nums, target) {
    //get left index
    //get right index
    //get the middle index 
    
    //while the right is greater than the left 
    //check if the target is at the middle index
    //if yes, return the middle
    //if not check if then target is greater than or less than the num in middle index
    //if less than, make the right = middle -1
    //if greater than, make left = middle + 1
    //always chanage the middle 
    
    //return -1 if it does while loop stops 
    
    let left = 0
    let right = nums.length - 1
    let middle = Math.floor((left + right) / 2)
    
    while (right >= left) {
        let currNum = nums[middle]
        if (currNum === target) {
            return middle
        }
        if (target < currNum) {
            right = middle - 1
        } else {
            left = middle + 1
        }
        middle = Math.floor((left + right) / 2)
    }
    
    return - 1
}




















