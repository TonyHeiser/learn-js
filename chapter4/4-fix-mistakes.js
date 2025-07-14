const obj = {
  test: "123",
  logTest: () => {
    console.log("1. arrowThis: ", this.test); // undefined
    console.log(this, "\n"); // Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
  }
}

// obj.logTest(); // undefined


function MyConstructor() {
  this.test = "123";
  // return 10; // This will be ignored, as the function is used as a constructor
  return {
    newProperty: "newValue",
  } // { newProperty: 'newValue' }
}

// const result = MyConstructor(); // TypeError: Cannot read properties of undefined (reading 'test')
// const result = new MyConstructor();
// console.log("2. About Constructors: ", result); // MyConstructor {test: "123"}


const obj2 = {};
console.log(obj2.toString()); // [object Object]
console.log(obj2.valueOf()); 

