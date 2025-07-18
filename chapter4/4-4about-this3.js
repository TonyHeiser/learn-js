function defineThis1() {
  let apt = {
    address: "431 Pierson St.",
    whatIsThat: this, // <ref *1> Object [global] {...}
    subApt: {
      aptNumber: 2003,
      thisInSubApt: this, // <ref *1> Object [global] {...}
      doubleSubApt: {
        rooms: 3,
        bathrooms: 1,
        thisInDoubleSubApt: this, // <ref *1> Object [global] {...}
      }
    }
  }

  console.log(apt.subApt.doubleSubApt.thisInDoubleSubApt);
};

// defineThis1();


function thisInGetters() {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    set name(value) {
      this._name = value.charAt(0).toUpperCase() + value.slice(1);
    }

    get name() {
      return this._name
    }

    get namae() {
      return `This person is ${this.name}`
    }
  }

  let tiny = new Person("  tiny  ", 27);
  console.log(tiny.namae);
  
}

thisInGetters();