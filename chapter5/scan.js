// MDN; strings

/**
 * const x = 10;

const result = x.toString();

'10'.slice()
str.indexOf();
str.substring();
.at();
[index]
.length
.includes()

[]
// queue stack deck
class Stack {}
class Queue {} */


class StopGninnipSMySdroW {
  static spinWords(string){
    let list = string.split(" ");
    for (let i = 0; i < list.length; i++) {
      if (list[i].length > 4) {
        list[i] = list[i].split("").reverse().join("");
      }
    }
    return list.join(" ")
  }

  static tests() {
    console.log(this.spinWords("Welcome"));
    console.log(this.spinWords("Hey fellow warriors"));
    console.log(this.spinWords("This is a test"));
    console.log(this.spinWords("This is another test"));
    console.log(this.spinWords("You are almost to the last test"));
    console.log(this.spinWords("Just kidding there is still one more"));
    console.log(this.spinWords("Seriously this is the last one"));
  }
}

// StopGninnipSMySdroW.tests();


class FindTheOddInt {
  static findOdd(a) {
    if (a.length < 2) {
      return a[0]
    }

    let res = [];
    for (let i = 0; i < a.length; i++) {
      res.push(a.filter(e => e === a[i])) 
    }

    for (let i = 0; i < res.length; i++) {
      if (res[i].length % 2 !== 0) {
        return res[i][0]
      }
    }
  }

  static tests() {
    console.log(this.findOdd([7]));
    console.log(this.findOdd([0]));
    console.log(this.findOdd([1,1,2]));
    console.log(this.findOdd([0,1,0,1,0]));
    console.log(this.findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));

    console.log(this.findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
    console.log(this.findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
    console.log(this.findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));
    console.log(this.findOdd([10]));
    console.log(this.findOdd([1,1,1,1,1,1,10,1,1,1,1]));
    console.log(this.findOdd([5,4,3,2,1,5,4,3,2,10,10]));
  }
}


// FindTheOddInt.tests();


class PlayingWithDigits {
  static digPow(n, p) {
    let numArray = String(n).split("").map(e => +e);
    for (let i = 0; i < numArray.length; i++) {
      numArray[i] = numArray[i] ** p;
      p += 1;
    }
    return numArray.reduce((a, b) => a + b) % n === 0 ? numArray.reduce((a, b) => a + b) / n : -1;
  }

  static tests() {
    console.log(this.digPow(89, 1));
    console.log(this.digPow(92, 1));
    console.log(this.digPow(46288, 3));
  }
}

// PlayingWithDigits.tests();


class Point {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

// const point1 = new Point(1, 3, 6);


class GeometryBasicsDistanceBetweenPointsIn3D {
  static distanceBetweenPoints(a, b) {
    let resX = a.x > b.x ? a.x - b.x : b.x > a.x ? b.x - a.x : 0;
    let resY = a.y > b.y ? a.y - b.y : b.y > a.y ? b.y - a.y : 0;
    let resZ = a.z > b.z ? a.z - b.z : b.z > a.z ? b.z - a.z : 0;
    return (resX**2 + resY**2 + resZ**2)**0.5;
  }

  static tests(){
    console.log(this.distanceBetweenPoints(new Point(1, 3, 5), new Point(1, 3, 5)));
    console.log(this.distanceBetweenPoints(new Point(1, 3, 6), new Point(4, 3, 2)));
    console.log(this.distanceBetweenPoints(new Point(-10.2, 12.5, 8.4), new Point(0.3, 14.7, -2.8)));
  }
}

// GeometryBasicsDistanceBetweenPointsIn3D.tests();


class NumberWith3Roots {
  static perfectRoots(n) {
    let counter = 0;
    while (n > 1 && Number.isInteger(n**0.5)) {
      n = n**0.5;
      counter += 1;
    }

    return counter >= 3;
  }

  static tests() {
    console.log(this.perfectRoots(256));
    console.log(this.perfectRoots(1000));
    console.log(this.perfectRoots(6561));
    console.log(this.perfectRoots(0));
    console.log(this.perfectRoots(1));
    console.log(this.perfectRoots(-1));
  }
}

// NumberWith3Roots.tests();


// function unusualFive() {
//   return Math.sqrt(Math.sqrt("ɱ".codePointAt()))
// }

// console.log(unusualFive());


class LargerProductorSum{
  static sumOrProduct(array, n) {
    let less = [];
    let maxs = []
    let toMax = [...array].sort((a, b) => a - b);
    let toMin = [...array].sort((a, b) => b - a);
    for (let i = 0; i < n; i++) {
      less.push(toMax[i]);
      maxs.push(toMin[i])
    }
    const product = less.reduce((a, b) => a * b);
    const sum = maxs.reduce((a, b) => a + b);

    return product > sum ? "product" : product < sum ? "sum" : "same";
  }

  static tests() {
    console.log(this.sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
    console.log(this.sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3));
    console.log(this.sumOrProduct([10, 20, 3, 30, 5, 4], 3));
  }
}

// LargerProductorSum.tests();





// A-Z -> 65, 90
// a-z -> 97, 122


class PassUnicodePlus {
  static getPassword(password) {
    let arr = password.split("");
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      let getRandom = Math.floor(Math.random() * 10)
      let key1 = i + (Math.random >= 0.5 ? +getRandom : -getRandom);
      res.push({[arr[i].codePointAt(0) + key1]: key1})
    }
    return {
      newPassNums: res.map(e => Number(Object.keys(e))).flat(),
      deshiph: res,
      str: res.map(e => Number(Object.keys(e))).flat().map(e => String.fromCodePoint(e)).join("")
    };
  }

  static decoder() {
    let newPassNums = this.getPassword(password).newPassNums;
    let deshiph = this.getPassword(password).deshiph;
    let str = this.getPassword(password).str;
  }

  static tests(str) {
    console.log(this.getPassword(str));
  }
}

// PassUnicodePlus.tests("TypeHere");
// PassUnicodePlus.tests("ABCabc");
// PassUnicodePlus.tests("1230123");


class NameArrayCapping {
  static capMe(arr) {
    return arr.map(e => e.toLowerCase()).map(e => e[0].toUpperCase() + e.slice(1));
    // return names.map(n => n[0].toUpperCase() + n.slice(1).toLowerCase());
  }

  static tests() {
    console.log(this.capitalizeElems(["jo", "nelson", "jurie"]));
    console.log(this.capitalizeElems(["KARLY", "DANIEL", "KELSEY"]));
  }
}

// NameArrayCapping.tests();


function doubleEveryOther(a) {
  return a.map((e, i) => i % 2 !== 0 ? e * 2 : e);
}

// console.log(doubleEveryOther([1,2,3,4]));
// console.log(doubleEveryOther([-1,-1,6,-3,-5,-9,-4]));


function getLargerNumbers(a, b) {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    res.push(a[i] > b[i] ? a[i] : a[i] < b[i] ? b[i] : a[i]);
    // newArray.push( Math.max( a[i], b[i] ) );
  }
  return res
}

// console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80]));
// console.log(getLargerNumbers([34, -64, 15, 17, 88], [23, 14, 53, 17, 80]));


class FindTheUniqueNumber {
  static findUniq(arr) {
    return arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e))[0];
  }

  static tests() {
    console.log(this.findUniq([ 1, 1, 1, 2, 1, 1 ]));
  }
}

// FindTheUniqueNumber.tests();


// function contain() {
//   let arr = [1, 2, 3, 2, 4, 1, 5];
//   console.log(arr.indexOf(1));
//   console.log(arr.lastIndexOf(2));
//   console.log(arr.indexOf(3) === arr.lastIndexOf(3));
// }

// contain();


class CustomFizzBuzzArray {
  static fizzBuzzCustom(a = "Fizz", b = "Buzz", c = 3, d = 5) {
    let res = [];
    for (let i = 1; i <= 100; i++) {
      if (i % c != 0 && i % d != 0) {
        res.push(i);
      } else {
        if (i % c == 0) {
          if (i % d == 0) {
            res.push(a + b);
          } else {
            res.push(a)
          }
        } else if (i % d == 0) {
          res.push(b)
        }
      }
    }

    return res
  }

  static tests(){
    console.log(this.fizzBuzzCustom()[15]);
    console.log(this.fizzBuzzCustom()[44]);
    console.log(this.fizzBuzzCustom("Hey", "There")[25]);
    console.log(this.fizzBuzzCustom("Hey", "There")[11]);
    console.log(this.fizzBuzzCustom("What's ", "up?", 3, 7)[80]);
    console.log(this.fizzBuzzCustom());
    
  }
}

// CustomFizzBuzzArray.tests();


function mergeArrays(arr1, arr2) {
  return [arr1, arr2].flat().sort((a, b) => a - b).filter((e, i, arr) => arr.indexOf(e) === i);
}

// console.log(mergeArrays([1,2,3,4], [5,6,7,8]));
// console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]));
// console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));


class RotateArray {
  static rotater(array, n) {
    if (Math.abs(n) === array.length || n === 0) {
      return array;
    }

    while (n > array.length) {
      n = n - array.length
    }

    if (n > 0) {
      let deleted = array.slice(-n);
      let count = 0;
      while (count < n) {
        array.pop()
        count++
      }

      return [deleted, array].flat();
    }

    if (n < 0) {
      let deleted = array.slice(0, array.length - array.length + Math.abs(n));
      let count = 0;
      while (count < Math.abs(n)) {
        array.shift();
        count++;
      }

      return [array, deleted].flat();
    }



    // return [deleted, array].flat();
    // return deleted
  }

  static tests() {
    console.log(this.rotater([1, 2, 3, 4, 5], 1));
    console.log(this.rotater([1, 2, 3, 4, 5], 2));
    console.log(this.rotater([1, 2, 3, 4, 5], 3));
    console.log(this.rotater([1, 2, 3, 4, 5], 4));
    console.log(this.rotater([1, 2, 3, 4, 5], 5), "\n");

    console.log(this.rotater([1, 2, 3, 4, 5], 0), "\n");

    console.log(this.rotater([1, 2, 3, 4, 5], -1));
    console.log(this.rotater([1, 2, 3, 4, 5], -2));
    console.log(this.rotater([1, 2, 3, 4, 5], -3));
    console.log(this.rotater([1, 2, 3, 4, 5], -4));
    console.log(this.rotater([1, 2, 3, 4, 5], -5), "\n");

    console.log(this.rotater(["a", "b", "c"], 1));
    console.log(this.rotater([1.0, 2.0, 3.0], 1)); // ожидается [3.0, 2.0, 1.0], вышло [3, 2, 1];
    console.log(this.rotater([true, true, false], 1), "\n");
    console.log(this.rotater([1, 2, 3, 4, 5], 7));
    console.log(this.rotater([1, 2, 3, 4, 5], 11));
    console.log(this.rotater([1, 2, 3, 4, 5], 12478));
    
  }
}

// RotateArray.tests();


const books = [
  { title: "Преступление и наказание", author: "Достоевский", year: 1866, genre: "роман" },
  { title: "1984", author: "Оруэлл", year: 1949, genre: "антиутопия" },
  { title: "Мастер и Маргарита", author: "Булгаков", year: 1967, genre: "роман" },
  { title: "Гарри Поттер и философский камень", author: "Роулинг", year: 1997, genre: "фэнтези" },
  { title: "Тёмные начала", author: "Пулман", year: 1995, genre: "фэнтези" },
  { title: "Мы", author: "Замятин", year: 1924, genre: "антиутопия" }
];


function returnJenres(books) {
  let genres = books.map(e => e.genre);
  let res = {};
  for (let i = 0; i < genres.length; i++) {
    res[genres[i]] = genres.filter(e => e == genres[i]).length;
  }
  return res
}

// console.log(returnJenres(books));



const products = [
  { id: 1, name: "Ноутбук", category: "электроника", price: 50000, inStock: true },
  { id: 2, name: "Мышка", category: "электроника", price: 2500, inStock: false },
  { id: 3, name: "Клавиатура", category: "электроника", price: 3500, inStock: true },
  { id: 4, name: "Стул", category: "мебель", price: 8000, inStock: true },
  { id: 5, name: "Стол", category: "мебель", price: 15000, inStock: false },
  { id: 6, name: "Коврик", category: "аксессуары", price: 1500, inStock: true }
];

function getNotInStock(products) {
  return products.filter(e => e.inStock === false).map(e => e.name);
}

function sortStuff(products) {
  return products.sort((a, b) => b.price - a.price);
}

function structureStuff(product) {
  let categories = product.map(e => e.category).filter((e, i, arr) => arr.indexOf(e) === i);
  let res = {};
  for (let i = 0; i < categories.length; i++) {
    res[categories[i]] = product.filter(e => e.category == categories[i]);
  }

  return res
}

// console.log(structureStuff(products));

// console.log(sortStuff(products));


/*********************************************************** */

// https://www.codewars.com/kata/598638d7f3a2c489b2000030
function getRoot(objekt, val) {
  for (let i in objekt) {
    if (typeof objekt[i] == "object") {
      if (getRoot(objekt[i], val)) {
        return i;
      }
    } else {
      if (objekt[i] == val){
        return i;
      }
    }
  };
  return null;
}

const obj = {
  "one": {
    "nest1": {
      "val1": [9, 34, 92, 100]
    }
  },

  "2f7": {
    "n1": [10, 92, 53, 71],
    "n2": [82, 34, 6, 19]
  }
}

// console.log(getRoot(obj, 9));


// https://www.codewars.com/kata/59c3e819d751df54e9000098
class ConsecutiveCount {
  static method(data, element) {
    [data, element] = [String(data), String(element)];
    let max = 0, current = 0;
    for (let i of data) {
      current = i == element ? current + 1 : 0;
      if (current > max) {
        max = current;
      }
    }

    return max;
  }

  static tests() {
    console.log(this.method(90000, 0));
  }
}

// ConsecutiveCount.tests();


