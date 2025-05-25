
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const output = document.getElementById("outputHere");

// input2.addEventListener("input", () => {
//   console.log(input2.value); 
// })

plus.addEventListener("click", () => {
  let answer = input1.value + Number(input2.value);
  output.style.display = "block";
  output.innerText = answer;
})

minus.addEventListener("click", () => {
  let answer = Number(input1.value) - Number(input2.value);
  output.style.display = "block";
  output.innerText = answer;
});

