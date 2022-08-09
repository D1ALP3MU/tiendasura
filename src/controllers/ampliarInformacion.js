let contenedorProductos = document.getElementById("fila") 

//Escucho click en la fila
let informacionProducto = {}
contenedorProductos.addEventListener("click", function(evento){
    if(evento.target.classList.contains("img-fluid")){
        informacionProducto.nombre = (evento.target.parentElement.querySelector("h3").textContent)
        informacionProducto.precio = (evento.target.parentElement.querySelector("h2").textContent)
        informacionProducto.popularidad = (evento.target.parentElement.querySelector("h4").textContent)
        informacionProducto.descripcion = (evento.target.parentElement.querySelector("p").textContent)

        //Guardando un archivo en memoria
        //siempre que vaya a guardar en la memoria un objeto o un arreglo debo poner la siguiente instrucción
        localStorage.setItem(JSON.stringify("producto", informacionProducto))

        window.location.href = "./ampliarInfo.html"
        
    }
})
