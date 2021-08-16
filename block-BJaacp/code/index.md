1. What will be the output and explain the reason.

```js
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;
```

<!--
Because we are not calling other variable and the variable object is declared and made few changes so it is called in the log and displays the output {surname: "stark"} 
 -->

Answer the following with reason after going through the above code:

- `[10] === [10]` // false
- What is the value of obj? // {surname: "Stark"}
- `obj == newObj` // No
- `obj === newObj` // false
- `user === newObj` // false
- `user == newObj` // false
- `user == obj` // true
- `arr == arr2` // true
- `arr === arr2` // true

2. What's will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.

<!-- To add this image here use ![name](./hello.jpg) -->

```js
function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1); // {name: "Alex", age: 25} because person 1 is a new variable and it has it's object with values so it returned the output
console.log(person2); // {name: "John", age: 50} because person2 is a variable with the value of variable of person1 in the function personDetails.
```

3. What will be the output of the below code:

```js
var brothers = ['Bran', 'John'];
var user = {
  name: 'Sansa',
};
user.brothers = brothers;
brothers.push('Robb');
console.log(user.brothers === brothers); //1. true
console.log(user.brothers.length === brothers.length); //2. true
```
