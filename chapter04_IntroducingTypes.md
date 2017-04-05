# Putting the *Type* in TypeScript

TypeScript's name is no accident. It doesn't mean "some type of scripting language." TypeScript overlays static typing on top of pure JavaScript. This is best explained by example. Let's start with some valid and admittedly ridiculous pure JS code:

```javascript
var xyzzy = "transport me!";
var TheAnswer = 42;
var hammerTime = new Date(1990, 1, 13);
var BookTitles = [];
```
The above snippet shows four variables and JavaScript infers their data type. This allows us to write code like this:
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

A lot of people really don't care for this behavior[^1]. As I say, this is a contrived example. If you're prone to writing code like this, you may not belong in the field. The real problem is that is very, very easy to introduce bugs in pure JS by accidentally mixing data types. TypeScript mitigates the problem. In TypeScript, you can specify the type of the variable when you define it. Let's look:

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

The last variable, *whoKnows*, also has a type, `any`. Variables of type any act just like pure JS variables. You can assign string values one moment, booleans the next and numbers after that. 

If you go to the trouble of defining types on your variables, your IDE will give you some great edit-time and compile-time support. Consider this short animation:

![short animation](/assets/video/ch04_strongTypingExampleVideo/ch04_strongTypingExampleVideo.gif "IDE Supporting Defined Types")
 
If you're already a JS coder, this is a very simple way to get started with the language. Pick a few variables, associate some types with them and see what happens. A couple things will or may happen when you do this:
- Your IDE will get a lot smarter about your code. It will know variable types and prevent you from assigning strings to numbers and that sort of thing.
- You may discover problems with your code right away. You may well have intended that a particular variable, "myNumber", hold numbers. As JS coders know, it's quite easy to mistakenly assign strings, date, complex objects, to your "myNumber" variable. 

Many TypeScript developers start off this way because it's so simple to do. It's so simple, in fact, that they quickly move on to more interesting typings, including the ability to strongly type nested objects via `interfaces`. The next chapter introduces interfaces as data descriptors

## Light Bulb Time?

In late December of 2015, Eric Clemmons posted a widely read article on Medium entitled _JavaScript Fatigue_. [You can read it here.](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.3jytn61rs) If you haven't read it, it's probably worth your time[^1]. It does a good job of encapsulating a certain ennui in which some folks in the community indulge themselves. It's difficult not to at times! There are so many frameworks, development tools, IDEs and other clever gidgety-gadgets, it can become ... fatiguing.

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

It's probably safe to say that if there's no light bulb going off for you right now, TypeScript may not be for you.

## Declaring Variables

TypeScript provides three different ways to define a variable:

- `var` keyword
- `let` keyword
- `const` keyword

If you declare a variable with the var keyword, it works exactly the same way it does in pure JavaScript. It follows the same scoping rules and as such, you need to concern yourself with unexpected hoisting effects and/or inadvertently polluting the global namespace. "Const" and "let" simplify thing by reducing this risk and associated complexity. consider this bit of pure JS code:

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

This silly example tests for a temperature and returns a label describing it. Note three things:
1) The variable "result" isn't actually decorated with `var` until it makes its 3rd appearance. 
2) Through the magic of "hoisting," `result` is available throughout the function, not just in the else block where it's defined.
3) This is perfectly valid TypeScript.

Many programming languages dictate tighter scoping rules. Many people, the author included, consider the above example to be poorly done for several reasons:
- The variable isn't properly declared until well past its first use.
- The code doesn't do a good job showing the developer's intent here. Result could be used anywhere in the function and it would be confusing.
- even experienced JS developers have a hard time with scope and hoisting and such.





---
[^1]: To be fair, plenty of people are perfectly OK with it. For example, Jeff Walker asserts that:

> TypeScript enhances JavaScript with types, classes and interfaces. Some people think that is the problem with JavaScript. It’s not. The problem with JavaScript is not that it is a dynamically typed prototype based object-oriented language without classes. That is actually JavaScript’s strength.

I don't know JW and I don't mean to imply that this one quote pulled from one article he wrote stands for everything he believes :). That quote does, however, do a good job articulating a certain school of thought vis-à-vis JavaScript's dynamic nature. Many people like it. Those people probably aren't using TypeScript much.

Eric Elliot takes a deeper dive into the subject: https://medium.com/javascript-scene/you-might-not-need-typescript-or-static-types-aa7cb670a77b#.5aideomvb. This is also worth reading.

[^2]: It's also, a little ironically, a decent listing of interesting tools and frameworks out there and hence, another good reason to read the article. That is, of course, it doesn't tire you out. To be safe, read this book first.


