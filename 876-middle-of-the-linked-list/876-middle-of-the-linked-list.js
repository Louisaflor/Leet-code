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
 */
// var middleNode = function(head) {
//     if (head.next === null) {
//         return head
//     }
//     var values = []
//      var testHead = head
//     while (testHead) {
//         values.push(testHead.val)
//         testHead = testHead.next
//     }
//     console.log('values: ', values)
//     var middle = Math.floor(values.length / 2)
//     console.log('middle: ', middle)
//     while(head) {
//         if (head.val === values[middle]) {
//             return head
//         }
//         head = head.next
//     }
// };

/*
//create a var, slow and fast and equal it to head 

//while fast and fast.next is valid 
//change the slow to slow.next
//change fast to fast.next.next 

return slow 
*/

var middleNode = function(head) {
    var slow = head
    var fast = head
    
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    
    return slow
    
}