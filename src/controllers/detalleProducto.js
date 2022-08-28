console.log("Hola estoy detallando la compra")

//Llamar a la memoria
let producto = JSON.parse(sessionStorage.getItem("producto"))
console.log(producto)
console.log(producto.foto)

let carrito
if (JSON.parse(sessionStorage.getItem("carrito")) != null) {
    carrito = JSON.parse(sessionStorage.getItem("carrito"))
    let pildora = document.getElementById("pildora")
    pildora.textContent = carrito.length
} else {
    carrito = []
}

let carritoMemoria = JSON.parse(sessionStorage.getItem("carrito"))
console.log(carritoMemoria)

//Referenciar la imagen del producto
let foto = document.getElementById("imagenInfo")
foto.src = producto.foto

let nombre = document.getElementById("nombreInfo")
nombre.textContent = producto.nombre
nombre.classList.add("fw-bold")

let precio = document.getElementById("precioInfo")
precio.textContent = producto.precio
precio.classList.add("fw-bold")

let descripcion = document.getElementById("descripcionInfo")
descripcion.classList.add("mt-3")
descripcion.textContent = producto.descripcion

//Mostramos la popularidad real
let popularidad = document.getElementById("popularidadInfo")
popularidad.textContent = producto.popularidad;
popularidad.classList.add("fw-bold")

//Redondeamos la popularidad para mostrar en las estrellas
let valorProducto = Math.round(producto.popularidad)

//Recorremos el valor de la popularidad y pintamos las estrellas
for (let index = 1; index <= valorProducto; index++) {
    if (index == 1) {
        let estrella1 = document.getElementById('1estrella')
        estrella1.classList.add("text-warning")
    }else if(index == 2){
        let estrella2 = document.getElementById('2estrella')
        estrella2.classList.add("text-warning")
    }else if(index == 3){
        let estrella3 = document.getElementById('3estrella')
        estrella3.classList.add("text-warning")
    }else if(index == 4){
        let estrella4 = document.getElementById('4estrella')
        estrella4.classList.add("text-warning")
    }else{
        let estrella5 = document.getElementById('5estrella')
        estrella5.classList.add("text-warning")
    }
}

let pildora = document.getElementById("pildora")
console.log(pildora.textContent)

//Escucho el click en el boton añadir al carrito
let botonCarrito = document.getElementById("botonAgregarCarrito")
botonCarrito.addEventListener("click", function(evento) {
    
    let cantidad = document.getElementById("cantidadProducto")
    cantidad = cantidad.value

    //Agregamos la cantidad al objeto producto
    producto.cantidad = cantidad
    console.log(producto)

    //Agregamos el producto al carrito de compras
    carrito.push(producto)
    console.log(carrito)

    //Agregando el carrito a la memoria
    sessionStorage.setItem("carrito", JSON.stringify(carrito))

    //Pintando la pildora con la cantidad de productos
    let cantidadCarrito = carrito.length
    pildora.textContent = cantidadCarrito
})



