// let users: object[];
// users = [];

// let userOne: { name: string; age: number };
// userOne = {
//   name: "SIfat",
//   age: 22,
// };

// let userTwo: { name: string; age: number };
// userTwo = {
//   name: "sahabul",
//   age: 23,
// };
// let userThree: { name: string; age: number };
// userThree = {
//   name: "islam",
//   age: 21,
// };
// // console.log(userOne);
// users.push(userOne, userTwo, userThree);
// console.log(users);

type User = {
  name: string;
  age: number;
};

let users: User[];
users = [];

let userOne: User;
userOne = {
  name: "SIfat",
  age: 22,
};

// let userTwo: { name: string; age: number };
let userTwo: User;
userTwo = {
  name: "sahabul",
  age: 23,
};

// let userThree: { name: string; age: number };
let userThree: User;
userThree = {
  name: "islam",
  age: 21,
};

// console.log(userOne);
users.push(userOne, userTwo, userThree);
// console.log(users);

type RequestType = "GET" | "POST" | "PUT" | "DELETE";

function makeRequest(requestType: RequestType) {
  console.log(`Making a ${requestType} request`);
}

// makeRequest("GET");
// makeRequest("POST");
// makeRequest("PUT");
// makeRequest("DELETE");
