function putObjektToArray() {
  let john = { name: "John" };
  let array = [ john ];
  john = null;

  console.log(john, array);
  
}

// putObjektToArray();


/**отличие от Map в том, что ключи в WeakMap должны быть объектами, а не примитивными значениями
 * WeakMap не поддерживает перебор и методы keys(), values(), entries(), так что нет способа взять все ключи или значения из неё.
 * weakMap.get(key)
 * weakMap.set(key, value)
 * weakMap.delete(key)
 * weakMap.has(key)
*/

class AboutWeakMaps {
  static intro() {
    let weakMap = new WeakMap();
    let obj = {};
    weakMap.set(obj, "ok");
    weakMap.set("test", "String"); // TypeError: Invalid value used as weak map key
  }

  static deletedKey() {
    let john = { name: "John" };
    let weakMap = new WeakMap();
    weakMap.set(john, "...");
    john = null;
    console.log(john, weakMap);
  }

  static visitsCount() {
    let visitsCountMap = new Map();
    const countUser = (user) => {
      let count = visitsCountMap.get(user) || 0;
      visitsCountMap.set(user, count + 1);
    }
  }

  static cache() {
    let cache1 = new WeakMap();

    function process(obj) {
      if (!cache1.has(obj)) {
        let result = obj;
        cache1.set(obj, result);
      }

      return cache1.get(obj);
    }

    let obj = { namae: "Peter", age: 30 };
    let result = process(obj);
    let result2 = process(obj);
    obj = null;
    console.log(cache1.size); // undefined
  }
}

AboutWeakMaps.cache();


/**можем добавлять в WeakSet только объекты (не примитивные значения).
 * Объект присутствует в множестве только до тех пор, пока доступен где-то ещё.
 * Как и Set, она поддерживает add, has и delete, но не size, keys() и не является перебираемой.
*/

class AboutWeakSets {
  static setUsers() {
    let visitedSet = new WeakSet();

    let john = { name: "John" };
    let pete = { name: "Pete" };
    let mary = { name: "Mary" };

    visitedSet.add(john);
    visitedSet.add(pete);
    visitedSet.add(john);

    console.log(visitedSet.has(john));
    console.log(visitedSet.has(mary));
    john = null;
    
  }
}

// AboutWeakSets.setUsers();


// tasks

class Tasks {
  static dataStructureForMessages() {
    let messages = [
      {text: "Hello", from: "John"},
      {text: "How goes?", from: "John"},
      {text: "See you soon", from: "Alice"}
    ];

    let readMessages = new WeakSet();
    readMessages.add(messages[0]);
    readMessages.add(messages[1]);

    readMessages.add(messages[0]);

    console.log("Read message 0: " + readMessages.has(messages[0]));
    messages.shift();
  }

  static dateWeakMap() {
    let messages = [
      {text: "Hello", from: "John"},
      {text: "How goes?", from: "John"},
      {text: "See you soon", from: "Alice"}
    ];

    let readMap = new WeakMap();
    readMap.set(messages[0], new Date());
    console.log(readMap);
  }
}

Tasks.dateWeakMap();