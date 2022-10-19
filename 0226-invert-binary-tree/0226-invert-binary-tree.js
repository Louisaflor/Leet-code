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
 * @return {TreeNode}
 
 BREATH SEARCH FIRST ALGO (left to right)
 new node: 
      4
    7  2
      3  1
 
 
 [4] grab 4
 if this.left exist (2 so it does) place this node as the this.right in the new tree
   grab it in the queue 
   
 if this.right exist (7 so yes) place this node in the this.left in the new tree
    grab it it in the queue
    
    make sure the also change the node in the new tree 
    
 [2, 7]  <-- grab 2 
 check if this.left exist (1 so yes) place this node in the this.right in new tree
 check if this.right exist (3 so yes) place this node in the this.left in the new tree 
 
 
 */
var invertTree = function(root) {
    //create a new Tree node and make it equal to root.val
    //place new node in a var so we can transverse through it 
    //create a queue and place root inside 
    
    //while the queue has a length 
        //shift the curr node inside 
      //check if the curr node is null
        //if yes, continue
        //if not, swap both the left and the right nodes 
        //then push the left and right node to the queue 
    
    
    //return the root
    
    const Tree = root
    const queue = [root] //[2,7]
    let currNode;
    
    while(queue.length) {
        //console.log('get in here')
        currNode = queue.shift()
        
        //check if the currNode is null 
        if (!currNode) {
            continue;
        } else {
        //swap the left and right children
            let swap = currNode.left
            currNode.left = currNode.right
            currNode.right = swap;
            
            //push the left and right nodes to the queue
            queue.push(currNode.left)
            queue.push(currNode.right)
        }

    }
    
      return root; 
    
};