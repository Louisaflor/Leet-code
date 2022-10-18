/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    //edge case 
    //if s.length <3 return 0
    
    
    //create var called goodString
    //get the length of s - 2
    //starting index, 0
    
    //while the starting index is not equal to length - 2
        //get all three char
        //check if all char are not the same
        //iterate over the char, if they are the same, continue incrementing the index
        //if they are all diff, increment the goodString by 1 and increment the index
    
    //return the goodString
    
    if (s.length < 3) return 0
    
    let goodString = 0
    let sLength = s.length - 2 
    let currIndex = 0;
    
    while (currIndex !== sLength) {
        var isDuplicate = false
        var subString = s.slice(currIndex, currIndex + 3)
        //console.log("subString: ", subString)
        let hash = {}
        
        for (let i = 0; i < subString.length; i++) {
            var sub = subString[i]
            if (hash[sub]) {
               isDuplicate = true
               break;
            } else {
                hash[sub] = 1
            }
        }
        //console.log("what is dup:", isDuplicate)
        if (isDuplicate) {
            currIndex++
        } else {
            currIndex++
            goodString++
        }
        
    }
    
    return goodString;
};