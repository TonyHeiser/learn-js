function aboutNumbers() {
  let bigVal = 0xff;
  console.log(bigVal.toString(2)); // 111 111 11
  console.log(123456..toString(36));
  console.log(Math.floor(3.1)); // 3
  console.log(Math.ceil(3.1)); // 4
  console.log(Math.round(3.1)); // 3
  console.log(Math.round(3.6)); // 4
  console.log(Math.round(3.5)); // 4
  console.log(Math.round(-1.1)); // -1
}

// aboutNumbers();


function roundingNum() {
  let num = 1.23456;
  console.log(Math.round(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23

  num = 12.34;
  console.log(num.toFixed(1)); // 12.3
  console.log(num.toFixed(5)); // 12.34000
  num = 12.36
  console.log(num.toFixed(1)); // 12.4
  
}

// roundingNum();


function inexactCalculations() {
  console.log(1e500); // Infinity
  console.log(0.1 + 0.2 == 0.3); // false
  console.log(0.1 + 0.2); // 0.30000000000000004
  console.log(0.1.toFixed(20)); // 0.10000000000000000555
  console.log(9_999_999_999_999_999); // 10_000_000_000_000_000
  
}

// inexactCalculations();


function isFiniteIsNaN() {
  console.log(isNaN(NaN)); // true
  console.log(isNaN("string")); // true
  console.log(NaN === NaN); // false
  console.log(isFinite("15")); // true
  console.log(isFinite("str")); // false
  console.log(isFinite(Infinity)); // false
  console.log(isFinite("")); // true
  console.log(Number.isNaN(NaN)); // true
  console.log(Number.isNaN("str" / 2)); // true
  console.log(Number.isNaN("str")); // false
  console.log(isNaN("str")); // true
  console.log(Number.isFinite(123)); // true
  console.log(Number.isFinite(Infinity)); // false
  console.log(Number.isFinite(2 / 0)); // false
  console.log(Number.isFinite("123")); // false
  console.log(isFinite("123")); // true
}

// isFiniteIsNaN();


function objektIs() {
  console.log(Object.is(NaN, NaN)); // true
  console.log(Object.is(0, -0)); // false
  // Object.is(a, b) => a === b;
}

// objektIs();


function parseNum() {
  console.log(+"100px"); // NaN
  console.log(parseInt("100px")); // 100
  console.log(parseFloat("12.5em")); // 12.5
  console.log(parseInt("12.3")); // 12
  console.log(parseFloat("12.3.4")); // 12.3
  console.log(parseInt("a123")); // NaN
  console.log(parseInt("0xff", 16)); // 255
  console.log(parseInt("ff", 16)); // 255
  console.log(parseInt("2n9c", 36)); // 123456
}

// parseNum();


function aboutMaths() {
  console.log(Math.round(Math.random() * 100));
  console.log(Math.max(1, 0.5, -0.5, 10000, 99));
}

// aboutMaths();


function roundingNums2() {
  const x = 7.3;
  console.log(Math.floor(x)); // 7
  console.log(Math.ceil(x)); // 8
  console.log(Math.round(x)); // 7
  console.log(Math.trunc(x)); // 7
}

// roundingNums2();


function maximus() {
  console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
  console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
  console.log(9007199254740991 + 1); // 9007199254740992
  console.log(9007199254740991 + 2); // 9007199254740992
  console.log(9007199254740991 + 3); // 9007199254740994
}

// maximus();


function bints() {
  let big1 = 900_719_925_474_099_123_456_789n;
  let big2 = 10n;
  console.log(big1 + big2); // 900719925474099123456799n
  // console.log(big1 + 10); // TypeError: Cannot mix BigInt and other types, use explicit conversions
  console.log(big1 + BigInt(10)); // 900719925474099123456799n
}

// bints();


// learnJS Tasks

function task1() {
  let val1 = +prompt("Type val1");
  let val2 = +prompt("Type val2");
  alert(val1 + val2);
}

// task1();


function task2() {
  console.log(6.35.toFixed(1)); // 6.3
  console.log(6.35.toFixed(20)); // 6.34999999999999964473
  console.log(((6.35 * 100 + 0.01 * 100) / 100).toFixed(1)); // 6.4
  console.log((6.35 * 10).toFixed(20)); // 63.50000000000000000000
  console.log(Math.round(6.35 * 10) / 10); // 6.4
}

// task2();


function readNumber() {
  let val1 = prompt("Enter a number");
  while (!isFinite(val1) || val1 === "") {
    val1 = prompt("Enter a real number");
  }

  alert(val1);
}

// readNumber();


function endlessCycle() {
  let i = 0;
  while (i < 10) {
    i += 0.2
  }
  console.log(i);
}

// endlessCycle();


function randomized(min, max) {
  const res = Math.random() * (max - min) + min;
  console.log(Math.round(res));
}

randomized(1, 5);


function randomized2(min, max) {
  const res = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(res);
}

randomized2(1, 5)