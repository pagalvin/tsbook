# Functions

TypeScript supports JavaScript functions as you already know them. As it often does, TypeScript adds new functionality, including:
- Function Types
- Typed Parameters
- Optional Parameters
- Rest Parameters[^1]
- Arrow Functions (often also called Lambda or Anonymous functions)

## Function Types

Everything has a type in TypeScript. If you don't specify a type, TypeScript infers a type and for functions, it's `Function`.  You  can declare a variable's type to be `Function` as shown:

```TypeScript
let sillyAdderFunction: Function;

sillyAdderFunction = function(a, b) { return a + b};

console.log(sillyAdderFunction(10, 10);
```

This isn't a terribly useful thing to do but it shows that there is a `Function` data type. You'll see down below that Arrow Functions are far more useful.

## Function Parameters

Most functions take at least one parameter and most useful functions return a value[^2]. You can specify a type for each function parameter as well as the return type of the function itself.  Here's a more robust `integerAdder()`:

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

The code defines a function, `integerAdder`. It takes two parameters and as you can see, they are both integer values. Furthermore, the integerAdder function itself returns a number.

Here's a 30 second video showing this in practice:

<iframe style="margin:auto" width="560" height="315" src="https://www.youtube.com/embed/zUI2Ygfdhj0" frameborder="0" allowfullscreen></iframe>

(If you can't see the video, try [accessing it via this link](https://youtu.be/zUI2Ygfdhj0) or type this url into your web browser: https://youtu.be/zUI2Ygfdhj0).

Note that integerAdder specifies both the types of its arguments and the type of its return value: `integerAdder(firstNumber: number, secondNumber: number): number`. This tells the TypeScript compiler enough information that it prevents you from making two mistakes common in the plain JavaScript world:
- You can't pass in non-numeric values to the integerAdder function.
- The result is numeric. You can't invoke the function and accept its result into a non-numeric variable.

Functions don't need to return a value. If you want to be explicit (and you probably do!), specify a return type of `void`:

```TypeScript
function noOperation(): void { 
    return; 
}
```

### Optional Parameters

We can define functions that take optional parameters. Imagine that you have a function, `InitializeDataSet` in your application. Sometimes, you want to initialize the data set to a collection of hard coded values (i.e. defaults). In other cases, you want to provide some "seed" data. 

```TypeScript
function InitializeDataSet(seedData?: any) {
    if (seedData) {
        // use the seed data to initialize the data set
    }
    else {
        // initialize using some default hard coded values
    }
}
```
Use the question mark (?) to denote an optional parameter.

At run-time, client code invokes the function as normal. If that code does not supply a value for the optional parameter, its value is `undefined`.

### Default Parameter Values

You can specify a default value for your function's parameters. Here's the previous example re-written to show this syntax and discuss the implication of using it:

```TypeScript
function InitializeDataSetWithDefaultValues(seedData = { seedValue1: "a", seedValue2: "b"}) {
    // seedData will have valid data so no need to check it.

    /*
    if (seedData) {
        // use the seed data to initialize the data set
    }
    else {
        // initialize using some hard coded values
    }
    */
}

InitializeDataSetWithDefaultValues();
InitializeDataSetWithDefaultValues(undefined);
InitializeDataSetWithDefaultValues({seedValue1: "x", seedValue2: "y"});
```

Note that:
- The function takes an input parameter, `seedData`. TypeScript infers the parameter's type as an object with two string properties. 
- If client code does not pass a value for seedData, it will use the specific initial value.
- If you pass the value `undefined` to the function, it will also the specified initial value.

## Rest Parameters

Sometimes you want to pass an unknown number of parameters to a function. This case frequently arises during React development, serializing and deserializing data and mapping. 

Let's consider a logging example. We can always use `console.log()` to log out messages to the console. However, it's a real challenge debugging applications at run-time, particularly errors reported by end users. By the time anyone tells you about the error, it's too late for you to do much about it. Let's add some persistent error logging to our toolkit:

```TypeScript
function myLogger(msgType: "INFO" | "ERROR", ...messages: any[]) {
    if (msgType === "INFO") {
        console.log(messages);
    }
    else  {
        // Save the details to local storage for future analysis/debugging
        localStorage.setItem("lastErrorMessage", JSON.stringify(messages));
        console.error(messages);
    }
}

myLogger("INFO","Greetings!");
myLogger("INFO", "Successfully saved the data, results:", {someResult: "", databaseResultCode: 1});
myLogger("ERROR", "ERROR: Failed to save the data, error details follow.", {errorDetails: "[some error details object goes here]"}, "Error occurred at `${new Date()}`");
```

The code does the following:
- Defines a function, `myLogger`.
- myLogger takes two parameters: `msgType` and `messages`.
    - msgType is a union data type - client code must pass "INFO" or "ERROR".
    - messages is an array of `any`. Note that `...` preceding the variable name. This indicates that all of the remaining arguments will be stuffed into the array. 
- You can see how the code invokes the myLogger function, passing in a variable number of arguments across its three invocations.

## Arrow Functions

Arrow functions take their name from their syntax. 

Many TypeScript developers prefer to call these *lambda* functions and sometimes *anonymous* functions. They almost always mean the same thing. 

Arrow functions are tremendously useful. They provide a nice syntax shortener and more importantly, help reduce confusion over JavaScript scopes by redefining the `this` keyword into something more intuitive.

Here's a very simple example to get us started on the syntax:

```TypeScript
const myHelloFunction = () => { return "Hello!"};

myHelloFunction();
```

This example defines and then invokes a function named `myHelloFunction`. Since myHelloFunction is `const` we need initialize it at definition-time. That's this bit: `{return "Hello!"};`  myHelloFunction is now a normal function and we can invoke it like any other JavaScript function using the function invocation operator, `()`: `myHelloFunction()`;

We don't need to define the function body. For instance, this is perfectly good syntax:

```TypeScript
let myGoodbyeFunction: () => string;
myGoodbyeFunction = () => {return "Good Bye!"}
console.log(myGoodbyeFunction());
```

The first line defines a variable, `myGoodbyeFunction`. myGoodbyeFunction's type is a function that takes no parameters and returns a string.

The second line assigns a value to myGoodbyeFunction. In this case, it's the function body itself.

Lastly, the code logs out the result of executing myGoodbyeFunction.

Before we go any further, lets look at the transpiled JavaScript. Here's the myHelloFunction's transpiled JavaScript:

```JavaScript
var myGoodbyeFunction;
myGoodbyeFunction = function () { return "Good Bye!"; };
console.log(myGoodbyeFunction());
```

Here's the line-by-line transformation:
<table style="font-size: 11px; font-family:courier">
<tr>
<td>
<b>TypeScript</b>
</td>
<td>
<b>Transpiled JavaScript</b>
</tr>

<tr>
<td>1. let myGoodbyeFunction: () => string;</td>
<td>var myGoodbyeFunction;</td>
</tr>
<tr>
<td>2. myGoodbyeFunction = () => {return "Good Bye!"}</td>
<td>myGoodbyeFunction = function () { return "Good Bye!"; };</td>
</tr>
<tr>
<td>3. console.log(myGoodbyeFunction());</td>
<td>console.log(myGoodbyeFunction());</td>
</tr>
</table>

`let` transpiles into `var`.
The arrow function transpiles into a straight-forward `function` definition.

### Specifying Parameters in Arrow Functions

We specify parameters by inserting them info the `()` portion of the function definition. Here's an adder function that takes two integer inputs and returns a numeric result:

```TypeScript
let myAdderArrowFunction: (arg1: number, arg2: number) => number;
myAdderArrowFunction = (firstNumber: number, secondNumber: number) => {
        return firstNumber + secondNumber;
    }
console.log(myAdderArrowFunction(2, 2));
```

The code defines a new function, `myAdderArrowFunction`, using the arrow syntax. myAdderFunction takes two numeric arguments and returns number.

It's important to keep in mind that the `let` statement is merely defining a typed variable named myAdderFunction. It type happens to be a `Function` with typed signature and a typed result.

The second line initializes myAdderArrowFunction. Note that I didn't use the same names when specifying the input parameters. Again, the  `let` statement is defining a type - a Function who takes in two arguments and returns a number. As long as meet the requirements of the type, the parameter names don't matter. 

### Arrow function as interface components

Given that arrow functions can define types independent of their implementation, you can use them anywhere else you would use a type, including interfaces. This is a very useful capability for many reasons. One reason comes into play when you're working with an external library that was not written in TypeScript. This obviously happens a lot in the real world[^3]. Let's assume that we are working with one such library that is responsible to create detailed, highly interactive visualizations. We don't know how it works and we don't care.  We consult the library's documentation and see that it provides a robust JavaScript API that includes the following functions:
- `Render`: We provide the ID of a `<div>` tag on our page and it renders the visualization there.
- `SetDimensions`: We can set the height an width with this call.
- `SaveSettings`: We ask the engine to save the current screen settings for use next time.

Here's some TypeScript that lets inject some strong typing into our code despite the fact that the vendor's API does not:

```TypeScript
interface IVisualizationEngine {
    Render: (htmlDivName: string) => boolean;
    SetDimensions: (width: number, height: number) => void;
    SaveSettings: () => boolean;
}

// Assume that the visualization engine was already loaded
// and that we can get a handle to its API set via the global window object.
const myVisualizationEngine: IVisualizationEngine = <IVisualizationEngine>window["VisualizationEngine"];

if (myVisualizationEngine.Render("myDiv")) {
    myVisualizationEngine.SetDimensions(1024, 800);
    if (myVisualizationEngine.SaveSettings()) {
        console.log("Successfully saved the visualization.");
    }
    else {
        console.error("ERROR: Failed to save the visualization.");
    }
}
else {
    console.error("Failed to render the visualization!");
}
```

This is complex example. Let's unpack it a bit:
- The code defines an interface, `IVisualizationEngine`.
- The interface defines three different functions, one for each of the API calls we care about[^4].
- We get a handle to the engine via the global window object. In order for this to work, we had to reference the engine via a script tag in our HTML and the engine would have to save itself in the global window. 

At this point, we've done something really nice for ourselves.  We now have strongly typed access to this third party's API! This allows the IDE to give us the great time-saving and error-reducing intellisense we've all grown to love so much.

Here's another video showing these concepts. In this case, we'll model an existing contacts management library that has been in production and stable for a long time. The video creates an interface to that plain JS library and then uses it:

<iframe width="560" height="315" src="https://www.youtube.com/embed/e1BGcBO8E6U" frameborder="0" allowfullscreen></iframe>

(If you can't see the video, try [clicking this link](https://youtu.be/e1BGcBO8E6U) to see it directly on YouTube. You can also try typing this link into your favorite web browser: https://youtu.be/e1BGcBO8E6U.)

### Arrow Functions as IIFEs

As we saw above, arrow functions transpile down to standard JavaScript functions. We can invoke functions as they are defined. These are called Immediately Invoked Function Expressions (IIFEs). Arrow functions can also be invoked at any time. Here's a contrived example:

```TypeScript
console.log(`Hello, ${(() => {return "Paul";})()}`);
```

This code defines a function here: `() => { return "Paul"}`. It encloses that line in its own set of parenthesis and then uses the invoke-function operator, `()` to immediately invoke the function. This is itself wrapped inside a template string and finally, the result is logged out to the console.

Here's the transpiled JavaScript:

```JavaScript
console.log("Hello, " + (function () { return "Paul"; })());
```

This (possibly over-produced :)) video shows it live:

<iframe width="560" height="315" src="https://www.youtube.com/embed/DTBpHxWPf_w" frameborder="0" allowfullscreen></iframe>

(If you can't see the video, [try clicking here](https://youtu.be/DTBpHxWPf_w) or typing this URL into your web browser: https://youtu.be/DTBpHxWPf_w.)

### Arrow Functions for Cleaner Code

The previous example doesn't show it well, but arrow functions can help you do more than teach your IDE about function types. It can also help you write cleaner code, although this may admittedly be in the eye of the beholder. Here's an example:

```TypeScript
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter( (item) => !(item % 2));
const sumOfNumbers = numbers.reduce((prev: number, curr: number) => {
    return prev + curr;
}, 0);
```

In this example, we define an array of numbers, one through ten.

We then define a variable, `evenNumbers`. evenNumbers is the result of filtering on the numbers array, passing back only those items where mod two equals zero. This is a new form for us:

`(item) => !(item % 2)`

We could have written this fully out to:

`(item) => { return !(item % 2); }`

It's a bit of shorthand that we're allowed do when you can return a value with a single statement.

The second example adds up all the numbers using the standard `reduce` function. Reduce runs against an array and takes a function and initial value as an argument. That function is passed the previous value and the current value, defined in the example as `(prev: number, curr: number)`[^5]. Note that `reduce` *also* passes a 3rd argument, the index of the item in the array. We don't care about that so we don't bother catching it, so to speak.

Most TypeScript developers come to find Arrow functions to be very helpful and generally cleaner looking than spelling out the word "function" all the time.

# Further Reading

- This blog post describes most of the same things covered here, along with two narrated videos: http://executeautomation.com/blog/working-with-functions-anonymous-and-arrow-functions-in-typescript/

- This blog post provides a nicely detailed view into Arrow Functions and in particular, it explains how `this` works in that context. http://piotrwalat.net/arrow-function-expressions-in-typescript/

# Summarizing Functions

TypeScript enhances plain JavaScript functions by...
- Defining the types of function parameters (string, boolean, even interface types)
- Defining the return type of a function (not just its parameters)
- Specifying default values for parameters
- Specifying a variable number of parameters via the `rest` operator ("...")

Like other Typescript artifacts, functions themselves are typed and their type is `Function`.

TypeScript introduces a different kind of function, the Arrow Function. We haven't heard the last of arrow functions. We'll revisit them in chapter 9, "Classes in Depth" and explore how they help simplify JavaScript closures. In short, they work in a more intuitive way with the `this` keyword.

That concludes functions. The next chapter gently introduces basic TypeScript classes and lays down the foundation for more advanced topics like abstract classes and how interfaces work with them.

<hr/>

[^1]: Not to be confused with Representational State Transfer. Rest parameters are an entirely different thing, as you'll see.

[^2]: If your function doesn't return any value, there's a good chance it's affecting some data outside of its scope. This is usually a Bad Thing because it introduces the risk of side effects. If you want more convincing, you could [start here](https://softwareengineering.stackexchange.com/questions/15269/why-are-side-effects-considered-evil-in-functional-programming).

[^3]: This happens so much in the real world that TypeScript provides a significant feature set to handle the challenge through the use of "typings files". The first cut of this book doesn't address typings in detail but the "Continue Learning" chapter will point you in the right direction.

[^4]: In this context, "care about" means that the library might provide other useful functions but we don't plan to use them for one reason or another. We don't need to map each of them to our interface definition, just the ones we plan to use.

[^5]: `Reduce`, along with `filter` and `map` tend to find themselves in code that adheres to a functional programming style. I've written a small series of blog posts on this subject up on my blog, https://hackernoon.com/functional-programming-the-examples-series-851421e7ae5b.
