//* Enum data types => store constants : duplicate vales is not allowed here
//*  enums types : numeric, string, heterogenous
// 1. Numeric enums
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 5] = "Left";
    Direction[Direction["Right"] = 6] = "Right";
})(Direction || (Direction = {}));
// console.log(Direction.Up); // 0
// console.log(Direction);
// 2. String enums
var DirectionString;
(function (DirectionString) {
    DirectionString["Up"] = "UP";
    DirectionString["Down"] = "DOWN";
    DirectionString["Left"] = "LEFT";
    DirectionString["Right"] = "RIGHT";
})(DirectionString || (DirectionString = {}));
// console.log(DirectionString.Up); // "UP"
// console.log(DirectionString["Up"]); // "UP"
// 3. Heterogeneous enums
var MixedEnum;
(function (MixedEnum) {
    MixedEnum[MixedEnum["No"] = 0] = "No";
    MixedEnum["Yes"] = "YES";
})(MixedEnum || (MixedEnum = {}));
// console.log(MixedEnum.No); // 0
console.log(MixedEnum.Yes);
