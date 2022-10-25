/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 
 slow pointer - moves one at a time 
 fast pointer - moves two at a time 

while the fast and fast.next is valid 
if the fast is equal to the slow return true 

once while loop stops, return false, meaning that there was no cycle 
 
 */
var hasCycle = function(head) {
    if (head === null) return false 
    let slow = head 
    let fast = head.next 
    
    while (fast && fast.next) {
        if (slow === fast) {
            return true
        }
        slow = slow.next
        fast = fast.next.next
    }
    
    return false 
    
};