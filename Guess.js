const numbers = [];
for (let i = 0; i < 50; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
    numbers.sort((a, b) => a - b);
}
const target = 88;

const middleIndex = Math.floor(numbers.length / 2);
const middleValue = numbers[middleIndex];

let startIndex = 0;
let endIndex = numbers.length - 1;
let foundIndex = -1;

if (target === middleValue) {
    foundIndex = middleIndex;
    console.log(`Found ${target} at index ${foundIndex}`);
} else if (target > middleValue) {
    startIndex = middleIndex + 1;
} else {
    endIndex = middleIndex - 1;
}

for (let i = startIndex; i <= endIndex; i++) {
    if (numbers[i] === target) {
        foundIndex = i;
        break;
    }
}
let foundIndexValue = numbers[foundIndex];
console.log(numbers);
console.log(`${foundIndexValue} was found at index ${foundIndex}`);