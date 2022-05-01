let equal_clicked = 0;
let button_input = document.querySelectorAll(".input-button");

// input of each element
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};

// Method equal
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_clicked == 1) {
      input.value = "";
      equal_clicked = 0;
    }
    input.value += button_class.value;
  });
});

// Solution of calculator 
equal.addEventListener("click", () => {
  equal_clicked = 1;
  let inp_val = input.value;
  try{
      let solution = eval(inp_val);
      if(Number.isInteger(solution)) {
          input.value = solution;
      }
      else{
          input.value = solution.toFixed(2);
      }
  } catch (error) {
      alert("Inserção inválida!")
  }
});

clear.addEventListener("click", () => {
    input.value = "";
});

// Erase elements unitary
erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
});

