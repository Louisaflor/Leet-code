/**
 * @param {string} s
 * @return {boolean}
 
 i: string containing brackets 
 o: boolean whether it contains same open and close brackets 
 c: ??
 e: ?? 
 
 //store a true boolean asumming that the s is in order 
 //create a var storing the same brackets in an array
 //split the string by 2 
 //iterate over the  string
 //get the curr and +1 index and check if is matched 
 //if not we just return false 
 //if all valid return true
 */
var isValid = function(s) {
    //edge case
    if (s.length === 1) {
        return false 
    } else if (s.length % 2 !== 0) {
        return false
    }
    var storedBrackets = {
        '[' : ']',
        '{' : '}',
        '(' : ')'
    }
    //create an empty arr to store all of your open brackets 
    var stack = []
    
    //itereate over the s 
    for (var i = 0; i < s.length; i++) {
        console.log("is it true?", i, s[i] in storedBrackets, s[i] )
        console.log("else if:", i,  s[i] === storedBrackets[stack[stack.length - 1]] )
        if (s[i] in storedBrackets) {
            stack.push(s[i])
        } else if ( s[i] === storedBrackets[stack[stack.length - 1]]) {
            stack.pop();
        } else {
            return false;
        }
        console.log('stack', stack)
    }
    //check if curr element is an open string
    //if not, check if the close bracket is the same as the open
    
    if (stack.length === 0) {
        return true
    } else {
        return false;
    }
    
    //check if the stack is empty 
    //if empty return true
    
};