# Complex Types Using Interfaces

## What's Covered
We're going to start off this chapter by introducing TypeScript _interfaces_. This chapter examines interfaces in the context of JavaScript "data" objects and their fields. As many of you know, interfaces play an over-sized role in many common design patterns (think SOLID[^1]). We will talk about interfaces in that context in [[chapter 7?]].  

TypeScript provides other more advanced typing support that you've likely seen in C# and Java. This chapter covers some of them, including[^1]:

<div style="float:right; margin-left: 15px; border: 1px solid; width:25%; font-size: 10px">
<b><i>A Note About Generics</i></b><br/>
Generics offer a very powerful data typing capability. They look and act a lot like generics in C# and are a very effective tool helping you adhere to the DRY principle. 
<br/>
The book covers generics in chapter [[[ ??? ]]].
</div>
 
- Enumerations: Attach a human-friendly label to a number
- Unions: A variable can be a "number" or "string" but not anything else.
- Custom types: Think classes but without a constructor. (If you don't know about classes, don't worry, you'll learn a it about them in the next chapter).

*** Add summary about lamda functions here.

## Interfaces as Data Describers

Declare a TypeScript interface like this:

```TypeScript
interface myInterface {

}
```
That code defines a new interface called "myInterface". It's an empty interface, but valid[^2]. //

Variables can now declare their type as being that interface:

```TypeScript
const myVariable: myInterface;
```

Although there are some use cases for empty interfaces, you'll normally use them this way to describe complex objects. Let's consider a business scenario and implement a supporting data structure in plain JavaScript. 

Your client owns a book store and you're developing a simple app that lets your client's customers view a listing of all available books. In JavaScript object terms, a "book" has these properties:

- Author
- Title
- Genre (e.g. biography, history, sci-fi)
- Short Description
- Total Pages
- Condition (e.g. New, Great, OK, Not Great)

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

That's simple enough. We have an object called "bookModel." The developer's intent is pretty clear, although there's actually plenty of room for improvement. If you want to re-use `bookModel` in pure JavaScript, you could clone it[^3]:

```JavaSCript
var aBookInstance = (JSON.parse(JSON.stringify(bookModel)));
```

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

When we want an actual book instance, we define it like this in TypeScript:

```TypeScript
let aBookInstance: BookModel;
```

This interface shows three immediate advantages TypeScript provides over JavaScript:

1. The developer's intent is much clearer. 
2. Spot-on intellisense.
3. _It's really a model_. It's not a JavaScript variable masquerading as model. In fact, when you compile a TypeScript interface, it produces no JavaScript at all. Only the compiler knows about the interface. There is no run-time artifact.

Let's assume you agree that TypeScript conveys the the dev's intent more clearly than the pure JS example[^5]. Here's a short 40 second video showing VS Code intellisense at work:

<iframe width="840" height="473" src="https://www.youtube.com/embed/o_wxodLGT34" frameborder="0" allowfullscreen align="middle"></iframe>
 
Here are some key takeaways from the video: 

1. Once you define an interface, it becomes another candidate data type. Use it the same way as the built-in data types, such as string, boolean, etc.
2. Once you define a variable with an interface data type, you must usually include all of the interface fields. NOTE: As you'll soon see, it's possible to define optional interface components as well.
3. It's not enough to add all of the interface fields to the "aBook" variable. You must also add them with the correct type. In the video, I tried to assign a string value to "TotalPages" field but the IDE told me that was not allowed.

### Refactoring with Interfaces

Interfaces give us even more meaningful information and it's particularly useful when we refactor our code.

Let's imagine that we need to change our book model. When we started, we didn't realize that many books have multiple authors. As a result, we need to refactor the model and make Author an array of strings, not just a scalar / single string. 

In pure JS, we don't need to do anything special. We just start writing code like this:

```JavaSCript
var bookModel = {
    Author, // NOTE! On [such and such a date], this was converted to an array
    Title,
    Genre,
    ShortDescription,
    TotalPages,
    Condition
}

var aBookInstance = JSON.parse(JSON.stringify(bookModel));
//aBookInstance.Author = "Paul Galvin";
aBookInstance.Author = ["Paul Galvin"];

```

It's a very simple change to make, but it's quite difficult to find all the places where you need to make the change. You mostly have to do a global search in your IDE to find instances of "Author" and refactor where you find them.

Contrast this with TypeScript:

<iframe width="728" height="408" src="https://www.youtube.com/embed/fNtcCTeMAhQ" frameborder="0" allowfullscreen></iframe>
 
When I changed Author from `string` to `string[]`, I invalidated every instance of every book model in the code. I can't run a successful build until I fix it. I still have a potentially tricky refactoring task on my hands - after all, I still need to fix every place in the code that references Author. However, the compiler won't let me miss any of those changes. That is powerful stuff. 

### Nested Objects and Interfaces

Although `BookModel` is technically a complex object, it's not _very_ complex. Let's spice things up and take another look at "Author." We've already refactored the model to account for multiple authors. Authors are normal people, just like the rest of us, and in the United States and elsewhere, they usually have at least two names - a first name and last name. In addition, authors _love_ feedback[^6][^7]. To this end, we want the author's preferred email for feedback. 

This next bit of code shows the new `AuthorModel` and refactors `BookModel` to use it.

```TypeScript
interface AuthorModel {
    FirstName: string;
    LastName: string;
    PreferredEmail: string;
}

interface BookModel {
    Authors: AuthorModel[];
    Title: string;
    Genre: string;
    ShortDescription: string;
    TotalPages: number;
    Condition: string;
}

// Example 1: Create an author object first, then add it to the book instance
const FoodBookAuthor1: AuthorModel = {
    FirstName: "Paul",
    LastName: "Galvin",
    PreferredEmail: "galvin.paul@gmail.com"
}

const FoodBookAuthor2: AuthorModel = {
    FirstName: "Kelly",
    LastName: "Smith",
    PreferredEmail: "ksmith123@awesomefoods.com"
}

const foodBook: BookModel = {
    Authors: [FoodBookAuthor1, FoodBookAuthor2],
    Title: "Foods - The Right Food for the Right Meal",
    Genre: "Life Hacks",
    ShortDescription: "Eggs are not for dinner",
    TotalPages: 158,
    Condition: "Used - Good"
}

// Example 2: Create a book instance in one line.
const GotM: BookModel = {
    Authors: [{
        FirstName: "Steven",
        LastName: "Erikson",
        PreferredEmail: "ganoes.paran@malazanempire.gov"
    }],
    Title: "Gardens of the Moon",
    Genre: "High Fantasy",
    ShortDescription: "Empress tries to conquer city, fails, but wins something better",
    TotalPages: 772,
    Condition: "New"
}
``` 

As you can see, TypeScript supports nested objects quite nicely. 

If you're using VSCode or Visual Studio, try copying in the above code. Hover your mouse over the Authors field in either Example 1 or Example 2 and then press F12. This will bring you to the definition of the object. This is very handy when trying to understand the underlying definition of a given type/interface.

### Interfaces - Mapping a REST Response

We'll wrap up the discussion on interfaces by reverse engineering a REST response. In this scenario, I'm making a call out to a SharePoint REST endpoint asking for a "user"[^8]. When I make the call, I get back a lot of information, starting with the HTTP wrapper around what I really want:

!["HTTP Wrapper"](assets/imagework/ch05/RestInterface1.JPG "HTTP Wrapper")

The HTTP wrapper consists of:
- config (complex object)
- data (complex object)
- headers (complex object)
- status (number)
- statusText (string)

We can define an interface that matches that:

```TypeScript

interface httpResponse {
    config: any,
    headers: any,
    status: number,
    statusText: string;
}
```

The above example is a bit lazy  - it's not trying to model the data underlying `config` or `headers`. I'm waving my hands in their general direction by using "any." I certainly could model those objects but I'm going to focus on `data` instead. You'll notice that "data" is missing from the interface. Lets link that in. But first we need to define an interface that models the data portion of the REST response. To start, I need to know what the REST response is giving me:

!["Data Portion of REST Response"](assets/imagework/ch05/RestInterface2.JPG "Data Portion of REST Response")

This interface maps things nicely:

```TypeScript
interface userProfileRestModel {
    Attachments: boolean;
    AuthorId: number;
    BPBrands: string[];
    BPDescription: string;
    "odata.editLink": string;
    // and other user profile fields
}
```

Note the `odata.editLink` field in the response - if your object's name has otherwise invalid characters in it, you can still get and set its values when you reference it via its name this way.

Now it's time to link them in. Here's the code:

```TypeScript
interface userProfileResponse extends httpResponse {

    data: {
        value: userProfileRestModel[]
    }

}
```

Notice the `extends` keyword. I'm defining a new interface, `userProfileResponse` by _extending_ the previously defined `httpResponse` interface. The new `userProfileResponse` interface contains all the fields and structure of both.

Here's another 40 second video that shows this visually.

<iframe width="560" height="315" src="https://www.youtube.com/embed/oK3MpqhrVOo" frameborder="0" allowfullscreen></iframe>

The last dozen seconds of the video show you that the IDE understands the structure of the new `userProfileResponse` interface.


# Summarizing Interfaces

TypeScript interfaces are a very useful feature of the language:
- They are very good at demonstrating the developer's intent
- IDEs understand their structure and provide great intellisense support.
- They are better at modeling content than pure JavaScript.
- If you need to refactor one of your models, it's much more difficult to miss something since everywhere you use the interface breaks.

We're not finished with interfaces - they also play a role with classes. That's where a significant amount of their pattern-implementation power comes from. Before we get to that, we'll cover off several other great typing features - enums, unions and custom types.


## Lambda Functions


## Union Types

Union types here

## Custom Types
Custom type description here





---

[^1]: If you aren't familiar with this SOLID acronym, it's probably worth your time checking it out. [This scotch.io write-up is a good start](https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design) (https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design). 

[^1]: [[[ Chapter 8? ]]] covers generics, a very powerful data typing tool.

[^2]: This is the footnote for empty valid interfaces.

[^3]: Cloning footnote goes here. Specific example came from here: http://heyjavascript.com/4-creative-ways-to-clone-objects/

[^5]: intent footnote. "If you don't agree, then I don't know what else to tell you."

[^8]: If you happen to know anything about SharePoint - I'm not retrieving an SPUser here, I'm retrieving an item from a custom list.