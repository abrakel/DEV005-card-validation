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
      return true;
    } else {
      return false;
    }      
  },
  maskify: function (a){
    return a.replace(/\w(?=\w{4})/g, "#");
  }
}
export default validator;
