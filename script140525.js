// Конструкция switch
console.log("Конструкция switch");

function switch1() {
  let a = 2 + 3;
  switch (a) {
    case 3: 
      return "less than expected";
    case 4: 
      return "thisss";
    case 5: 
      return "alot";
    default: 
      return "not exist";
  }
}
console.log(switch1(), "\n");

function switch2() {
  let a = 2 + 3;
  switch(a) {
    case 3:
      console.log("less than expected");
    case 4:
      console.log("thisss");
    case 5: 
      console.log("alot");
    default:
      console.log("not exist");
  }
}
switch2();

function switch3() {
  let a = "1";
  let b = 0;

  switch (+a) {
    case b + 1:
      console.log("Выполнится, т.к. значением +a будет 1, что в точности равно b+1", "\n");
      break;
    default: 
    console.log("This will not be executed", "\n");
  }
}
switch3();

function switch4() {
  let a = 3;
  switch(a) {
    case 4: 
      console.log("thats right!");
      break;
    case 3:
    case 5:
      console.log("Wrong");
      console.log("What do u think about math-classes?");
      break;
    default: 
    console.log("Output looks weird. IMO");
  }
}
switch4();

// function switch5() {
//   let arg = prompt("Input value");
//   switch(arg) {
//     case "0":
//     case "1":
//       alert("Zero or One");
//       break;
//     case "2":
//       alert("Two");
//     case 3: 
//       alert("Will never be executed");
//       break;
//     default:
//       alert("Unknown value");
//   }
// }
// switch5();


// Задачи
console.log("\n", "Задачи switch");

function replaceSwitch(browser) {
  return browser === "Edge" ? "You've got the Edge!" :
          browser === "Chrome" ||
          browser === "Firefox" ||
          browser === "Safari" ||
          browser === "Opera" ? "Okay we support these browsers too" :
          "We hope that this page looks ok!";
}
console.log(replaceSwitch("Safari"));

function replaceIfElse(number) {
  switch(number) {
    case 0:
      return "its zero";
    case 1:
      return "its one";
    case 2:
    case 3:
      return "its two, maybe three"
  }
}
console.log(replaceIfElse(3));

// Задачи
console.log("\nЗадачи");

function checkAge(age) {
  if (age > 18) {
    return true
  } else {
    return false
  }
}

function checkAge2(age) {
  if (age > 18) {
    return true
  }

  return false
}

console.log("checkAge & checkAge2 are the same");

function min(a, b) {
  return [a, b].sort((x, y) => x - y)[0]
}

console.log(min(10, 0));


"2.12 - 2.18"