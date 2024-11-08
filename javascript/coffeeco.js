$(document).ready(function() {
    let carrito = [];
    let total = 0;

    
    $(".agregar-carrito").click(function() {
        const nombre = $(this).data("nombre");
        const precio = parseFloat($(this).data("precio"));

        carrito.push({ nombre, precio });
        total += precio;

        actualizarCarrito();
    });

    
    function actualizarCarrito() {
        $("#lista-carrito").empty();
        carrito.forEach((item, index) => {
            $("#lista-carrito").append(`<li>${item.nombre} - $${item.precio.toFixed(2)}
            <button class="eliminar-item" data-index="${index}">Eliminar</button></li>`);
        });
        $("#total-carrito").text(total.toFixed(2));
    }

    
    $(document).on("click", ".eliminar-item", function() {
        const index = $(this).data("index");
        total -= carrito[index].precio;
        carrito.splice(index, 1);

        actualizarCarrito();
    });

    
    $("#vaciar-carrito").click(function() {
        carrito = [];
        total = 0;
        actualizarCarrito();
    });

    
    $("#finalizar-compra").click(function() {
        if (carrito.length === 0) {
            alert("El carrito está vacío. Agrega productos antes de finalizar la compra.");
            return;
        }
        
        
        $("#mensaje-confirmacion").show();
        
        
        carrito = [];
        total = 0;
        actualizarCarrito();
    });
});
$(document).ready(function() {
    $("#form-suscripcion").submit(function(event) {
        event.preventDefault();  

        const email = $("#email").val();

        if (email) {
            
            $("#mensaje-suscripcion").show().text("¡Gracias por suscribirte!");
            $("#email").val('');  
        } else {
            $("#mensaje-suscripcion").show().text("Por favor, ingresa un email válido.");
        }
    });
});
