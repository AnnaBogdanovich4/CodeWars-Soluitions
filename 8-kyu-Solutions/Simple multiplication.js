// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

const simpleMultiplication = (number) => {
    let even = number % 2;
    if (even === 0){
        return number * 8;
    } else {
        return number * 9;
    }
}