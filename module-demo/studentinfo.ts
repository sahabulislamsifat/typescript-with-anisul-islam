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
import * as Student from ".";

function studentInfo(): void {
  console.log(
    // `Name: ${studentName}, Age: ${studentAge}, Address: ${studentAddress}`
    // `Name: ${name}, Age: ${age}, Address: ${address}`
    `Name: ${Student.studentName}, Age: ${Student.studentAge}, Address: ${Student.studentAddress}`
  );
}
// function studentInfo(name: string, age: number, address: string): void {
//   console.log(`Name: ${name}, Age: ${age}, Address: ${address}`);
// }

studentInfo();
// studentInfo(studentName, studentAge, studentAddress);
