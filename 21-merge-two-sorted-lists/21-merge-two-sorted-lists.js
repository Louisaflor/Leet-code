/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 
 //create two var, each will be the linked list 
//create a new node to store the merge linked lsit 
//while neither of the linked list is null
    //check if the curr val for each node if less and or equal to each other
    //if one of them is less than, we will merge it to the new linked list 
    //move one to the next node 

//find which node is not null, then we could add the rest in the new node
//return the new node 
 */
var mergeTwoLists = function(list1, list2) {
    //edge case 
    
    //let first = list1
    //let sec = list2 
    var result = new ListNode()
    var result2 = result
    
    while (list1 && list2) {
        if (list1.val < list2.val) {
            result.next = list1
            list1 = list1.next
        } else {
            result.next = list2
            list2 = list2.next
        }
        //console.log('result:', result)
        result = result.next
    }
    if (list1) {
        result.next = list1
    } else {
        result.next = list2
    }
    
    return result2.next
};