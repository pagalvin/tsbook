# Complex Types

## What's Covered
We're going to start off this chapter by introducing TypeScript _interfaces_. As many of you know, practicing object oriented (OO) programmers often use interfaces to describe parts or all of common design patterns (e.g. Observer, Command, etc.). TypeScript interfaces support these design patterns the same way interfaces support design patterns in C#, Java and similar languages. We'll get to that topic in [[[chapter 7?]]]. In the meantime, this chapter focuses on data - how to use interfaces to describe objects and their fields.  

TypeScript provides other more advanced typing support. This chapter covers some of them, including[^1]:

<div style="float:right; margin-left: 15px; border: 1px solid; width:25%; font-size: 10px">
<b><i>A Note About Generics</i></b><br/>
Generics offer a very powerful data typing capability. They look and act a lot like generics in C# and are a very effective tool helping you adhere to the DRY principle. 
<br/>
The book covers generics in chapter [[[ ??? ]]]. 
</div>

- Enumerations: Attach a human-friendly label to a number
- Unions: A variable can be a "number" or "string" but not anything else.
- Custom types: Think classes but without a constructor. (If you don't know about classes, don't worry, you'll learn a it about them in the next chapter).

Let's begin with interfaces.

## Interfaces

Declare a TypeScript interface like this:

```TypeScript
interface myInterface {

}
```
That code defines a new interface called "myInterface". It's empty, but valid. 

Variables can now declare their type as being that interface:

```TypeScript
const myVariable: myInterface;
```

Although there are some use cases for empty interfaces, you'll normally use them this way to describe complex objects. Let's consider a business scenario and implement a supporting data structure in plain JavaScript and then again in TypeScript. 

Your client owns a book store and you're developing a simple app that lets your client's customers view a listing of all available books. In JavaScript object terms, a "book" has these properties:

- Author
- Title
- Genre (biography, history, sci-fi)
- Short Description
- Total Pages
- Condition (New, Great, OK, Not Great)

In pure JavaScript, we might model a book this way:

```JavaScript
var bookModel = {
    Author,
    Title,
    Genre,
    ShortDescription,
    TotalPages,
    Condition
}
```

That's simple enough. We have an object called "bookModel." The developer's intent is pretty clear, although there's actually plenty of room to improve it. 

In TypeScript, we create interfaces to define our models. Here is the book model's interface:

```TypeScript
interface BookModel {
    Author: string;
    Title: string;
    Genre: string;
    ShortDescription: string;
    TotalPages: number;
    Condition: string;
}
```

This interface shows two immediate advantages TypeScript provides over JavaScript:

1. The developer's intent is much clearer. 
2. Spot-on intellisense.

Let's assume you agree that the dev's intent is more clear here than it is with the pure JS object above. Here's a short 40 second video showing VS Code intellisense at work:

<!--<div style='position:relative;padding-bottom:63%'><iframe src='https://gfycat.com/ifr/OrdinaryRareGull' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>-->

<iframe width="560" height="315" src="https://www.youtube.com/embed/o_wxodLGT34" frameborder="0" allowfullscreen></iframe>

Here are some key takeaways from the video: 

1. Once you define an interface, it becomes another candidate data type. Use them the same way as the built-in data types, such as string, boolean, etc.
2. Once you define a variable with an interface data type, you *must* provide all of the interface fields. NOTE: As you'll soon see, it's possible to define optional interface components as well.
3. It's not enough to add all of the interface fields to the "aBook" variable. You must also add them with the correct type. In the video, I tried to assign a string value to "TotalPages" field but the IDE told me that was not allowed.

## Nested Objects and Interfaces

## Interfaces - A Summary

good stuff about interfaces:
- intent
- good ide support
- refactoring is easy
- data type shorthand is better than object copy approaches



## Enumerations
Enumeration walk-through here

## Union Types

Union types here

## Custom Types
Custom type description here





=-=
other stuff
need to explain that TS gives you future javascript today. In the overview
test

---

[^1]: [[[ Chapter 8? ]]] covers generics, a very powerful data typing tool.
