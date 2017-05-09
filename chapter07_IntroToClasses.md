# Introducing Classes

TypeScript provides support for classes. Classes serve as a foundational component in many object oriented languages. Loosely defined, a class is a collection of data and functions. The data may or may not be accessible outside of the class where its defined. Similarly, class functions may or many not be available outside of their containing class. 

Developers use classes to model people, places, business entities and concepts - all kinds of things. Here's a simple example that beings to model a bus that might be used for public transportation:

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

concepts: this is just a template. It doesn't have any actual value until it's' newed up .

Public transportation authorities typically assign route numbers to busses. The `Bus` class models the route number in a `private` field called `myRouteNumber`. 

The `constructor` is a function that runs when client code instantiates an instance of the  Bus object. As you can see, constructors can take parameters and in this instance, the constructor initializes the Bus's route number.

Busses know how to "say" their name. A function, `SayRoute`, lists the bus's route number out to the console.

Classes do nothing by themselves. They are much like cookie cutter templates - if you have no cookie dough, you can't have a cookie. We create new objects as shown:

```TypeScript

const myBeloved148 = new Bus(148);
const theDreaded164 = new Bus(164);

myBeloved148.SayName();
theDreaded164.SayName();
```
