import validator from './validator.js';

//Traspaso de valores ingresados
let ntar = document.getElementById("dverificador");
let butn = document.getElementById("boton");


//restringir caracteres input
ntar.addEventListener("keydown", function (e){
    let numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    console.log(e.key);
console.log(numeros.includes(e.key));
if (numeros.includes(e.key) == true || e.code == "Backspace" || e.code == "ArrowLeft" || e.code == "ArrowRight"){
    console.log ("es numero");
    ntar.classList.remove("input-error");
    ntar.classList.add("input-success");
    ntar.setCustomValidity("");
}else{
    e.preventDefault();
    ntar.classList.remove("input-success");
    ntar.classList.add("input-error");
    ntar.setCustomValidity("Por favor ingrese solo números");
    ntar.reportValidity();
}
}
);

function validempresa () {

    if (ntar.value != ""){
        console.log(validator.isValid(ntar.value));
        console.log(validator.maskify(ntar.value));
        if (ntar.value != ""){
            document.getElementById("idatos").reset() 
            ntar.classList.remove("input-error");
            ntar.classList.remove("input-success");
            }
    } else {
        alert ("Completar campo número de tarjeta")
    }
    
}




//Eventos Click
    butn.addEventListener("click", validempresa);

//Eventos del mouse
    butn.addEventListener("mous", function () {
        this.className= "btn";
    })