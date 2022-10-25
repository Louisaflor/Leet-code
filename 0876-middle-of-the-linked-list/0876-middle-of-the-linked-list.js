/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 
 //store slow pointer - move every 1 node
 //store fast pointer - move every 2 nodes 
 
 //while fast && fast.next is valid 
  // move the slow.next
  //move the fast to fast.next.next 
  
 //return the slow pointer
 */
var middleNode = function(head) {
    let slow = head
    let fast = head
    
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    
    return slow 
    
};