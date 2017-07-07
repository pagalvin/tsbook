
const tsAdder = (num1: number, num2: number) => num1 + num2;

for (let i = 0; i < 10; i++) {
    console.log(`Adding ${i} to 10, result: ${tsAdder(i,10)}.`);
}

console.log("Finished!");
