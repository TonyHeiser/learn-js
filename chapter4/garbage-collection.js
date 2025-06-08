function testReferenceNull() {
  let user = {
    name: "John",
  }
  let admin = user;
  console.log("1. testDelete(): \n", user === admin); // true

  user = null;
  console.log(admin.name, "\n"); // John

}

testReferenceNull();


function aboutMarriage() {
  function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
      father: man,
      mother: woman,
    }
  }

  let family = marry({name: "John"}, {name: "Ann"})
  console.log("2. aboutMarriage():\n", family);

  delete family.father; // After these deletions, the object representing John is no longer referenced anywhere.
  delete family.mother.husband; // It's now unreachable and will be removed by garbage collector.
  console.log(family);
}

aboutMarriage();