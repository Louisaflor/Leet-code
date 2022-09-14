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
 
 i: two singly linked list (sorted)
 o: combine two linked list together (sorted)
 c: n/a
 e: if one linked list length is longer than the other 
 */
// var mergeTwoLists = function(list1, list2) {
//     //create a new Linked List 
//     var newLinked = new ListNode()
//     //store the new Linked list in a variable 
//     var merge = newLinked
    
//     //while the curr l1 & l2 values still exist 
//     while (list1 && list2) {
//          //check which value is the smallest
//         if (list1.val < list2.val) {
//            newLinked.next = list1
//             //move on to the next node 
//             list1 = list1.next 
//         } else {
//             newLinked.next = list2
//             list2 = list2.next 
//         }
//         //place smallest value in the new linked list .next
//         //also move forward with the next node in l1 or l2 
//        // also move on the the next null node in the new linked list 
//         newLinked = newLinked.next 
//     }
     
    
//     //check which list is the longest and add it to the end of the new linked list 
//     if (!list1) {
//         newLinked.next = list2
//     } else if (!list2) {
//          newLinked.next = list1
//     }
    
//     //return 
//     return merge.next
// };


var mergeTwoLists = function(list1, list2) { 
    console.log("What is list1 list: ", list1)
    //create a new linked list 
    var newList = new ListNode()
    //store the linked list in a var 
    var linkedList = newList
    
    //while the list2 and list 2 is not undefined/null 
    while (list1 && list2) {
      //check which val is the smallest 
        if (list1.val < list2.val) {
        // add either list1 or list2 in the new linkedList.next
            newList.next = list1
       // move on the next node in either list1 or list2
            list1 = list1.next
        } else {
            newList.next = list2
            list2 = list2.next
        }
      
    //move on the the next null node in the new linkedList 
        newList = newList.next
    }
     
    
    //check which list is undefined so we can add the reamining list in the new linkedList
    if (!list1) {
        newList.next = list2
    } else if(!list2) {
        newList.next = list1
    }
    
    //return 
    return linkedList.next 
}
