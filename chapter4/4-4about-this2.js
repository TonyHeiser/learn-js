function aboutThis() {
  let user = {
    name: "John",
    sayHi() {
      console.log("Hello, " + this.name);
    }
  };

  user.sayHi(); // Hello, John
}


function independentMethod() {
  let user = {
    name: "John",
    sayHi() {
      console.log("Hi, " + this.name);
    }
  };

  let say = user.sayHi;

  say(); // Hi, undefined
}

// independentMethod();


function fixThisWithBind() {
  let user = {
    name: "John",
    sayHi() {
      console.log("Hi, " + this.name);
    }
  };

  let say = user.sayHi.bind(user);

  say(); // Hi, John
}

// fixThisWithBind();


function arrowFuncThis() {
  let user = {
    name: "John",
    sayHi() {
      console.log("Hi, " + this.name);
    },
    sayBye: () => {
      console.log("Bye, " + this.name);
    }
  };

  user.sayHi(); // Hi, John
  user.sayBye(); // Bye, undefined
}

// arrowFuncThis();


function objectNotAnObject() {
  let obj = Object.create(null);
  console.log(obj.toString); // undefined
}

// objectNotAnObject();


function arrowThis() {
  function outer() {
    console.log("outer this: ", this); // outer this:  { name: 'Outer Object' }

    let arrow = () => {
      console.log("arrow this: ", this); // arrow this:  { name: 'Outer Object' }
    };

    arrow();
  }

  outer.call({name: "Outer Object"});
}

arrowThis();


function arrowInMethod() {
  let user = {
    name: "John",
    sayHi() {
      let arrow = () => {
        console.log("Hi, " + this.name) // Hi, John
      };

      arrow();
    }
  };

  user.sayHi();
}

arrowInMethod();


function aboutCall() {
  // func.call(object, arg1, arg2, ...);
  function greet(greeting) {
    console.log(greeting + ", " + this.name);
  }

  const user = {name: "Alice"};
  greet.call(user, "Hello"); // Hello, Alice
}

// aboutCall();
