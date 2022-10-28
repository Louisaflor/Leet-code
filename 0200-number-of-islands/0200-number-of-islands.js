/**
 * @param {character[][]} grid
 * @return {number}
 
 top: m - 1 && m is greater than 1
 bottom: m + 1 && m is less than the length - 1 
 left: n - 1 && n is greater than 1
 right: n + 1 && n is less than the length of m - 1
 
 itereate over the grid (two for loops)
 
 store the connected m x n pixel in a queue 
 while the queue has a length
check if curr pixel is a 2 and 0 continue,

else if the pixel is 1 
  if the top/bottom/left/right is a land === 1 put that pixel in queue


    change the value to + 1 
 
 
  //create a counter var 
    
    //iterate over the grid
        //iterate over the grid again
        //create a queue and put in the first pixel
        
        //if the curr pixel is 1, increment counter by 1 
            //while the queue has a length 
                //shift item in queue 
                //if the item is 2 or 0, continue 

                //if the item is 1 
                  //if m is greater than 1 add the new pixel to the queue [m - 1, n]
                  //if m is less than the length of the grid.length -1 add to queue [m + 1, n]
                  //if n - 1 is greater than 1 add to queue 
                  //if n + 1 is less than m.length - 1 add to queue 
                  //change the value to curr value + 1 

    return counter 

 
 */
var numIslands = function(grid) {
    let counter = 0
    let row;
    let pixel;
    let queue;
    
    
    for (var i = 0; i < grid.length; i++) {
         row = grid[i]
        for (var r = 0; r < row.length; r++) {
            pixel = row[r]
            //console.log('is this true: ', pixel)
            if (pixel === "1") {
                //console.log('AHHHHHHHHHHH ', i, r)
                counter++ 
                queue = [[i,r]]
                
                while(queue.length) {
                   
                    let location = queue.shift()
                    //console.log("popped out: ", location)
                     //console.log('go in here?',grid[location[0]] [location[1]])
                    //console.log('pixel: ', location)
                    if( grid[location[0]][location[1]] === '2' ||  grid[location[0]][location[1]] === '0') continue;
                    
                    
                    if(grid[location[0]] [location[1]] === "1") {
                        //console.log('go in here')
                       if (location[0] > 0) queue.push([location[0] - 1, location[1]]) 
                       if (location[0] < grid.length - 1) queue.push([location[0] + 1, location[1]]) 
                       if (location[1] > 0) queue.push([location[0], location[1] - 1]) 
                       if (location[1] < grid[location[0]].length) queue.push([location[0], location[1] + 1]) 
                        grid[location[0]] [location[1]] = "2"
                    }
                }
            }
        }
    }
   //console.log('grid: ', grid)
    return counter;
    
};