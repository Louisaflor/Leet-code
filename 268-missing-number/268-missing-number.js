/**
 * @param {number[]} nums
 * @return {number}
 
 //get the length of the array
 //create a var called index, store 0 <-- starting my swaps 
 
 //while the index is not greater than the length of the array
 //check if the curr index is the same as the curr number
 //if yes, increment the index by 1
 //if not, swap the curr number and in the correct index 
 
 //iterate over the now sorted nums array
 //if we are at the last index of the array
 return index + 1 
 //otherwise if the number + 1 is the not the number, return that number + 1 

 
 */
var missingNumber = function(nums) {
    var length = nums.length
    var index = 0
    
    while (index !== length) {
        var notMissing = false
        //console.log('index: ', index)
        for (var i = 0; i < nums.length; i++) {
          
            if (nums[i] === index) {
                  //console.log('practice: ', index, i)
                notMissing = true
                index++ 
                break;
            } 
        }
        
        if (notMissing) {
            continue;
        } else {
            return index
        }
        
    }
    
    return length
    
};

//[3,2,0,1,4]
//[1,2,0,3,4]
//[2,1,0,3,4]
//[0,1,2,3,4]

//[5,3,1,2,0,6]
//[6,3,1,2,0,5]
//[]