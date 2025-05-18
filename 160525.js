function namae(...args) {
  return args
}

console.log(namae(1, "apt", true, null, undefined, {name: "TinyHze", email: "tonyhzer@gmail.com"}));

const ask = (question, yes, no) => {
  return confirm(question) ? yes() : no()
}

console.log(ask("Are you sure?",
  () => "You consent",
  () => "You decline"));
