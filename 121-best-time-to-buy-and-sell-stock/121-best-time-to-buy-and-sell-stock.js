/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     //edge case 
//     //if length array is 1? return 0
//     if (prices.length === 1) {
//         return 0
//     }
    
//     //create empty variable to store the index when buying item
//     var buyingIndex = 0
//     var smallest = prices[0]
//     //create empty var to store the index to sell 
   
    
//     //iterate over the array
//     for (var i = 1; i < prices.length; i++) {
//         //find the samllest number 
//         if (prices[i] < smallest ) {
//             smallest = prices[i]
//             buyingIndex = i
//         }
//     }
    
    
//     //check if the index is the last one, to return 
//     console.log(buyingIndex , prices.length - 1)
//     if (buyingIndex === prices.length - 1) {
//         return 0; 
//     }
    
//     var sellingIndex = 0
//     var largest = prices[buyingIndex + 1]
    
//     //iterate again 
//     for (var k = buyingIndex + 2; k < prices.length; k++) {
//         //find the largest number after the index when buying 
//         if (prices[k] > largest) {
//             largest = prices[k]
//             sellingIndex = k
//         }
//     }
    
    
//     //subtract the two numbers and check if is proftable 
//     if (largest - smallest <= 0) {
//         return 0
//     } else {
//         return largest - smallest
//     }
//     //if yes, return number, if not return 0
    
    
    
// };

// var maxProfit = function(prices) {
//     //store the largest 
//     var largestBuck = 0
//     var lowestDay = 0
    
//     //iterate over the prices 
//     for (var i = 0; i < prices.length; i++) {
//         for (var k = i + 1; k < prices.length; k++) {
//             if (prices[k] - prices[i] > largestBuck) {
//                 var newLargest = prices[k] - prices[i]
//                 largestBuck = newLargest
//             }
//         }
//     }
//         //iterate over the prices starting at i
//           //find the largest num
    
//     return largestBuck
// }

var maxProfit = function(prices) {
    var largestBuck = 0
    var minDay = Number.MAX_VALUE
    
    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < minDay) {
            minDay = prices[i]
        } else {
            var checkIfLarge = prices[i] - minDay
            if ( checkIfLarge > largestBuck) {
                largestBuck = checkIfLarge
            }
        }
    }
    return largestBuck
}