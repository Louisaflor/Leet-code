/**
 * @param {number[]} nums
 * @return {number[]}
 [-4,-1,0,3,10]
  16        100
  16      9
     1    9
     1 0
 [0,1,9,16,100]
 start 
 end
 position for new array = end 
 
 while start < end 
 square start and end and compare which item is the greatest 
 new arrray position will be the greatest number 
 decrement the position and the end 
 
 else 
 new 
 
 
 */
var sortedSquares = function(nums) {
    let newArr = []
    let start = 0
    let end = nums.length - 1
    let position = end 
    
    while (start <= end) {
        // check if the start value is greater than end value (square both of them)
        if (Math.pow(nums[start], 2)  >= Math.pow(nums[end], 2)) {
            //make the square value equal to the newArr position
            newArr[position] = Math.pow(nums[start], 2)
            //incremenet the start by 1 and decrement the position by 1
            start++
            position--
        } else { //if the end value is greater than the start value (square)
            //make the square value equal to the newArr position 
            newArr[position] = Math.pow(nums[end], 2)
            //decrement the end by 1 and position
            end--
            position--
        }
            
    }
    
    return newArr;
    
};