{
    var User = /** @class */ (function () {
        function User(username, age) {
            this.username = username;
            this.age = age;
        }
        User.prototype.getUserInfo = function () {
            console.log("User: ".concat(this.username, ", Age: ").concat(this.age));
        };
        return User;
    }());
    //* class object
    var userOne = new User("JohnDoe", 25);
    var userTwo = new User("sifat", 22);
    //   userOne.getUserInfo();
    userTwo.getUserInfo();
}
