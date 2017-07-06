# Classes In Depth

This chapter covers TypeScript classes in more depth, including:
- More on public and private methods and properties
- Accessors (Getters and Setters)
- Using interfaces to simplify constructors
- Inheritance: Build a hierarchy of classes
- Hiding Information: protecting your class data and methods from the outside world
- Working with interfaces: Hide your implementation and enable greater levels of abstraction
- Abstract classes: Define templates with minimum standards of functionality

As you'll see, TypeScript supports classes in mach the same way as C#, Java and other class oriented languages.

## Public, Private and Generated JavaScript

The bus example from the previous chapter shows both public and private class members (`SayRoute` and `myRouteNumber` respectively). You can declare both methods and properties as public or private. Here's a slightly more complex example showing a private method and public property:

```TypeScript
class Bus {

    private myRouteNumber: number;
    public SeatingCapacity: number; 

    private myRunCost: number;

    constructor(routeNumber: number) {
        this.myRouteNumber = routeNumber;
        
        this.myRunCost = this.calculateRunCost(30, 1.95); // Allowed - objects may invoke their own private functions
    }

    public SayRoute() {
        console.log(`My route is ${this.myRouteNumber}`);
    }

    private calculateRunCost(forDistance: number, fuelCostPerMile: number): number {
        // Logic goes here to calculate cost for this bus to run this route.
        // This function is invisible to client objects.
    }

}

const myBus = new Bus(999);
myBus.SeatingCapacity = 80;

console.log(myBus.calculateRunCost(30, 1.95)); // Edit-time error since "calculateRunCost" is private
```

The code defines a new public property, `SeatingCapacity`. Since it's public, client functions may both read (get) it and write (set) it. Client functions may not invoke the private method, `calculateRunCost`. However, the constructor is allowed to invoke calculateRunCost since they both belong to the same object.

### Transpiled Objects and Implications Thereof

It's important to remember that TypeScript eventually compiles down to JavaScript. Let's correct the TypeScript syntax error and show the resulting JavaScript.

TypeScript Bus Object:

```TypeScript
class Bus3 {

    private myRouteNumber: number;
    public SeatingCapacity: number; 

    private myRunCost: number;

    constructor(routeNumber: number) {
        this.myRouteNumber = routeNumber;
        
        this.myRunCost = this.calculateRunCost(30, 1.95); // Allowed - objects may invoke their own private functions
    }

    public SayRoute() {
        console.log(`My route is ${this.myRouteNumber}`);
    }

    private calculateRunCost(forDistance: number, fuelCostPerMile: number): number {
        // Logic goes here to calculate cost for this bus to run this route.
        // This function is invisible to client objects.

        return 0; // Method signature requires us to return some numeric value to avoid syntax error.

    }

}

const myBus3: Bus3 = new Bus3(999);
myBus3.SeatingCapacity = 80;
myBus3.SayRoute();
myBus3["myRunCost"] = 999; // Use bracket access to change the value of the "private" class property, myRunCost
```

Transpiled JavaScript Bus Object:

```JavaScript
var Bus3 = (function () {
    function Bus3(routeNumber) {
        this.myRouteNumber = routeNumber;
        this.myRunCost = this.calculateRunCost(30, 1.95); // Allowed - objects may invoke their own private functions
    }
    Bus3.prototype.SayRoute = function () {
        console.log("My route is " + this.myRouteNumber);
    };
    Bus3.prototype.calculateRunCost = function (forDistance, fuelCostPerMile) {
        // Logic goes here to calculate cost for this bus to run this route.
        // This function is invisible to client objects.
        return 0; // Method signature requires us to return some numeric value to avoid syntax error.
    };
    return Bus3;
}());
var myBus3 = new Bus3(999);
myBus3.SeatingCapacity = 80;
myBus3.SayRoute();
myBus3["myRunCost"] = 999;
```

As you can see, TypeScript creates an Immediately Invoked Function Expression (IIFE) called Bus3 with the following characteristics:
- Comments from TypeScript source emitted into transpiled JavaScript
- A function named "Bus3". This maps to the TypeScript constructor.
- Two prototype methods, "SayRoute" and "calculateRunCost".

In addition, it also shows that TypeScript can't always enforce privacy the same way that C# and Java can.  At the end of the day, you're working with JavaScript and you do anything that JavaScript lets you do. This means access object properties using bracket notation.

## Accessor (Getters and Setters)

TypeScript provides syntax to create Accessors, often called "getters" and "setters"[astleastido]. These are functions that look and feel a lot like properties but are, in fact, functions. Client code uses them just like it uses any other property, Here's a very simple example:

```TypeScript
class Bus4 {

    private _mySeatingCapacity: number;

    public set SeatingCapacity(val: number) { this._mySeatingCapacity = val;}
    public get SeatingCapacity() { return this._mySeatingCapacity;}

    constructor() {

    }
}

const theBus: Bus4 = new Bus4();
theBus.SeatingCapacity = 80;

console.log("Seating capacity:", theBus.SeatingCapacity);
```

The `Bus4` class defines a private property, `_mySeatingCapacity`. It defines a corresponding getter and setter, `SeatingCapacity`. Client code then interacts with SeatingCapacity as if it were a public property by setting the value to 80 and then reading the value when logging it out to the console.

TypeScript compiles getters and setters down to plain JavaScript "Object.DefineProperty" calls:

```JavaScript
var Bus4 = (function () {
    function Bus4() {
    }
    Object.defineProperty(Bus4.prototype, "SeatingCapacity", {
        get: function () { return this._mySeatingCapacity; },
        set: function (val) { this._mySeatingCapacity = val; },
        enumerable: true,
        configurable: true
    });
    return Bus4;
}());
var theBus = new Bus4();
theBus.SeatingCapacity = 80;
console.log("Seating capacity:", theBus.SeatingCapacity);
```

If all you want to do is wrap a public getter and setter around a private property, it's hardly worth the trouble[dontwrap] - and indeed can be misleading. Here's a more comprehensive example showing how a getter can perform a more meaningful calculation.

```TypeScript
class Bus5 {

    private _myTotalPassengers: number;
    private _myCostPerMile: number;
    private _myTotalRouteDistance: number;

    private _myRouteNumber: number;
    public get myRouteNumber() { return this.myRouteNumber; }
    
    private _mySeatingCapacity: number;
    public set SeatingCapacity(val: number) { this._mySeatingCapacity = val; } 

    public get CostPerRider() {
        const totalRouteCost = this._myTotalRouteDistance * this._myCostPerMile;
        const costPerRider = totalRouteCost / this._myTotalPassengers;
        return costPerRider;
    }

    constructor(routeNumber, costPerMile, totalPassengers, routeDistance) {
        this._myRouteNumber = routeNumber;
        this._myCostPerMile = costPerMile;
        this._myTotalPassengers =  totalPassengers;
        this._myTotalRouteDistance = routeDistance;
    }

}

const myBus5: Bus5 = new Bus5(148, 12.50, 72, 80);
myBus5.SeatingCapacity = 80;

console.log("My total cost per rider:", myBus5.CostPerRider)

console.log("Cost per rider with 80 riders: ", new Bus5(148, 12.50, 80, 50).CostPerRider)

```

This examples shows a getter, `CostPerRider`. When client code refers to the CostPerRider, it calculates a value at run-time by taking into account distance, cost per mile and total riders. It then returns that value. 

[[ sidebar here: want to be careful about doing something here that takes a long time to run. client code should not have to worry about simply accessing a property causing a performance hit. Angular 1.x is particularly prone to calling many, many times so could be a huge bottleneck.]]

## Use Interfaces to Define Constructor Arguments

In the previous example, the Bus5 object's constructor takes four numeric arguments as input:
```
const myBus5: Bus5 = new Bus5(148, 12.50, 72, 80);
```
It's difficult to know what those arguments mean. Sure, intellisense helps a lot, but you need to hover your mouse over the code to get that context. 

We could have create an empty constructor and gone with public accessors or properties instead. In this case, we'd end up with code like this:
```
const myBus5: Bus5 = new Bus5();
myBus5.RouteNumber = 148;
myBus5.CostPerMile = 12.50;
myBus5.TotalPassengers = 72;
myBus5.RouteDistance = 55;

There are at least two problems with this approach:
1. It requires public properties. This means that they can be changed after they've been initialized and that can lead to pernicious side effects.
2. If you add a new public property, IDEs can't easily tell you everywhere you need to change the code to initialize it.

Consider the second point. Let's say you have a non-trivial Bus management solution and you're instantiating Bus objects in multiple modules in the solution. One day, you realize you need to model a new property, `StandardRouteTime` (to record how long a particular bus route should take from start to finish). It's easy to update the class definition and and likewise easy enough to update any given bit of code that creates a new instance of the bus object. However, it can be hard to find every place that you need to change. Interfaces help solve this, as shown in the following bit of code:

```

interface Bus6Args {
    routeNumber: number;
    routeDistance: number;
    costPerMile: number;
    totalPassengers: number;
}

class Bus6 {

    private _myTotalPassengers: number;
    private _myCostPerMile: number;
    private _myTotalRouteDistance: number;

    private _myRouteNumber: number;
    public get myRouteNumber() { return this.myRouteNumber; }
    
    private _mySeatingCapacity: number;
    public set SeatingCapacity(val: number) { this._mySeatingCapacity = val; } 

    public get CostPerRider() {
        const totalRouteCost = this._myTotalRouteDistance * this._myCostPerMile;
        const costPerRider = totalRouteCost / this._myTotalPassengers;
        return costPerRider;
    }

    constructor(args: Bus6Args) {
        this._myRouteNumber = args.routeNumber;
        this._myCostPerMile = args.costPerMile;
        this._myTotalPassengers =  args.totalPassengers;
        this._myTotalRouteDistance = args.routeDistance;
    }

}

const myBus4: Bus6 = new Bus6({routeDistance: 44, costPerMile: 12.50, routeNumber: 148, totalPassengers: 72});
myBus4.SeatingCapacity = 80;

console.log("My total cost per rider:", myBus4.CostPerRider)

console.log("Cost per rider with 80 riders: ", new Bus6({routeDistance: 44, routeNumber: 148, costPerMile: 12.50, totalPassengers: 80}).CostPerRider)
```

This code is better for at least three important reasons:
1. Clarity
2. Long-term maintenance
3. Better information hiding

**video: chapter 10 class in depth, showing the clarity/long-term maintenance/info hiding feature.

### Clarity

The code defines an interface, `Bus6Args`. The class constructor then takes an argument of type Bus6Args. This allows us to write a line of code like this:

```TypeScript
const myBus6: Bus6 = new Bus6({routeDistance: 44, costPerMile: 12.50, routeNumber: 148, totalPassengers: 72});
```

This is a lot easier to understand than:

```JavaScript
var myBus6 = new Bus6(44, 12.5, 148, 72);
```

It's immediately obvious what each of these four parameters do.

### Long-term Maintenance
Recall the scenario from above - complex Bus management system with many modules, thousands or more lines of code and many, many times when the code instantiates a new Bus6 object. To model a new property, follow these simple steps:
1. Update the class definition to include the new property
2. Update the constructor and class business logic to make use of the property
3. Compile all the code.

The first time you do this, the TypeScript compiler will report  an error everywhere you've instantiated a new Bus object since all of your constructor arguments will be missing the new property. This gives you a comprehensive checklist of every place you need to account for this new property[longsincepast].

## Classes and Interfaces

Many common software design patterns find their best implementation rooted in interfaces. In object oriented languages like TypeScript, C# and Java, developers use interfaces to abstract implementation details and to create generic functionality that works against a collection of seemingly disparate classes instead of individual named classes. 

### Classes, Interfaces and Data

So far, we've used interfaces to define the "shape" of data. We can also use interfaces to define the shape - the required properties - of a class. Let's step away from Buses for the moment and think instead about a product recommendation engine. Imagine that you have a database of clothing products such as pants, shirts, jackets, shoes, sneakers, etc. You've created a nice search screen that allows users to state a preferred color and price range. You want to iterate over all of your products and show anything that meets the user's preferences.

We can easily model these products as classes and if we're careful about it, we can make sure that each class includes a `color` and `price` property. This would then allow us to iterate over a collection of these objects and recommend them based on the user's preferences. Taking this approach, we might come up with a model like this:

```TypeScript
class Shirt {
    public color: string;
    public fabricType: string;
    public price: number;
    public cut: string;
    constructor() { }
}

class Shoe {
    public color: string;
    public size: string;
    public price: number;
    constructor() {}
}

class Pants {
    public color: string;
    public inseam: number;
    public waist: number;
    public price: number;
    constructor();
}
```

Each of the three classes has `color` and `price` and this lets us write some comparison logic:

```TypeScript
const allProducts: any[] = [].concat(new Shirt(), new Shirt(), new Pants(), new Shoe(), new Pants(), new Shirt());

const Recommend = function(minPrice, maxPrice, requestedColor) {

    return allProducts.reduce(function(prev, curr) {
        if ((curr["color"] === requestedColor) ||
            (curr["price"] >= minPrice && curr["price"] <= maxPrice)) {
                return prev.concat(curr);
            }
    }, []);
}

console.log("Recommended for min/max price of 10/20 and color = blue:", Recommend(10, 20, "blue"));
```

In this code, we build up a random array of products. The code doesn't show it, but you can easily pretend that each object is initialized with appropriate data.

The code defines a function, `Recommend` and that function iterates (via `reduce`) over the collection of products, extracting those that match the user's criteria.

This works well enough, but it's really pretty awful overall. There's an `any` array. It's referencing object properties via bracket notation. If we accidentally put a colorless product in the allProducts array, such as bottled water, the code throws a runtime error or returns an undefined value. Even if we add a new product, such as a scarf, we need to be very careful that we follow the expected naming convention. This, for instance, will cause a runtime error:
```TypeScript
class Scarf {
    public Color: string;
    public price: number;
    public length: number;
    constructor();
}
```
It would fail because color is capitalized in the Scarf object but the `Recommend` function expects lower case names.

We can avoid all this trouble by using interfaces to define required properties:
```TypeScript
interface IRecommendable {
    color: string;
    price: number;
}
```

So far, this looks a lot like the interfaces discussed earlier in the book. However, we can also apply interfaces to classes:

```TypeScript
interface IRecommendable {
    color: string;
    price: number;
}

class Scarf implements IRecommendable{
    public color: string;
    public fabricType: string;
    public price: number;
    public length: string;
    constructor() { }
}
```

The `implements` keyword tells TypeScript that `Scarf` objects always minimally define `color` and `price` properties. They can define more properties and as you can see, they do.  However, they must at least define those two.

We can make other "Recommendable" objects and by doing this, we can now enjoy some intellisense support. Consider this refactored code:

```TypeScript
interface IRecommendable {
    color: string;
    price: number;
}

class Scarf implements IRecommendable{
    public color: string;
    public fabricType: string;
    public price: number;
    public length: string;
    constructor() { }
}

// Product Displays can't be recommended so doesn't implement the interface.
class ProductDisplay {
    public name: string;
    public location: string;
    constructor() {}
}

class Sneaker implements IRecommendable {
    public color: string;
    public inseam: number;
    public waist: number;
    public price: number;
}

const allRecommendableProducts: IRecommendable[] = 
    [].concat(new Sneaker(), new Sneaker(), new Scarf(), new Sneaker(), new Sneaker(), new Scarf());

const GetRecommended = function(minPrice, maxPrice, requestedColor) {

    return <IRecommendable> allProducts.reduce(
        function(prev: IRecommendable[], curr: IRecommendable) {
            if ((curr.color === requestedColor) ||
                (curr.price <= maxPrice && curr.price <= maxPrice)) {
                    return prev.concat(curr);
                }
        }, []);
}

const RecommendedItems = GetRecommended(10, 20, "blue");

console.log("Recommended for min/max price of 10/20 and color = blue:", Recommend(10, 20, "blue"));
```

[[ add a video here showing how this builds up ]]
**video: classes in depth: show the build-up of a class that implements an interface.

This code has many advantages over the earlier, non-interface style approach:
- `allRecommendableProducts` contains a collection of objects (`IRecommendable[]`) each of which is guaranteed to hold a `price` and `color` property.
- If we try to add another object, such as `ProductDisplay` to that collection, the IDE will warn us that it does not meet the interface requirements of the collection's objects. This means that our code can safely assume the object properties are present.
- We can reference the color and price properties using dot notation inside the reduce function. In fact, the IDE even gives helpful intellisense hints.

### Classes, Interfaces and Methods

In addition to defining data requirements, you can define required methods. Let's explore this in the context of a data export.  You've modeled a collection of products as objects and you want to allow an end user to export those products out to an Excel spreadsheet. Excel works great with comma separated lists, so if your objects can create a comma-separated version of themselves, then it's a piece of cake to export that out and let Excel do its magic.

This wouldn't be very hard to do in a generic way using plain JavaScript, so let's complicate matters a little bit by introducing a bit of security. Some objects contain sensitive information, such as `cost` and you want to restrict access to that property based on the user's role (e.g. "operator", "supervisor", "administrator"). Lastly, we're not only worried about the `cost` property. Some products, but not all, are subject to inventory control measures. In these cases, rather than providing the product's actual inventory-on-hand, we need to show a message, "contact sales."

We *could* write a big messy CSV generator that generically iterates over object properties and then litter it with a bunch of if/then/else statements. Let's instead delegate the field level logic to the product objects themselves.

Here's a moderately complex example:

```TypeScript
interface StandardProduct {
    name: string;
    description: string;
}

interface SecuredFieldsItem {
    GetAllowedFieldNames: (requestedByRole: string) => string[]; 
    // NOTE: requestedBy would normally be a more complex object.
}

class Fidget implements StandardProduct, SecuredFieldsItem {

    public name: string;
    public description: string;
    public inventory: number;
    public weight: number;
    public recommendedAge: number;
    public cost: number;

    constructor() {};

    public GetAllowedFieldNames(requestedByRole: string) : string[] {

        const minFields = ["name", "weight", "recommendedAge", "description", "inventory"];

        if (requestedByRole === "Price Admin") {
            return minFields.concat("cost");
        }

        return minFields;
    }
}

class HotItem implements StandardProduct, SecuredFieldsItem {
    public name: string;
    public description: string;
    public features: string[];
    public inventory: number;
    public cost: number;

    constructor() {};

    public GetAllowedFieldNames(requestedByRole: string) : string[] {

        const minFields = ["name", "description", "features"];

        let allFields = minFields;

        if (requestedByRole === "Price Admin") {
             allFields = allFields.concat("cost");
        }

        if (requestedByRole === "Inventory Admin") {
             allFields = allFields.concat("inventory");
        }

        return allFields;
    }
}


function getGeneratedCsv(forProducts: SecuredFieldsItem[], forRoleLabel: string) {
    return forProducts.reduce( (prev: string[], curr: SecuredFieldsItem) => {
        const result = getFormattedCsvRow (curr, curr.GetAllowedFieldNames(forRoleLabel));
        return prev.concat(result);
    }, []);

}

function getFormattedCsvRow(sourceItem: SecuredFieldsItem, fieldsToRetrieve: string[]): string {
    return fieldsToRetrieve.reduce( (csvFieldAsBuilt: string, currentField: string) => {
        if (csvFieldAsBuilt.length < 1) {
            return sourceItem[currentField];
        }
        return csvFieldAsBuilt + "," + sourceItem[currentField];
    }, "");
}

// Pretend that these products are initialized with real data.
const allSecurableProducts = [].concat(new HotItem(), new Fidget(), new Fidget(), new HotItem());

const csvOutput = getGeneratedCsv(allProducts, "Inventory Admin");
```

One of the first things you'll notice is that the code defines two interfaces: `StandardProduct` and `SecuredFieldsItem`. Then, both classes (Fidget and HotItem) implement both interfaces:

```class Fidget implements StandardProduct, SecuredFieldsItem```

Classes can implement more than one interface. All you do is define your interfaces as usual and then `implement` each one, separating multiple interfaces with a comma.

Look at the `SecuredFieldItem` class:
```
interface SecuredFieldsItem {
    GetAllowedFieldNames: (requestedByRole: string) => string[]; 
    // NOTE: requestedBy would normally be a more complex object.
}
```

Classes that implement the `SecuredFieldsItem` interface must implement a method, `GetAllowedFieldNames`. That method must take a string input parameter and it must return an array of strings. In a more realistic scenario, you would probably pass in some kind of object representing the user as a whole, including his/her roles. This example uses hard coded strings to simplify things.

As you can see, GetAllowedFieldsNames has its own independent implementation in each class. Fidget is only concerned about users whose role is "Price Admin". HotItem products perform an additional check for users with the "Inventory Admin" role.

`getGeneratedCsv` invokes GetAllowedFieldNames on each product. Note the function signature:

```function getGeneratedCsv(forProducts: SecuredFieldsItem[], forRoleLabel: string)``` 

It can iterate over disparate products with significantly different properties because they each implement the SecuredFieldsItem interface. Therefore, they will always have the GetAllowedFieldNames method to invoke.

Finally, the helper function `getFormattedCsvRow` generates a properly formatted row of comma separated data based on the current item and the allowed fields.

## Inheritance

Like Java and C#, TypeScript supports hierarchical class structures. This allows you to incrementally build complex classes by starting with a minimal "base" class and then extending it to a new class. This new extended class is said to *inherit* the functionality of its base class. "Extend" means to add new class members (properties and/or methods). 

[sidebar: be careful about extending, favor composition over inheritance, etc.]

Let's demonstrate inheritance by means of US residency models. In this case, "resident" means a person living permanently or temporarily in the US.  

All residents have a name. They have a name irrespective of their residency type. 

A temporary resident is a resident with two additional properties: A country of origin and the date that they need to exit the country (i.e. when their visa expires). 

A US citizen, like a temporary resident is just a resident with some additional properties - the name of the city in which they were born.

Based on this, we can infer a class hierarchy as follows:

                  Resident 
                     |
        -----------------------------
        |                           |
        v                           v
Temporary Resident             US Citizen


Let's show some code. Here's a `Resident`:

```TypeScript
class Resident {

    private _name: string;
    public get MyName() { return this._name; }

    constructor(name: string) {
        this._name = name;
    }
}
```

This simplistic class defines a single private property, `_name`. It can only be set when it's first created:

```TypeScript
const Kelly = new Resident("Kelly");
```
It has one accessor (a getter) to retrieve the resident's name:

```TypeScript
console.log(`Resident's name: ${Kelly.MyName}.`);
```

Here's the model for a temporary resident:

```TypeScript
class TemporaryResident extends Resident {
    private _countryOfOrigin: string;
    public get MyCountryOfOrigin() { return this._countryOfOrigin; }

    private _requiredExitDate: Date;

    constructor(name: string, countryOfOrigin: string, requiredExitDate: Date) {
        super(name);
        this._countryOfOrigin = countryOfOrigin;
        this._requiredExitDate = requiredExitDate;
    }

}
```

This model introduces new syntax, the `extends` keyword:

```TypeScript
class TemporaryResident extends Resident {
```
[sidebar: note that the actual Resident class has to be defined. The editor may well work jus fine and give you happy intellisense. However, if you don't bundle everything up correctly, you'll end up with a hard to find runtime error.]

This means that `TemporaryResident` shares the same members as `Resident`. In this case, it's both the `_name` property, as well as the Resident's constructor.

Any class that extends another must always invoke the extended class' constructor via a call to `super`:

```TypeScript
    constructor(name: string, countryOfOrigin: string, requiredExitDate: Date) {
        super(name);
        this._countryOfOrigin = countryOfOrigin;
        this._requiredExitDate = requiredExitDate;
    }
```

As you can see, it doesn't need to have the same signature as the extended class. `TemporaryResident` takes three parameters. It passes one of those, `name`, to its extended class' constructor via the `super(name)` call.

[[sidebar: super comes from the super/sub-class lingo. java is super() I think and c# is base(). Something like that.]]

Lets round out the example with one more model, a U.S. Citizen:

```TypeScript
class USCitizen extends Resident {

    private _cityOfBirth: string;
    public get MyBirthCity() { return this._cityOfBirth; }

    constructor(name: string, birthCity: string) {
        super(name);

        this._cityOfBirth = birthCity;
    }
}
```

Just like a `TemporaryResident`, the `USCitizen` class shares the same class members as `Resident`. It uses the `extend` keyword to define its parent class. `USCitizen`'s constructor invokes its parent class' constructor, passing in the name: `super(birthCity)`.

**video, chapter 10 class in depth, showing the cool inheritance stuff

## Hiding and Exposing Class Members

We've already see how the `public` keyword and `private` keyword protect or grant access to your class members, both properties and methods. Inheritance adds a small bit of complexity and enables you to control access to class members via public/private as well as a new data control keyword, `protected`:

- `public` members may always be accessed up and down the hierarchy and from outside the client (i.e. client code). 
- `private` members may only be access from within the class itself. This means that extended classes may not access their parents' private members.
- TypeScript provides a new keyword, `protected`. Protected members act like both public and private members. They are private to any external client code. They are public from their point of definition and all extended sub-classes.

This bit of code should help clarify matters:

```TypeScript
class BaseClass {

    private _myPrivateProperty: string = "No one can see me except BaseClass.";

    protected _myProtectedProperty: string = "Extended classes can see me.";

    public MyPublicProperty: string = "Anyone can see and manipulate me.";

}

class ExtendedBaseClass extends BaseClass {
    
    constructor() {
        super();

        // Next line would be an error since myPrivateProperty is private in BaseClass
        //this._myPrivateProperty = "xyzzy";

        // ExtendedBaseClass can access _myProtectedProperty.
        this._myProtectedProperty = "I can change this value.";

        // Public property values can always be accessed within and outside of the class.
        this.MyPublicProperty = "I can also change this value.";

    }

}

const myExtendedClass = new ExtendedBaseClass();

myExtendedClass.MyPublicProperty = "Set directly on the class via client code.";

// Error:
// myExtendedClass._myPrivateProperty = "This is not allowed since private properties cannot be read or written.";

// Error:
// myExtendedClass._myProtectedProperty = "This is also not allowed since it's protected.";

```

The code sample shows:
- A class, `BaseClass`. 
- BaseClass defines three members: `_myPrivateProperty`, `_myProtectedProperty` and `MyPublicProperty`.
- It defines another class, `ExtendedBaseClass`. This extends BaseClass.
- ExtendedBaseClass is allowed to access _myProtectedProperty and MyPublicProperty.
- ExtendedBaseClass *may not* access _myPrivateProperty.
- Some client code defines a new const variable, `myExtendedBaseClass`. It holds a reference to an instance of ExtendedBaseClass.
- The client code is able to access the instance's `MyPublicProperty` but is prevented from accessing either the private or the protected properties.

## Abstract Classes

Abstract classes round out TypeScript's support for hierarchies of this nature. An abstract class looks and feels like a standard class with a key exception: abstract classes may never be instantiated. If JavaScript is your first and primary programming language, this may seem strange. However, abstract classes, along with interfaces, enable developers to express many common software design patterns naturally and gracefully.  Let's consider an example.

Imagine that you are a writing a game. Players place different types of military bases (e.g. "Army", "Navy") on a two dimensional map. Bases share some common features, like "name" but diverge from each other in important details. Army bases consist of soldiers while navy bases consist of ships. Lastly, at run-time, players can "activate" a base. This triggers the base to do something meaningful in the game.  Here's a naive way to model it:

```
interface Activatable {
    ActivateSelf: () => void;
}

class NaiveBase {

    private _myName: string;
    public get Name() { return this._myName; }

    constructor (name: string) {
        this._myName = name;
    }
}

class NaiveArmyBase extends NaiveBase implements Activatable{

    private _totalSolders: number;
    public get TotalSolders() { return this._totalSolders; }

    constructor(name: string, totalSolders: number) {
        super(name);
        this._totalSolders = totalSolders;
    }

    public ActivateSelf() {
        throw "Not yet implemented";
    }
}

class NaiveNavyBase extends NaiveBase implements Activatable {

    private _totalShips: number;
    public get TotalShips() { return this._totalShips; }

    constructor(name: string, totalShips: number) {
        super(name);
        this._totalShips = totalShips;
    }

    public ActivateSelf() {
        throw "Not yet implemented";
    }
}

const naiveArmyBase = new NaiveArmyBase("First army base", 100);
const naiveNavyBase = new NaiveNavyBase("First navy base", 3);

// This is allowed but makes no sense:
const someOtherBase = new NaiveBase("what kind of base is this?");
```

By now, this is pretty straight-forward. A `NaiveBase` class holds a private property, `_myName` and provides an get accessor to retrieve the value. Two other classes extend it and add their own properties: `NaiveArmyBase` and `NaiveNavyBase`. 

Both the army an navy base classes implement the `Activatable` interface, albeit in this example, each class' `ActiveSelf()` method simply throws an exception.

There is a problem with this modelling approach: there's no such thing as plain vanilla NaiveBase. Players never create vanilla base, they always create a specific kind of base.

There's another problem here as well. This approach forces us to implement the `Activatable` interface on every class. We could implement it on the base class, but that just compounds the first problem - now we've implemented an interface on a class we should never instantiate.

Abstract classes solve this problem for us. Here's the code re-written using an abstract class:

```TypeScript
interface Activatable {
    ActivateSelf: () => void;
}

abstract class AbstractBase implements Activatable{

    private _myName: string;
    public get Name() { return this._myName; }

    constructor (name: string) {
        this._myName = name;
    }

    abstract ActivateSelf(): void;

}

class ArmyBase extends AbstractBase {

    private _totalSolders: number;
    public get TotalSolders() { return this._totalSolders; }

    constructor(name: string, totalSolders: number) {
        super(name);
        this._totalSolders = totalSolders;
    }

    public ActivateSelf() {
        throw "Not yet implemented";
    }
}

class NavyBase extends AbstractBase {

    private _totalShips: number;
    public get TotalShips() { return this._totalShips; }

    constructor(name: string, totalShips: number) {
        super(name);
        this._totalShips = totalShips;
    }

    public ActivateSelf() {
        throw "Not yet implemented";
    }
}

const armyBase = new ArmyBase("First army base", 100);
const navyBase = new NavyBase("First navy base", 3);

const anotherArmyBase: Activatable = new ArmyBase("Second army base", 250);

// Compiler throws an error - abstract classes can not be instantiated:
const someOtherKindOfBase = new AbstractBase("what kind of base is this?");
```
 
This example introduces the `abstract` keyword. We now have an abstract class, `Base`.  This abstract class implements the `Activatable` interface. In doing so, you can see another characteristic of TypeScript's abstract functionality: you may mark classes and *class members* as abstract. (In fact, you must mark the class abstract if it contains any abstract members). The Activatable interface requires a method, `ActiveSelf`. However, this method only makes sense for "real" bases - army and navy bases. Hence, we mark the ActivateSelf method itself as abstract:

```TypeScript
    abstract ActivateSelf(): void;
```

This abstract ActivateSelf method meets the requirements of the Activatable interface. This is perfect since a vanilla "base" can't meaningfully activate itself - only army and navy bases can do that. At the same time, it forces subclasses to implement the method.  This is good for two reasons:
1. You can't forget to do it since the IDE and compiler won't let you.
2. Since the subclasses implement the interface, we can write code that leverages their type as `Activatable` where and when we need to.

The abstract Base class shows another feature: Abstract classes can define non-abstract class members. Since every base has a name, regardless of base type, it makes sense to define a concrete `_myName` property and associated getter.  Sub-classes inherit these concrete class members (properties and methods) just like they do with concrete classes.

The army and navy bases extend the abstract class just as if it were a concrete class using the same `extends` keyword.

Wrapping up the example, you can see that newing up army and navy bases works the same way as it does in the naive example:

```TypeScript
const armyBase = new ArmyBase("First army base", 100);
const navyBase = new NavyBase("First navy base", 3);
```

Since both types of bases implement Activatable, you can do this:

```TypeScript
const anotherArmyBase: Activatable = new ArmyBase("Second army base", 250);
const activatableNavyBase = <Activatable> navyBase;
```

Let's put it all together in a video:

**video, chapter 10 class in depth,  showing abstract classes

# Summarizing Classes

The previous chapter gave you a sip and this chapter turned on the firehose.

Use interfaces to define both the shape of data and the shape of classes. In this case, "shape" means required class members (both methods and properties). 

Classes _implement_ interfaces. Classes may implement multiple interfaces.

TypeScript allows you to create hierarchies. A class can _extend_ another class and it, in turn, may be extended. A given class can only extend one other class. 

A special kind of class, the _Abstract Class_, can never be instantiated but otherwise look and feel the same as non-abstract classes. Abstract classes can (and often do) implement interfaces and they can even define concrete members (properties and methods). 

We're nearly done with classes. The next chapter provides te final word on classes, as well as introducing the final bit of typing TypeScript offers - Generics.  

[^astleastido]: At least, I tend to call them that :).

[^dontwrap]: Get accessors well-used when you want to make a property available to client code but you don't want to let that client code edit the value. In this case, you'd define a private variable paired with its own Get accessor but no Set accessor.    

[^longsincepast]: Since you're still reading at this point, it's probably safe to say that you're satisfied that TypeScript is pretty useful. If you're still on the fence, consider how you'd address this same issue with plain JavaScript. If you needed to make a change of this nature, it would be much more difficult to achieve given that you can't get the same kind of great tooling support. You can't force a syntax error the same way. You have to rely on global search and/or find/replace. Not very fun.