let productos = [

    {
        nombre: "PORTATIL XPG ADATA CI7 GAMER XENIA 15",
        precio:13065000                                                         ,
        popularidad:5,
        fotos: ["https://firebasestorage.googleapis.com/v0/b/tiendasuradp.appspot.com/o/producto1.1.jpg?alt=media&token=9f517c45-20b3-4cf0-b193-5ff09ed110c3", "https://firebasestorage.googleapis.com/v0/b/tiendasuradp.appspot.com/o/producto1.jpg?alt=media&token=631a606f-f4d2-4395-99d6-299c9fde73ba"],
        descripcion: "Código: 1875 Fabricante: XPG Modelo: -- XPG Xenia 15 -- Ver especificaciones=====> PORTATIL XPG Xenia 15 Core i7 11800H Memoria Ram 32GB DDR4 3.200 MHzSSD 1TB Pcie Nvme S70 4ta Generación Pantalla 15.6″ IPS QHD 165Hz Tarjeta Grafica GeForce RTX 3070 8GB DDR6 PORTÁTIL PARA GAMING XPG XENIA 15 KC Procesador Intel® Core i7 -11800H de 11.ª generación y GPU NVIDIA® GeForce RTX 3070 Windows 10 Home Advanced Actualización gratuita a Windows 11 cuando esté disponible Colaboración de diseño de XPG e Intel Solución de interfaz térmica de metal líquido Premiada unidad de estado sólido PCIe Gen4 de 1 TB preinstalado – XPG GAMMIX S70 Memoria XPG de alto rendimiento DDR4-3200 MHz seleccionada a mano de 32 GB (2×16 GB) Chasis ligero de aleación de magnesio de 1,94 kg Teclado silencioso óptico mecánico por tecla RGB Pantalla IPS de alta calidad QHD (2560×1440) 165 Hz Engaste estrecho de 4,9 mm con una relación pantalla-cuerpo del 85 % Conectividad de alta velocidad con Thunderbolt y Wi-Fi 6Batería grande de 94 Wh, hasta 7 horas de duración de la batería. Cámara HD IR con soporte para Windows Hello Prueba gratuita de Xbox Game Pass de 1 mes"
    },
    {
        nombre: "PORTATIL ACER",
        precio:0,
        popularidad:0,
        fotos: ["https://firebasestorage.googleapis.com/v0/b/tiendasuradp.appspot.com/o/producto2.jpg?alt=media&token=959de8cb-bb8b-4477-8a1b-2f4df563c746"],
        descripcion: ""
    }

]

let fila = document.getElementById("fila")

//RECORRIENDO EL ARREGLO
productos.forEach(function(producto){
    
    //Creando un div desde JS
    let columna = document.createElement("div")
    columna.classList.add("col")

    //Creando una tarjeta
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card", "shadow", "text-center", "h-100", "p5")

    //Creando una imagen
    let imagen = document.createElement("img")
    imagen.classList.add("img-fluid", "w-100")
    imagen.src = producto.fotos[0]

    //DETECTANDO EVENTO DEL MOUSE
    imagen.addEventListener("mouseover", function(){
        imagen.src = producto.fotos[1]
    })
    imagen.addEventListener("mouseleave", function(){
        imagen.src = producto.fotos[0]
    })
    //Crear nombre
    let nombre = document.createElement("h3")
    nombre.classList.add("fw-bold")
    nombre.textContent = producto.nombre
    
    //Crear precio
    let precio = document.createElement("h2")
    precio.classList.add("fw-bold")
    precio.textContent = ("$" + producto.precio)

    //Crear popularidad
    let popularidad = document.createElement("h2")
    popularidad.classList.add("fw-bold")
    popularidad.textContent = (producto.popularidad)
    
    //Creando la descripción
    let descripcion = document.createElement("p")
    descripcion.classList.add("text-danger", "d-none")
    descripcion.textContent = producto.descripcion
  
    //Definiendo padres e hijos
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(popularidad)
    tarjeta.appendChild(descripcion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})