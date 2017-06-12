function integerAdder(firstNumber: number, secondNumber: number): number {

    return firstNumber + secondNumber;

}

const TwoPlusTwo = integerAdder(2, 2);

// Error: can't pass string to numeric function argument.
const errorAdder1 = integerAdder("ham", "cheese");

// Error: errorAdder2 is a string but the function returs an integer.
const errorAdder2: string = integerAdder(2, 2);
