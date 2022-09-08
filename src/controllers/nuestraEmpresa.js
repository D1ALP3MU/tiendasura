let producto = JSON.parse(sessionStorage.getItem("producto"))

//llamando al carrito de la memoria localStorage
let carrito = JSON.parse(sessionStorage.getItem("carrito"))
let totalCompra = document.getElementById("totalCompra")

if (JSON.parse(sessionStorage.getItem("carrito")) != null) {
    carrito = JSON.parse(sessionStorage.getItem("carrito"))
    let pildora = document.getElementById("pildora")
    pildora.textContent = carrito.length
}

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