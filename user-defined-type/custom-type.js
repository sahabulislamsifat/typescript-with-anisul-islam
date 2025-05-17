// let users: object[];
// users = [];
var users;
users = [];
var userOne;
userOne = {
    name: "SIfat",
    age: 22,
};
// let userTwo: { name: string; age: number };
var userTwo;
userTwo = {
    name: "sahabul",
    age: 23,
};
// let userThree: { name: string; age: number };
var userThree;
userThree = {
    name: "islam",
    age: 21,
};
// console.log(userOne);
users.push(userOne, userTwo, userThree);
function makeRequest(requestType) {
    console.log("Making a ".concat(requestType, " request"));
}
// makeRequest("GET");
// makeRequest("POST");
// makeRequest("PUT");
// makeRequest("DELETE");
