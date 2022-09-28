/**
 * @param {number[]} nums
 * @return {number[]}
 
 //create a var to store the length of nums'
 //create var called index and equal to 0
 //creeate a results array
 
 //while i is less than length
 //get the curr num
 //check if the curr num - 1 is the same and the index
 //if NOT the same
    //check if the 'actual' index is the same at the curr num
        //if yes, push the curr num in the the results array
        //swap the number with the index + 1
    //if not, swap the number with the curr index 
 //if the same
 //increment the index 
 
 return the array
 */
var findDuplicates = function(nums) {
    var length = nums.length
    var index = 0
    var results =[]
    
    
    while (index < length) {
        var currNum = nums[index] -1
        if(nums[index] !== nums[currNum]) {
            var swap = nums[index]
            nums[index] = nums[currNum]
            nums[currNum] = swap
        } else {
            index++
        }
    }
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== i+1) {
            results.push(nums[i])
        }

    }
    
    //[3,4,1,2,5]
    
    return results;
//     //console.log(length)
    
//     while (index < length) {
//         var currNum = nums[index]
//          //console.log('num: ', currNum)
//         if (index < length && currNum -1 === index) {
            
//             index++
//              //console.log('get in here?',index)
//             continue;
            
//         } else {
          
//              var prev = currNum - 1
//             if (nums[prev] === currNum) {
//                  if (!(results.includes(currNum))) {
//                      results.push(currNum)
//                  }
//                 var swap = nums[index]
//                 nums[index] = nums[currNum]
//                 nums[currNum] = swap
//                 index++
//                 //console.log('go in here: ', nums)
                
//             } else {
//                 var swap = nums[index]
//                 nums[index] = nums[currNum -1]
//                 nums[currNum -1] = swap
//             }
//         }
//         //index++
//     }
//     //console.log('new nums:', results)
    
    
};
//[1,2,1]