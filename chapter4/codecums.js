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


// let namae = {
//   firstName: "Tiny",
//   lastName: "Hzer",
//   createFullName: () => {
//     // return `${this.firstName} ${this.lastName}`
//     return this.firstName + this.lastName
//   }
// }

// let value = namae.createFullName();

// console.log(value); // undefined undefined



// let obj1 = {
//   name: "Tiny",
//   age: 27,
//   isAdmin: false,
//   parameters: {
//     weight: 66,
//     height: 168,
//     health: {
//       appendix: false,
//       bloodType: "AB-"
//     }
//   }
// }

// let cloneObj1 = Object.assign({}, obj1);
// let cloneParameters = Object.assign({}, obj1.parameters)
// let obj2 = obj1
// cloneObj1.parameters.health.bloodType = "O+";

// console.log(obj1);
// console.log("cloneObj1: ", cloneObj1, "\n");
// console.log("cloneParameters: ", cloneParameters, "\n");
// console.log("obj2: ", obj2);


// function checkVowel(string, position) {
//   return string[position] !== undefined ? "aeiouAEIOU".includes(string[position]) : false
// };

// console.log(checkVowel('cat', 1));
// console.log(checkVowel('cat', 0));
// console.log(checkVowel('cat', 4));
// console.log(checkVowel('Amanda', -2));
// console.log(checkVowel('Amanda', 0));
// console.log(checkVowel('Amanda', 2));


// function findArray(arr1, arr2) {
//   if (arr1.length > 0 && arr2.length > 0) {
//     let res = [];
//     for (let i = 0; i < arr2.length; i++) {
//       res.push(arr1[arr2[i]])
//     }
//     return res
//   }
//   return []
// }

// console.log("1: ", findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]));
// console.log("2: ", findArray([1, 2, 3, 4, 5], [0]));
// console.log("3: ", findArray([1, 2, 3, 4, 5], [4,2,0]));
// console.log("4: ", findArray([1, 2, 3, 4, 5], [2,2,2]));
// console.log("5: ", findArray(['this', 'is', 'test'], [0, 1, 2]));
// console.log("5: ", findArray([], []));


// function convertBits(a, b) {
//   return (a ^ b).toString(2).split("").filter(e => e === "1").length;
// }

// console.log(convertBits(31, 14)); // 2


// let myArray = ["1", "2", "3", "4", "5", "6", "7"];
// let otherArray = ["a", "b", "c"]

// function exchangeWith(a, b) {
//   copyA = [...a];
//   copyB = [...b];
//   a = copyB.reverse();
//   b = copyA.reverse();
//   return;
// }

// exchangeWith(myArray, otherArray);

// console.log(myArray);
// console.log(otherArray);


// var list = [
//   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
// ];

// let herry = [ { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python', username: 'harryk2015' } ]

// function addProperty(list) {
//   for (let i in list) {
//     list[i].username = list[i].firstName.toLowerCase() + list[i].lastName[0].toLowerCase() + (new Date().getFullYear() - list[i].age);
//   }
// }

// addProperty(herry)

// console.log(herry);

// let someData = { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' };
// someData.username = `${(this.firstName).toLowerCase()}${this.lastName}${new Date().getFullYear() - age}`
// someData.username = (someData.firstName).toLowerCase() + (someData.lastName[0]).toLowerCase() + (new Date().getFullYear() - someData.age)



function twiceAsOld(dadYearsOld, sonYearsOld) {
  let count = 0;
  while (sonYearsOld !== dadYearsOld / 2) {
    dadYearsOld++;
    sonYearsOld++
    count++
  }
  return count
}

console.log(twiceAsOld(36,7));
console.log(twiceAsOld(55,30));
console.log(twiceAsOld(42,21));
console.log(twiceAsOld(22,1));
console.log(twiceAsOld(29,0));
