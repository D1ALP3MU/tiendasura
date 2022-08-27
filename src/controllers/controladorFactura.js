//llamando al carrito de la memoria localStorage
let carrito = JSON.parse(sessionStorage.getItem("carrito"))
console.log(carrito)


let factura = document.getElementById("factura")

//COMPRUEBO EL ESTADO DEL CARRITO DE COMPRAS
if (carrito == null) {
    let fila = document.createElement("div")
    fila.classList.add("row", "my-5", "justify-content-center")

    let columna = document.createElement("div")
    columna.classList.add("col-12", "col-md-4")
    
    let imagen = document.createElement("img")
    imagen.classList.add("img-fluid", "w-100")
    imagen.src = "../../assets/img/carritoVacio.png"

    let mensaje = document.createElement("h3")
    mensaje.classList.add("text-danger", "text-center")
    mensaje.textContent = "Tu carrito está vacío"

    let botonTienda = document.createElement("a")
    botonTienda.classList.add("btn", "btn-success", "fw-bold", "mt-4")
    botonTienda.textContent = "Regresar a la tienda"

    botonTienda.addEventListener("click", function(){
        console.log("Estoy regresando a la tienda")
        botonTienda.href = "http://127.0.0.1:5500/src/views/tienda.html"
    })

    columna.appendChild(imagen)
    columna.appendChild(mensaje)
    columna.appendChild(botonTienda)
    fila.appendChild(columna)
    factura.appendChild(fila)
    
} else {
    
    //Recorro el carrito
    carrito.forEach(function (producto) {

        let fila = document.createElement("div")
        fila.classList.add("row", "my-5", "justify-content-center", "shadow", "p-3")
        
        let columna1 = document.createElement("div")
        columna1.classList.add("col-12", "col-md-5")

        let columna2 = document.createElement("div")
        columna2.classList.add("col-12", "col-md-3", "border-end", "align-self-center")

        let columna3 = document.createElement("div")
        columna3.textContent = "Subtotal"
        columna3.classList.add("col-12", "col-md-3", "align-self-center", "fw-bold", "text-center", "fs-2")

        let foto = document.createElement("img")
        foto.classList.add("img-fluid", "w-100")
        foto.src = producto.foto

        let nombre = document.createElement("h3")
        nombre.classList.add("text-center", "text-muted")
        nombre.textContent = producto.nombre

        let precio = document.createElement("h4")
        precio.classList.add("text-center", "mt-5")
        precio.textContent = "Costo unidad: " + producto.precio

        let cantidad = document.createElement("h4")
        cantidad.classList.add("text-center")
        cantidad.textContent = "Cantidad: " + producto.cantidad

        let subtotal = document.createElement("h3")
        subtotal.classList.add("fw-bold", "text-center", "bg-dark", "text-light")

        let subtotalCalculado = producto.precio.split("$")[1]
        console.log(subtotalCalculado)

        subtotal.textContent = "$" + subtotalCalculado * producto.cantidad

        columna1.appendChild(foto)
        columna2.appendChild(nombre)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)
        columna3.appendChild(subtotal)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        fila.appendChild(columna3)
        factura.appendChild(fila)


    })
}