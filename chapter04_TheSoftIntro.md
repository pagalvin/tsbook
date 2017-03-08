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

A lot of people really don't care for this behavior. As I say, this is a contrived example and if you're prone to writing code like this, you may not belong in the field. The real problems is that is very, very easy to introduce 
