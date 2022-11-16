/*
create a stack 
create a hash, key and value operands 

iterate over the tokens 
    if the token is a number, push it to the stack 
    if it is a operand,
        get the last two numbers in stack 
        create function that takes in the two numbers and operand and 
        return a number
        push the number to the stack 

    return the 0 index of the stack


create function operations 
    if else to find the correct operand 
    if division, we need to find the largest number and make sure 
    that the largest number is in the front 

    return the result

 */

function evalRPN(tokens: string[]): number {
    let stack:number[] = []
    let operations:object = {
        '/' : '/',
        '*' : '*',
        '+' : '+',
        '-' : '-'
    }

    for (let i = 0; i < tokens.length; i++) {
        let token:string = tokens[i]

        if(operations[token]) {
            let lastTwoChar:number[] = stack.splice(stack.length -2 , 2)
            let sum = perofrmOperation(lastTwoChar[0], lastTwoChar[1], operations[token])
            console.log('what is sum: ', sum)
            stack.push(sum)
        } else {
            //console.log('what is token:')
            stack.push(Number(token))
           
        }
    }
    
    return stack[0]


};

function perofrmOperation(num1:number, num2:number, operand:string):number {
    if (operand === '/') {
        let division:number = num1 / num2
        if (division < 0) {
            return Math.ceil(division)
        } else {
            return Math.floor(division)
        }
    } else if (operand === '*') {
        return num1 * num2
    } else if (operand === '+') {
        return num1 + num2
    } else if (operand === '-') {
        return num1 - num2
    }

   
}

