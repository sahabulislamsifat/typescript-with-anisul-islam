let userName: string[];
userName = ["John", "Doe", "Smith"];
let userAge: number[];
userAge = [25, 30, 35];

// console.log(userName);
// console.log(userAge);

let multipleTypes: (string | number)[];
multipleTypes = ["John", 25, "Doe", 30, "Smith", 35];

userName.sort();
console.log(userName);

userName.push("Jane");
console.log(userName);
userName.pop();
console.log(userName);

userName.unshift("Alice");
console.log(userName);
userName.shift();
console.log(userName);
