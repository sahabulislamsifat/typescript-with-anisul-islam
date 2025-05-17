var users;
users = [];
var userOne;
userOne = {
    name: "SIfat",
    age: 22,
};
var userTwo;
userTwo = {
    name: "sahabul",
    age: 23,
};
// console.log(userOne);
users.push(userOne, userTwo);
// console.log(users);
for (var key in users) {
    console.log(users[key]);
    //   console.log(users[key].name);
    //   console.log(users[key].age);
}
