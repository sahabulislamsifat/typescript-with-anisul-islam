let users: object[];
users = [];

let userOne: { name: string; age: number };
userOne = {
  name: "SIfat",
  age: 22,
};

let userTwo: { name: string; age: number };
userTwo = {
  name: "sahabul",
  age: 23,
};

// console.log(userOne);
users.push(userOne, userTwo);

// console.log(users);

for (const key in users) {
  console.log(users[key]);
  //   console.log(users[key].name);
  //   console.log(users[key].age);
}
