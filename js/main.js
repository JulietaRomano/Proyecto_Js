/////////////CALCULO DE ALIMENTO////////////////

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

//Evento 


const boton = document.getElementById ('botonEnviar');
boton.addEventListener("click", respuestaClick);
      function respuestaClick(event){
        event.preventDefault();
        datos();
    } 


    /////////////////////CARRITO DE COMPRAS//////////////////////


/*  function agregarCarrito (){

    function Productos (codigoProd, categoriaProd ,precioProd){
        this.codigoProd = codigoProd;
        this.categoriaProd = categoriaProd;
        this.precioProduc = precioProd;
        this.cantidad = cantidadProd;
    }
    
    const producto1 = new Productos (1,perro, 1800);
    const producto2 = new Productos (2,perro, 2400);
    const producto3 = new Productos (3,perro, 2000);
    const producto4 = new Productos (4,gato, 2100);
    const producto5 = new Productos (5,perro, 2250);
    const producto6 = new Productos (6,perro, 2400);
    


    let confirmacion = confirm('¿Desea agregar al carrito de compras?');
    if (confirmacion == true){
        console.log ('hola');
    }
} 

const botonCarrito = document.getElementsByClassName('botonCarrito');

botonCarrito.addEventListener("click", carritoClick);

      function carritoClick(){
        
        alert('hola');
    }  */

    
   
/////////////REGISTRO//////////////


/*Para que aparezca el formulario al apretar el boton de Registrarse*/ 

$(document).ready(function () {

    let registro = $('#registro');
    let registroform =$('#registroSection');
    contador = 0;

    registro.click(function(){
        if (contador==0){
            registroform.removeClass('block');
            contador = 1;
        }
        else{
            registroform.addClass('block');
            contador = 0;
        }
    });

    $('#registroForm').submit(function(evento){
        evento.preventDefault();

        function guardarUsuario (){

            let usuarioJSON = JSON.parse('{"nombre":"", "mail":"","contrasena":""}');

            usuarioJSON.nombre = $('#usuarioNombre').val();
            usuarioJSON.mail = $('#usuarioMail').val();
            usuarioJSON.contrasena = $('#usuarioContrasena').val();
        
            const guardarLocal = (clave,valor) => {localStorage.setItem(clave,valor)};
            guardarLocal("usuario", JSON.stringify(usuarioJSON));
        
            let usuarioLocal = JSON.parse(localStorage.getItem("usuario"))["nombre"];
            console.log(usuarioLocal);
        } 

        guardarUsuario  ();
    });

});
