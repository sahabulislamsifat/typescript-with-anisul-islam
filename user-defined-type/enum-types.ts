//* Enum data types => store constants : duplicate vales is not allowed here

//*  enums types : numeric, string, heterogenous

// 1. Numeric enums
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }
enum Direction {
  Up = 0,
  Down,
  Left = 5,
  Right,
}

// console.log(Direction.Up); // 0
// console.log(Direction);

// 2. String enums
enum DirectionString {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// console.log(DirectionString.Up); // "UP"
// console.log(DirectionString["Up"]); // "UP"

// 3. Heterogeneous enums
enum MixedEnum {
  No = 0,
  Yes = "YES",
}
// console.log(MixedEnum.No); // 0
console.log(MixedEnum.Yes);
