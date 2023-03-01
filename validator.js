const validator = {
  isValid: function (a){
    //recibir numero de tarjeta y transformarlo en arreglo
    const tarjeta = Array.from(a);
    // Revertir el orden del arreglo
    const tarjetaInversa = tarjeta.reverse();
    //Recorrer el arreglo inverso, iterar numeros sin multiplicar y recibirlos en un arreglo
    let arreglo1 = [];
    for (let e = 1; e < tarjeta.length;e=e+2){
      const numSolo = Array.from(tarjeta[e]);
      arreglo1 = arreglo1.concat(numSolo);
    }
    //Recorrer el arreglo inverso, iterar, multiplicar por 2 numero por medio y recibirlos en un arreglo
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
    //Unir los dos arreglos de objetos
    const arregloFinal = arreglo1.concat(arreglo2);
    //crear nuevo arreglo de numeros
    const crearArreglo = arregloFinal.map(Number);
    //suma de numeros del arreglo
    let sumaArreglo = 0;
    for (let a = 0; a < crearArreglo.length; a++){
      sumaArreglo = sumaArreglo+ crearArreglo[a]; 
    }
    //Definir variables para poner nombre si la tarjeta es valida
    const puser = document.getElementById("user");
    const user = document.getElementById("usuario");
    const ptarj = document.getElementById("tarj");
    const tipom = document.getElementById("tipov") ;
    const tipov = document.getElementById("tipom");
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
    const ptarj = document.getElementById("tarj");
    ptarj.innerHTML = a.replace(/\d(?=\d{4})/g, "#");
  }
}
export default validator;
