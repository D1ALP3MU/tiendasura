let producto = JSON.parse(sessionStorage.getItem("producto"))

//llamando al carrito de la memoria localStorage
let carrito = JSON.parse(sessionStorage.getItem("carrito"))
let totalCompra = document.getElementById("totalCompra")

if (JSON.parse(sessionStorage.getItem("carrito")) != null) {
    carrito = JSON.parse(sessionStorage.getItem("carrito"))
    let pildora = document.getElementById("pildora")
    pildora.textContent = carrito.length
}

let factura = document.getElementById("factura")

let botonConvertir = document.getElementById("btnConvertir")

let botonSeguirComprando = document.getElementById("btnSeguirComprando")

//COMPRUEBO EL ESTADO DEL CARRITO DE COMPRAS
if (carrito == null) {

    //Poner el total en 0
    totalCompra.textContent = "Total: $0" 
    
    let fila = document.createElement("div")
    fila.classList.add("row", "my-5", "justify-content-center")

    let columna = document.createElement("div")
    columna.classList.add("col-12", "col-md-4")

    let titulo = document.createElement("h4")
    titulo.classList.add("text-center", "fw-bold", "text-secondary")
    titulo.textContent = "Tu compra es 100% segura"
    
    let imagen = document.createElement("img")
    imagen.classList.add("img-fluid", "w-100")
    imagen.src = "../../assets/img/carritoVacio2.png"

    let mensaje = document.createElement("h3")
    mensaje.classList.add("text-dark", "text-center", "fw-bold")
    mensaje.textContent = "Tu carrito está vacío..."
    console.log(mensaje)

    let botonTienda = document.createElement("a")
    botonTienda.classList.add("nav", "nav-pointer", "fw-bold", "mt-4", "justify-content-center", "my-5")
    botonTienda.style.cursor = "pointer"
    botonTienda.style.textDecoration = "none"
    botonTienda.textContent = "Regresar a la tienda"

    botonTienda.addEventListener("click", function(){
        window.location.href = "./tienda.html"
    })
    
    botonSeguirComprando.classList.add("d-none")
    botonSeguirComprando.style.cursor = "pointer"

    let encabezado = document.getElementById("header")
    encabezado.classList.add("d-none")

    let sesionCarousel = document.getElementById("sesionCarousel")
    sesionCarousel.classList.add("d-none")

    let divContainer = document.getElementById("divContainer")
    divContainer.classList.add("d-none")

    let lineaDivisora = document.getElementById("lineaDivisora")
    lineaDivisora.classList.add("d-none")

    columna.appendChild(titulo)
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
        console.log(subtotalCalculado)

        //Convirtiendo el subtotalCalculado de string a entero para calcular el subtotal
        //con el metodo split le quito los puntos de miles y automaticamente se convierte en un arreglo
        let puntosMiles = subtotalCalculado.split(".")

        //concateno el arreglo para poder formar el precio de producto con un ciclo (for of) y calcular el subtotal
        let concatArray = 0 
        for (let k of puntosMiles) concatArray += k

        //calculo el subtotal
        let resultadoSubtotal = concatArray * producto.cantidad
    
        //Se utiliza el método push() para agragar valores al array subtotales 
        subTotales.push(resultadoSubtotal)

        //Se usa la funcion toLocalString para agregar los puntos de separacion miles al subtotal de la compra
        subtotal.textContent = "$" + resultadoSubtotal.toLocaleString('de-DE')

        //Se crea un ciclo (for of) para sumar los valores del array subtotales
        let sumaSubtotales = 0
        for (let i of subTotales) sumaSubtotales += i
        
        //Se usa la funcion toLocalString para agregar los puntos de separacion miles al total de la compra
        totalCompra.textContent = "$" + sumaSubtotales.toLocaleString('de-DE') +" COP";
        
        //Se crea evento para convertir el valor de pesos a dólares y viceversa utilizando el metodo bandera
        let estadoConvertir = 0
        botonConvertir.textContent = "Convertir a USD"
        botonConvertir.style.cursor = "pointer"
        botonConvertir.addEventListener("click", function(evento){
            if (estadoConvertir == 0) {
                let convertir = sumaSubtotales / 4346.91  
                totalCompra.textContent = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(convertir) + "US";
                estadoConvertir = 1
                botonConvertir.textContent = "Convertir a COP"
            } else {
                //Se usa la funcion toLocalString para agregar los puntos de separacion miles al total de la compra
                totalCompra.textContent = "$" + sumaSubtotales.toLocaleString('de-DE') + " COP";
                botonConvertir.textContent = "Convertir a USD"
                estadoConvertir = 0
            }
        })

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