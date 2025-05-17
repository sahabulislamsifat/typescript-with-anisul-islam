{
  class User {
    //* properties, mathods, and constructor
    username: string;
    age: number;
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
  userTwo.getUserInfo();
}
