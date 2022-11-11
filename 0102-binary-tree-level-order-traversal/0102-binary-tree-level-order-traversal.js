/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// var levelOrder = function(root) {
//     //create an results array and add root.val as the first element 
//     //create a queue add root inside 
    
//     //while the queue is not empty 
//     //remove the element in the stack 
//     //check if is has ANY children
//     //if yes, only create array that is a valid child 
//     //and push it to results 
//     //push the child to the queue 
    
    
   
//     if (!root) {
//         console.log('go in here?')
//         return []
//     } else if (!root.left && !root.right) {
//         return [[root.val]]
//     }
//      var results = [[root.val]]
//       var queue = [root]

    
//     while (queue.length) {
//         //console.log('queue:', queue)
//         var curr = queue.pop()
//         var isThereLeft = false
//         var isThereRight = false
//         var leftRight;
        
//           if (curr.left) {
//             isThereLeft = true
//             queue.unshift(curr.left)
//         } 
        
//         if (curr.right) {
//             isThereRight = true
//             queue.unshift(curr.right)
//         }
            
//         if (!isThereLeft && !isThereRight) {
//             continue;
//         }
//         if (isThereLeft && isThereRight) {
//           leftRight = [curr.left.val, curr.right.val]
//         } else if (isThereLeft && !isThereRight) {
//             leftRight = [curr.left.val]
//         } else if (!isThereLeft && isThereRight) {
//             leftRight = [curr.right.val]
//         }
//         results.push(leftRight)
        
//     }
    
//     return results;
    
// };
/*
create an empty array to store all levels of nodes 
create a queue and start off with the root 
//while the queue is not empty 
//

*/

var levelOrder = function(root) {
    //edge case 
    if (!root) {
        console.log('go in here?')
        return []
    } else if (!root.left && !root.right) {
        return [[root.val]]
    }
    //store the results array
    
    //create an array that we will store the nodes, store the root 
    
    //while the array still has a length 
    //get the curr length of the array
    //create an empty array
    //iterate over the array using the curr length 
        //we will remove the first element of the array
        //push it to the array in while loop
        //if that node has any left or right children, push it to the array
    //when we are done with the iteration we are going to push that array to the results array
    
    //return the new array
    
    var results = []
    var storeNodes = [root]
    
    while (storeNodes.length) {
        //console.log('store nodes:', storeNodes)
        var children = []
        var currLength = storeNodes.length
        for (var i = 0; i < currLength; i++) {
            var node = storeNodes.shift()
            children.push(node.val)
            if (node.left) storeNodes.push(node.left)
            if(node.right) storeNodes.push(node.right)
        }
        results.push(children)
    }
    return results 
    
}











