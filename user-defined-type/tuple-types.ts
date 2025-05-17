//* data / mixed / tuple-types.ts
// This file contains the definition of a tuple type and a function that takes a tuple as an argument and returns its length.
// The tuple type is defined as an array of elements of different types.
//  let tuple: [number, string, boolean] = [1, "hello", true];
let tuple: [number, string, boolean];
tuple = [1, "hello", true];
console.log(tuple);

tuple.push(2);
tuple.push("world");
tuple.push(false);
console.log(tuple);
