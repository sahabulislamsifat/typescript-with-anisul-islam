{
  abstract class User {
    //* properties, mathods, and constructor
    username: string;
    age: number;
    constructor(username: string, age: number) {
      this.username = username;
      this.age = age;
    }

    abstract getUserInfo(): void;
  }
  //* class object
  //   let userOne = new User("JohnDoe", 25);
  //   let userTwo = new User("sifat", 22);
  //   userOne.getUserInfo();
  //   userTwo.getUserInfo();

  //* Inheritance */
  abstract class Admin extends User {
    adminLevel: number;
    constructor(username: string, age: number, adminLevel: number) {
      super(username, age);
      this.adminLevel = adminLevel;
    }

    getAdminInfo(): void {
      console.log(
        `Admin: ${this.username}, Age: ${this.age}, Admin Level: ${this.adminLevel}`
      );
    }
  }
  //   let adminOne = new Admin("Admin_Sifat", 30, 1);
  //   adminOne.getAdminInfo();
}
