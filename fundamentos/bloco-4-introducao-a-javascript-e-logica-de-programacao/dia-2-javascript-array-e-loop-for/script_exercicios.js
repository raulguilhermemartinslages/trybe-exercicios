let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let highest = numbers[0];
let lowest = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
}
console.log(result);

for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
}
let average = result/numbers.length
console.log(average);

if (average > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highest) {
        highest = numbers[index];
    }
}
console.log(highest);

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        result += 1;
    } if (result === 0) {
        result = "nenhum valor ímpar encontrado";
    }
}
console.log(result);

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < lowest) {
        lowest = numbers[index];
    }
}
console.log(lowest);

let array = [];
let newArray = [];

for (let index = 1; index <= 25; index += 1) {
    array.push(index);
}
console.log(array);

for (let index = 0; index < array.length; index += 1) {
    newArray.push(array[index]/2);
}
console.log(newArray);

for (let index = 0; index < array.length; index += 1) {
    console.log(array[index]/2);
}