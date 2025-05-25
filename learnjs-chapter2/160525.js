// function namae(...args) {
//   return args
// }

// console.log(namae(1, "apt", true, null, undefined, {name: "TinyHze", email: "tonyhzer@gmail.com"}));

// const ask = (question, yes, no) => {
//   return confirm(question) ? yes() : no()
// }

// console.log(ask("Are you sure?",
//   () => "You consent",
//   () => "You decline"));

console.log(true && false); // false
console.log(true || false); // true
console.log(false || true); // true
console.log(false && true); //false
console.log(true && true && true); // true
console.log(true && false && true); // false
console.log(true || false || true); // true
console.log(true || false || false); // true


function namae() {

  function namae2() {
    return "namae2"
  }

  const val = function() {
    return "val"
  }

  return namae2() || val() || "namae"
}

console.log(namae());
console.log(namae2());

