function env1() {
  const list = [1, 2, 3, 4, 5]
  console.log(list[10]); // undefined

  const obj = {
    name: "Tiny",
    age: 28
  }
  console.log(obj[1]); // undefined

  const fruits = ["Apfel", "Banana", "Zitron", "Delulu", "Eagle"];
  console.log(fruits);
  fruits[1] = "Fafo";
  console.log(fruits); // [ 'Apfel', 'Fafo', 'Zitron', 'Delulu', 'Eagle' ]
  fruits[100] = "Ananas";
  console.log(fruits); // ['Apfel', 'Fafo', 'Zitron', 'Delulu', 'Eagle', <95 empty items>, Ananas']
  fruits[-14] = "Aluminium";
  console.log(fruits); // ['Apfel', 'Fafo', 'Zitron', 'Delulu', 'Eagle', <95 empty items>, 'Ananas', '-14': 'Aluminium']
  fruits["SkiesOnFire"] = "Uranus";
  console.log(fruits); // ['Apfel', 'Fafo', 'Zitron', 'Delulu', 'Eagle', <95 empty items>, 'Ananas', '-14': 'Aluminium', SkiesOnFire: 'Uranus']
}

// env1();


function env2() {
  const arr = [
    "Helium",
    { element: "carbon", ferrumCarbon: "Cast Iron" },
    false,
    function mclarenP1() {
      return "V8 Hybrid 3.8l"
    },
  ]

  console.log(arr[3]()); // V8 Hybrid 3.8l
  console.log(arr[1].ferrumCarbon); // Cast Iron 
}

// env2();


function stackArr() {
  const fruits = ["Apple", "Orange", "Pear"];
  console.log(fruits.pop()); // Pear MUTABLE
  console.log(fruits); // [ 'Apple', 'Orange' ]
  fruits.push("Pear");
  console.log(fruits); // [ 'Apple', 'Orange', 'Pear' ]
  /* fruits.push() === fruits[fruits.lenght] */

  console.log(fruits.shift()); // Apple
  console.log(fruits); // [ 'Orange', 'Pear' ]

  console.log(fruits.unshift("Apfel")); // 3
  console.log(fruits); // [ 'Apfel', 'Orange', 'Pear' ]

  fruits.push("Banana", "Pineapple"); // [ 'Apfel', 'Orange', 'Pear', 'Banana', 'Pineapple' ]
  fruits.unshift("Peach", "mango") // [ 'Peach', 'mango', 'Apfel', 'Orange', 'Pear', 'Banana', 'Pineapple' ]
  console.log(fruits);
}

// stackArr();


function env3() {
  let fruits = ["Banana"];
  let arr = fruits;
  console.log(arr === fruits); // true
  arr.push("Pear");
  console.log(fruits); // [ 'Banana', 'Pear' ]
}

// env3();


function aboutLenghtTho() {
  let fruits = [];
  fruits[100] = "Apfel";
  console.log(fruits.length); // 101 [ <100 empty items>, 'Apfel' ]
  
  let arr = [1, 2, 3, 4, 5];
  arr.length = 2;
  console.log(arr); // [ 1, 2 ]
  arr.length = 5;
  console.log(arr); // [ 1, 2, <3 empty items> ]  
}

// aboutLenghtTho();


function aboutNewArray() {
  let arr = new Array(2);
  console.log(arr[0]); // undefined
  console.log(arr.length); // 2
  console.log(arr); // [ <2 empty items> ] 
}

// aboutNewArray();


function arrToString() {
  let arr = [1, 2 ,3];
  console.log(arr); // [ 1, 2, 3 ]
  console.log(String(arr)); // 1,2,3

  console.log([] + 1); // 1
  console.log([1] + 1); // 11
  console.log([1, 2] + 1); // 1,21
}

// arrToString();


function compareArrays() {
  console.log([] == []); // false
  console.log([0] == [0]); // false
  console.log(0 == []); // true
  console.log("0" == []); // false
  console.log(0 == ""); // true
  console.log("0" == ""); // false 
}

// compareArrays();


// tasks 


function task1() {
  let fruits = ["Apples", "Pear", "Orange"];
  let shoppingCart = fruits;
  shoppingCart.push("Banana");
  console.log(fruits.length); // 4
}

// 


function task2() {
  let styles = ["Jazz", "Blues"];
  console.log(styles); // [ 'Jazz', 'Blues' ]
  
  styles.push("Rock'n'Roll");
  console.log(styles); // [ 'Jazz', 'Blues', "Rock'n'Roll" ]
  
  styles[styles.length % 2 === 0 ? styles.length / 2 : (styles.length - 1) / 2] = "Classic";
  console.log(styles); // [ 'Jazz', 'Classic', "Rock'n'Roll" ]
  
  console.log(styles.shift());
  console.log(styles); // [ 'Classic', "Rock'n'Roll" ]

  styles.unshift("Rap", "Reggae");
  console.log(styles); // [ 'Rap', 'Reggae', 'Classic', "Rock'n'Roll" ]
}

// task2();


function task3() {
  let arr = ["a", "b"];
  arr.push(function() {
    console.log(this);
  });

  arr[2]() // [ 'a', 'b', [Function (anonymous)] ]
}

// task3();


function task4() {
  function sumInput() {
    let nums = [];
    while(true) {
      let value = prompt("Type a number");
      if (value === "" || value === null || !isFinite(value)) break;
      nums.push(+value)
    }

    let sum = 0;
    for (let num of nums) {
      sum += num;
    }

    return sum
  }

  console.log(sumInput());
}

task4();