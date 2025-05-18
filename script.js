//Строковое преобразование
let value = true;
console.log(typeof value); //Boolean

value = String(value);
console.log(typeof value); //String
console.log(value);


//Численное преобразование
console.log("\n", "Численное преобразование", "6" / "2"); // 3
console.log("5" + 3); // 53
console.log("5" - 3); // 2
console.log("5" * 3); // 15
console.log(Number("any string, no numbers")); // NaN
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(true), Number(false)); // 1 0
console.log(Number("99539a95395")); // NaN


//Логическое преобразование
console.log("\n", "Логическое преобразование", "0, null, undefined, NaN == false");
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true


//Сравнение строк
console.log("\nСравнение строк");
console.log("Z" > "A"); // true
console.log("Cats" > "Catz"); // false
/* 
  Сначала сравниваются первые символы строк.
  Если первый символ первой строки больше (меньше), чем первый символ второй, то первая строка больше (меньше) второй. Сравнение завершено.
  Если первые символы равны, то таким же образом сравниваются уже вторые символы строк.
  Сравнение продолжается, пока не закончится одна из строк.
  Если обе строки заканчиваются одновременно, то они равны. Иначе, большей считается более длинная строка.
*/
console.log("a".charCodeAt(0), "A".charCodeAt(0)); // 97 65


//Сравнение разных типов
console.log("\nСравнение разных типов");
console.log("2" > 1); // true
console.log("01" == 1); // true

let a = 0;
console.log(Boolean(a)); // false

let b = "0";
console.log(Boolean(b)); // true

console.log(a == b); // true


//Сравнение null & undefined
console.log("\nСравнение null & undefined");
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true ">=" преобразует null в число
console.log(null == undefined); // true


//Задачи
console.log("\nЗадачи");
console.log("2" > "12"); // true
console.log("2" > 12); // false
console.log(2 > "12"); // false
console.log(null == "\n0\n"); // false
console.log(null === +"\n0\n"); // false


//Операторы нулевого слияния и присваивания
console.log("\nОператоры нулевого слияния и присваивания");
// console.log(result = a ?? b);

let user
console.log(user ?? "Anonymous"); // Anonymous

user = "TinyHzer";
console.log(user ?? "Anonymous"); //TinyHzer;

let firstName = null;
let lastName = null;
let nickName = "TinyHzer";
console.log(firstName ?? lastName ?? nickName); // TinyHzer;

let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(true || true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true
console.log(true ?? false); // true
console.log(false ?? true); // false

height = null;
let width = null;
console.log((height ?? 100) * (width ?? 50)); // 100 * 50 == 5000;

// console.log(1 && 2 ?? 3); Error
console.log((1 && 2) ?? 3); // 2

let userAge = null;
// if (userAge === null || userAge === undefined) {
//   userAge = 18
// }
userAge ??=18
userAge ??= console.log("will not");
userAge ??= 21;
userAge ??= null;
console.log(userAge); // 18

//Задачи
console.log("\nЗадачи");
console.log(undefined ?? NaN ?? null ?? "" ?? " "); // NaN

let num1 = 10, num2 = 20, result;
console.log((result ??= num1) ?? (result ??= num2)); // 10
console.log(result ??= num1 ?? num2); // 10


