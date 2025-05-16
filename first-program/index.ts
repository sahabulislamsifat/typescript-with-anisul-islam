// let userName = "Sahabul Islam SIfat";
let userName: any;
// let userName: string;
// userName = 123;
// userName = "123";
userName = true;
// let userName = null;
// let userName = undefined;

console.log(userName);

let userAge = 22;
console.log(userAge);
let userIsMarried = false;
console.log(userIsMarried);

let userHobbies: string[] = ["Reading", "Writing", "Coding"];
console.log(userHobbies);
let userAddress: { city: string; country: string } = {
  city: "Dhaka",
  country: "Bangladesh",
};
console.log(userAddress);
let userDetails: {
  name: string;
  age: number;
  isMarried: boolean;
  hobbies: string[];
  address: { city: string; country: string };
} = {
  name: "Sahabul Islam SIfat",
  age: 22,
  isMarried: false,
  hobbies: ["Reading", "Writing", "Coding"],
  address: { city: "Dhaka", country: "Bangladesh" },
};
console.log(userDetails);
