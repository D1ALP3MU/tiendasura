//llamando al carrito de la memoria localStorage
let carrito = JSON.parse(sessionStorage.getItem("carrito"))
let totalCompra = document.getElementById("totalCompra")

let factura = document.getElementById("factura")

//COMPRUEBO EL ESTADO DEL CARRITO DE COMPRAS
if (carrito == null) {

    //Poner el total en 0
    totalCompra.textContent = "Total: $0" 
    
    let fila = document.createElement("div")
    fila.classList.add("row", "my-5", "justify-content-center")

    let columna = document.createElement("div")
    columna.classList.add("col-12", "col-md-4")
    
    let imagen = document.createElement("img")
    imagen.classList.add("img-fluid", "w-100")
    imagen.src = "../../assets/img/carritoVacio.png"

    let mensaje = document.createElement("h3")
    mensaje.classList.add("text-secondary", "text-center", "fw-bold")
    mensaje.textContent = "Tu carrito está vacío..."

    let botonTienda = document.createElement("a")
    botonTienda.classList.add("nav", "nav-pointer", "fw-bold", "mt-4", "justify-content-center", "my-5")
    botonTienda.style.cursor = "pointer"
    botonTienda.style.textDecoration = "none"
    botonTienda.textContent = "Regresar a la tienda"

    botonTienda.addEventListener("click", function(){
        window.location.href = "./tienda.html"
    })

    let botonFinalizarCompra = document.getElementById("btnFinalizarCompra")
    botonFinalizarCompra.classList.add("d-none")

    columna.appendChild(imagen)
    columna.appendChild(mensaje)
    columna.appendChild(botonTienda)
    fila.appendChild(columna)
    factura.appendChild(fila)
    
} else {
    //Se crea un arreglo para almacenar los subtotales
    let subTotales = []

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

        subtotal.textContent = "$" + subtotalCalculado * producto.cantidad

        //Se utiliza el método push() para agragar valores al array subtotales
        let acumuladorSubtotal
        acumuladorSubtotal = subtotalCalculado * producto.cantidad
        subTotales.push(parseInt(acumuladorSubtotal))

        console.log(subTotales)

        //Se crea un ciclo (for of) para sumar los valores del array subtotales
        let sumaSubtotales = 0
        for (let i of subTotales) sumaSubtotales += i
        console.log(sumaSubtotales)
        
        totalCompra.textContent =  "$" + sumaSubtotales

        let botonLimpiarCarrito = document.getElementById("botonLimpiar")
        botonLimpiarCarrito.style.cursor = "pointer"
        botonLimpiarCarrito.addEventListener("click", function(evento){
            
            //Limpio el carrito de la memoria
            sessionStorage.removeItem("carrito")

            //Recargar la pagina
            window.location.href = "./resumenCompra.html"

            //Poner el total en 0
            totalCompra.textContent = "Total: $0" 
        })
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

