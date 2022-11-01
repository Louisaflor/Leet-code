/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 

 
 [2,0,1]
 [1,0,2]
 
 if the start value is greater than the end value 
 switch values palce 
 increment start by 1 
 
 if the value is the same for, decrement the end by 1 
 
 if end value is greater than , do nothing 
 increment start by 1
 
 
  [2,0,2,1,1,0]

 */
var sortColors = function(nums) {
        let start = 0;
        let end = nums.length - 1;
        let index = 0;
    while (index <= end) {
      if (nums[index] === 0) {
          //console.log('start:', start, 'index:', index)
        swap(nums, start++, index++);
          // start++
          // index++
      } else if (nums[index] === 1) {
        index++;
      } else {
        swap(nums, end--, index);
      }
    }
};

var swap = function(nums, index1, index2) {
    console.log('swap ind1: ', index1, 'index2: ', index2)
    let temp = nums[index1]
    nums[index1] = nums[index2]
    nums[index2] = temp
}