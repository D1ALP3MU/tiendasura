let agregarCarrito = document.getElementById("botonAgregarCarrito")
agregarCarrito.addEventListener("click", function(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
    Toast.fire({
        icon: 'success',
        title: 'Producto agregado al carrito con éxito...'
    })  
})

let botonSuscribir = document.getElementById("botonSuscribir")
botonSuscribir.addEventListener("click", function(evento){
    Swal.fire({
        title: "Gracias por suscribirte a nuestro boletín.",
        icon: "success",
        timer: "5000",
        toast: true,
        position: "bottom-end" 
    })
})