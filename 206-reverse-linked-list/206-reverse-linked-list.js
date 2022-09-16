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
var reverseList = function(head) {
  
 
    
    //while the node is not null
     //if the new linked list is empty 
        //node.val goes in 
    //if not, we are going to make the curr node and swtich 
    //move on to the next node 
    
    //console.log(head.next.next.next.next.next)
    var prev = null
    var next = null
    while(head) {
        // console.log("LIST: ", head)
        // console.log("WHAT IS NEW NODE: ", head.val)
        
            next = head.next //(2, 3)
            head.next = prev //(null, 1)
            prev = head      //(1, 2)
            head = next      //(2, 3)
//          console.log('next:', next)
//          console.log('head.next:', head.next)
//          console.log('prev:', prev)
//          console.log('head:', head)
        
      
    }
   
    
    //return the new reversed link list 
    return prev
    
};