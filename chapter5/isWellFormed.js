// console.log("A".length); // 1
// console.log("A".charCodeAt(0)); // 65


// console.log("😀".length); // 2
// console.log("😀".charCodeAt(0)); // 55357
// console.log("😀".charCodeAt(1)); // 56832
// console.log("😀".charCodeAt(0).toString(16)); // d83d
// console.log("😀".charCodeAt(1).toString(16)); // de00


// console.log("a".charCodeAt(0)); // 97
// console.log("ab".charCodeAt(1)); // 98


// console.log("\uD83D".length); // 1
// console.log("\uD83D".isWellFormed()); // false


// console.log("\uD83D\uDE00".length); // 2
// console.log("\uD83D\uDE00".isWellFormed()); // true


// console.log("\uD83D".toWellFormed()); // �
// console.log("\uD83D\uDE00".toWellFormed()); // 😀


// let str = "\uD83D some text \uDE00";

// if (!str.isWellFormed()) {
//   str = str.toWellFormed();
// };

// console.log(str); // � some text �


// function makeSearchUrl(query) {
//   if (!query.isWellFormed()) {
//     query = query.toWellFormed();
//   }
//   return "https://example.com/search?q=" + encodeURI(query);
// }

// console.log(makeSearchUrl("Что такое public static void в Java?"));
/**https://example.com/search?q=%D0%A7%D1%82%D0%BE%20%D1%82%D0%B0%D0%BA%D0%BE%D0%B5%20public%20static%20void%20%D0%B2%20Java? */


function safeLog(str) {
  return str.isWellFormed() ? str : str.toWellFormed();
}

console.log(safeLog("Hello"));
console.log(safeLog("\uD83D"));
console.log(safeLog("\uD83D\uDE00"));
