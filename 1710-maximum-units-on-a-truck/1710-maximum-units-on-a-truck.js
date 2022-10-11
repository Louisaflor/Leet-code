/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 
 i: array of boxes = [num of boxes, num of items inside box], size of truck(num)
 o: total size of boxes times the units inside the box added together
 c: 
 e: 
 
 //create a unit counter
 //sort the array in decending order based on the unit of boxes
 
 //iterate over the boxTypes 
 //check if the truckSize is greater than the num of boxes
 //if yes, multiple boxes x unit 
    //incremenet the unit counter 
 //if not, multiple the remainder of boxes x unit 
    //incremenet the unit counter 
    //break the for loop 
    
    
    return the unit counter 
 */
var maximumUnits = function(boxTypes, truckSize) {
    let unitTotal = 0
    boxTypes.sort((a, b) => {return b[1] - a[1]})
    //console.log('sorted boxes: ', boxTypes)
    
    for (let i = 0; i < boxTypes.length; i++) {
        var numOfBox = boxTypes[i][0]
        var numOfUnits = boxTypes[i][1]
        if (truckSize > numOfBox) {
            var addUnits = numOfBox * numOfUnits
            unitTotal= unitTotal + addUnits 
            truckSize= truckSize - numOfBox
        } else if (truckSize <= numOfBox) {
            var addUnits = truckSize * numOfUnits
             unitTotal= unitTotal + addUnits
            break;
        }
        
    }
    
    return unitTotal;
    
};