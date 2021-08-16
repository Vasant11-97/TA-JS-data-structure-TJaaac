let numbers = [6, 8, 10, 12, 43, 56, 98];

let userIds = [1230, 234, 1278, 984, 763, 900];

// 1. Add all the values of numbers and userIds array into the new newly created array named `collection`
// let collection = [numbers + userIds];
// let sum = 0;
// for(let i = 0; i < collection.length; i++){
//   sum += collection[i];
// }
// console.log(sum);

let sumNumbers = 0;
for(let i = 0; i < numbers.length; i++){
  sumNumbers += numbers[i];
}
console.log(sumNumbers);

let sumUserIds = 0;
for(let i = 0; i < userIds.length; i++){
  sumUserIds += userIds[i];
}
console.log(sumUserIds);

let collection = [sumNumbers + sumUserIds];
console.log(collection);


// 2. Add all the even numbers from both arrays numbers and userIds into a newly created array named `evenCollection`

let sumEvenNumbers = 0;
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 === 0){
    sumEvenNumbers += numbers[i];
    // console.log(numbers[i]);
  }
}
console.log(sumEvenNumbers);

let sumuserIdsEven = 0;
for(let i = 0; i < userIds.length; i++){
  if(userIds[i] % 2 === 0){
    sumuserIdsEven += userIds[i];
    // console.log(numbers[i]);
  }
}
console.log(sumuserIdsEven);

let evenCollection = [sumEvenNumbers + sumuserIdsEven];
console.log(evenCollection);



// 3. Add all the odd numbers from both arrays numbers and userIds into a newly created array named `oddCollection`

let sumOddNumbers = 0;
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 !== 0){
    sumOddNumbers += numbers[i];
    // console.log(numbers[i]);
  }
}
console.log(sumOddNumbers);

let sumuserIdsOdd = 0;
for(let i = 0; i < userIds.length; i++){
  if(userIds[i] % 2 !== 0){
    sumuserIdsOdd += userIds[i];
    // console.log(numbers[i]);
  }
}
console.log(sumuserIdsOdd);

let oddCollection = [sumOddNumbers + sumuserIdsOdd];
console.log(oddCollection);

/*
  @param means parameter

 4. Write a function named times which accets two parameter and return an array. 

  @param times (number)
  @param character (string)
  @return array

  Example: 
    times(5, 'c'); // ['c', 'c', 'c', 'c', 'c']
    times(2, 'a'); // ['a', 'a']
    times(0); // []
    times(5); // ['test', 'test', 'test', 'test', 'test']
*/
let result = [];
function times(times, word) {
  
  for(let i = 0; i < times; i++){
    result[i] = word;
    console.log(result[i]);
  }
}
times(5 , `c`);

// Uncomment the code below and test the output

// console.log(times(5, 'c')); // ['c', 'c', 'c', 'c', 'c']
// console.log(times(2, 'a')); // ['a', 'a']
// console.log(times(0)); // []
// console.log(times(5)); // ['test', 'test', 'test', 'test', 'test']

/*

 5. Write a function named revert which reverts the element of the input array. 

  @param arr (array)
  @return array

  Example: 
    revert([1, 2, 3, 4]); // [4, 3, 2, 1]
    revert(['a', 'd', 'c', 'b']); // ['b', 'c', 'd', 'a']
    revert(['Ryan', 'John', 'Bran']); //['Bran', 'John', 'Ryan']
*/
let answer = [];
function revert(revert) {
  for(let i = revert.length-1; i >= 0; i--){
    answer[i] = revert[i];
    console.log(answer[i]);
  }
}
revert([1, 2, 3, 4, 5]);
// Uncomment the code below and test the output
// console.log(revert([1, 2, 3, 4])); // [4, 3, 2, 1]
// console.log(revert(['a', 'd', 'c', 'b'])); // ['b', 'c', 'd', 'a']
// console.log(revert(['Ryan', 'John', 'Bran'])); //['Bran', 'John', 'Ryan']

/*

 6. Write a function named clear which remove all of these values (false, undefined, empty string, 0, null) and returns a new array  

  @param arr (array)
  @return array

  Example: 
    clear([1, 2, 3, 4, '', 0, null, undefined]); // [4, 3, 2, 1]
    clear(['a', undefined, 'd', 0,  'c', 'b']); // ['b', 'c', 'd', 'a']
    clear(['Ryan', null, 0,  'John', 'Bran']); //['Bran', 'John', 'Ryan']
*/
let arr = [];
function clear(clear) {
  for(let i = 0; i < clear.length; i++){
    if(Boolean(clear[i]) === true){
      arr[i] = clear[i];
      console.log(arr[i]);
    }
  }
}
clear([1, 2, 3, 4, '', 0, null, undefined]);

// Uncomment the code below and test the output
// console.log(clear([1, 2, 3, 4, '', 0, null, undefined])); // [4, 3, 2, 1]
// console.log(clear(['a', undefined, 'd', 0, 'c', 'b'])); // ['b', 'c', 'd', 'a']
// console.log(clear(['Ryan', null, 0, 'John', 'Bran'])); //['Bran', 'John', 'Ryan']

/*

 6. Write a function named arrayToObj which accepts an array and return an object
 where the key will be the index of array and value will be the element of the array.

  @param arr (array)
  @return object

  Example: 
    arrayToObj([1, 2, 3, 4]); // {0: 1, 1: 2, 2: 3, 3: 4}
    arrayToObj(['a', undefined, 'd']); // {0: 'a', 1: undefined, 2: 'd'}
    arrayToObj(['Ryan', 'John']); // {0: 'Ryan', 1: 'John'}
*/
let obj = {};
function arrayToObj(test) {
  for(let i = 0; i < test.length; i++){
    obj[i] = test[i];
    console.log(obj);
  }
  return obj;
}
let example = [1, 2, 3, 4]
arrayToObj(example);

// Uncomment the code below and test the output
// console.log(arrayToObj([1, 2, 3, 4])); // {0: 1, 1: 2, 2: 3, 3: 4}
// console.log(arrayToObj(['a', undefined, 'd'])); // {0: 'a', 1: undefined, 2: 'd'}
// console.log(arrayToObj(['Ryan', 'John'])); // {0: 'Ryan', 1: 'John'}
