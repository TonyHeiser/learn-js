function konstruktorss() {
  function User(name) {
    this.name = name;
    this.isAdmin = false;
  }

  let user = new User("John");
  console.log(user.name); // John
  console.log(user.isAdmin); // false
}

// konstruktorss();


function aboutThis() {
  function User(name) {
    this.name = name;
    // return { test: 123 }; // undefined
    return 123; // Jason
  }

  let user = new User("Jason");
  console.log(user.name); // Jason
}

// aboutThis();


function forAlotOfObjects() {
  function User(name) {
    this.name = name;
    this.isAdmin = false;
  }

  let user1 = new User("Alice");
  let user2 = new User("Bob");

  console.log(user1.name); // Alice
  console.log(user2.name); // Bob
  console.log(user1 === user2); // false
}

// forAlotOfObjects();


function checkKonstruktor() {
  function User(name) {
    if (!new.target) {
      throw new Error("User() must be called with `new`");
    }
    this.name = name;
  }

  let user = new User("John"); // User { name: 'John' }
  // let notUser = User("Jason"); // Error: User() must be called with `new`

  console.log(user instanceof User); // true
}

// checkKonstruktor();


function propertiesAndMethodsInKonstruktor() {
  function User(name) {
    this.name = name;
  }

  User.prototype.sayHi = function() {
    console.log("Hi, " + this.name);
  };

  let user = new User("Alice");
  user.sayHi(); // Hi, Alice
}

// propertiesAndMethodsInKonstruktor();


function arrowsInKonstruktors() {
  function User(name) {
    this.name = name;

    this.sayHi = () => {
      console.log("Halyo, " + this.name);
    };
  }

  let user = new User("Alice");
  user.sayHi(); // Halyo, Alice
}

// arrowsInKonstruktors();


function withoutNew() {
  function Konstrukter(name, age) {
    this.name = name;
    this.age = age
  }

  let dude = Konstrukter("Jim", 27);
  console.log(dude);
}

withoutNew();