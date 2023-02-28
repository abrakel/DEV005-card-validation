const validator = {


    isValid: function (a){

    //recibir numero de tarjeta y transformarlo en arreglo
        let tarjeta = Array.from(a);
            console.log(tarjeta);
    // Revertir el orden del arreglo
        let tarjetaInversa = tarjeta.reverse();
            console.log(tarjetaInversa);
    //Recorrer el arreglo inverso, iterar numeros sin multiplicar y recibirlos en un arreglo
        let arreglo1 = [];
        for (let e = 1; e < tarjeta.length;e=e+2){
            let numSolo = Array.from(tarjeta[e]);
            arreglo1 = arreglo1.concat(numSolo);
        }
        console.log(arreglo1);
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
        console.log(arreglo2);
    //Unir los dos arreglos de objetos
        let arregloFinal = arreglo1.concat(arreglo2);
        console.log(arregloFinal);
    //crear nuevo arreglo de numeros
        let crearArreglo = arregloFinal.map(Number);
        console.log(crearArreglo);
    //suma de numeros del arreglo
        let sumaArreglo = 0;
        for (let a = 0; a < crearArreglo.length; a++){
        sumaArreglo = sumaArreglo+ crearArreglo[a]; 

        }
        console.log(sumaArreglo);
    //Definir variables para poner nombre si la tarjeta es valida
        let puser = document.getElementById("user");
        let user = document.getElementById("usuario");
        let ptarj = document.getElementById("tarj");
    //validar la tarjeta
        if (sumaArreglo % 10 == 0) {
            //tipo de tarjeta
            if (a[0] == 4){
                tipov.innerHTML = "<img src=images/visa.png width=70% height=70%>";
                puser.innerHTML = user.value;
                tipom.innerHTML = "";
            } else if (a[0] == 5){
                tipom.innerHTML = "<img src=images/mastercard.png width=70% height=70%>";
                puser.innerHTML = user.value;
                tipov.innerHTML = "";
            } else if(a[0] == [0-3] || [6-9]){
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

            let ptarj = document.getElementById("tarj");
            ptarj.innerHTML = a.replace(/\d(?=\d{4})/g, "#");
    }
}

export default validator;
