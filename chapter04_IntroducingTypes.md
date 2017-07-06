# Putting the *Type* in TypeScript

TypeScript's name is no accident. It doesn't mean "some type of scripting language."[^1] TypeScript overlays static typing on top of plain JavaScript. This is best explained by example. Let's start with some valid and admittedly ridiculous pure JS code:

```javascript
var xyzzy = "transport me!";
var TheAnswer = 42;
var hammerTime = new Date(1990, 1, 13);
var BookTitles = [];
```
The above snippet[^2] shows four variables and JavaScript infers their data type. This allows us to write code like this:
```javascript
xyzzy = "you've been transported";
TheAnswer = TheAnswer + 1;
hammerTime = hammerTime.addDays(5);
BookTitles = ["Title 1", "Title 2", "Title 3"];
```
Pure JavaScript *also* lets us do things like the following:
```javascript 
var xyzzy = "transport me!";
xyzzy = xyzzy + 20;

var TheAnswer = 42;
TheAnswer = true;

var hammerTime = new Date(1990, 1, 13);
hammerTime = {};
hammerTime = hammerTime + 5;

var BookTitles = ["Title 1", "Title 2", "Title 3", "Title 4"];
BookTitles[2] = [{Title: "SomeTitle", TotalPages: 200}]

console.debug("xyzzy:",xyzzy);
console.debug("TheAnswer:",TheAnswer);
console.debug("hammerTime:", hammerTime);
console.debug("BookTitles:", BookTitles)
```
That's valid script and in chrome, the output looks like this:

![Nonsensical But Allowed Variable Assignments](/assets/ch04_nonsenseVars.JPG "Nonsensical But Allowed Variable Assignments")

A lot of people really don't care for this behavior[^3]. As I say, this is a contrived example. If you're prone to writing code like this, you may not belong in the field. The real problem is that is very, very easy to introduce bugs in pure JS by accidentally mixing data types. TypeScript mitigates the problem. In TypeScript, you can specify the type of the variable when you define it. Let's look:

```typescript
var xyzzy: string = "transport me!";

var TheAnswer: number = 42;

var hammerTime = new Date(1990, 1, 13);

var whoKnows;
```
The above snippet explicitly shows TypeScript's type system at work:
- The variable xyzzy is a `string`.
- "TheAnswer" is a `number`.
- hammerTime is a `Date`. Why is it a Date and not something else? Because TypeScript can infer its data type. The code initializes it to a Date object and hence, it can only be a date.

The last variable, `whoKnows`, also has a type, `any`. Variables of type any act just like pure JS variables. You can assign string values one moment, booleans the next and numbers after that. 

If you go to the trouble of defining types on your variables, your IDE will give you some great edit-time and compile-time support. Consider this short animation:

![short animation](/assets/video/ch04_strongTypingExampleVideo/ch04_strongTypingExampleVideo.gif "IDE Supporting Defined Types")

If you're already a JS coder, this is a very simple way to get started with the language. Pick a few variables, associate some types with them and see what happens. A couple things will or may happen when you do this:
- Your IDE will get a lot smarter about your code. It will know variable types and prevent you from assigning strings to numbers and that sort of thing.
- You may discover problems with your code right away. You may well have intended that a particular variable, `myNumber`, hold numbers. As JS coders know, it's quite easy to mistakenly assign strings, date, complex objects, to your "myNumber" variable. 

Many TypeScript developers start off this way because it's so simple to do. It's so simple, in fact, that they quickly move on to more interesting typings, including the ability to strongly type nested objects via `interfaces`. The next chapter introduces interfaces as data descriptors.

## Light Bulb Time?

In late December of 2015, Eric Clemmons posted a widely read article on Medium entitled _JavaScript Fatigue_. [You can read it here.](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.3jytn61rs) If you haven't read it, it's probably worth your time[^4]. It does a good job of describing the ennui in which some JavaScript devs find themselves trapped at times. It's a difficult trap to avoid at times! There are so many frameworks, development tools, IDEs and other clever gidgety-gadgets, it can become ... fatiguing.

<div style="float:right; width:25%; padding-left: 15px;";>
<img src="assets/lightbulb.png"/>
</div>

Many first-time TypeScripters shake off their skepticism and get a little rush of excitement from this most simple of TypeScript features. Merely add ": string" or ": number" to a variable and ...

1. It's much more difficult to mistakenly make mismatching assignments.
2. Intent becomes clear. Any decent IDE will tell you, at runtime, the data type of the variable. 

This is very valuable stuff. It is also very easy to harvest some value from it. All you need to do is:

1. Take one of your JS files
2. Copy it with a .ts extension
3. Add some typings (numbers, strings, booleans, etc.)
4. You're done!

All of the rest of your JS will work as normal. The most simple change to your code immediately provides significant benefit. This was my light bulb moment. It didn't end there for me and won't end there for you. 

It's probably safe to say that if there's no light bulb going off for you right now, TypeScript may not be for you, at least not today. I invite you to continue reading anyway :).

## Declaring Variables

TypeScript provides three different ways to define a variable:

- `var` keyword
- `let` keyword
- `const` keyword

If you declare a variable with the var keyword, it works exactly the same way it does in pure JavaScript. It follows the same scoping rules and as such, you need to concern yourself with unexpected hoisting effects and/or inadvertently polluting the global namespace. `const` and `let` simplify things by reducing this risk and associated complexity. Here's a bit of plain JavaScript code that implements a function, `getTempLabel()`. It's mean to take in numeric temperature in Celsius and return a text label.

Here's the plain JS code:

```JavaScript
function getTempLabel(currentTempInCelsius) {

    if (currentTempInCelsius > 35 && currentTempInCelsius <= 40) {
        result = "Very warm";
    }
    
    else if (currentTempInCelsius > 40) {
        result = "Hot!";
    }
    
    else {
        var result = "Unexpected temperature value.";
    }

    console.log(result);

    return result;
}
```

Take note of three things from this example:
1) The variable "result" isn't actually decorated with `var` until it makes its 3rd appearance. 
2) Through the magic of "hoisting," `result` is available throughout the function, not just in the else block where it's defined.
3) This is also perfectly valid TypeScript, although there's a much better way to implement the function. You'll see that in a moment.

Many programming languages dictate tighter scoping rules. Many people, the author included, consider the above example poorly done for several reasons:
- The variable isn't properly declared until well past its first use.
- The code doesn't do a good job showing the developer's intent here. `result` could be used anywhere in the function on both the left hand side and right hand side of an expression, leading to unanticipated and difficult to track bugs.
- Even experienced JS developers have a hard time with variable scope and hoisting. Why accept that headache lying down?

Here is similar code written in TypeScript:

```TypeScript
function getTempLabelTS(currentTempInCelsius: number): string {

    let result: string;
    
    if (currentTempInCelsius > 35 && currentTempInCelsius <= 40) {
        result = "Very warm";
    }
    
    else if (currentTempInCelsius > 40) {
        result = "Hot!";
    }
    
    else {
        result = "Unexpected temperature value.";
    }

    console.log(result);

    return result;

}
```

As you can see, instead of using `var` to define the result variable, the code uses TypeScript's `let`. Let defines variable characteristics the same way as var - you specify a name and optionally a data type. The difference is about variable scope. A variable defined with let is scoped to the block where it's defined and is available to sub-blocks. It is never hoisted, as happens in pure JavaScript. Watch this short to see the effect of let and variable scope in a few different scenarios:

/**video: let vs. var. this may already be up on the google?

## TypeScript Best Practice - *Let*
As a rule, prefer "let" over var. This will tend to reduce the risk of unanticipated side effects in your code through JavaScript's hoisting mechanism.

## `const` Definitions

TypeScript provides another method for defining variables - `const`. A const variable:
1. Must be initialized when declared.
2. May never be changed.

Here's an example:

```TypeScript
const myName: string = "Paul"

myName = "Mary"; // <-- compiler error
```

`const` brings a little subtlety to the table, especially when it comes to object property values. Consider this bit of code:

```TypeScript
const Paul = { firstName: "Paul", lastName: "Galvin"}

const Kelly = { firstName: "TBD", lastName: "TBD"}

const Aidan; // <-- Not allowed, must always initialize const variables when defined

Kelly.firstName = "Kelly"; // <-- perfectly OK
Paul = null; // <-- Not allowed, cannot use const vars in LHS of an assignment
```
The code defines three `any` variables[^defaultsToAny] and you can tell that it's mean to hold a kind of "person" record, holding a first and last name. It initializes `Paul` and `Kelly` to similarly structured objects.

It then tries to create a constant `Aidan` variable without assigning an initial value. This is not allowed. It won't compile and your IDE should highlight this as an error.

The Kelly PersonName const variable *is* defined. However, it's seeded with "TBD" values. Later, the code changes Kelly's firstName property. This is valid[3]. 

Lastly, the Paul variable cannot be changed after it's initialized. The final "Paul = null" assignment is also invalid. Const variables may never be in the left hand side of an assignment once they are declared and initialized.

## TypeScript Best Practice - *Let*
As a rule, prefer `const` over `let`. This recommendation largely derives from functional programming principles. The more you minimize mutations in your code, the fewer side effects you'll experience[^linktomymedumarticleonfunoffunctionalprogramming].

Taking this and let into consideration, we can summarize:
- Prefer const in all cases.
- When const won't meet your needs, prefer let over var.
- If you absolutely need var, use that. However, the use of var in TypeScript strongly indicates a logic problem and an opportunity to simply the code.

## TypeScript Let, Const and Transpilation

At the end of the day, JavaScript doesn't know anything about const or let. They always compile down to plain old var statements. Here's the transpiled version of the getTemperature function from above:

```JavaScript
function getTemperatureLabel(forTemperature) {
    var errorResult = "ERROR: Failed to determine a temperature label!";
    var result;
    if (isNaN(forTemperature)) {
        result = errorResult;
    }
    else {
        var options = ["Cold", "Warm", "Hot"];
        result = forTemperature < 40 ? options[0] :
            forTemperature < 85 ? options[1] :
                options[3];
    }
    return result;
}
```

TypeScript enforces variable scope and const initialization / assignment rules at compile-time. A good IDE will do it as you write the code.

# Further Reading

Consider reading the following articles that compliment this chapter's content:
- A pretty good conversation on stackexchange that plumbs the depths of `let` vs `var` vs `const`:  https://softwareengineering.stackexchange.com/questions/278652/how-much-should-i-be-using-let-vs-const-in-es6

- A good overview of var/let/const as well as describing a few primitive data types: http://www.brainbell.com/typescript/data-types-let-var-cons.html

# Summary

In this chapter, you learned that TypeScript is a statically typed langauge that introduces a couple of new ways to manage variable scope and immutability. You saw some of the practical effects that derive from these features and have been armed with a bit of advice on how to use them.

The next chapter digs into this topic with more gusto and introduces interfaces, a most useful and powerful language element. It also covers enumerations, union types and more! Take a deep breath and then turn the virtual page. 

---
[^1]: Although that would be truly glorious. 

[^2]: Three of these variables remind me of my youth and for history's sake, here are some links for you to follow if you don't know them already: [42](https://en.wikipedia.org%2Fwiki%2F42_%28number%29%23The_Hitchhiker.27s_Guide_to_the_Galaxy), [xyzzy](https://en.wikipedia.org/wiki/Colossal_Cave_Adventure) (which you can play on the Amazon Echo, believe it or not(!)) and [Hammertime](http://ew.com/article/2010/01/08/20-years-ago-mc-hammers-u-cant-touch-this/).

[^3]: <div>To be fair, plenty of people are perfectly OK with it. For example, Jeff Walker asserts that:

<blockquote>"TypeScript enhances JavaScript with types, classes and interfaces. Some people think that is the problem with JavaScript. It’s not. The problem with JavaScript is not that it is a dynamically typed prototype based object-oriented language without classes. That is actually JavaScript’s strength."</blockquote>

I don't know JW and I don't mean to imply that this one quote pulled from one article he wrote stands for everything he believes :). That quote does, however, do a good job articulating a certain school of thought vis-à-vis JavaScript's dynamic nature. Many people like it. Those people probably aren't using TypeScript much.
<br/>
Eric Elliot takes a deeper dive into the subject: https://medium.com/javascript-scene/you-might-not-need-typescript-or-static-types-aa7cb670a77b#.5aideomvb. This is also worth reading.
</div>
[^4]: It's also, a little ironically, a decent listing of interesting tools and frameworks out there and hence, another good reason to read the article. That is, of course, it doesn't tire you out. To be safe, read this book first.

[^5]: Recall that the default data type is "any" for TypeScript variables. You should avoid this, especially if you're starting off with a fresh new project. You can disallow "implicit" any variables through a compiler configuration setting. Read about that here: https://basarat.gitbooks.io/typescript/docs/options/noImplicitAny.html.

[^6]: Admittedly, this is a minor source of cognitive dissonance. Since the variable itself a const, why allow us to change the variable's properties as well? It is what it is and helpful in the end, so live with it we must.

[^linktomymedumarticleonfunoffunctionalprogramming]: I have found that functional programming, like TypeScript, is a joy unto itself. I have written about that joy here: https://hackernoon.com/unexpected-joy-from-functional-programming-ed9d3adca77a.

