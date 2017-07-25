# Template Strings

Template strings only just barely warrant their own chapter. They aren't a kind of type nor are they any one of the building blocks TypeScript provides to support object oriented programming. However, they are quite useful. Most of the examples going forward in the book use them.

A template string is a "regular" JavaScript string seeded with placeholders. At runtime, your code replaces the placeholders with real values. 

Denote a placeholder with `${}`. Place the variable or function inside the curly braces and it will be evaluated at runtime.

Here's an example:

```TypeScript
const userName: string = "Paul";
const helloTemplate: string = `Hello, ${userName}!`;
console.log(helloTemplate);
```

At runtime, the code replaces `userName` with the actual value of userName.

Here's another example that uses a template string as a parameter to `console.log()`.

```TypeScript
function getRandomName() {
    const names: string[] = ["Paul","Aidan","Kelly", "Amina"];
    return names[Math.floor((Math.random() * 4));
}
console.log(`Hello, ${getRandomName()}`!);
```

In the above example, the placeholder is a function.

This is a nice shortcut, especially when you contrast it against the plain JS equivalent:

```JavaScript
function getRandomName(): string {
    var names: string[] = ["Paul","Aidan","Kelly", "Amina"];
    return names[Math.floor((Math.random() * 4));
}
console.log("Hello, " + getRandomName() + "!");
```

You can use as many placeholders as you like:
```TypeScript
const name: string = "Paul";
const graduatedYear: number = 1987;

console.log(`${name} graduated in ${graduatedYear}.`);
```

I have trained myself to use the backtick character whenever I need to define strings. You never know when you might want to introduce some data into a string at run-time.

You'll see a video showcasing template strings in the next chapter.

Template strings actually support a bit more functionality called "Tagged Templates." These allow you to pre-process the string before it's emitted. I've never seen that functionality used in the real world so I'm not covering it here. Read about there here and decide for yourself whether you think you'll use them: https://basarat.gitbooks.io/typescript/docs/template-strings.html

That's it for string templates. Let's get back into the weeds and dive into TypeScript functions.

