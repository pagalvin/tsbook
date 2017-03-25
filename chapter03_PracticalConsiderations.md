# Using TypeScript - A Practical Overview

TypeScript shares something in common with virtually every other computer language - a TypeScript program is just a text file. Computers can't run it without first transforming that text to machine language. That process is named *compilation*, of course, and it isn't exactly a new thing under the sun[^1].

These days, many popular languages don't even compile down to machine language. Java compiles down to bytecode. A virtual machine interprets that bytecode and executes your application. C# and other .NET languages compile down to bytecode as well, albeit a different format. They run in a  different virtual environment, the compile language runtime or CLR)[^2]. If you squint your eyes, even web browsers act as virtual machines[^3].

All modern web browsers know how to run JavaScript. They don't necessarily all agree upon the finer points of the DOM. They may vary their behavior with things like the console object. This and that bit of CSS acts different across different vendors' browsers. Despite their differences, however, they agree more than they disagree. In most cases, the JavaScript I write today runs on every browser on the planet, or at least the browsers I care about :).
 
TypeScript isn't JavaScript, of course. It looks a lot like JavaScript and as you'll see, you can write valid TypeScript that is literally identical to pure JavaScript. However, no major web browser today can execute TypeScript. There's a gap here. Transpilation bridges the gap between TypeScript and JavaScript by converting TypeScript to JavaScript. 

Here's one way to look at it:

![High Level TypeScript Transpilation Process](/assets/ch03_transpilation.PNG)

As a practical matter, it's no different from the kind of compilation process we go through with Java, .NET, Rust and other languages. However, it's usually referred to as a transpilation process rather than a compilation process. I'll tend to use both words in the book, although I lean towards compilation if only because it's easier to type.

You don't need to own Visual Studio or use VS Community Edition to write TypeScript code. Many popular IDEs provide a first-class TypeScript experience, including Sublime, WebStorm and Visual Studio's younger sibling, Visual Studio Code. The JS community has largely embraced VS Code so it's a safe and easy bet. I have used VS Code to write most of the examples in this book and many of the screen captures show VS Code in the background. That said, the book is not about VS Code or any other IDE. Pick whichever your prefer.

Today's market provides us with one TypeScript compiler. Microsoft created it, they maintain it and it's open source. As you'd expect, it's well-integrated with Visual Studio. However, it is actually a stand-alone independent application in its own right. It's free. Download and install from here: [https://www.typescriptlang.org/](https://www.typescriptlang.org/ "Visit the TypeScript Language site").

<div style="float:right; border:1px solid; padding: 5px; margin: 15px; width:30%; font-size: 11px;">
<b>A Brief Note on Task Runners</b><br/>

When you use a task runner, you define individual tasks and you usually "define" them by writing them in JavaScript. This means that you can write your tasks in TypeScript too.
</div>

An IDE plus the TypeScript compiler gets you most of the way - but not necessarily all the way -  you want to go. Depending on your IDE, you may also need a task runner. Task runners execute ... tasks :). At a bare minimum, you want your task runner to invoke the TypeScript compiler as you edit and save changes to your TypeScript files. Visual Studio and Visual Studio Code come with integrated task runners (MSBuild in the former and an integrated runner in VSCode). You will probably outgrow the integrated task runners, however. When this time arrives, have a look at gulp, grunt or similar tools. At the time of this writing, <a href="http://gulpjs.com/">gulp</a> seems to have the most mind share.

From here on out, I assume that you have selected an IDE and that your IDE is connected to a task runner that automatically compiles your TypeScript whenever you make a change and save.

## Debugging
map files
walking through the debugger

## Looking at the compiled javascript


** to cover: debugging

---

[^1]: The name of this book itself pays homage to YACC, a compilation tool whose full name is "Yet Another Compiler Compiler." If you've ever been interested in writing a compiler (and really, who hasn't heard that siren call?) then YACC could be the first string you pull from that ball of fun.

[^2]: You maybe interested in a bit of historical context. When Microsoft first came out and announced .NET and this concept of a common language runtime, quite a few people (including me, sad to say) scoffed at the idea. Back then, there was no C#, or it was in its infancy. Borland C++ and things like Delphi had a lot of mind share, if not market share. It's been quite a journey and fascinating thing to look back and realize how far we've come as an industry.

[^3]: Web browsers are not, strictly speaking, virtual machines. However, since we're merely trying to be practical in this chapter, it's close enough.

