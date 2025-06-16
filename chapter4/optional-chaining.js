function objectWithoutKey() {
  let user = {};
  // console.log(user.address.street); // TypeError: Cannot read properties of undefined (reading 'street')
  // console.log(user.address ? user.address.street : undefined);
  // console.log(user.address && user.address.street && user.address.street.name);
  console.log("1. objectWithoutKey(): \n", user?.address?.street);

  user = null;
  console.log(user?.address.street, "\n");
}

objectWithoutKey();


function shortCircuitEvaluation() {
  let user = null;
  let x = 0;

  user?.sayHi(x++);
  console.log("2. shortCircuitEvaluation(): ", x, "\n"); // 0
}

shortCircuitEvaluation();


function chainingUse() {
  let userAdmin = {
    admin() {
      console.log("3. chainingUse(): ", "I'm Admin\n");
    }
  };

  let userGuest = {};

  userAdmin.admin?.();
  userGuest.admin?.();
}

chainingUse();


function squareBrackets() {
  let key = "firstName";
  let user1 = {
    firstName: "John"
  };

  let user2 = null;

  console.log("4. squareBrackets(): \n", user1?.[key]);
  console.log(user2?.[key], "\n");

  delete user?.name
  
}

squareBrackets();