// const res = (a, b) => a + b;

// function namae() {
//   // return Object.keys(this)
//   return this.atob("2", "5")
// }

// console.log(namae());


// function namae() {
//   return typeof(arguments)
// }

// console.log(namae(1, 2, "apt"));

// const variable = () => {
//   return arguments
// }

// console.log(variable(9, false, null));


// console.log(typeof([1, 2] + 1));


// function solution(str){
//   return str.split("").reverse().join("")
// }

// console.log(solution("world"));


// function getMiddle(s) {
//   const strlen = s.length;
//   return strlen % 2 === 0 ? s[Math.floor(strlen / 2) - 1] + s[Math.ceil(strlen / 2)] : s[Math.floor(strlen / 2)]
//   // return s[Math.floor(strlen / 2)]
// }

// console.log(getMiddle("test"));
// console.log(getMiddle("testing"));
// console.log(getMiddle("middle"));
// console.log(getMiddle("A"));


// function learnSubStr(str, findme) {
//   return str.split(" ").filter(e => e === findme)[0]
// }

// console.log(learnSubStr("Learn JavaScript step by step", "step"));


// var isSquare = function(n){
//   return Number.isInteger(n**0.5)
// }

// console.log(isSquare(0));
// console.log(isSquare(2));
// console.log(isSquare(4));
// console.log(isSquare(9));
// console.log(isSquare(16));
// console.log(isSquare(17));


// function accum(s) {
// 	// const sArr = s.split("");
//   let lst = [];
//   let res = [];
//   for (let i = 0; i < s.length; i++) {
//     lst.push(s[i].repeat(s.indexOf(s[i]) + 1))
//   }

//   for (let i = 0; i < lst.length; i++) {
//     res.push(lst[i][0].toUpperCase() + lst[i].slice(1))
//   }

//   return res.join("-")
// }

// console.log(accum("ZpglnRxqenU"));
// console.log(accum("NyffsGeyylB"));
// console.log(accum("MjtkuBovqrU"));
// console.log(accum("EvidjUnokmM"));
// console.log(accum("HbideVbxncC"));


// function namae() {
//   let num = 23;

//   function incre() {
//     num = num + 1;
//     return num;
//   }

//   incre();

//   return num;
// }

// console.log(namae());


// function makeCounter() {
//   let num = 0;
  
//   function incrmnt() {
//     num += 1;
//     return num;
//   }

//   return incrmnt()
// }

// const counter = makeCounter();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

let arr = [1, 9, 10, 2, 8, 18, 3, 94, 4]

function namae(arr) {
  return [...arr].map(e => e * 2);
}

namae(arr)

console.log(arr);
console.log(namae(arr));


