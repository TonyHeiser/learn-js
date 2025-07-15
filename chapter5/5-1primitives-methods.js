function upperString() {
  let str = "Hello";
  console.log(str.toUpperCase()); // HELLO
}

// upperString();


function stringMethods() {
  let str = "Halyo world";

  console.log(str.toUpperCase()); // HALYO WORLD
  console.log(str.toLowerCase()); // halyo world
  console.log(str.indexOf("world")); // 6
  console.log(str.includes("Halyo")); // true
  console.log(str.slice(0, 5)); // Halyo
  console.log(str.replace("world", "JS")); //Halyo JS
}


// stringMethods();


function numberMethods() {
  let num = 123.456;

  console.log(num.toFixed(1)); // 123.5
  console.log(num.toFixed(2)); // 123.46
  console.log(num.toString()); // "123.456"
  console.log(num.toString(16)); // 7b.74bc6a7ef9dc
}

numberMethods();