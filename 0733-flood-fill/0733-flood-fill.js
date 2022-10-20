/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 
 keep track of my sr,sc in a queue
 
 know how to get all 4 directional without getting a error
 top: sr: -1 --- make sure that the index is greater than 0
 bottom: sr: +1 --- make sure that index is less than the length -1 of the image 
 left: sc: -1 --- make sure that the index is greater than 0
 right: sc: +1 --- make sure that the index is less than the length -1 of the row 
 
 store the number of the image[sr][sc] in a variable 
 
 while the length of queue is not equal to 0 
 pop off the pixel in queue 
 if the pixel is the same value as the pixel we store in a var, 
 change it into the new color AND get all 4 directions and place it into the queue 
 
 return the image 
 
 */
var floodFill = function(image, sr, sc, color) {
    //if (sr === sc && sc === color) return image
    const currPixelValue = image[sr][sc] //provide me the value I will use to check 
    const stack = [ [sr,sc] ]
    const visited = {}
    
    while (stack.length) {
        const srSc = stack.pop()
        const currValue = image[srSc[0]][srSc[1]]
        
        if (currValue === currPixelValue && currValue !== color ) {
           image[srSc[0]][srSc[1]] = color
            visited[srSc] = true;
            //get all 4 direction and put it in queue
            
            //top
            if (srSc[0] > 0  ) stack.push([ srSc[0] -1, srSc[1] ])
            //bottom
            if (srSc[0] < image.length - 1 ) stack.push([ srSc[0] + 1, srSc[1] ])
            //left 
            if (srSc[1] > 0 ) stack.push([ srSc[0], srSc[1] -1 ])
            //right
            if(srSc[1] < image[srSc[0]].length - 1 ) stack.push([ srSc[0], srSc[1] + 1 ])
        } 
    }
    
    return image;
    
};