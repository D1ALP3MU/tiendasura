let etiquetaBoton = document.getElementById("boton")

//PASOS PARA DETECTAR EVENTOS 
etiquetaBoton.addEventListener("click", function(){
    console.log("Estoy haciendo clic")
    let nombre = document.getElementById("nombre").value
    let saludo = document.getElementById("saludo")
    saludo.textContent = "Hola " + nombre + ", cómo estás?"
    
})