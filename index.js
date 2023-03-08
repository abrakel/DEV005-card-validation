import validator from './validator.js';
//Traspaso de valores ingresados
const puser = document.getElementById("user");
const user = document.getElementById("usuario");
const tipom = document.getElementById("tipov") ;
const tipov = document.getElementById("tipom");
const ntar = document.getElementById("dverificador");
const butn = document.getElementById("boton");
const ptarj = document.getElementById("tarj");
//restringir caracteres input
ntar.addEventListener("keydown", function (e){
  const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  if (numeros.includes(e.key) === true || e.code === "Backspace" || e.code === "ArrowLeft" || e.code === "ArrowRight"){
    ntar.classList.remove("input-error");
    ntar.classList.add("input-success");
    ntar.setCustomValidity("");
  } else{
    e.preventDefault();
    ntar.classList.remove("input-success");
    ntar.classList.add("input-error");
    ntar.setCustomValidity("Por favor ingrese solo números");
    ntar.reportValidity();
  }
});
function validempresa () {
  if (ntar.value !== ""){
    validator.isValid(ntar.value);
    if (ntar.value[0] === "4"){
      tipov.innerHTML = "<img src=images/visa.png width=70% height=70%>";
      puser.innerHTML = user.value;
      tipom.innerHTML = "";
    } else if (ntar.value[0] === "5"){
      tipom.innerHTML = "<img src=images/mastercard.png width=70% height=70%>";
      puser.innerHTML = user.value;
      tipov.innerHTML = "";
    } else if (ntar.value[0] === ["0-3"] || ["6-9"]) {
      tipov.innerHTML = "Otra";
      tipom.innerHTML = "";
      puser.innerHTML = "";
    } else {
      tipom.innerHTML = "";
      tipov.innerHTML = "";
      ptarj.innerHTML = "";
      puser.innerHTML = "Tarjeta Invalida";
    }
    ptarj.innerHTML=validator.maskify(ntar.value);
    if (ntar.value !== ""){
      document.getElementById("idatos").reset() 
      ntar.classList.remove("input-error");
      ntar.classList.remove("input-success");
    }
  } else {
    ntar.setCustomValidity("Ingrese número de tarjeta");
    ntar.reportValidity();
  }   
}
//Eventos Click
butn.addEventListener("click", validempresa);
//Eventos del mouse