// let user = new Object(); //конструктор объекта
// let user2 = {}; //литерал


// let user = {
//   name: "John",
//   age: 30,
// }

// console.log("Name: ", user.name);
// console.log("Age: ", user.age);

// user.isAdmin = true;
// delete user.age

// console.log(user);

// user["likes birds"] = true;
// console.log(user["likes birds"]);
// delete user["likes birds"];


// const person = {
//   name: "TinyHzer",
//   age: 26,
// }

// const key = ""





function makeUser(name, age) {
  return {
    name: name,
    age: age
  };

  // return {
  //   name,
  //   age
  // };
}

let user = makeUser("TinyHzer", 26);
console.log(user.name, "\n");


let obje = {};
obje.__proto__ = 5;
console.log(obje.__proto__, "\n");


let user12 = {};
console.log( user.noSuchProperty === undefined, "\n" ); // true


let user01 = {
  name: "TinyHzer",
  age: 26,
};
let key00 = "age";
console.log("name" in user01); // true
console.log("colour" in user01); // false
console.log(key00 in user01, "\n"); // true

let obj01 = {
  test: undefined,
};
console.log(obj01.test); // undefined
console.log("test" in obj01, "\n"); // true


let user11 = {
  name: "T1nyHz3r",
  age: 27,
  isAdmin: true,
};

for (let key11 in user11) {
  console.log(key11, user11[key11], "\n");
}


let codes = {
  "49": "Germany",
  "41": "Swiss",
  "44": "United Kingdom",
  "1": "United States",
}

for (let code in codes) {
  console.log(code);
}


console.log("\n", "Tasks", "\n"); // Tasks

let user10 = {};
console.log("Empty Object: ", user10);
user10.name = "John";
console.log("Name:", user10.name);
user10.surname = "Smith";
console.log("Surname: ", user10.surname);
user10.name = "Pete";
console.log("Rename: ", user10.name);
console.log("Full Object: ", user10);
delete user10.name;
console.log("Thats what we have now: ", user10, "\n");


let scedule = {};
function isEmpty(obj) {
  return Object.keys(obj).length === 0;

  // for (let key in obj) {
  //   // если тело цикла начнет выполняться - значит в объекте есть свойства
  //   return false;
  // }
  // return true;
}

console.log(isEmpty(scedule));

scedule["8:30"] = "get up";
console.log(isEmpty(scedule), "\n");


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumSalaries(obj) {
  // return isEmpty(obj) ? 0 : Object.values(obj).reduce((a, b) => a + b);
  let sum = 0;
  for (let key in obj) {
    sum = sum + obj[key]
  }
  return sum
}

console.log(sumSalaries(salaries));

salaries = {};
console.log(sumSalaries(salaries), "\n");


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] = obj[key] * 2
    }
  }
}
multiplyNumeric(menu);
console.log(menu);
