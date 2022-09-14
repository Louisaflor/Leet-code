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
 */
var invertTree = function(root) {
   //check if the root is null, return root
    if (!root) return root;
    
    //create a queue to keep track of all the nodes and store the root inside 
    var queue = [root]
    

    //while the queue still has items inside 
    while(queue.length) {
         // remove the last item in the queue 
        var current = queue.shift() //should give me the last item in queue as well as remove it
        //check if the queue is null, if so continue (do loop again)
        if (current === null) {
            continue;
        } else {
        //use helper function to swap the current node 
            swap(current)
        //push in the left side to the queue
            queue.push(current.left)
        //push the right side to the queue
            queue.push(current.right)
        }
       
    }
       
    
    //return the root
    return root;
};

var swap = function(node) {
    var temp = node.left
    node.left = node.right
    node.right = temp
    return node
}