/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    //edge case 
     //push the newInterval into intervals 
   // if the intervals has length of 1, return empty interval
    
 
    //sort the elements by the first index of each interval (element)
    // edge case, check if the length of the interval is 1, return intervals 
    
    //create a new array 
    //create a new var called prev, and will be the first interval in the array
    
    //iterate over the invterval array starting with one 
    //check if the curr interval and the prev interval is overalapping 
    //if yes, change prev by grabbing the new min and max 
    //if no, push the prev interval into the array, change the prev to the curr 
      //interval 
    
    //if we are at the last index, push the interval into the array
    
    //return the new array
    
    
    intervals.push(newInterval)
    if (intervals.length === 1) return intervals;
//will sort the elements in the array in accending order where 0 index is less than
    intervals.sort((a,b) => a[0] - b[0])
    
    var results = [], prev = [intervals[0][0], intervals[0][1]]
    
    
    
    for (var i = 1; i< intervals.length; i++) {
        var curr = intervals[i]
        
        if (overlapping(prev, curr)) {
            prev[0] = Math.min(prev[0], curr[0]);
            prev[1] = Math.max(prev[1], curr[1])
        } else {
            //push the prev to the new array and change prev to curr array
            results.push([...prev])
            prev[0] = curr[0]
            prev[1] = curr[1]
        }
        
        //if we hit the last element of the array, push to new array
        if (i === intervals.length - 1) results.push([...prev])
    }
    
    return results;
    
};
    
var overlapping = function(prev, curr) {
    return  prev[1] >= curr[0] && prev[1] <= curr[1]
            || prev[0] >= curr[0] && prev[0] <= curr[1]
            || prev[0] <= curr[0] && prev[1] >= curr[1];
}

//create a new function that checks if the two intervals are overlapping 
/*
if prev[1] is greater than or equal to curr[0]
or if prev[1] is less 
*/
