"use strict";

function kontain() {
  function sayHi() {
    console.log(this.name);
  }

  let user = {name: "John"};
  let admin = {name: "Admin"};

  user.f = sayHi;
  admin.f = sayHi;

  user.f(); // John
  admin.f(); // Admin
}

// kontain();

