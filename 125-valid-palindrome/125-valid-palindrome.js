/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function(s) {
//     var letter = 'abcdefghijklmnopqrstuvwxyz'
//     if (s.length === 1) {
//         return true
//     }
    
//     if (s.length === 2) {
//         if ( !(letter.includes(s[0].toLowerCase()) )|| !(letter.includes(s[1].toLowerCase())) ) {
//             return false 
//         } else if (s[0] === s[1]) {
//             return true
//         } else {
//             return false
//         }
//     }
   
//     var palindrome = true
    
//     //store 0 index in a var 
//     var left= 0
//     //store the last index in a var 
//     var right = s.length - 1
    
//     //while the left index is less than the right index
//     while (left < right) {
//         console.log('left:', left, 'right:', right, letter.includes(s[right].toLowerCase()))
//         console.log('checking:', s[left], s[right], !(s[left].toLowerCase() === s[right].toLowerCase()))
//          //check if the left is a letter
//         if (!letter.includes(s[left].toLowerCase())) {
//             //if not, increment left index and break
//             left++
//             //break;
//         } else if(!letter.includes(s[right].toLowerCase())) {
//             //if not, incremenet right index and break;
//             right--
//             //break;
//         } else if (!(s[left].toLowerCase() === s[right].toLowerCase())) {
//             return false
//         } else {
//             left++
//             right--
//         }
//     //check if right and left index is the same letter
//         //if not return false 
        
//     }

//    return true
    
// };

// const isPalindrome = s => {
//   s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
//   for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
//     if (s.charAt(i) !== s.charAt(j)) return false;
//   }
//   return true;
// }

var isPalindrome = function(s) {
    //change everything to lowercase and to replace all non-alphanumeric char 
    var changeS = s.toLowerCase().replace(/[^a-z0-9]/gi, "")
    
    //iterate over the s using two variables i to increment and k to decrement 
    for (var i = 0, k = changeS.length - 1; i <= k; i++, k--) {
        //check if the each letter is the same 
        if (changeS[i] !== changeS[k]) {
            return false
        }
        //if not just return false 
    }
    
    //return true 
    return true
}