//llamando al carrito de la memoria localStorage
let carrito = JSON.parse(localStorage.getItem("carrito"))
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
    mensaje.textContent = "Compre algo, no sea tacaño.."

    columna.appendChild(imagen)
    columna.appendChild(mensaje)
    fila.appendChild(columna)
    factura.appendChild(fila)
    
} else {
    
    //Recorro el carrito
    carrito.forEach(function (producto) {

        let fila = document.createElement("div")
        fila.classList.add("row", "my-5", "justify-content-center")
        
        let columna1 = document.createElement("div")
        columna1.classList.add("col-12", "col-md-5")

        let columna2 = document.createElement("div")
        columna2.classList.add("col-12", "col-md-3")

        let columna3 = document.createElement("div")
        columna3.classList.add("col-12", "col-md-3")

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

        let subtotal = document.createElement("h2")
        subtotal.classList.add("fw-bold")

        console.log(producto.precio)
        console.log(producto.cantidad)
        console.log(producto.cantidad * producto.cantidad)
        let banana = producto.precio.split("$")[1]
        console.log(banana)

        subtotal.textContent = banana * producto.cantidad
        console.log(subtotal)



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