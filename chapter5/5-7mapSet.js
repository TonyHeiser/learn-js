/**Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.
 * new Map()            - create collection
 * map.set(key, value)
 * map.get(key)         - value or undefined
 * map.has(key)         - boolean
 * map.delete(key)
 * map.clear()          - clear collection
 * map.size             - same shit like length
 * map.keys()
 * map.values()
 */
/**Map сохраняет тип ключей
 * Производительность — Map оптимизирован для частых добавлений/удалений и поиска по ключу. Для больших наборов это быстрее, чем у обычного объекта.
 * Гарантированный порядок элементов — обход идёт в порядке добавления, у объекта порядок ключей может быть непредсказуем для нестроковых ключей.
 */

class AboutMapObjekts {
  static setNget() {
    let map = new Map();

    map.set("1", "str1");
    map.set(1, "Num1");
    map.set(true, "bool1");

    console.log(map.get(1));          // Num1
    console.log(map.get("1"));        // str1
    console.log(map.size, "\n");      // 3
  }

  static mapCanUseObjLikeKeys() {
    let john = { name: "John" };
    let visitsCountMap = new Map();
    visitsCountMap.set(john, 123);
    console.log(visitsCountMap.get(john)); // 123
    console.log(visitsCountMap);           // Map(1) { { name: 'John' } => 123 }
  }

  static testObjekts() {
    let obj1 = {
      name: "Peter",
      age: 39,
      height: 180,
      weight: 75,
    }

    let obj2 = {
      obj1: obj1.height + obj1.weight,
      name: "Simon",
      age: "40",
    }

    console.log(obj2);
  }

  static useObjektAsaKey() {
    let john = { name: "John" };
    let ben = { name: "Ben" };
    let visitsCountObj = {};

    visitsCountObj[ben] = 234; // { '[object Object]': 234 }
    visitsCountObj[john] = 123;
    console.log(visitsCountObj); // { '[object Object]': 123 }
    
  }
}

// AboutMapObjekts.useObjektAsaKey();


class DeluluMemory {
  static funky() {
    let obj1 = { a: 1 };
    let obj2 = { a: 1 };
    console.log(obj1, "\n", obj2, "\n");

    let mapObj = new Map();
    mapObj.set(obj1, "first");
    mapObj.set(obj2, "second");

    console.log(mapObj.get(obj1));
    console.log(mapObj.get(obj2));
  }

  static chain() {
    let mapObjekt = new Map();
    mapObjekt.set("1", "STR").set(1, "NUMBER").set(true, "Boolea");
    console.log(mapObjekt); // Map(3) { '1' => 'STR', 1 => 'NUMBER', true => 'Boolea' }
  }

  static createMap() {
    let mappObj = new Map([
      ["name", "Tiny"],
      ["age", "30"],
      ["hasJob", false]
    ]);
    console.log(mappObj); // Map(3) { 'name' => 'Tiny', 'age' => '30', 'hasJob' => false }
  }
}

// DeluluMemory.createMap();


class IterateMaps {
  static keysValuesEntries() {
    let recipeMap = new Map([
      ["Cucumber", 5],
      ["Tomatoes", 3.5],
      ["Onion", 0.5]
    ]);

    for (let vegetable of recipeMap.keys()) {
      console.log(vegetable); // Cucumber, Tomatoes, Onion;
    };

    for (let amount of recipeMap.values()) {
      console.log(amount); // 5, 3.5, 0.5;
    };

    for (let entry of recipeMap) {
      console.log(entry, "\n"); // [ 'Cucumber', 5 ], [ 'Tomatoes', 3.5 ], [ 'Onion', 0.5 ]
    };

    recipeMap.forEach((value, key, map) => console.log(`${key}: ${value}`)) // Cucumber: 5, Tomatoes: 3.5, Onion: 0.5;
  }
}

// IterateMaps.keysValuesEntries();


class CreateMapFromObjandBackwards {
  static objToMap() {
    let obj = {
      name: "John",
      age: 30
    };

    let toMap = new Map(Object.entries(obj));
    console.log(toMap.get("name")); // John
  }

  static mapToObj() {
    let prices = Object.fromEntries([
      ["banana", 1],
      ["orange", 2],
      ["meat", 4]
    ]);
    console.log(prices.orange); // 2
  }

  static mapToObj2() {
    let map = new Map();
    map.set("Banyanya", 1);
    map.set("Oryange", 2);
    map.set("Myatt", 4);

    let obj = Object.fromEntries(map); // { Banyanya: 1, Oryange: 2, Myatt: 4 }
    console.log(obj);
  }
}

// CreateMapFromObjandBackwards.mapToObj2();


/**new Set(iterable) – создаёт Set, копирует значения iterable в новый Set.
 * set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
 * set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
 * set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
 * set.clear() – удаляет все имеющиеся значения.
 * set.size
 */

class Sets {
  static uniqueValues() {
    let setObj = new Set();
    let john = { name: "John" };
    let pete = { name: "Pete" };
    let mary = { name: "Mary" };

    setObj.add(john);
    setObj.add(pete);
    setObj.add(mary);
    setObj.add(john);
    setObj.add(mary);

    console.log(setObj.size); // 3

    for (let value of setObj) {
      console.log(value); // { name: 'John' }, { name: 'Pete' }, { name: 'Mary' }
    };
  };

  static iterateSet() {
    let set = new Set(["Orange", "Apple", "Banyanya", "Orange"]);
    for (let value of set) console.log(value); // Orange, Apple, Banyanya
    
    set.forEach((value, valueAgain, set) => console.log(value)); // Orange, Apple, Banyanya
    
  }
}

// Sets.iterateSet();


// tasks

class Task {
  static values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

  static filterUniq(arr) {
    // return arr.filter((element, index, self) => self.indexOf(element) === index);
    return [...new Set(arr)];
  }

  static arr = [ "nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares" ];

  static filterAnagrams(arr) {
    let mapObj = new Map();

    for (let i of arr) {
      let sorted = i.toLowerCase().split("").sort().join("");
      mapObj.set(sorted, i);
    }

    return [...mapObj.values()]
  }

  static solveProblem() {
    let map = new Map();
    map.set("Name", "Michael");
    // let keys = map.keys(); // [Map Iterator] { 'Name' }
    let keys = [...map.keys()];
    keys.push("more");
    return [map, keys];
  }
}

console.log(Task.solveProblem());
