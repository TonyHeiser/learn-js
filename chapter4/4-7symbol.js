function aboutSymbols() {
  let id = Symbol("id");
  let id2 = Symbol("id");

  console.log("1. aboutSymbols(): ", id === id2);
  console.log(id.description, "\n");

}

aboutSymbols();


function hiddenValues() {
  let user = {
    name: "Abraham",
  }

  let id = Symbol("id");
  user[id] = 1;
  console.log("2. hiddenValues(): ", user[id], user, "\n");
  
}

hiddenValues();


let obj = {
  [Symbol("id")]: 1,
  [Symbol("pin")]: 2946,
  id: 12,
  pin: 2947,
}

console.log(obj);


function symbolsInLiteral() {
  let id = Symbol("id");
  let user = {
    name: "Tiny",
    [id]: 246,
  }
  console.log("\n3. symbolsInLiteral(): ", user, "\n");
  
}

symbolsInLiteral();


function symbolsWithoutForIn() {
  let id = Symbol("id");
  let user = {
    name: "Tiny",
    age: 964,
    [id]: 100900,
  };

  console.log("4. symbolsWithoutForIn(): ");

  for (let i in user) {
    console.log(i);
  }
}

symbolsWithoutForIn();


function butObjectAssignWorks() {
  let id = Symbol("id");
  let user = {
    [id]: 123,
  };
  let clone = Object.assign({}, user);
  console.log("\n5. butObjectAssignWorks(): ", clone[id], "\n");
}

butObjectAssignWorks();


function globalSymbols() {
  let id = Symbol.for("id");
  let idAgain = Symbol.for("id");
  console.log("6. globalSymbols(): ", id === idAgain, "\n");
}

globalSymbols();


function keyRof() {
  let sym = Symbol.for("name");
  let sym2 = Symbol.for("id");

  console.log("7. keyRof(): ");
  console.log(Symbol.keyFor(sym));
  console.log(Symbol.keyFor(sym2), "\n");
}



function getAllKeysEvenSymbols() {
  let user = {
    name: "Tiny",
    age: 27,
  }

  let id = Symbol("iid");
  user[id] = 9484;
  let onlyKeys = Object.getOwnPropertySymbols(user); // [ Symbol(iid) ]
  console.log(onlyKeys);
  console.log(user); // { name: 'Tiny', age: 27, [Symbol(iid)]: 9484 }
  console.log(Reflect.ownKeys(user)); // [ 'name', 'age', Symbol(iid) ]
}

getAllKeysEvenSymbols();