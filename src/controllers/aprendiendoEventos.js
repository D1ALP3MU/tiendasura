let etiquetaBoton = document.getElementById("boton")

//PASOS PARA DETECTAR EVENTOS 
etiquetaBoton.addEventListener("click", function(){
    console.log("Estoy haciendo click")
    let titulo = document.getElementById("titulo")
    titulo.textContent = "Hola, soy Esteban"
    let mensaje = document.getElementById("mensaje")
    mensaje.textContent = "Mentiras van a ganar"
    mensaje.classList.add("text-danger")
    let imagen = document.getElementById("imagen")
    imagen.src = "https://firebasestorage.googleapis.com/v0/b/tiendasuradp.appspot.com/o/fotodario.jpg?alt=media&token=2899f01d-27ed-437e-ae7b-5f750615861a"
})

