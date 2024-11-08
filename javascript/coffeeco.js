$(document).ready(function() {
    let carrito = [];
    let total = 0;

    // Agregar producto al carrito
    $(".agregar-carrito").click(function() {
        const nombre = $(this).data("nombre");
        const precio = parseFloat($(this).data("precio"));

        carrito.push({ nombre, precio });
        total += precio;

        actualizarCarrito();
    });

    // Actualizar la lista del carrito y el total
    function actualizarCarrito() {
        $("#lista-carrito").empty();
        carrito.forEach((item, index) => {
            $("#lista-carrito").append(`<li>${item.nombre} - $${item.precio.toFixed(2)}
            <button class="eliminar-item" data-index="${index}">Eliminar</button></li>`);
        });
        $("#total-carrito").text(total.toFixed(2));
    }

    // Eliminar un producto del carrito
    $(document).on("click", ".eliminar-item", function() {
        const index = $(this).data("index");
        total -= carrito[index].precio;
        carrito.splice(index, 1);

        actualizarCarrito();
    });

    // Vaciar el carrito
    $("#vaciar-carrito").click(function() {
        carrito = [];
        total = 0;
        actualizarCarrito();
    });

    // Finalizar la compra
    $("#finalizar-compra").click(function() {
        if (carrito.length === 0) {
            alert("El carrito está vacío. Agrega productos antes de finalizar la compra.");
            return;
        }
        
        // Mostrar mensaje de confirmación
        $("#mensaje-confirmacion").show();
        
        // Vaciar el carrito después de la compra
        carrito = [];
        total = 0;
        actualizarCarrito();
    });
});

