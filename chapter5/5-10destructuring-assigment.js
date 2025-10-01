class DesAssigment {
  static method1() {
    let [firstName, lastName] = "Ilya Kantor".split(" ");
    console.log(firstName); // Ilya
    console.log(lastName); // Kantor
  }

  static missTheVars() {
    let [firstName, title] = [ "Julius", "Caesar", "Consul", "of the Roman Republic" ];
    console.log(title); // Caesar
  }

  static notOnlyArrays() {
    let [a, b, c] = "abc";
    let [one, two, three] = new Set([1, 2, 3]);
    console.log(a, b, c); // a b c
    console.log(one, two, three); // 1 2 3
  }

  static evenAnObjekts() {
    let user = {};
    [user.name, user.surname] = "Ada Lovelace".split(" ");
    console.log(user); // { name: 'Ada', surname: 'Lovelace' }
  }

  static iterate() {
    let user = {
      name: "John",
      age: 30,
    }

    for (let [key, value] of Object.entries(user)) {
      console.log(`${key}: ${value}`); // name: John; age: 30
    }

    user = new Map([
      ["name", "John"],
      ["age", 30]
    ]);

    for (let [key, value] of user) {
      console.log(`${key}: ${value}`); // name: John; age: 30
    }
  }
}

// DesAssigment.iterate();


class DesAssigment2 {
  static changeValues() {
    let guest = "Jane";
    let admin = "Pete";

    [guest, admin] = [admin, guest];
    console.log(guest); // Pete
    console.log(admin); // Jane
  }

  static restValues() {
    let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
    console.log(rest); // [ 'Consul', 'of the Roman Republic' ];
  }

  static defaultIsUndefined() {
    let [firstName, surname] = [];
    console.log(firstName, surname); // undefined undefined;

    [firstName = "Guest", surname = "Anonymous"] = ["Julius"];
    console.log(firstName); // Julius
    console.log(surname); // Anonymous
  }
}

// DesAssigment2.defaultIsUndefined();

class ObjektDestructure {
  static method1() {
    let options = {
      title: "Menu",
      width: 100,
      height: 200
    };

    // let {title, width, heigth} = options;
    // console.log(title); // Menu
    // console.log(width); // 100
    // console.log(heigth); // 200

    let {height, width, title} = { title: "Menu", height: 200, width: 100 };
    console.log(height); // 200
    console.log(width); // 100
    console.log(title); // Menu

    let { width: w, height: h, title: t } = options;
    console.log(t); // Menu
    console.log(w); // 100
    console.log(h); // 200
    
  }

  static insides() {
    let options = {
      size: {
        width: 100,
        height: 200,
      },
      items: ["Cake", "Donut"],
      extra: true
    };

    let {
      size: {
        width,
        height
      },
      items: [item1, item2],
      title = "Menu"
    } = options;

    console.log(title); // Menu
    console.log(width); // 100
    console.log(height); // 200
    console.log(item1); // Cake
    console.log(item2); // Donut
  }
}

// ObjektDestructure.insides();


class SmartParametrics {
  static method1() {
    let options = {
      title: "My Menu",
      items: ["Item1, Item2"],
    };

    function showMenu({ title = "Untitled", width = 200, height = 100, items = [] }) {
      // title, items – взято из options,
      // width, height – используются значения по умолчанию
      console.log(`${title}, ${width}, ${height}`); // My Menu, 200, 100
      console.log(items); // [ 'Item1, Item2' ]
    }

    showMenu(options)
  }

  static hardDestructure() {
    let options = {
      title: "My Menu",
      items: ["Item1", "Item2"]
    };

    function showMenu({
      title = "Untitled",
      width: w = 100,
      height: h = 200,
      items: [item1, item2]
    }) {
      console.log(`${title}, ${w}, ${h}`); // My Menu, 100, 200
      console.log(item1); // Item1
      console.log(item2); // Item2
    }

    showMenu(options);
    // showMenu(); // TypeError: Cannot read properties of undefined (reading 'title')

    function showMenu2({ title = "Menu", width = 100, height = 200 } = {}) {
      console.log(`${title}, ${width}, ${height}`); // Menu, 100, 200
    }

    showMenu2(); // Menu, 100, 200
  }
}

// SmartParametrics.hardDestructure();


class Tasks {
  static method1() {
    let user = {
      name: "John",
      years: 30
    };

    let {name, years: age, isAdmin = false} = user;
    console.log(name, age, isAdmin); // John 30 false
  }

  static method2() {
    let salaries = {
      "John": 100,
      "Pete": 300,
      "Mary": 250,
    }

    function topSalary(salaries) {
      let max = 0;
      let maxName = null;

      for (const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
          max = salary;
          maxName = name;
        }
      }

      return maxName
    }

    console.log(topSalary(salaries)); // Pete
  }
}

Tasks.method2();