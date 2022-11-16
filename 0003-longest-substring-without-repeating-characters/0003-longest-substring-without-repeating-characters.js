/**
 * @param {string} s
 * @return {number}
 
 //edge case
//if the length of string is 1 return 1

//var called longest 
//create empty array 

//iterate over the array
//check if char is in array
//if not, add into array

//if yes, check if the length of the 
array is longer than the longest var
restart the array and add the curr char 

//return the longest var 
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 1) {
        return 1
    }
    
    var longest = 0
    //var subArray = []
    
    // for (var i = 0; i < s.length; i++) {
    //     var element = s[i]
    //     if (!(subArray.includes(element))) {
    //         subArray.push(element)
    //         longest = Math.max(subArray.length, longest)
    //     } else {
    //         longest = Math.max(subArray.length, longest)
    //         subArray = [element]
    //     }
    // }
    
    for (var i = 0; i < s.length; i++) {
        //var element = s[i]
        var subArray = []
        for (var k = i; k < s.length; k++){
            if (!(subArray.includes(s[k]))) {
                subArray.push(s[k])
                longest = Math.max(subArray.length, longest)
            } else {
                 longest = Math.max(subArray.length, longest)
                break;
            }
            //console.log('subArray: ', subArray)
            //console.log('longest: ', longest)
        }
     }
    
    
    return longest
    
};