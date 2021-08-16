```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // true because newuser is using the memory address of user.
- `user === newUser;` // true because it is called by pass by reference.
- `user.name === newUser.name;` // true because it is called by pass by reference.
- `user.name == newUser.name;` // true because it is called by pass by reference.
- `user.sibling == newUser.sibling;` // true because it is called by pass by reference.
- `user.sibling === newUser.sibling;` // true because it is called by pass by reference.
- `user.sibling == allBrothers;` // false because both are different variables and the data dosen't match because of paas by value.
- `user.sibling === allBrothers;` // false because both are different variables and the data dosen't match because of paas by value.
- `brothersCopy === allBrothers;` // false because both are different variables and the data dosen't match because of paas by value.
- `brothersCopy == allBrothers;` // false because both are different variables and the data dosen't match because of paas by value.
- `brothersCopy == user.sibling;` // true because it is called by pass by reference.
- `brothersCopy === user.sibling;` // true because it is called by pass by reference.
- `brothersCopy[0] === user.sibling[0];` // true because it is called by pass by reference.
- `brothersCopy[1] === user.sibling[1];` // true because it is called by pass by reference.
- `user.sibling[1] === newUser.sibling[1];` // true because it is called by pass by reference.
