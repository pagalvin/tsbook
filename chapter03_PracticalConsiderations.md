# Using TypeScript - A Practical Overview

TypeScript shares something in common with virtually every other computer language - a TypeScript program is just a text file. Computers can't run it without first transforming that text to machine language. That process is named *compilation*, of course, and it isn't exactly a new thing under the sun[^1].

<div style="float: right; width: 15%">
<div>
<img src="/assets/scoffing.jpg">
</div>
<div>
<p>Me, foolishly scoffing at Microsoft when they first announced .NET.</p>
</div>
</div>
These days, many popular languages don't even compile down to machine language. Java compiles down to bytecode. A virtual machine interprets that bytecode and executes your application. C# and other .NET languages compile down to bytecode as well, albeit a different format. They run in a  different virtual environment, the compile language runtime or CLR)[^2]. If you squint your eyes, even web browsers act as virtual machines[^3].

All modern web browsers know how to run JavaScript. They don't necessarily all agree upon the finer points of the DOM. They may vary their behavior with things like the console object. This and that bit of CSS acts different across different vendors' browsers (and by versions within the same vendor's browsers[^4]). Despite their differences, however, they agree more than they disagree[^5]. In most cases the JavaScript I write today runs on every browser on the planet, or at least the browsers I care about :).
 
TypeScript isn't JavaScript, of course. It looks a lot like JavaScript and as you'll see, you can write valid TypeScript that is literally identical to pure JavaScript. However, no major web browser today can execute TypeScript. There's a gap here. Transpilation bridges the gap between TypeScript and JavaScript by converting TypeScript to JavaScript. 

Here's one way to look at it:

![High Level TypeScript Transpilation Process](/assets/ch03_transpilation.PNG)

As a practical matter, it's no different from the kind of compilation process we go through with Java, .NET, Rust and other languages. However, it's usually referred to as a transpilation process rather than a compilation process. I'll tend to use both words in the book.

You don't need to own Visual Studio or use VS Community Edition to write TypeScript code. Many popular IDEs provide a first-class TypeScript experience, including Sublime, WebStorm and Visual Studio's younger sibling, Visual Studio Code. The JS community has largely embraced VS Code so it's a safe and easy bet. I have used VS Code to write all of the examples in this book (and indeed, the book itself) and many of the screen captures show VS Code in the background. That said, the book is not about VS Code or any other Integrated Development Environment (IDE). Pick whichever your prefer.

Today's market provides us with one TypeScript compiler. Microsoft created it, they maintain it and it's open source. As you'd expect, it's well-integrated with Visual Studio and interestingly, works even better with VS Code. However, it is actually a stand-alone independent application in its own right. Download and install from here: [https://www.typescriptlang.org/](https://www.typescriptlang.org/ "Visit the TypeScript Language site").

<div style="float:right; border:1px solid; padding: 5px; margin: 15px; width:30%; font-size: 11px;">
<b>A Brief Note on Task Runners</b><br/>

When you use a task runner, you define individual tasks and you usually "define" them by writing them in JavaScript. This means that you can write your tasks in TypeScript too.
</div>

An IDE plus the TypeScript compiler gets you most of the way - but not necessarily all the way -  you want to go. Depending on your IDE, you may also need a task runner. Task runners execute ... tasks :). At a bare minimum, you want your task runner to invoke the TypeScript compiler as you edit and save changes to your TypeScript files. Visual Studio and Visual Studio Code come with integrated task runners (MSBuild in the former and an integrated runner in VSCode). You will probably outgrow the integrated task runners, however. When this time arrives, have a look at gulp, grunt or similar tools. At the time of this writing, [gulp](http://gulpjs.com/) and [Webpack 2](https://webpack.js.org/) seem to have the most mind share.

From here on out, I assume that you have selected an IDE and that your IDE is connected to a task runner that automatically compiles your TypeScript whenever you make a change and save.

## Debugging

When I first started wondering about TypeScript, one of my very first thoughts was - how do I debug it? It turns out to be a very simple and natural process. There can be some quirks with web server config because they aren't configured to serve up map files the right way. These kinds of problems are all solvable. I can't emphasize how much of a nothingburger debugging concerns become once I understood the process.

Web browsers such as Chrome, Internet Explorer and Firefox provide great debugging tools. These tools work with plain JavaScript. Here's a video showing some code that iterates over a collection of objects and the Chrome debugger experience: 

/**video: show plain javascript editing

That looks all well and fine but how does it work with TypeScript?

First, the TypeScript compiler aims to generate human-readable JavaScript. As a result that transpiled code is often easy to reason about if it's all you have in the debugger. Let's do a quick video demo. 

First, here's that same JavaScript example re-written in TypeScript:

...

It looks pretty similar to its plain JavaScript counterpart but it's obviously different. Here's one of the debugging experiences when you transpile and run in your web browser:

//** video: show transpiled JS debugging

As you can see, it's useful but it's also kind of awkward. It's not showing your TypeScript. This is awkward at best. In some cases, the generated JS wanders pretty far from its TypeScript roots. Thankfully, the TypeScript compiler will generate map files for us. These provide a connection between the actual JavaScript the browser is running and its associated TypeScript source code. 

Here's the same experience, but this time using a map file:

/** video show using a map file

Map files are pretty interesting things in and of themselves. They don't just work for TypeScript, they work more generally with any JavaScript related source. For instance, in development situations, you'll often minimize your JavaScript but provide a map file that maps the minimized source back to its unminified state. Other languages, like ClosureScript, also use map files. The point here is that map files weren't invented for TypeScript, TypeScript simply leverages this existing capability. [Here's an ancient article](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) that describes source maps when they were first introduced back in 2012. For you historians [this article has also aged well](http://blog.teamtreehouse.com/introduction-source-maps).  

# Further Reading

You may find the following articles helpful:
- Light introduction to setting up and using the TypeScript compiler: http://david-barreto.com/introduction-to-the-typescript-transpiler/
- Using Gulp to automate TypeScript builds: https://wipdeveloper.com/2015/12/12/typescript-compile-with-gulp/?utm_content=buffer15f75&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer
- Setting up VS Code to work with TypeScript: http://blog.mannsoftware.com/?p=1951

# Summary

We write our TypeScript source using our favorite text editor which itself is usually part of our favorite IDE. The TypeScript compiler generates plain JavaScript based off our TypeScript source. This is a good thing, since web browsers know how to run JavaScript.

That generated source is, for the most part, human readable. That gives us a tolerable debugging experience. However, we get a first class debugging experience by using map files. 

That's enough big picture background information. It's now finally time introduce static types, starting with the next chapter. 

---

[^1]: The name of this book itself pays homage to YACC, a compilation tool whose full name is "Yet Another Compiler Compiler." If you've ever been interested in writing a compiler (and really, who hasn't heard that siren call?) then YACC could be the first string you pull from that ball of fun. [You can start here](https://en.wikipedia.org/wiki/Yacc).

[^2]: You maybe interested in a bit of historical context. When Microsoft first came out and announced .NET and this concept of a common language runtime, quite a few people (including me, sad to say) scoffed at the idea. Back then, there was no C#, or it was in its infancy. Borland C++ and things like Delphi had a lot of mind share, if not market share. It's been quite a journey and fascinating thing to look back and realize how far we've come as an industry. 

[^3]: Web browsers are not, strictly speaking, virtual machines. However, since we're merely trying to be practical in this chapter, it's close enough.

[^4]: Internet explorer, in particular, has plagued me over the years. It plagues me today.

[^5]: This handy web site helps identify how different browsers implement html markup, CSS and JavaScript: https://caniuse.com/.
