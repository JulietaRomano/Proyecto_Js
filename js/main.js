
function datos(){

    const arrayValores = ["Bajo" , "Medio", "Activo"];
    console.log (arrayValores);
    const arrayMultiplicadores = [0.020 , 0.025 , 0.030]
    console.log (arrayMultiplicadores);


    class Perro {
    
        constructor (nombre) {
            this.name = nombre;
            this.edad = 0;
            this.peso = 0;
            this.actividad = "";
        }
        miPesoEnGramos(){
            this.pesoEnGramos = this.peso * 1000;
        }
    }

    //Ingreso de datos
    let nombre = document.getElementById('inputNombreMasc').value;

    const nuevoPerro = new Perro(nombre);
    nuevoPerro.peso = parseInt(document.getElementById('inputPeso').value);
    nuevoPerro.edad =  parseInt(document.getElementById('inputEdad').value);
    nuevoPerro.actividad =  document.getElementById('inputActv').value;
    console.log (nuevoPerro);
    nuevoPerro.miPesoEnGramos();


    //Funcion para calcular la cantidad de alimento
    function cantidadComida(peso,cantidad){
    totalGramos = peso * cantidad;
    return totalGramos;
    }


    //Funcion para dividir la cantidad de alimento por día
    function comidasDiarias (total){
        totalComidas = total / 2;
        return totalComidas;
    }


    //Casos dependiendo el nivel de actividad, para calcular la cantidad de alimento
    let indice = arrayValores.indexOf (nuevoPerro.actividad);
    let resultadoTotal = cantidadComida (nuevoPerro.pesoEnGramos, arrayMultiplicadores[indice]);
    console.log ('debe comer: '+resultadoTotal + 'gramos');
    let resultadoComidaTotal = comidasDiarias (resultadoTotal);
    console.log('debe comer: ' + resultadoComidaTotal + ' gramos por comida'); 


    function parrafoDeBienvenida (){
        let parrafoBienvenida = document.getElementById ('respuestaUsuario');
        let parrafo = document.createElement("div");
        parrafoBienvenida.appendChild(parrafo);
        let adentro = document.createTextNode('Tu mascota '+ nombre + ' debe comer: ' + resultadoTotal + ' gramos por día. Si lo divides en dos comidas, debera comer ' + resultadoComidaTotal + ' gramos por comida.');
        parrafo.appendChild(adentro);
    }
    
    parrafoDeBienvenida()

}


const boton = document.getElementById ('botonEnviar');
boton.addEventListener("click", respuestaClick);
      function respuestaClick(event){
        event.preventDefault();
        datos();
           
    } 

