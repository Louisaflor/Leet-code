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


function dailyTemperatures(temperatures: number[]): number[] {
    let result:number[] = []
    let count:number;
    let noWarmTemp:boolean; 

    for (let i = 0; i < temperatures.length; i++) {
        count = 0;
        noWarmTemp = true;
        let currTemp:number = temperatures[i]
        for (let k = i + 1; k < temperatures.length; k++) {
            count++
            if (currTemp < temperatures[k]) {
                result.push(count)
                noWarmTemp = false;
                break;
            }
        }

        if(noWarmTemp) result.push(0)
    }

    return result;

};