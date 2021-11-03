let ir = document.getElementById("Teste");
let input12 = document.getElementById("input1");
let input22 = document.getElementById("input2");
let input32 = document.getElementById("input3");
let articlezin = document.createElement("article");
let h2zin = document.createElement("h2");
let pzin = document.createElement("p");
let imgzin = document.createElement("img");
let botaozin = document.getElementById("botao");

document.querySelector("#botao").addEventListener("click", function () {
  h2zin.innerHTML = input12.value;
    ir.appendChild(articlezin);
  articlezin.appendChild(h2zin);
  articlezin.appendChild(pzin);
  articlezin.appendChild(imgzin);

//   h2zin.innerHTML = input12.value;
//   pzin.innerHTML = input22.value;
//   imgzin.src = input32.value;
//   imgzin.alt = input32.value;
  console.log("wefwef");
});
