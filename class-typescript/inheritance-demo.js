var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    //   userTwo.getUserInfo();
    //* Inheritance */
    var Admin = /** @class */ (function (_super) {
        __extends(Admin, _super);
        function Admin(username, age, adminLevel) {
            var _this = _super.call(this, username, age) || this;
            _this.adminLevel = adminLevel;
            return _this;
        }
        Admin.prototype.getAdminInfo = function () {
            console.log("Admin: ".concat(this.username, ", Age: ").concat(this.age, ", Admin Level: ").concat(this.adminLevel));
        };
        return Admin;
    }(User));
    var adminOne = new Admin("Admin_Sifat", 30, 1);
    adminOne.getAdminInfo();
}
