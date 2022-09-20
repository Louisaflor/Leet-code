/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    //check if s length is greater than 1
    //if not, return 1
    if (s.length === 1) {
        return 1
    }
    
    //count 
    var count = 0
    //stack
    var store = []
    
    //itereate over the array 
    //check if element is in stack
    //if not, add to stack
    //if yes, remove the from stack and increment by 2 
    for (var i = 0; i < s.length; i++) {
        if (store.indexOf(s[i]) !== -1) {
            var index = store.indexOf(s[i])
            store.splice(index, 1)
            count +=2
        } else {
            store.push(s[i])
        }
    }
    
    //check if the length of the stack is greater than 0 
    //is yes, return total count + 1
    if (store.length > 0) {
        return count + 1
    } else {
        
    }
    //if no, return total count
    return count 
};