const ptarj = document.getElementById("tarj");
const puser = document.getElementById("user");
const user = document.getElementById("usuario");
const tipom = document.getElementById("tipov") ;
const tipov = document.getElementById("tipom");
const validator = {
  isValid: function (a){
    const tarjeta = Array.from(a);
    const tarjetaInversa = tarjeta.reverse();
    let arreglo1 = [];
    for (let e = 1; e < tarjeta.length;e=e+2){
      const numSolo = Array.from(tarjeta[e]);
      arreglo1 = arreglo1.concat(numSolo);
    }
    let arreglo2 = [];
    for (let i = 0; i < tarjetaInversa.length; i=i+2) {
      let por2 = tarjetaInversa[i]*2;
      por2 = por2.toString().split("");
      //Condicion para separar números mayores a 9
      if (por2 > 9) {
        por2 = por2.toString().split("");            
      }
      arreglo2 = arreglo2.concat(por2);
    } 
    const arregloFinal = arreglo1.concat(arreglo2);
    //crear nuevo arreglo de numeros
    const crearArreglo = arregloFinal.map(Number);
    //suma de numeros del arreglo
    let sumaArreglo = 0;
    for (let a = 0; a < crearArreglo.length; a++){
      sumaArreglo = sumaArreglo+ crearArreglo[a]; 
    }
    //validar la tarjeta
    if (sumaArreglo % 10 === 0) {
    //tipo de tarjeta
      if (a[0] === "4"){
        tipov.innerHTML = "<img src=images/visa.png width=70% height=70%>";
        puser.innerHTML = user.value;
        tipom.innerHTML = "";
      } else if (a[0] === "5"){
        tipom.innerHTML = "<img src=images/mastercard.png width=70% height=70%>";
        puser.innerHTML = user.value;
        tipov.innerHTML = "";
      } else if (a[0] === ["0-3"] || ["6-9"]) {
        tipov.innerHTML = "Otra";
        tipom.innerHTML = "";
        puser.innerHTML = "";
      }
      return true;
    } else {
      tipom.innerHTML = "";
      tipov.innerHTML = "";
      ptarj.innerHTML = "";
      puser.innerHTML = "Tarjeta Invalida";
      return false;
    }      
  },
  maskify: function (a){
    ptarj.innerHTML = a.replace(/\w(?=\w{4})/g, "#");
  }
}
export default validator;
