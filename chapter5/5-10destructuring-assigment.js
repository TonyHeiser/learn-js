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

DesAssigment.iterate();