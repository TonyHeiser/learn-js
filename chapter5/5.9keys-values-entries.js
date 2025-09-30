class Tasks {
  static sumOfProperties() {
    let salaries = {
      "John": 100,
      "Pete": 300,
      "Mary": 250
    };

    return Object.values(salaries).reduce((a, b) => a + b, 0)
  }

  static countProps(obj) {
    return Object.entries(obj).length;
  }
}

// console.log(Tasks.sumOfProperties());

const user = { name: "John", age: 30 }
console.log(Tasks.countProps(user));

