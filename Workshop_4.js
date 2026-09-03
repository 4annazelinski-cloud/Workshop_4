// Part_1 exe_1

const arrayNums = [42, 7, -15, 100, 23, 8, 91];

console.log(arrayNums[0], arrayNums[1], arrayNums[4], arrayNums[(arrayNums.length - 1)], arrayNums[Math.floor(arrayNums.length/2)]);


console.log("________________Part_1 exe_2");


const arrayNames = ["Ben", "Bob", "Pete", "jane", "Eve", "Frank", "john", "Mary"];

console.log(`Number of names: ${arrayNames.length}, \nFirst name: ${arrayNames[0]}, \nMiddle name: ${arrayNames[Math.floor(arrayNames.length/2)]},  \nLast name: ${arrayNames[(arrayNames.length - 1)]}`);


console.log("________________Part_2 exe_3");


const cart = [];

cart.push("Milk", "Bread", "Eggs", "Cheese", "Coffee");
console.log(cart);

cart.unshift("Chocolate");
cart.pop();
cart.shift();

console.log(cart);

console.log("________________Part_2 exe_4");


const newNames = ["Ben", "Bob", "Pete", "jane", "Eve", "Nick"];

while (newNames.length > 0) {
    console.log(`Removing ${newNames.shift()}.`);
}


console.log("________________Part_3 exe_5");


const names = ["Anna", "James", "Nick", "John", "Mary", "Peter", "Tom"];

for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}.`);
}

const reversedNames = ["Anna", "James", "Nick", "John", "Mary", "Peter", "Tom"];

for (let i = reversedNames.length - 1; i >= 0; i--) {
    console.log(`Hello ${reversedNames[i]}.`);
}

console.log("__________________Part_3 exe_6");


const randomNumbers = [];
let find = 13;
let count = 0;
for (let i = 0; i < 20; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
  if (randomNumbers[i] === find) {
    count++;
  }
}
console.log(randomNumbers);
console.log(`The number ${find} appears ${count} times.`);


console.log("________________Part_4 exe_7");

const numbers = [12, 45, 7, 99, 31, 18, 50, 3];
find = 50;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === find) {
        console.log(`Found ${find} at index ${i}`);
        break;
    } else {console.log(`${find} was not found.`)};
}


console.log("_________________Part_4 exe_8");


const numbers2 = [5, 10, 5, 20, 5, 30];
find = 5;

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] === find) {
        console.log(`Found ${find} at index ${i}`);
    }
}


console.log("________________Part_5 exe_9");


const randomNumbers2 = [];
let countGreater = 0;
let countLess = 0;

for (let i = 0; i < 100; i++) {
    randomNumbers2.push(Math.floor(Math.random() * 1000));
    if (randomNumbers2[i] > 500) {
        countGreater++;
    } else if (randomNumbers2[i] < 100) {
        countLess++;
    }
}
console.log(`Total numbers: ${randomNumbers2.length}`);
console.log(`Numbers greater than 500: ${countGreater}`);
console.log(`Numbers less than 100: ${countLess}`);


console.log("________________Part_6 exe_10_11");


const randomNumbers3 = [];
let maxValue = 0;
let minValue = 999;

for (let i = 0; i < 15; i++) {
    randomNumbers3.push(Math.floor(Math.random() * 1000));
    if (maxValue < randomNumbers3[i]) {
        maxValue = randomNumbers3[i];
    } else if (minValue > randomNumbers3[i]) {
        minValue = randomNumbers3[i];
    }
}
console.log(randomNumbers3);
console.log(`The biggest number is: ${maxValue}`);
console.log(`The smallest number is: ${minValue}`);


console.log("________________Part_7 exe_12");


const statistics = [];
maxValue = -1001;
minValue = 1001;
let N = 100;
let countN = 0;
let countPositive = 0;
let countNegative = 0;
let countEven = 0;
let countOdd = 0;
for (let i = 0; i < 20; i++) {
    statistics.push(Math.floor(Math.random() * 2001 - 1000));
    const integer = statistics[i];
    if (integer > maxValue) maxValue = integer;
    if (integer < minValue) minValue = integer;

    if (integer > 0) {
        countPositive++;
    } else if (integer < 0) {
        countNegative++;
    }

    if (integer % 2 === 0) {
        countEven++;
    } else {
        countOdd++;
    }

    if (integer === N) {
        countN++;
    }
}
console.log(statistics);
console.log(`100 appeared: ${countN} times`);
console.log(`Positive numbers: ${countPositive}`);
console.log(`Negative numbers: ${countNegative}`);
console.log(`Even numbers: ${countEven}`);
console.log(`Odd numbers: ${countOdd}`);
console.log(`Biggest number:  ${maxValue}`);
console.log(`Smallest number: ${minValue}`);
