function toPrimitive() {
  let user = {
    name: "John",
    age: 30
  };

  alert(user);
  console.log(user + 1);
};

function toPrimitive2() {
  let user = {
    name: "John",
    age: 30,
    toString() {
      return this.name;
    }
  };

  alert(user);
  console.log(user + 1);
  
}


// function aboutHints() {
//   let user = {
//     name: "John",
//     age: 30,

//     [Symbol.toPrimitive](hint) {
//       console.log(hint); // string
//       if (hint === "string") {
//         return this.name;
//       } else {
//         return this.age
//       }
//     }
//   };

//   alert(user); // user
//   console.log(user + 1); // 31
//   console.log(Number(user)); // 30
// }

// aboutHints();


function withoutToPrimitive() {
  let user = {
    name: "John",
    age: 30,

    toString() {
      console.log("toString was called"); // toString was called
      return "USER"
    },

    valueOf() {
      console.log("valueOf was called"); // valueOf was called
      return 100;
    }
  }

  alert(user); // USER
  console.log(user + 1); 101
  console.log(Number(user)); // 100
}


function aboutErrors() {
  let obj = {
    toString() {
      return {};
    },

    valueOf() {
      return {};
    }
  };

  console.log(String(obj));
}


function chameleon() {
  let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
      if (hint === "string") {
        return `{name: "${this.name}"}`;
      } else {
        return this.money
      }
    }
  };

  console.log(String(user)); // {name: "John"}
  console.log(user + 500); // 1500
  console.log(user * 2); // 2000
  console.log(user + "€"); // 1000€
  
}

chameleon()