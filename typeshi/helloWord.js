export function findShort(s){
  let lst = s.split(" ");
  let values = lst.map(e => e.length);
  return values.sort((a, b) => a - b)[0];
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
