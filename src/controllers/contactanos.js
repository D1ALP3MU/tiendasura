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

let botonContactanos = document.getElementById("btnContactanos")
botonContactanos.addEventListener("click", function(evento){
    Swal.fire({
        title: 'En breve nos pondremos en contacto contigo.',
        imageUrl: "https://www.etiquetascarabobo.com/wp-content/uploads/2012/06/Estamos-para-servirte.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        timer: "5000",
        toast: false,
        showClass: {
        popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
        }
    })
})
