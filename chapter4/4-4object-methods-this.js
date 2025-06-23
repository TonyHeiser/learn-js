function weCanAddFunctionsInsideObjects() {
  let user = {
    name: "John",
    age: 30,
  };

  user.sayHi = function() {
    console.log("1. weCanAddFunctionsInsideObjects(): \n", "Hello word!1!!11\n");
  };

  user.sayHi();
}

weCanAddFunctionsInsideObjects();


function shortSyntax() {
  let user = {
    sayHi: function() {
      console.log("Helio Wor1d!");
    }
  };

  user = {
    sayHi() { // то же самое, что и "sayHi: function(){...}"
      alert("Привет");
    }
  };
};


function whatIsThis() {
  let user = {
    name: "John",
    age: 30,

    sayHi() {
      console.log("2. whatIsThis(): \n", this.name);
    },

    sayHi2() {
      console.log(user.name, "\n");
      
    }
  }

  user.sayHi();
  user.sayHi2();
}

whatIsThis();


function aboutThis() {
  let user = {
    name: "John",
    age: 30,
    
    sayHi() {
      console.log("3. aboutThis(): \n", this.name, "\n" /*user.name*/);
    }
  };

  let admin = user;
  user = null;

  admin.sayHi();
  
}

aboutThis();


function thisIsNotFixed() {
  let user = {name: "John"};
  let admin = {name: "Admin"};

  function sayHi() {
    console.log("4. thisIsNotFixed(): ", this.name);
  }

  user.meth = sayHi;
  admin.meth = sayHi;

  user.meth();
  admin.meth();

  admin["meth"]();
}

thisIsNotFixed();


function thisWithoutObjekt() {
  // "use strict"
  function sayHi() {
    console.log("\n5. thisWithoutObjekt(): \n", this);
  }

  sayHi();
}

thisWithoutObjekt();


console.log("\nTasks\n");

function makeUserBlock() {
  function makeUser() {
    return {
      name: "John",
      // ref: this
      ref() {
        return this
      }
    };
  }

  let user = makeUser();
  console.log("1. makeUserBlock(): \n", user.ref().name, "\n"); // undefined || John
}

makeUserBlock();


function calcBlock() {
  let calculator = {

    read(a, b) {
      this.a = a;
      this.b = b;
      console.log({"a": this.a, "b": this.b})
    },

    sum() {
      return this.a + this.b
    },

    mul() {
      return this.a * this.b
    }
  }
  calculator.read(2, 3);
  console.log(calculator.sum());
  console.log(calculator.mul());
}

calcBlock();


function methodChaining() {
  let ladder = {
    step: 0,

    up() {
      this.step++
      return this
    },

    down() {
      this.step--
      return this
    },

    showStep() {
      console.log(this.step);
      return this
    }
  };

  ladder.up().up().down().showStep().down().showStep();
}

methodChaining();