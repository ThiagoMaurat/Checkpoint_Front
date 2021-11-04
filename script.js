let ir = document.querySelector("Section");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let botaozin = document.getElementById("botao");

document.querySelector("#botao").addEventListener("click", function (event) {
  event.preventDefault();
  let articlezin = document.createElement("article");
  let h2zin = document.createElement("h2");
  let pzin = document.createElement("p");
  let imgzin = document.createElement("img");
  ir.appendChild(articlezin);
  h2zin.innerHTML = input1.value;
  articlezin.appendChild(h2zin);
  pzin.innerHTML = input2.value;
  articlezin.appendChild(pzin);
  imgzin.setAttribute("src", input3.value);
  articlezin.appendChild(imgzin);
  console.log("wefwef");
  articlezin.style.width = "26,5vw"
  imgzin.style.width = "80%";
  imgzin.style.height = "80%";
  
});

document.querySelector("#apagar").addEventListener("click", (event) => {
  //remover o ultimo elemento
  event.preventDefault();
    let articlezin = document.getElementsByTagName("article");
    console.log(articlezin);
    ir.removeChild(articlezin[articlezin.length - 1]);
});