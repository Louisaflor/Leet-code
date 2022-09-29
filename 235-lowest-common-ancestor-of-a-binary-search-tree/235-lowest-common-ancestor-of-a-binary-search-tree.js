/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 
 //purpose of this is looking for the common ancestor...
 so we have to look for if we could find their parent?? or if 
 one is connected to another 
 
 //we would look at the current root.val 
 //if p and q are both less than root.val... change root to 
    root.left
 //if p and q are both greater than rool.val... change root
    to the right 
//if none then we break the look and we return root.val 


overall we want to keep transversing through the BST based on whether p and q is either less than or greater (left or right) than the current value

comparing the current val to p and q, 
 */
var lowestCommonAncestor = function(root, p, q) {
    
    while(root) {
        //console.log(root.val, p,  root.val < p.val)
        if (root.val > p.val && root.val > q.val) {
            //console.log('do in here')
            root = root.left
        } else if (root.val < p.val && root.val < q.val) {
            root = root.right
        } else {
            break;
        }
    }
    
    return root
    
};