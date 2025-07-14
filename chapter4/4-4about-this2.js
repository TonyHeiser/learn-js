
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

// arrowThis();


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

// arrowInMethod();


function aboutCall() {
  // func.call(object, arg1, arg2, ...);
  function greet(greeting) {
    console.log(greeting + ", " + this.name);
  }

  const user = {name: "Alice"};
  greet.call(user, "Hello"); // Hello, Alice
}

// aboutCall();


function useStrictAndThis() {
  "use strict";
  console.log("declare: ", this); // undefined
}

// useStrictAndThis();

const useArrow = () => {
  "use strict";
  console.log("Arrow: ", this); // Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
}

// useArrow();


function imTiredOfThis() {
  let apt = {
    name: "Tiny",
    getFirstProperty() {
      return this.name
    }
  }

  let arrowApt = {
    name: "TinyButArrow",
    getFirstProperty: () => {
      return this.name // undefined
    },

    defineThisIsArrow: () => {
      return this; // undefined
    }
  }

  console.log(apt.getFirstProperty()); // Tiny
  console.log(arrowApt.getFirstProperty()); // undefined
  console.log(arrowApt.defineThisIsArrow()); // Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
}


function imTiredOfThis2() {
  let user = {
    name: "Tony",
    declareFunc() {
      function declare2() {
        function declare3() {
          function declare4() {
            function declare5() {
              let arrowFunc = () => {
                console.log("This is an arrow function inside a nested function: ", this); // <ref *1> Object [global] {...}
              };

              arrowFunc();
            } declare5();
          } declare4();
        } declare3();
      } declare2();
    } 
  }

  user.declareFunc();
}

// imTiredOfThis2();


function imTiredOfThis4() {
  let user = {
    name: "Tony",
    declareFunc() {
      const declare2 = () => {
        const declare3 = () => {
          const declare4 = () => {
            const declare5 = () => {
              const arrowFunc = () => {
                console.log("This is: ", this); // this === user
              };
              arrowFunc();
            }; declare5();
          }; declare4();
        }; declare3();
      }; declare2();
    }
  };

  user.declareFunc(); // this === user
}

imTiredOfThis4();


function imTiredOfThis3() {
  let person = {
    name: "TinyHzer",

    defineThis() {
      console.log(this);
    },

    defineThisArrow: () => {
      console.log(this);
    },

    parameters: {
      age: 27,

      defineThis() {
        console.log(this);
      },

      defineThisArrow: () => {
        console.log(this);
      },
      
      health: {
        bloodType: "AB-",

        defineThis() {
          console.log(this);
        },

        defineThisArrow: () => {
          console.log(this);
        }
      }
    }
  }

  // person.defineThisArrow();
  // person.parameters.defineThis();
  // person.parameters.defineThis() === person.parameters; // true
  // person.parameters.defineThisArrow() === person.parameters.health.defineThisArrow(); // true
  person.parameters.health.defineThisArrow(); // <ref *1> Object [global] {...}
}

// console.log("Are they Equal: ", imTiredOfThis3() === imTiredOfThis2()); // true


function funcArrow() {
  let user = {
    name: "Nuts",
    
    getFirstProperty() {
      let arrowFunk = () => {
        console.log(this[Object.keys(this)[0]]);
      }
      arrowFunk();
    }
  }

  user.getFirstProperty(); // Nuts
}