/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    if (tokens.length === 1) {
        if (typeof Number(tokens[0]) === 'number') {
            return Number(tokens[0])
        }
    }
   // console.log('type: ', 2 "-" 1)
               
    var operators = {
        //helper functions that returtn the answer based on the operator 
        "+" : function(a, b) {return a + b},
        "-" : function(a, b) {return a - b},
        "*" : function(a, b){return a * b},
        '/' : function(a, b) {
            // a = Math.abs(a)
            // b = Math.abs(b)
            return Math.trunc(a/ b)
        }
    }
  
    var results = 0
    var length = tokens.length
    
    //console.log(operators['+'](1,2))
    
    while (length !== 1 || length === 0) {
        for (var i = 0; i < tokens.length; i++) {
            var element = tokens[i]
            //console.log('element: ', element)
            if (operators[element]) {
                //get the two elements before
                var firstNum = Number(tokens[i - 2])
                var secNum = Number(tokens[i - 1])
                results = operators[element](firstNum, secNum)
                tokens.splice(i - 2, 3, results)
                length = tokens.length
                break;
            }
            //console.log('length of tokens: ', tokens)
        }
    }
    return results;
    
};



//["10","6","9","3","+","-11","*","/","*","17","+","5","+"]