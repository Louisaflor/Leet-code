/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 
 given certain amt of x,y points and i have to find k amt of points that are closest to the (0,0) origin 
 formula to find the distance of two points 
 is sqrt((x2 - x1)^2 + (y2 - y1)^2)
 
 i: array of x,y keys and an integer
 o: array of k amt of x,y keys that are closesting to 0,0
 c:?? 
 e:?? 
 
 //if points.length and k is 1, return points
 
 //create an empty array to store my x,y points
 
 //iterate over the points array
 for each element find the sqrt and push the number into the new array
 
 //create while loop, while k !== 0
 //iterate over the new array and find the smallest number 
 //
 
 */

var kClosest = function(points, k) {
    //edge case 
    if (points.length === 1 && k === 1) {
        return points 
    }
    var sqrt = []
    var results = []
    
    for (var i = 0; i < points.length; i++) {
        var distance = distances(points[i], [0,0])
        sqrt.push(distance)
    }
    //console.log('sqrt: ', sqrt)
    
    while(k !== 0) {
        var smallest = sqrt[0]
        var index = 0
        for (var i = 1; i < sqrt.length; i++) {
             //console.log('index: ', i)
            if (sqrt[i] < smallest) {
                smallest = sqrt[i]
                index = i
                
            }
            
        }
        
        results.push(points[index])
        //console.log('results?: ', index)
        points.splice(index,1)
        sqrt.splice(index,1)
        k--
    }
    
    return results;
    
};

var distances = function(point1, point2) {
    var x = Math.pow(( point1[0] - point2[0]), 2)
    var y =  Math.pow(( point1[1] - point2[1]), 2)
    //console.log('x: ', x, "y", y)
    return Math.sqrt( x+ y)
}

//4
//7


//12
//26
//12