function returnKeys(props) {
  const car = {
    brand: "Toyota",
    year: 2010,
    color: "red"
  };

  return props.map(e => {
    const value = car[e] !== undefined ? car[e] : "undefined";
    return `${e}: ${value}`
  }).join("\n")

};

console.log("1)Return Keys: \n", returnKeys(["brand", "color", "engine"]), "\n");


function getUserInfo(input) {
  const user = {
    name: "Alice",
    age: 25,
    city: "Berlin"
  };

  let res = [];

  for (let i = 0; i < input.length; i++) {
    let key = input[i];
    let value = user[key] !== undefined ? user[key] : "undefined";
    res.push(`${key}: ${value}`)
  }

  return res.join("\n")

}

console.log("2)Get User Info\n", getUserInfo(["name", "email", "age", "phone"]), "\n");


let book = {
  title: "JavaScript Guide",
  pages: 350,
  author: "MDN"
};

function countProps(obj) {
  return Object.keys(obj).length
}

console.log("3)Count Props\n",countProps(book), "\n");


let product = {
  name: "Laptop",
  price: 1500,
  brand: "Dell",
  warranty: undefined
}

let keys = ["name", "price", "color", "warranty"];

function checkProperties(obj, keys) {
  let res = new Array();

  for (let i = 0; i < keys.length; i++) {
    if (obj.hasOwnProperty(keys[i]) && obj[keys[i]] !== undefined) {
      res.push(`${keys[i]}: exist`)
    } else {
      res.push(`${keys[i]}: ain't exist`)
    }
  }

  return res.join("\n")
}

console.log("4)Check Properties\n", checkProperties(product, keys), "\n");


let employee0 = {
  id: 123,
  name: "Bob",
  department: "IT",
  salary: 5000,
  bonus: undefined
}

let keys01 = ["name", "salary", "bonus", "age"];

function filterExisting(obj, keys) {
  let lst = [];

  for (let i = 0; i < keys.length; i ++) {
    if (obj.hasOwnProperty(keys[i]) && obj[keys[i]] !== undefined) {
      lst.push(keys[i])
    }
  }

  return lst
}

console.log("5)Filter Existing\n", filterExisting(employee0, keys01), "\n");


function isObjectEmpty(obj) {
  for (let key in obj) {
    return false
  }

  return true
}


function sumValues(salaries) {
  let sum = 0;
  for (let i in salaries) {
    sum = sum + salaries[i]
  }
  return sum
}


function multiplyNumeric(obj, factor) {
  for (let i in obj) {
    obj[i] = typeof obj[i] == "number" ? obj[i] * factor : obj[i]
  }
}


function maxValue(obj) {
  let max = null;
  for (let i of Object.values(obj)) {
    if (typeof i === "number") {
      if (max === null || i > max) {
        max = i
      }
    }
  }

  return max
}

let scores = {
  Alice: 50,
  Bob: 120,
  Carol: 90
};

// console.log(maxValue(scores)); // 120


function countNumericProps(obj) {
  let count = 0;

  for (let i in obj) {
    if (typeof obj[i] === "number") {
      count = count + 1;
    }
  }

  return count
}

// let data = {
//   a: 1,
//   b: "text",
//   c: 3,
//   d: true
// };
// console.log(countNumericProps(data));


function countStringValues(obj) {
  let count = 0;
  for (let i in obj) {
    count = typeof obj[i] === "string" ? count + 1 : count
  }
  return count
}


// let book01 = {
//   title: "book__name",
//   author: "book__author",
//   year: 2000,
// }

// book01.publisher = {
//   name: "publisher__name",
//   location: "publisher__location",
// }

// book01.year = 2025

// console.log(book01);


// let user = { name: "John" };
// let admin = user;
// admin.name = "Pete";
// console.log(user.name)


// function shallowClone(obj) {
//   let res = {};

//   for (let i in obj) {
//     res[i] = obj[i];
//   }

//   return res
// }


let user = { name: "John", age: 30 };
let clone = Object.assign({}, user);
clone.name = "Pete";
console.log(user.name);


function twoFunctionsOneObject() {
  let obj = {};

  function A() {
    return obj
  }

  function B() {
    return obj
  }

  let a = new A();
  let b = new B();

  console.log("*. twoFunctionsOneObject(): ", a == b);
}

twoFunctionsOneObject();


function calculatorKontainer() {
  function Calculator() {
    this.read = function() {
      this.a = +prompt("a?", 0);
      this.b = +prompt("b?", 0);
    };

    this.sum = function() {
      return this.a + this.b
    }

    this.mul = function() {
      return this.a * this.b
    }
  }

  let calc = new Calculator();

  calc.read();

  alert("Sum=" + calc.sum())
  alert("Mul=" + calc.mul())
}


function accContainer() {
  function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
      this.anotherValue = +prompt("Type Another Value", 0);
      this.value = this.value + this.anotherValue;
    }
  }

  let accumulator = new Accumulator(1);
}