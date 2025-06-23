function copyBegin() {
  let user = { name: "John" };
  let admin = user;
  console.log("1. copyBegin(): \n", admin);

  admin.name = "Pete";
  console.log(user.name, "\n"); // "Pete"
}

copyBegin();


function compareReferences() {
  let a = {};
  let b = a;

  console.log("2. compareReferences():\n", a == b); // true
  console.log(a === b); // true

  let c = {};
  let d = {};

  console.log(c === d, "\n"); // false
  
}

compareReferences();


function createClone() {
  let user = {
    name: "John",
    age: 30,
  };

  let clone = {};

  for (let key in user) {
    clone[key] = user[key];
  }

  clone.name = "Pete";

  console.log("3. createClone(): \n", user.name); // John
  console.log(clone.name, "\n"); // Pete
  
}

createClone();


function learnAssign() {
  let user = { name: "John" };
  console.log("4. learnAssign(): \n", user);

  let permission1 = { canView: true };
  let permission2 = { canEdit: true };
  Object.assign(user, permission1, permission2);
  console.log(user); // user = { name: "John", canView: true, canEdit: true }

  let renameName = { name: "Pete" };
  Object.assign(user, renameName);
  console.log(user.name); // "Pete"

  let clone = Object.assign({}, user);
  console.log(clone, "\n"); // { name: 'Pete', canView: true, canEdit: true }
}

learnAssign();


function cloneNestedObject() {
  let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50,
    }
  };
  let clone = Object.assign({}, user);
  console.log("5. cloneNestedObject(): \n", user.sizes === clone.sizes); // true

  user.sizes.width++;
  console.log(clone.sizes.width, "\n"); // 51
  
}

cloneNestedObject();


function cloneNestedObjectFixed() {
  let user = {
    name: "John",
    sizes: {
      height: 180,
    }
  };

  let clone = Object.assign({}, user);
  clone.sizes = Object.assign({}, user.sizes);

  clone.sizes.height = 190;

  console.log("6. cloneNestedObjectFixed(): \n", user.sizes.height); // 180
  console.log(clone.sizes.height); // 190
  
}

cloneNestedObjectFixed();