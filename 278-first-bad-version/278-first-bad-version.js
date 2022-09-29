/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     
     true- bad
     false-good
     get the middle 
     
     if we get a good, check if the right is bad
     if yes, return the number
     if not, get the new middle on the right side 
     left = middle + 1 
     
     if we get a bad, check if the left is good,
     if yes, return the number
     if not, get the new middle on the left side 
     right = middle - 1
     
     change the middle 
     // good,bad,bad,bad,bad,bad,bad
     */
    return function(n) {
        //edge case 
        if (n === 1) {
            return 1
        }
        
        let left = 1
        let right = n
        let middle = Math.floor((left + right) / 2)
        
        while (right >= left) {
            if (isBadVersion(middle)) {
               if (isBadVersion(middle - 1) === false) {
                   return middle
               } 
                right = middle - 1
            } else {
                if (isBadVersion(middle + 1) === true) {
                    return middle + 1
                }
                left = middle + 1 
            }
            
            middle = Math.floor((left + right) / 2)
        }
        
    };
};