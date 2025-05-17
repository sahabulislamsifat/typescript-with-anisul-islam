{
  //* Public, Private, Protected and readonly Access Modifiers */

  class User {
    // public username: string;
    protected username: string;
    public age: number;
    constructor(username: string, age: number) {
      this.username = username;
      this.age = age;
    }

    getUserInfo(): void {
      console.log(`User: ${this.username}, Age: ${this.age}`);
    }
  }
  //* class object
  let userOne = new User("JohnDoe", 25);
  let userTwo = new User("sifat", 22);
  //   userOne.getUserInfo();
  //   userTwo.getUserInfo();

  //* Inheritance */
  class Admin extends User {
    private adminLevel: number;
    constructor(username: string, age: number, adminLevel: number) {
      super(username, age);
      this.adminLevel = adminLevel;
    }

    getAdminInfo(): void {
      console.log(
        `Admin: ${this.username}, Age: ${this.age}, Admin Level: ${this.adminLevel}`
      );
    }
    username = "protected_username"; // This will work because username is protected in the parent class

    setAdminLevel(adminLevel: number): void {
      this.adminLevel = adminLevel;
    }
    getAdminLevel(): number {
      return this.adminLevel;
    }
  }
  let adminOne = new Admin("Admin_Sifat", 30, 1);
  //   adminOne.getAdminInfo();
  //   adminOne.username = "Admin_Sifat_Updated";
  //   adminOne.username = "protected_username"; // This will work because username is protected in the parent class
  //   console.log(adminOne);
  //   adminOne.getUserInfo();
  // userName = "protected_username"; // This will work because username is protected in the parent class

  //   adminOne.setAdminLevel(2);
  adminOne.setAdminLevel(123456);
  console.log(adminOne.getAdminLevel()); // This will work because adminLevel is private in the child class
}
