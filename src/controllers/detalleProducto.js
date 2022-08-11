console.log("Hola estoy detallando la compra")

//Llamar a la memoria
let producto = JSON.parse(localStorage.getItem("producto"))
console.log(producto)

//Referenciar la imagen del producto
let foto = document.getElementById("imagenInfo")
foto.src = producto.foto
let nombre = document.getElementById("nombreInfo")
nombre.textContent = producto.nombre
let precio = document.getElementById("precioInfo")
precio.textContent = producto.precio
let descripcion = document.getElementById("descripcionInfo")
descripcion.textContent = producto.descripcion