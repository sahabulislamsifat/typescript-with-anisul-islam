"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {
//   studentAddress as address,
//   studentAge as age,
//   studentName as name,
// } from ".";
// import {
//   studentAddress as address,
//   studentAge as age,
//   studentName as name,
// } from ".";
var Student = require(".");
function studentInfo() {
    console.log(
    // `Name: ${studentName}, Age: ${studentAge}, Address: ${studentAddress}`
    // `Name: ${name}, Age: ${age}, Address: ${address}`
    "Name: ".concat(Student.studentName, ", Age: ").concat(Student.studentAge, ", Address: ").concat(Student.studentAddress));
}
// function studentInfo(name: string, age: number, address: string): void {
//   console.log(`Name: ${name}, Age: ${age}, Address: ${address}`);
// }
studentInfo();
// studentInfo(studentName, studentAge, studentAddress);
