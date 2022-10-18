/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //iterate over the t and create an obj that will store the amt of letters
    
    //iterate over the s and for each char check if it is in obj
    //check if num is 0
    //is not subtract from 1
    
   
    var tObj = {}
    
    for (var i = 0; i < t.length; i++) {
        if (tObj[t[i]]) {
            tObj[t[i]]++
        } else {
             tObj[t[i]] = 1
        }
    }
    console.log(tObj)
    for (var i = 0; i < s.length; i++) {
        var char = s[i]
        if (tObj[char]) {
            if (tObj[char] === 0) {
                return false 
            } else {
            tObj[char]--
            }
        } else {
            return false
        }
    }
    
    //check if the obj still has numbers greater than 0 
    var keys = Object.values(tObj)
    console.log('now keys,', keys)
    if (keys.includes(1)) {
        return false 
    } else {
        return true
    }
};