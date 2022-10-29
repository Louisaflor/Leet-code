/**
 * @param {number[]} nums
 * @return {number[]}
 
 
 cretae a new array
 
 itereate over nums 
 for every char, square and push the new array
 
 
 */
var sortedSquares = function(nums) {
    let sortedArr = []
    
    for (var i = 0; i < nums.length; i++) {
        var char = nums[i]
        sortedArr.push(char * char)
    }
    // var sorted = sortedArr.sort((a,b) =>  a > b)
    // console.log(sorted)
    
     sortedArr.sort((a, b) => {
        return a - b
    })
    
    return sortedArr
};