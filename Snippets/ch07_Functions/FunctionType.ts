interface functionInterface {
     myFunction1: Function;
     myFunction2: Function;
}

const functionBucket: functionInterface = {
    myFunction1: function() { },
    myFunction2: function() {}

}

let sillyAdderFunction: Function;

sillyAdderFunction = function(a: number, b: number) { return a + b};

sillyAdderFunction(10, 10);
