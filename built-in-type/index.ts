{
  //* Built in data types = number, string, boolean, null, undefined, symbol, bigint

  // let userId = 123; // number
  //   let userId: number; // number
  //   userId = 123;
  // console.log(userId);

  //   let userName: string = "Sahabul Islam SIfat"; // string
  //   let age: number = 22; // number
  //   let isMarried: boolean = false; // boolean

  let userId: number;
  //   let userName: string;
  let firstName: string;
  let lastName: string;
  let age: number;
  let isMarried: boolean;

  userId = 123;
  //   userName = "Sahabul Islam SIfat";
  firstName = "Sahabul Islam ";
  lastName = "Sifat";
  age = 22;
  isMarried = false;

  //   console.log(
  //     `User name is ${userName}, age is ${age}, and married status is ${isMarried}`
  //   );

  const fullName = firstName.concat(lastName);
  //   console.log(firstName.concat(lastName));
  //   console.log(fullName);
  //   console.log(fullName.toUpperCase());
  //   console.log(fullName.toLowerCase());
  //   console.log(fullName.length);
  //   console.log(userId.toupperCase());

  function myFunction(): void {
    console.log("Hello World");
  }
  myFunction();
}
