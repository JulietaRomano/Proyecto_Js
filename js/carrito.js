$.getJSON("/js/productos.json", function(resultado) {
    for(let i = 0; i < resultado.length; i++){
        insertarEnHtml(resultado[i]);
    }
})

function insertarEnHtml (producto){
    $('#product').append(`
    <div class="productoContainer">
        <div class="product-img">
          <img src=${producto.imagen}>
        </div>
        <div class="product-info">
          <div class="product-text">
            <h1>${producto.marca}</h1>
            <h2>${producto.descripcionCorta}</h2>
            <p class="product-p">${producto.descripcionLarga}
            </p>
          </div>
          <div class="product-price-btn">
            <p class="precio">$<span>${producto.precio}</span></p>
            
            <button type="button" class="botonCarrito">
              Agregar <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
      `
    );
}


let SUBTOTAL= 0;
function agregarProductoAlCarrito(titulo,precio) {
    $('#carro').prepend(`
    <tr>
        <th>${titulo}</th>
        <td>$ ${precio}</td>
    </tr>    
    `
);
  SUBTOTAL = SUBTOTAL + parseInt(precio);

  $('#subtotalCarrito').empty();
  $('#subtotalCarrito').append("$ " + SUBTOTAL);
};


$(document).ready(function () {
    $('#product').click(function(e){
        let elementoClick = $(e.target);
        let precio = '';
        let titulo = '';
        if (elementoClick.is(':button') || elementoClick.is('i')) {
            precio= elementoClick.parent().parent().find('.precio span').html();
            titulo = elementoClick.is(':button') ? elementoClick.parent().parent().find('.product-text h1').html() : elementoClick.elementoClick.parent().parent().parent().find('.product-text h1').html();
            console.log(precio,titulo);
            agregarProductoAlCarrito(titulo,precio);
        };
        console.log($(e.target));

    })
});


  $('#vaciarCarrito').click(function(e){
    e.preventDefault();
    console.log('hola');

    $('#carro').hide('slow', function(){
      $('#carro').empty()
    });
    $('#carro').show(0, function(){
      $('#carro').append('<td>Subtotal</td><td id="subtotalCarrito">$ 0</td>');
    SUBTOTAL= 0;
    })
  });



  

