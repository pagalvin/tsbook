# Putting the *Type* in TypeScript

TypeScript's name is no accident. It doesn't mean "some type of scripting language." TypeScript overlays strong typing on top of pure JavaScript. This is best explained by example. Let's start with some valid and admittedly ridiculous pure JS code:

```javascript
var xyzzy = "transport me!";
var TheAnswer = 42;
var hammerTime = new Date(1990, 1, 13);
```
The above snippet shows three variables and JavaScript infers their data type. This allows us to write code like this:
```javascript
xyzzy = "you've been transported";
TheAnswer = TheAnswer + 1;
hammerTime = hammerTime.addDays(5);
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

console.debug("xyzzy:",xyzzy);
console.debug("TheAnswer:",TheAnswer);
console.debug("hammerTime:", hammerTime);
```
That's valid script and in chrome, the output looks like this:

![Nonsensical But Allowed Variable Assignments](/assets/ch04_nonsenseVars.PNG "blah")

A lot of people really don't care for this behavior. As I say, this is a contrived example. If you're prone to writing code like this, you may not belong in the field. The real problem is that is very, very easy to introduce bugs in pure JS by accidentally mixing data types. TypeScript mitigates the problem by allowing you to specify the type of the variable when you define it. Let's look:

```typescript
var xyzzy: string = "transport me!";

var TheAnswer: number = 42;

var hammerTime = new Date(1990, 1, 13);

var whoKnows;
```
The above snippet explicitly shows TypeScript's type system at work:
- The variable xyzzy is a string.
- "TheAnswer" is a "number"
- hammerTime is a `Date`. Why is it a `Date` and not something else? Because TypeScript can infer its data type. The code initializes it to a Date object and hence, it can only be a date.

 The last variable, `whoKnows`, also has a type, "any". Variables of type `any` act just like pure JS variables. You can assign string values one moment, booleans the next and numbers after that. 

 If you go to the trouble of defining types on your variables, your IDE will give you some great edit-time and compile-time support. Consider this short animation:

![short animation](/assets/video/ch04_strongTypingExampleVideo/ch04_strongTypingExampleVideo.gif "short animation")
 
 Types are considerably deeper than this quick introduction. Read on in the next chapter to see much more.