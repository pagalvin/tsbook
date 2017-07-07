# Introducing Classes

TypeScript provides support for classes. Classes serve as a foundational component in many object oriented languages. Loosely defined, a class is a collection of data and functions that (usually) operate on that data. The data may or may not be accessible outside of the class where its defined. Similarly, class functions may or many not be available outside of their containing class. You get to make these decisions.

You can think of a classes as defining a template of functionality. That's the "data and functions" part. At runtime, we create *instances* of classes and we normally call them "objects." We often think in terms of "passing messages" or "invoking functions" on objects[^1]. 

Developers use classes to model people, places, business entities and concepts - all kinds of things. Here's a simple example that begins to model a bus that might be used for public transportation:

```TypeScript
class Bus {
    private myRouteNumber: number;
    constructor(routeNumber: number) {
        this.myRouteNumber = routeNumber;
    }
    public SayRoute() {
        console.log(`My route is ${this.myRouteNumber}`);
    }
}
```

Use the keyword `class` followed by the name of the class. 

Public transportation authorities typically assign route numbers to busses. The `Bus` class models the route number in a `private` field called `myRouteNumber`. 

The `constructor` is a function that runs when client code instantiates an instance of the  Bus object. As you can see, constructors can take parameters and in this instance, the constructor initializes the Bus' route number.

Our business rules dictate that busses must know how to "say" their name. A function, `SayRoute`, meets the requirement by listing the bus's route number out to the console.

TypeScript introduces a bit of new lingo to describe classes[^2]:
- We generically call myRouteNumber, the constructor and SayRoute _class members_. 
- myRouteNumber is a _property_.
- _constructor_ is a special function that runs every time code creates a new instance of Bus.  It runs only once per object instantiation but every time you create a new Bus object.
- SayRoute is a _method_.

Classes do nothing by themselves. They are much like cookie cutter templates - you can tell what the cookie is going to look like but you have no cookie until you have cookie dough. We create new objects as shown:

```TypeScript
const myBeloved148 = new Bus(148);
const theDreaded164 = new Bus(164);

myBeloved148.SayRoute();
theDreaded164.SayRoute();
```

The above code declares two instances of the `Bus` object, "myBeloved148" (a super express) and "theDreaded164" (a super local). It then invokes the `SayRoute` method on each instance.

When we create a new object using the `new` keyword, we're _instantiating_ the object. Some people like to say "newing it up" instead. Here's a video showing the basics:

## Protecting Your Class Data and Methods

You no doubt noticed a complimentary pair of descriptors, `private` and `public`. The Bus class declares a _private_ member, myRouteNumber. Private members (i.e. properties and methods) may only be referenced or invoked within the object itself.  Public members and methods may be referenced both within the class itself, but also by client code. This means that the following code will not compile:

```TypeScript
class Bus {
    private myRouteNumber: number;
    constructor(routeNumber: number) {
        this.myRouteNumber = routeNumber;
    }
    public SayRoute() {
        console.log(`My route is ${this.myRouteNumber}`);
    }
}
const myBus = new Bus(999);
myBus.myRouteNumber = 1234; // Throws an error, "Property 'myRouteNumber' is private and only accessible within the class 'Bus'"
```

As with every other part of the language, good TypeScript IDEs provide intellisense to help you locate and use public and private methods properly. Here's a short video demonstrating that point:

<iframe width="560" height="315" src="https://www.youtube.com/embed/QOvFFz1lRJM" frameborder="0" allowfullscreen></iframe>

(If you can't see the video, [try accessing it here](https://youtu.be/QOvFFz1lRJM) or type this URL into your web browser: https://youtu.be/QOvFFz1lRJM).

TypeScript classes go much deeper than this. The next chapter takes that dive.

<hr/>

[^1]: These phrases, "passing messages" or "invoking functions" pretty much mean the same thing. It can be helpful at times to view objects as living, breathing entities. This paradigm lends itself to the "passing messages" concept.

[^2]: It's probably more accurate to say that it borrows the lingo from other languages. 