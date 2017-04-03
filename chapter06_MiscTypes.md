# Enumerations, Union and Custom Types

So far, we've covered primitive data types (numbers, boolean, etc.) and how you can model complex objects using these primitive types. You can, in fact, create deeply nested data models using interfaces themselves. TypeScript provides additional ways to describe data. This chapter covers three of them: enumerations, unions and custom types. Note that TypeScript provides even more types such as intersection types and generics. Some of these (e.g. intersections) cater to tools writers more than the casual audience I have in mind for this book. Generics, on the other hand, deserve their own chapter and work best with classes and methods (the topic of the next chapter). This is all to say - we're not there yet, but we're getting close :).

## Enumerations

Enumerations allow you to connect a string label to a numeric value. This is best shown via example:

```TypeScript

enum HttpStatusCodes {
    OK = 200,
    GENERAL_SERVER_ERROR = 500,
    RESOURCE_NOT_FOUND = 304,
    FORBIDDEN = 403
}

```

Use enumerations in your code like this:

```TypeScript

function parseResult(resultDetails: SomeInterface, resultCode: HttpStatusCodes) {

    if (resultCode === HttpStatusCodes.OK) {
        processSuccessfulResponse(resultDetails);
    }

    else if (resultCode === HttpStatusCodes.FORBIDDEN) {
        login();
    }

    else {
        processOtherError(resultCode, resultDetails);
    }
}

```

Many languages provide a similar enum syntax and if you've worked with one (like C# or Java) this is a very familiar syntax.

As with everywhere else in TypeScript, a good IDE supports enumerations with intellisense.

The above example shows that you can match a text label with an arbitrary integer value. Sometimes, you don't care about the value. You just want the convenience of a readable label. In that case, you can define an initial value and the compiler will increment it for you behind the scenes:

```TypeScript

enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

```

In this case, Down, Left and Right are assigned the values 2, 3 and 4 respectively.

Mapping labels, such as "FORBIDDEN" to a number value "403" constitutes the main use case for enums. Used this way, they allow you to:
- Once again, express yourself more clearly in code. *You* may be fully aware that an http 403 is a "forbidden" message but other, newer developers may not.
- i had another idea here...

### Enums As Objects, Or Not

Unlike interfaces, the TypeScript compiler generates code for enums by default. 

Here's the TypeScript Code and the generated JS:

```TypeScript
enum HttpStatus {
    OK = 200,
    GENERAL_SERVER_ERROR = 500,
    RESOURCE_NOT_FOUND = 304,
    FORBIDDEN = 403
}

function parseResult(resultCode: HttpStatus) {

    if (resultCode === HttpStatus.OK) {
        console.log("Success response");
    }

    else if (resultCode === HttpStatus.FORBIDDEN) {
        console.log("Forbidden response.");
    }

    else {
        console.log("Some other response");
    }

}
```

Generated JavaScript:

```JavaScript
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["GENERAL_SERVER_ERROR"] = 500] = "GENERAL_SERVER_ERROR";
    HttpStatus[HttpStatus["RESOURCE_NOT_FOUND"] = 304] = "RESOURCE_NOT_FOUND";
    HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
})(HttpStatus || (HttpStatus = {}));

function parseResult(resultCode) {
    if (resultCode === HttpStatus.OK) {
        console.log("Success response");
    }
    else if (resultCode === HttpStatus.FORBIDDEN) {
        console.log("Forbidden response.");
    }
    else {
        console.log("Some other response");
    }
}

```

As you can see, TypeScript wraps the enum inside its own Immediately Invoked Function Expression (IIFE) and lives on as a code artifact. Most of the time, this isn't useful. You can skip the code generation and instead declare the enum as `const`:

<div style="float:right; width: 33%">
<h4>Prefer Const Enums</h4>
<p>
    You should normally prefer to use const enums. There are probably some good use cases for non-const enums but you almost certainly won't encounter them in your first weeks and months with the language, if at all. Const enums generate less code and that generated code is as easy to understand as the non-const generated code.
</p>
<br/>
<p>
    This is also in keeping with the broader "use const first" rule. If you can adopt that habit you'll be taking some early steps toward a more functional programming style and significantly reduce the risk of unanticipated side effects in your code.
</p>
</div>

```TypeScript

const enum constHttpStatus {
    OK = 200,
    GENERAL_SERVER_ERROR = 500,
    RESOURCE_NOT_FOUND = 304,
    FORBIDDEN = 403
}

function parseResult(resultCode: constHttpStatus) {

    if (resultCode === constHttpStatus.OK) {
        console.log("Success response");
    }

    else if (resultCode === constHttpStatus.FORBIDDEN) {
        console.log("Forbidden response.");
    }

    else {
        console.log("Some other response");
    }

}
```

This results in more compact JavaScript:

```JavaScript
function parseResult(resultCode) {
    if (resultCode === 200 /* OK */) {
        console.log("Success response");
    }
    else if (resultCode === 403 /* FORBIDDEN */) {
        console.log("Forbidden response.");
    }
    else {
        console.log("Some other response");
    }
}
```

It even puts in some helpful comments describing the the meaning of "403" or "200".

### Even More Depth to Enumerations

TypeScript provides more sophisticated support for enums. You are not limited to assigning integers and in fact, you can assign values that are computed at runtime. This is best explained by the TypeSript language handbook web site here: [https://www.typescriptlang.org/docs/handbook/enums.html](https://www.typescriptlang.org/docs/handbook/enums.html)

## Union Types

Union Types allow you to create a define a new entity that is comprised of multiple types or even values. Here's a simple example:

```TypeScript
function move(inDirection: "left" | "up" | "down" | "up") {
    console.log(`Moving ${inDirection}.`);
}
```

This bit of code defines a function, "move" that takes a single parameter, "inDirection." Intellisense ensures that you don't try to pass in an invalid direction, like "sideways." Here's a short video demonstrating that.

[[ add a video showing intellisense ]]


