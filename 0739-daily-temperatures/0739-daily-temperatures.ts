/*

result []

itereate over the temperatures 
  count
  boolean statement true
    iterate over the temperatures starting at the curr temp
    increment the count 
    if the curr num is larger than temp, add count to
    array
    change boolean to false
    break

    once the inner loop ends if the boolean is true we will add 0 to result
    
return count 

 */


// function dailyTemperatures(temperatures: number[]): number[] {
//     let result:number[] = []
//     let count:number;
//     let noWarmTemp:boolean; 

//     for (let i = 0; i < temperatures.length; i++) {
//         count = 0;
//         noWarmTemp = true;
//         let currTemp:number = temperatures[i]
//         for (let k = i + 1; k < temperatures.length; k++) {
//             count++
//             if (currTemp < temperatures[k]) {
//                 result.push(count)
//                 noWarmTemp = false;
//                 break;
//             }
//         }

//         if(noWarmTemp) result.push(0)
//     }

//     return result;

// };

/*

 
 result []
 stack [0]
 
 iterate over temperatures
    grab last index from stack
    grab the curr num 
    while the curr num is greater than the value of last index
        pop off the last char in stack
        subtract the curr index - last chat in stack
        push num into result 
        
    push the index in stack
    
    iterate over the stack 
        push 0 into result 
*/

function dailyTemperatures(temperatures: number[]): number[] {
    let result:number[] = [];
    let stack:number[] = [0];
    
    for (let i = 1; i < temperatures.length; i++) {
        let currTemp:number = temperatures[i]
        
        while (currTemp > temperatures[stack[stack.length - 1]]) {
            let popLastStack:number = stack.pop() // index of temperature
            result[popLastStack] = i - popLastStack
        }
        stack.push(i)
    }
    
    for (let i = 0; i < stack.length; i++) {
        result[stack[i]] = 0
    }
    
    return result; 
}












