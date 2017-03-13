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

Let's assume you agree that dev's intent is more clear here than it is with the pure JS object above. Here's a short animated gif showing VS Code intellisense at work:


<video width="640" height="480" controls>
  <source src="/assets/video/ch05/Interfaces01.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>


T
REST example here.

## Enumerations
Enumeration walk-through here

## Union Types

Union types here

## Custom Types
Custom type description here





=-=
other stuff
need to explain that TS gives you future javascript today. In the overview

---

[^1]: [[[ Chapter 8? ]]] covers generics, a very powerful data typing tool.
