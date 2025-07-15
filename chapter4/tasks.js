function aboutShips() {
  class Ship {
    constructor(draft, crew) {
      this.draft = draft
      this.crew = crew
    }

    isWorthIt() {
      return this.draft - (this.crew * 1.5) >= 20
    }
  }

  const titanic = new Ship(35, 20);

  console.log("1. aboutShips: ", titanic.isWorthIt());
}

// aboutShips();


function classyClasses() {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    get info() {
      return `${this.name}s age is ${this.age}`
    }
  }

  let john = new Person("John", 34);

  console.log(john.info);
  
}

// classyClasses();


function basicSubclassesAdamAndEve() {
  class God {
    static create(){
      return [new Man, new Woman]
    }
  }

  class Human {};
  class Man extends Human {};
  class Woman extends Human {};
}


function arrayHelpers() {
  Array.prototype.square = function() {
    return this.map(e => e ** 2)
  }

  Array.prototype.cube = function() {
    return this.map(e => e ** 3)
  }

  Array.prototype.average = function() {
    return this.length > 0 ? this.reduce((a, b) => a + b) / this.length : NaN
  }

  Array.prototype.sum = function() {
    return this.reduce((a, b) => a + b);
  }

  Array.prototype.even = function() {
    return this.filter(a => a % 2 === 0);
  }

  Array.prototype.odd = function() {
    return this.filter(a => a % 2 !== 0);
  }

  let numbers = [1, 2, 3, 4, 5];

  console.log("1. square(): ", numbers.square());
  console.log("2. cube(): ", numbers.cube());
  console.log("3. average(): ", numbers.average());
  console.log("4. sum(): ", numbers.sum());
  console.log("5. even(): ", numbers.even());
  console.log("6. odd(): ", numbers.odd());
}

// arrayHelpers();


function whoHasTheMostMoney() {
  class Student {
    static instances = []

    constructor(name, fives, tens, twenties) {
      this.name = name;
      this.fives = fives;
      this.tens = tens;
      this.twenties = twenties;
      this.allMoney = this.fives * 5 + this.tens * 10 + this.twenties * 20;
      Student.instances.push(this);
    }

    static getAll() {
      return Student.instances
    }
  }

  const andy = new Student("Andy", 0, 0, 2);
  const stephen = new Student("Stephen", 0, 4, 0);
  const eric = new Student("Eric", 8, 1, 0);
  const david = new Student("David", 2, 0, 1);
  const phil = new Student("Phil", 0, 2, 1);
  const cam = new Student("Cameron", 2, 2, 0);
  const geoff = new Student("Geoff", 0, 3, 0);

  let listOfInstances = Student.getAll();

  let maxMoneys = listOfInstances.map(e => e.allMoney).sort((a, b) => b - a)[0];

  let maxName = listOfInstances.filter(e => e.allMoney === maxMoneys);

  console.log(maxName);
  
}

whoHasTheMostMoney();
