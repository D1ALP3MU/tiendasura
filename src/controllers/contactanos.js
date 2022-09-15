let producto = JSON.parse(sessionStorage.getItem("producto"))

//llamando al carrito de la memoria localStorage
let carrito = JSON.parse(sessionStorage.getItem("carrito"))

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

let formularioContacto = document.getElementById("formularioContacto")

let nombre = document.getElementById("full_name")
let correo = document.getElementById("street1")

let botonContactanos = document.getElementById("btnContactanos")
botonContactanos.addEventListener("click", function(evento){
    if (nombre.value != "" && correo.value != "") {
        Swal.fire({
            title: 'En breve nos pondremos en contacto contigo.',
            imageUrl: "https://www.etiquetascarabobo.com/wp-content/uploads/2012/06/Estamos-para-servirte.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            timer: "4000",
            toast: false,
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })
    } else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Debes llenar los campos requeridos.',
            toast: true,    
            showConfirmButton: false,
            timer: 2000
        })
    }
    formularioContacto.reset()
})
