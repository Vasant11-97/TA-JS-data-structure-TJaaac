// 1. Create an array named numbers and store 5 number values in it

let numbers = [10, 20, 33, 47, 50, 45, 450];

// 2. Calculate the sum of array items and print it to the console using console.log()
// let sum = 0;
// for(let i =0; i < numbers.length; i++){
//     sum += numbers[i];  
// }
// console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()


let average = 0;
let sum = 0;
for(let i =0; i < numbers.length; i++){
    sum += numbers[i];  
}
average = sum/(numbers.length);
console.log(average);


// 4. Find the highest number in the array and print it to the console using console.log()

let highest = numbers[0];
for(let i = 0; i < numbers.length; i ++){
    if(highest < numbers[i]){
        highest = numbers[i];
    }
}

// 5. Find the lowest number in the array and print it to the console using console.log()

let lowest = numbers[0];
for(let i = 0; i < numbers.length; i ++){
    if(lowest > numbers[i]){
        lowest = numbers[i];
    }
}

// 6. Find the even numbers in the array and print them to the console using console.log()

let even = [];
for (const number of numbers) {
    if(number % 2 === 0){
        even.push(number);
    } else{
        // console.log((number));
    }
}

// 7. Find the odd numbers in the array and print them to the console using console.log()

let odd = [];
for (const number of numbers) {
    if(number % 2 != 0){
        odd.push(number);
    } else{
        // console.log((number));
    }
}

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

let div = [];
for (const number of numbers) {
    if(number % 5 === 0){
        div.push(number);
    } else{
        // console.log((number));
    }
}

// 9. Log all the element of the array one by one

console.log(average);
console.log(highest);
console.log(lowest);
console.log(even);
console.log(odd);
console.log(div);
// console.log(div_3);

// 10. Find all the number in the array that is divisible by 3

let div_3 = [];
for (const number of numbers) {
    if(number % 3 === 0){
        div_3.push(number);
    } else{
        // console.log((number));
    }
}

