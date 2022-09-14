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
 * @return {number}
 */

// i: BST
// o: largest num of noces along that creates the longest path starting from the head
// c: ?? 
// e:?? if there is only a head?? 

/*
create a new var that will store the count 
//create a helper function
//base case 
//if the node is null return 0
//recursive case 
//repeat helper function again but the left side 
//repeat helper function again but on right side 
//find out if left or right has the largest num (length) plus one
//add it to the count variable

*/
var maxDepth = function(root) {
    var count = 0
    
    function DFS(node) {
        if (node === null) {
            return 0
        }
        
        var left = DFS(node.left)
        var right = DFS(node.right)
        var largestNum = Math.max(left, right) + 1
        count = largestNum
        return largestNum 
    }
    
    DFS(root)
    return count
    
};