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
 
 create a new link list 
 create 2 variables list1 = head, list2 = head 
 while neither of them are null
 compare which value is the least or equal to 
 place the node in the new node and the transverse the node to the next 
 
 grab the node that is not null... then add it to the new node 
 
 return the new node 
 */
var mergeTwoLists = function(list1, list2) {
    let mergeList = new ListNode()
    let transverseMerge = mergeList
   
   
    while (list1 && list2) {
        if (list1.val < list2.val) {
            mergeList.next = list1
            list1 = list1.next
        } else {
            mergeList.next = list2
             list2 = list2.next
        }
        mergeList = mergeList.next
    }
    
    if (list1) {
        mergeList.next = list1
    } else {
        mergeList.next = list2
    }
    //console.log('mergeList: ', transverseMerge.next)
    return transverseMerge.next
};






