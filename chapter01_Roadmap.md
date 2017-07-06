# The Road Map

This book follows familiar conventions. It addresses a few house keeping topics (like this very chapter) before properly introducing the language. That proper introduction starts off with simple topics (variables and data types) and works its way up to more complicated areas towards the end, such as generics.

## The Gloss-Overs

This book won't go into any great detail about some topics. It's mostly concerned with the TypeScript language. As a result, the book does not provide step-by-step instructions for things like downloading TypeScript, installing it or configuring it. This and similar topics are covered in much better detail elsewhere. The final chapter, "Where Do I Go From Here?" points to some useful online resources focusing on these things.

## Practical Considerations

This chapter covers the TypeScript development experience at a higher level. It answers questions such as:
- How do I write TypeScript applications in the first place?
- How does TypeScript run in the browser? (It doesn't, actually - it "transpiles" to JavaScript).
- How do I debug TypeScript apps?

The goal here to help ground you in the TypeScript "world" and describe the big picture of what's happens as you build TypeScript solutions. As you'll see, it's not very complicated[^1].

## Introducing Types

TypeScript offers static types. You don't need to use them, but they are pretty helpful. This chapter starts off describing primitives (integers, strings and the like). It shows how declaring a variable's type helps good integrated development environments (IDEs) provide useful edit-time and compile-time feedback. We'll also take an opportunity to try and knock the TypeScript doubters off their perch with the strong typing goodness :)[^2]. 

## Types in Depth

The real world is complicated with complex data structures. TypeScript offers up the notion of `interfaces` to help us describe and manage them. This chapter introduce interfaces as a way to describe them starting with a flat object and moving on to a more complex JSON formatted response from a REST service.

TypeScript interfaces look and feel quite similar to interfaces in C# and Java. Generally speaking, interfaces are one of the backbones for many common and important design patterns and principles (think [SOLID](http://williamdurand.fr/2013/07/30/from-stupid-to-solid-code/)). TypeScript interfaces enable us to more directly implement these design patterns[^3]. 

TypeScript offers several other ways to describe data. The chapter covers a few the most useful ones. These include:
- Enumerations: Assigning a label to a fixed value.
- Union Types: Define a new custom type that can hold two or more different types of values (including hard coded strings).

TypeScript provides other types, such as intersection types. This book takes a pass on those types for now - they feel like edge cases and although interesting and vitally useful when you can, you know, use them, most of us don't live on the edge.

## Template Strings

Eliminate cumbersome string manipulation through the magic of template strings!

## Functions

A detailed look into how TypeScript enhances standard JavaScript functions, including typed parameters, void return values, default function parameter values and more.

In addition, learn about Arrow Functions, often called "anonymous" or "lambda" functions.

## Introducing Classes and Classes in Depth

TypeScript's static typing is, as they say, the [bee's knees](http://www.phrases.org.uk/meanings/the-bees-knees.html).  Classes are the honey and these two chapters cover them pretty thoroughly:

- Class syntax
- Classes and interfaces
- Inheritance
- Abstract classes
- Static class members

Classes are an important building block for object oriented programming and TypeScript provides some solid support here.

## Generics

Learn TypeScripts' version of generics as you know them from C# and Java.

## Continue Learning

A big long list of links that will hopefully lead you to TypeScript Greatness.

[^1]: Isn't this always the case? No specific thing in this post-modern JavaScript world of ours is particularly complicated. It surely adds up though.

[^2]: If you or someone you know is a TypeScript doubter, have a look at this chapter and its videos. Invest fifteen minutes or so here and then make up your mind about whether you want to invest more time after that.

[^3]: As they say in the Old Country, "Come for the static typing, stay for the interfaces."