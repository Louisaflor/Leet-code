/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 
 create a hash  
 itereate over nums 
    check if each num is in the hash 
    if not, make key equal to 1
    if yes, increment the key
    https://store.steampowered.com/app/1812820/Bitburner/
grab all keys in hash and turn them into an array
sort the array 
slice the array based on k
return slice
 
 */
var topKFrequent = function(nums, k) {
    let hash = {}
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (hash[num]) {
            hash[num]++
        } else {
            hash[num] = 1
        }
    }
    
    while (k !== 0) {
        let max = 0
        let key;
        for (let item in hash) {
         if (hash[item] > max) {
             max = hash[item]
             key = item
         }
    }
        result.push(key)
        delete hash[key]
        k--
        
    }
    
    return result
    
    
    
//     let values = Object.values(hash) //count 
//     let keys = Object.keys(hash) // nums
//     console.log('what is hash: ', hash)
//     console.log('what is keys: ', keys)
    
//     return keys.slice(0, k)
    
    
};