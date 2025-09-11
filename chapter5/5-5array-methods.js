function aboutSplice() {
  let arr = ["I", "go", "home"];
  delete arr[1];
  console.log(arr[1]);
  console.log(arr); // [ 'I', <1 empty item>, 'home' ]

  // arr.splice(start[, deleteCount, elem1, ..., elemN])

  let arr2 = ["I'm", "learn", "JavaScript", "right", "now"];
  arr2.splice(0, 3, "Let's", "dance");
  console.log(arr2); // [ "Let's", 'dance', 'right', 'now' ]
}

// aboutSplice();


function aboutSplice2() {
  let arr = ["I'm", "learn", "JavaScript", "right", "now"];
  let removed = arr.splice(0, 2);
  console.log(removed); // [ "I'm", 'learn' ]

  let arr2 = ["I'm", "learn", "JavaScript"];
  arr2.splice(2, 0, "the hardest", "programming language");
  console.log(arr2); // [ "I'm", 'learn', 'the hardest', 'programming language', 'JavaScript' ]
}

// aboutSplice2();


function aboutSplice3() {
  let arr = [1, 2, 5];
  arr.splice(-1, 0, 3, 4);
  console.log(arr); // [ 1, 2, 3, 4, 5 ]
}

// aboutSplice3();


function aboutSlice() {
  // arr.slice(start, end); NEW ARRAY
  let arr = ["t", "e", "s", "t"];
  console.log(arr.slice(1, 3)); // [ 'e', 's' ]
  console.log(arr.slice(-2)); // [ 's', 't' ]
}

// aboutSlice();


function aboutConcat() {
  // arr.concat(arg1, arg2, ...) NEW ARRAY
  let arr = [1, 2];
  console.log(arr.concat([3, 4])); // [ 1, 2, 3, 4 ]
  console.log(arr.concat([3, 4], [5, 6])); // [ 1, 2, 3, 4, 5, 6 ]
  console.log(arr.concat([3, 4], 5, 6)); // [ 1, 2, 3, 4, 5, 6 ];

  let arr2 = [1, 2];
  let arrayLike = {
    0: "Something",
    1: "Anything",
    get length() {
      return Object.keys(this).length
    }
  }
  console.log(arr2.concat(arrayLike)); // [ 1, 2, { '0': 'Something', '1': 'Anything', length: 1 } ]

  arrayLike[Symbol.isConcatSpreadable] = true;
  console.log(arr2.concat(arrayLike)); // [ 1, 2, 'Something', 'Anything', <1 empty item> ]
}

// aboutConcat();


function arraysForEach() {
  // arr.forEach(function(item, index, array){...})
  ["data1", "data2", "data3"].forEach(e => console.log(e));
  [445, 34, 1, 44, 83].forEach((item, index, array) => {
    console.log(`This element: ${item};\n has index: ${index};\n at: ${array}.\n`); // This element: 445; has index: 0; at: 445,34,1,44,83...
  })
}

// arraysForEach();


class ArraySearchers {
  static aboutIndexOfandIncludes() {
    let arr = [1, 0, false];
    console.log(arr.indexOf(0)); // 1
    console.log(arr.indexOf(false)); // 2
    console.log(arr.indexOf(null)); // -1
    console.log(arr.includes(1)); // true

    let fruits = ["Apple", "Orange", "Apple"];
    console.log(fruits.lastIndexOf("Apple")); // 2
    console.log(fruits.indexOf("Apple")); // 0

    const arr2 = [NaN];
    console.log(arr2.indexOf(NaN)); // -1
    console.log(arr2.includes(NaN)); // true
  }

  static findFindIndexEtc() {
    // arr.find(function(item, index, array){...}) true or undefined
    let users = [
      {id: 1, name: "John"},
      {id: 2, name: "Peter"},
      {id: 3, name: "Maria"},
    ];

    let user = users.find(item => item.id == 1);
    console.log(user.name); // John

    let users2 = [
      {id: 1, name: "Basil"},
      {id: 2, name: "Peter"},
      {id: 3, name: "Maria"},
      {id: 4, name: "Basil"},
    ];

    console.log(users2.findIndex(user => user.name == "Basil")); // 0
    console.log(users2.findLastIndex(user => user.name == "Basil")); // 3
  }

  static filtar() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let results = arr.filter((e, i) => i % 2 == 0);
    console.log(results);
  }
}

ArraySearchers.filtar();


class TransformArr {
  static aboutMap() {
    let lengths = ["Oxygen", "Helium", "Ferrum"];
    let res = lengths.map(item => item.length); // NEW ARRAY
    console.log(res, lengths); // [ 6, 6, 6 ] [ 'Oxygen', 'Helium', 'Ferrum' ]
  }

  static aboutSort() {
    let arr = [1, 2, 15]; // MUTABLE
    // arr.sort();
    let sortedArr = arr.sort();
    console.log(sortedArr, arr); // [ 1, 15, 2 ] [ 1, 15, 2 ];

    let arr2 = [undefined, -200, "0", 3553, false, null, 24, {name: "MCLaren", model: "P1-GTR"}];
    console.log([...arr2].sort()); // ["-200", "0", "24", "3553", "[object Object]", "false", "null", "undefined"];
                                   // [ 45,    48,   50,    51,           91,           102,    110,       117 ];
    console.log([...arr2].sort().map(e => String(e).charCodeAt(0))); // [45,  48,  50,  51, 91, 102, 110, 117];

    let arr3 = [2556, -535, 0, 4, 98, 5, 10];
    let arr4 = [2556, -535, 0, 4, 98, 5, -10];
    // console.log(`[${[...arr3].sort((a, b) => a + b).join(", ")}]`); //   [2556, 0, 4, 98, 5, 10, -535]
    // console.log(`[${[...arr4].sort((a, b) => b + a).join(", ")}]`); //   [2556, 0, 4, 98, -10, 5, -535]
    // console.log(`[${[...arr3].sort((a, b) => a - b).join(", ")}]`); //   [-535, 0, 4, 5, 10, 98, 2556] [-535, 2556, 0, 4, 98, 5, -10];
    // console.log(`[${[...arr3].sort((a, b) => b - a).join(", ")}]`); //   [2556, 98, 10, 5, 4, 0, -535]
    // console.log(`[${[...arr3].sort((a, b) => a == b).join(", ")}]`); //  [2556, -535, 0, 4, 98, 5, 10]
    console.log(`[${[...arr3].sort((a, b) => a > b ? 1 : -1).join(", ")}]`); //   [2556, -535, 0, 4, 98, 5, 10] [-535, 0, 4, 5, 10, 98, 2556]
    console.log(`[${[...arr3].sort((a, b) => a < b).join(", ")}]`); //   [2556, -535, 0, 4, 98, 5, 10]
    console.log(`[${[...arr3].sort((a, b) => a >= b).join(", ")}]`); //  [2556, -535, 0, 4, 98, 5, 10]
    console.log(`[${[...arr3].sort((a, b) => a <= b).join(", ")}]`); //  [2556, -535, 0, 4, 98, 5, 10]
    console.log(`[${[...arr3].sort((a, b) => a === b).join(", ")}]`); // [2556, -535, 0, 4, 98, 5, 10]
    console.log(`[${[...arr3].sort((a, b) => a * b).join(", ")}]`); //   [-535, 2556, 0, 4, 98, 5, 10]
    console.log(`[${[...arr3].sort((a, b) => a / b).join(", ")}]`); //   [-535, 2556, 0, 4, 98, 5, 10]
    console.log(`[${[...arr3].sort((a, b) => a % b).join(", ")}]`); //   [-535, 2556, 0, 4, 98, 5, 10]

    let countries = ['Österreich', 'Andorra', 'Vietnam'];
    console.log(countries.sort((a, b) => a > b ? 1 : -1)); // [ 'Andorra', 'Vietnam', 'Österreich' ]
    console.log(countries.sort((a, b) => a.localeCompare(b))); // [ 'Andorra', 'Österreich', 'Vietnam' ] 
  }

  static aboutReverse() {
    let arr = [1, 10, 2, 9, 3, 8, 4, 6, 5];
    let reversedArr = arr.reverse(); // MUTABLE
    console.log(`[${reversedArr.join(", ")}]`, `[${arr.join(", ")}]`); // [5, 6, 4, 8, 3, 9, 2, 10, 1] [5, 6, 4, 8, 3, 9, 2, 10, 1]
  }

  static splitnjoin() {
    let dataString = "Aluminium, Ferrum, Lithium, Argon, Argentum";
    let aar2 = dataString.split(", ", 2); // [ 'Aluminium', 'Ferrum' ]
    dataString = aar2.join("; ");
    console.log(dataString); // Aluminium; Ferrum
  }

  static reducers() {
    /* let value = arr.reduce(function(accumulator, item, index, array) {...}, [initial])*/
    const arr = [10, 0, 9, 1, 8, 2, 7, 3, 6, 4, 5];
    let result = arr.reduce((sum, current) => sum + current, 0);
    console.log(result);
  }

  static isThisanArray() {
    console.log(Array.isArray([1, 2, 3]));
    console.log(Array.isArray("[1, 2, 3]"));
  }

  static aboutThisArg() {
    let army = {
      minAge: 18,
      maxAge: 27,
      canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
      }
    };

    let users = [
      {age: 16},
      {age: 20},
      {age: 23},
      {age: 30},
    ];

    let soldiers = users.filter(army.canJoin, army);

    console.log(soldiers.length);
    console.log(soldiers[0].age);
    console.log(soldiers[1].age);
    
    
  }
}

// TransformArr.isThisanArray();


class ExtraMethods {
  static fillCopyWithin() {
    let arreu = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
    arreu.fill(89, 4, 7); // MUTABLE
    arreu.fill([89, 23, 100, 44], 4, 5); // MUTABLE
    console.log(arreu); // [ 1, 10, 2, 9, [ 89, 23, 100, 44 ], 89, 89, 7, 5, 6 ]

    let arrue = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];
    let arrueCopy = arrue.copyWithin(0, 4, 7);
    console.log(arrueCopy, arrue);
    
  }
}

ExtraMethods.fillCopyWithin();


[0, NaN].indexOf(NaN);
