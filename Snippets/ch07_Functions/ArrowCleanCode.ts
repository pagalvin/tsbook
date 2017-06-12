const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter( (item) => item % 2);

const sumOfNumbers = numbers.reduce((prev: number, curr:number) => {
    return prev + curr;
}, 0);

