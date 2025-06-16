// function productArray(numbers){
//   return numbers.map(e => numbers.reduce((a, b) => a * b) / e)
// }

// console.log(productArray([12,20]));
// console.log(productArray([3,27,4,2]));
// console.log(productArray([13,10,5,2,9]));
// console.log(productArray([16,17,4,3,5,2]));



// function isVow(a){
//   let arr = []
//   for (i in a) {
//     if ("aeiou".includes(String.fromCharCode(a[i]))) {
//       arr.push(String.fromCharCode(a[i]))
//     } else {
//       arr.push(a[i])
//     }
//   }
//   return arr
// }

// console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]));
// console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]));


// function shiftLeft(s, t) {
//   let i = s.length, j = t.length;
//   while (i >= 0 && j >= 0 && s[i] == t[j]) {
//     i--, j--;
//   }
//   return (i + 1) + (j + 1)
// }

// console.log(shiftLeft("test", "west"));
// console.log(shiftLeft("test", "yes"));



// function getIssuer(number) {
//   const strNum = String(number);
//   if ((strNum.slice(0, 2) === "34" || strNum.slice(0, 2) === "37") && strNum.length == 15) {
//     return "AMEX";
//   }
//   if (strNum.slice(0, 4) === "6011" && strNum.length === 16) {
//     return "Discover";
//   }
//   if (["51", "52", "53", "54", "55"].includes(strNum.slice(0, 2)) && strNum.length === 16) {
//     return "Mastercard"
//   }
//   if (strNum.slice(0, 1) === "4" && (strNum.length === 13 || strNum.length === 16)) {
//     return "VISA"
//   }
//   return "Unknown"
// }

// console.log(getIssuer(4111111111111111));
// console.log(getIssuer(378282246310005));
// console.log(getIssuer(9111111111111111));


// function heron(a, b, c) {
//   const s = (a + b + c) / 2;
//   return (s * (s - a) * (s - b) * (s - c))**0.5
// }

// console.log(heron(3, 4, 5));
// console.log(heron(4, 4, 4));


// function neutralise(s1, s2) {
//   let res = "";
//   for (let i = 0; i < s1.length; i++) {
//     if (s1[i] === "-" && s2[i] === "-") {
//       res = res + "-"
//     }

//     if (s1[i] === "+" && s2[i] === "+") {
//       res = res + "+"
//     }

//     if ((s1[i] === "+" && s2[i] === "-") || (s1[i] === "-" && s2[i] === "+")) {
//       res = res + "0"
//     }
//   }

//   return res
// }

// console.log(neutralise("--++--", "++--++"));
// console.log(neutralise("-+-+-+", "-+-+-+"));
// console.log(neutralise("-++-", "-+-+"));
// console.log(neutralise("--++", "++++"));


