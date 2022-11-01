/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 
 
 start 0
 end: numbers.length - 1
 results arr []
 
 
 */
var twoSum = function(numbers, target) {
    //start var 
    //end var
    //results arr
    
    
    //while the start is less than end 
        //if val of start + val of end equals to target 
            //return results arr push the start+1, end + 1
    
        //if not, check if the target is less than end value
            //decrement the end 
        //else increment the start 
    
    let start = 0
    let end = numbers.length - 1
    //let results = []
    console.log('values', numbers[23], numbers[31])
    while(start <= end) {
        //console.log('sum: ', start, end, numbers[start] + numbers[end] )
        if(numbers[start] + numbers[end] === target) return [start+1, end+1]
        
        if (target <= numbers[start] + numbers[end]) {
            end--
        } else {
            start++
        }
    }
    
};