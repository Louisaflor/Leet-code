/**
 * @param {number[]} height
 * @return {number}
 we need to find the largest area that can fill up water 
 area = width(length) x height(shortest height)
 //store the largest area
 //two pointer method
 //one point on very left one point very right 
 //get the area and check if it the largest 
 //if yes, change 
 to change pointers we need to change which pointer is the least 
 
 */
var maxArea = function(height) {
    var largest = 0
    var left = 0
    var right = height.length - 1
    
    while (right > left) {
        var shortest;
        var length = right - left;
        var leftShort = false
        if (height[left] <= height[right]) {
            shortest = height[left]
            leftShort = true
        } else {
            shortest = height[right]
        }
        var area = shortest * length 
        largest = Math.max(area, largest)
        
        if (leftShort) {
            left++
        } else {
            right--
        }
    }
    
    return largest;
};