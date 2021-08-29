   /*------ MENU ------*/ 
   $(function() {
       function abrirSubmenu(){

        let contador = true;

           $("#submenu-boton").click(function (e) { 
               e.preventDefault();
               let submenuclick = $("#submenu")
               if (contador == true){
                contador = false;
                submenuclick.removeClass("block");
               }
               else{
                submenuclick.addClass("block");
                contador = true;
               }
           });
       }
       abrirSubmenu()
});


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

