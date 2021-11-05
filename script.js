let ir = document.querySelector("Section");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
input2.maxLength = "70";

let input3 = document.getElementById("input3");
let input4 = document.querySelectorAll('input[type=\'radio\']');
let input5 = document.getElementById('visitou');
let botaozin = document.getElementById("botao");

document.querySelector("#botao").addEventListener("click", function (event) {
  event.preventDefault();
  let articlezin = document.createElement("article");
  let h2zin = document.createElement("h2");
  let pzin = document.createElement("p");
  let divzin = document.createElement("div");
  let imgzin = document.createElement("img");
  ir.appendChild(articlezin);
  h2zin.innerHTML = input1.value;
  articlezin.appendChild(h2zin);

  for (let i = 0; i < input4.length; i++) {
    if (input4[i].checked) {
      h2zin.innerHTML += (", "+input4[i].value);
      break;
    }
  }

  input5.checked ? h2zin.innerHTML += " ✔️" : h2zin.innerHTML += " ❌";

  pzin.innerHTML = input2.value;
  articlezin.appendChild(pzin);
  imgzin.setAttribute("src", input3.value);
  articlezin.appendChild(divzin);
  divzin.appendChild(imgzin);
  // articlezin.style.width = "26,5vw"
  // imgzin.style.width = "80%";
  // imgzin.style.height = "80%";
  // resetInput();
});

const resetInput = () => {
  const form = document.querySelector("form").reset();
};

document.querySelector("#apagar").addEventListener("click", (event) => {
  //remover o ultimo elemento
  event.preventDefault();
    let articlezin = document.getElementsByTagName("article");
    console.log(articlezin);
    ir.removeChild(articlezin[articlezin.length - 1]);
});