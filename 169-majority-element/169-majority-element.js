/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//     if (nums.length === 1) {
//         return 1
//     }
//     //create obj to store all counted elements
//     //store the highest count element 
    
//     //iterate over the nums array
//     //check if the nums element is inside the obj
//     //if not, create one and put 1 as a value
//     //if yes, increment the count 
//     //check which one has the highest num in obj
    
  
//     //return the element 
    
    
//     var storeCount = {}
//     var highiestCountElement = nums[0]
    
//     for (var i = 0; i < nums.length; i++) {
//         var index = nums[i]
//         if (storeCount[index]) {
//             storeCount[index]++ 
//             console.log("WHAT IS THE INDEX AFTER COUNTING: ", storeCount[index])
//             if (storeCount[index] > storeCount[highiestCountElement]) {
//                 highiestCountElement = index
//             } 
//         } else {
//                 storeCount[index] = 1
//             }
//     }
//     console.log("STORE OBJ: ", storeCount)
    
//     return highiestCountElement
    
// };









/* 
i: array of numbers
o: number in array that contains more than nums.length / 2
c:?? 
e:?? 

//create an obj, store the amt of numbers in array 
//get nums.length / /2

//var mostCount: most numbers in num array equal to 0 

//iterate over nums 
//check if it exist in obj
//if not, create one and make value equal to 1
//if, yes, incremement value by 1 

//check if the curr value is greater than the mostCount 
    //set mostCount equal to curr num 

//check if the most count is greater than nums.length /2 



*/










var majorityElement = function(nums) {
    var countObj = {}
    var numsLength = nums.length / 2
    
    var mostCount = 0;
    var number = nums[0]
    
    for (var i = 0; i < nums.length; i++) {
        var curr = nums[i]
        if (countObj[curr]) {
            countObj[curr]++
        } else {
            countObj[curr] = 1
        }
        
        if (countObj[curr] > mostCount) {
            mostCount = countObj[curr]
            number = curr
        }
    }
    
    return number;
    
}