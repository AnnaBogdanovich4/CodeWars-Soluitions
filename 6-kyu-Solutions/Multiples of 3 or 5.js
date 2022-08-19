//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.
// Courtesy of projecteuler.net (Problem 1)

function solution(number){
    let arr = [0];
    let sum = 0;
    for (let i=0; i<number; i++){
        if (number <= 0){
            return 0
        } else if(!((i % 3) || arr.includes(i))){
            arr.push(i);
        } else if (!((i % 5) || arr.includes(i))){
            arr.push(i)
        }
    }
    return arr.reduce((a,b) => a+b)
}