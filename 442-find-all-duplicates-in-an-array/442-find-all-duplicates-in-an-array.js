/**
 * @param {number[]} nums
 * @return {number[]}
 
 [1,1,2]
 [4,3,2,7,8,2,3,1]
 [8,3,2,7,4,2,3,1]
 [1,3,2,7,4,2,3,8]
 [1,2,3,7,4,2,3,8]
 [1,2,3,3,4,2,7,8]
 [1,2,3,4,3,2,7,8]
 check if the num is in the correct place 
 //if not, 
  /check if curr index num is the same as the curr num?
   //if it is, increment i
   //if not we swap 
  
  //otherwise
   //i++ 
   
   //itereate over the nums 
   check if the element is not in its correct index
   push it to and array
   
   return the array
   
 */
var findDuplicates = function(nums) {
    let n = nums.length
    let i =  0
    let results = []
    
    while (i < n) {
        //console.log('i:', i)
        var currNum = nums[i] // NUMBER 
        if (currNum - 1 !== i) {
            if (currNum === nums[currNum - 1]) {
                //console.log('it goes here')
                i++
                //console.log('what is i:', i)
            } else {
                var swap = currNum
                nums[i] = nums[currNum - 1]
                nums[currNum - 1] = swap
            }
        } else {
            i++ 
            //console.log('other i here: ', i)
        }
        //console.log('array: ', nums)
    }
    
    for (var index = 0; index < nums.length; index++) {
        var currNum = nums[index]
        if (currNum - 1 !== index) {
            results.push(currNum)
        }
    }
    
    return results;
    
};