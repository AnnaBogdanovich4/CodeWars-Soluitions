//For this kata you will have to forget how to add two numbers.
// It can be best explained using the following meme:
// Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016
// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)
// You may assume both integers are positive integers.



function add(num1, num2) {

    return +((String(+String(num1).slice(-6,-5) + +String(num2).slice(-6,-5)))
        +
        (String(+String(num1).slice(-5,-4) + +String(num2).slice(-5,-4)))
        +
        (String(+String(num1).slice(-4,-3) + +String(num2).slice(-4,-3)))
        +
        (String(+String(num1).slice(-3,-2) + +String(num2).slice(-3,-2)))
        +
        (String(+String(num1).slice(-2,-1) + +String(num2).slice(-2,-1)))
        +
        (String(+String(num1).slice(-1) + +String(num2).slice(-1))));
}