function specSymbols() {
  const guestList = "Guests:\n * John\n * Pete\n * Mary";
  console.log(guestList);

  const str1 = "Hello\nWorld";
  const str2 = `Hello
World`;
  console.log(str1 === str2); // true
  
  console.log('I\'m the Warlus'); // I'm the Warlus
  console.log('BackSlash \\\\\\'); // BackSlash \\\
  
}

// specSymbols();


function stringLenght() {
  const str = "Helios";
  console.log(str[0]); // H
  console.log(str.at(0)); // H
  
  console.log(str[str.length - 1]); // s
  console.log(str.at(-1)); // s
  
  console.log(str[-2]); // undefined
  console.log(str.at(-2)); // o
  
  const forOfforStrings = () => {
    for (let char of "Helios") {
      console.log((char));
    }
  }

  forOfforStrings(); // H, e, l, i, o, s
}

// stringLenght();


function stringsAreImmutable() {
  let str = "Ferrum";
  str[0] = "H"; // Nothing happened
  console.log(str[0]); // F

  // str = "H" + str.slice(1, str.at(-1));
  console.log(str);
  console.log(str.slice(1, str.at(-1)));
  
}

// stringsAreImmutable();


function findSubStr() {
  let str = "Widget with id";
  console.log(str.indexOf("Widget")); // 0
  console.log(str.indexOf("widget")); // -1
  console.log(str.indexOf("id")); // 1
  console.log(str.indexOf("id", 2)); // 12
}

// findSubStr();


// tasks

function env1() {
  function ucFirst(str) {
    return str.length > 0 ? str[0].toUpperCase() + str.slice(1) : null;
  }

  console.log(ucFirst("string"));
  console.log(ucFirst("sTRING"));
  console.log(ucFirst("scum"));
  console.log(ucFirst(""));
  
}

// env1();


function env2() {
  function checkSpam(str) {
    let strL = str.toLowerCase();
    return strL.includes("viagra") || strL.includes("xxx")
  }

  console.log(checkSpam("buy ViAgRA now"));
  console.log(checkSpam("free xxxxx"));
  console.log(checkSpam("innocent rabbit"));
  console.log(checkSpam("")); 
}

// env2();


function env3() {
  function truncate(str, maxLength) {
    return str.length <= maxLength ? str : str.slice(0, maxLength - 1) + "..."
  }

  console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
  console.log(truncate("Всем привет!", 20));
}

// env3();


class Scums {
  static extraCurrencyValue(str) {
    return Number(str.slice(1));
  }

  static showFunctionRes(str) {
    console.log(this.extraCurrencyValue(str));
  }
}

// Scums.showFunctionRes("$232");


class AllMethods {
  static StaticMethods = class {
    static fromCharCodeEx = () => console.log(String.fromCharCode(189, 43, 190, 61)); // ½+¾=
    static fromCodePointEx = () => console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804)); // ☃★♲你
    static rawEx = () => console.log(String.raw`^\d+\.\d{2}$`); // ^\d+\.\d{2}$
  }

  static InstanceMethods = class {
    static concatEx = () => {
      const str1 = "Hello";
      const str2 = "World";
      console.log(str1.concat(" ", str2)); // Hello World
      console.log(str2.concat(" ", str1)); // World Hello
    };
    
    static endsWithEx() {
      const str1 = "Cats are the best!";
      console.log(str1.endsWith("best!")); // true
      console.log(str1.endsWith("best", 17)); // true
      console.log(str1.endsWith("west")); // false
    }

    static lastIndexOfEx() {
      const paragraph = "I think Ruth's dog is cuter than your dog!";
      const searchItem = "dog";
      console.log(`Index of the last ${searchItem} is ${paragraph.lastIndexOf(searchItem)}`); // Index of the last dog is 38
    }
  }
}

// AllMethods.InstanceMethods.lastIndexOfEx();

