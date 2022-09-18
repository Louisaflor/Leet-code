/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //create an array
    //array[1] = 1
    //array[2] = 2
    
    //iterate over the array starting with 3
    //for each new array index = (n - 1) + (n - 2) 
    
    
    //return array[n]
    
    var array = []
    array[1] = 1
    array[2] = 2
    
    for (var i = 3; i <= n; i++) {
        array[i] = array[i - 1] + array[i - 2]
    }
    console.log('array:', array)
    return array[n]
    
};

