function konstruktorContainer() {
  function User(name) {
    // this = {};

    this.name = name;
    this.isAdmin = false;

    // return this;
  }

  let user = new User("Jack");

  console.log("1. konstruktorContainer(): \n", user.name);
  console.log(user.isAdmin, "\n");
  
}

konstruktorContainer();


function newFunction() {
  let user = new function() {
    this.name = "John";
    this.isAdmin = false;
  }

  console.log("2. newFunction(): ", user, "\n");
  
}

newFunction();


function aboutNewTarget() {
  function User() {
    console.log("3. aboutNewTarget(): ", new.target);
  }

  User();

  new User();
}

aboutNewTarget();


function aboutNewTarget2() {
  function User(name) {
    if (!new.target) {
      return new User(name);
    }

    this.name = name;
  }

  let john = User("John");
  console.log("\n4. aboutNewTarget2(): ", john.name, "\n");
  
}

aboutNewTarget2();


function returnFromKonstruktor() {
  function BigUser() {
    this.name = "John";

    return { name: "Godzilla" };
  }

  console.log("5. returnFromKonstruktor(): ", new BigUser().name);

  function SmallUser() {
    this.name = "John";
    return; // this = { name: "John" }
  }

  console.log(new SmallUser().name, "\n");
  
}

returnFromKonstruktor();


function methodsInKonstruktors() {
  function User(name) {
    this.name = name;
    this.sayHi = function() {
      console.log("6. methodsInKonstruktors(): ", "My name is: " + this.name);
    };
  }

  let john = new User("John");
  john.sayHi();
}

methodsInKonstruktors();


