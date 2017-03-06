# Practical Considerations
If you haven't started using TypeScript at all or you've barely scratched the surface, this chapter is for you. 

TypeScript shares something in common with virtually every other computer language - a TypeScript program is just a text file. Computers can't run it without first transforming that text to machine language. That process is named *compilation*, of course, and it isn't exactly a new thing under the sun[^1].

These days, many popular languages don't even compile down to machine language. Java compiles down to bytecode and executes in the context of a virtual machine. C# and other .NET languages compile down to bytecode as well, albeit a different format. They run in a  different virtual machine (the compile language runtime or CLR)[^2]. We programmers live in a world of virtual machines. These include, importantly, the web browsers that frequently run our web apps[^3].

All modern web browsers knows how to run JavaScript. They don't necessarily all agree upon the finer points of the DOM. They may vary their behavior with things like the console object. Yadda, yadda, yadda. Despite their differences, they agree more than they disagree. In most cases, the JavaScript I write today runs virtually everywhere on the planet.
 
TypeScript isn't JavaScript, of course. It looks a lot like JavaScript and as you'll see, you can write valid TypeScript that is literally identical to pure JavaScript. However, no web browser today can execute TypeScript. Transpilation bridges the gap between TypeScript and JavaScript. Transpilation is simply a process that transforms one language into another. In this case, you write TypeScript and it's transpiled into pure javaScript.

Here's one way to look at it:

![High Level TypeScript Transpilation Process](/assets/ch03_transpilation.PNG)

 As a practical matter, it's no different from the kind of compilation process we go through with Java, .NET, Rust and other languages. However, it's usually referred to as a transpilation process rather than a compilation process. I'll tend to use both words in the book, although I lean towards compilation if only because it's easier to type.

As of now, there is only one TypeScript compiler. Microsoft maintains it and it's open source.

The mechanical process 

[^1]: The name of this book itself pays homage to YACC, a compilation tool whose full name is "Yet Another Compiler Compiler." If you've ever been interested in writing a compiler (and really, who hasn't heard that siren call?) then YACC could be the first string you pull from that ball of fun.

[^2]: You maybe interested in a bit of historical context. When Microsoft first came out and announced .NET and this concept of a common language runtime, quite a few people (including me, sad to say) scoffed at the idea. Back then, there was no C#, or it was in its infancy. Borland C++ and things like Delphi had a lot of mind share, if not market share. It's been quite a journey and fascinating thing to look back and realize how far we've come as an industry.

[^3]: Web browsers are not, strictly speaking, virtual machines. However, since we're merely trying to be practical in this chapter, it's close enough.

