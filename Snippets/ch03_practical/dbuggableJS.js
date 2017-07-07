
function plainJSAdder (num1, num2) {
    return num1 + num2;
}

for (var i = 0; i < 10; i++) {
    console.log("Adding " + i + " to 10, result: " + plainJSAdder(i,10));
}

console.log("Finished!");
