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

Scums.showFunctionRes("$232");
