let userId: string | number | boolean; // union type
userId = 123;
// userId = "123";
// userId = true;
// console.log(userId);
// userId = null; // Error: Type 'null' is not assignable to type 'string | number | boolean'.
// userId = undefined; // Error: Type 'undefined' is not assignable to type 'string | number | boolean'.

function getUserId(
  userId: string | number | boolean
): string | number | boolean {
  return userId;
}

console.log(getUserId(123));
console.log(getUserId("123"));
console.log(getUserId(true));
console.log(getUserId(false)); // boolean
