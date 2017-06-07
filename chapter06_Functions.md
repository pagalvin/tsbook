# Functions

TypeScript supports JavaScript functions as you already know them. As with everything else, TypeScript adds new functionality, including:
- Function Types
- Typed Parameters
- Optional Parameters
- REST Operators
- Arrow Functions

## Function Types

`Function` is another valid type when defining variables or interfaces. Here's a simple example:

```TypeScript
let sillyAdderFunction: Function;

sillyAdderFunction = function(a, b) { return a + b};

sillyAdderFunction(10, 10);
```TypeScript

This isn't a terribly useful thing to do but it shows that there is a `Function` data type. You'll see down below that Arrow Functions are far more useful.

## Function Parameters

Most functions take parameters and return a value. When you define function parameters, you can specify their type, just like you can for `var`, `let` and `const`. In addition, you can specify the type of result the function returns. Here's an example with syntax:

```TypeScript
function integerAdder(firstNumber: number, secondNumber: number): number {

    return firstNumber + secondNumber;

}

const TwoPlusTwo = integerAdder(2, 2);

// Error: can't pass string to numeric function argument.
const errorAdder1 = integerAdder("ham", "cheese");

// Error: errorAdder2 is a string but the function returns an integer.
const errorAdder2: string = integerAdder(2, 2);
```

The code defines a function, `integerAdder`. It takes two parameters and as you can see, they are both integer values. Furthermore, integerAdder returns a number itself.

Note that integerAdder specifies both the types of its arguments and the type of its return value: `integerAdder(firstNumber: number, secondNumber: number): number`. This tells the TypeScript compiler enough information that it prevents you from making two mistakes common in the plain JavaScript world:
- You can't pass in non-numeric values to the integerAdder function.
- The result is numeric. You can't invoke the function and accept its result into a non-numeric variable.

### Optional Parameters

We can define functions that take optional parameters. Imagine that you have a function, `InitializeDataSet` in your application. Sometimes, you want to initialize the data set to a collection of hard coded values (i.e. defaults). In other cases, you want to provide some "seed" data. 

```TypeScript
function InitializeDataSet(seedData?: any) {

    if (seedData) {
        // use the seed data to initialize the data set
    }
    else {
        // initialize using some hard coded values
    }

}
```

### Initial Parameter Values



