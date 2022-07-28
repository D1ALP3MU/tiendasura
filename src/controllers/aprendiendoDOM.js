//PASOS PARA CONTROLAR UNA ETIQUETA DESDE JS

//1. CONTROLANDO EL CONTENIDO
let etiquetaTitulo = document.getElementById("titulo")
let etiquetaImagen = document.getElementById("foto")

//1.1 MANIPULANDO EL TEXTO DE LA ETIQUETA(ELEMENTO)
etiquetaTitulo.textContent =  "Jefe usted es como mi padre"

//1.2 MANIPULANDO EL SRC
etiquetaImagen.src =  "https://firebasestorage.googleapis.com/v0/b/tiendasuradp.appspot.com/o/producto2.jpg?alt=media&token=959de8cb-bb8b-4477-8a1b-2f4df563c746"

//2. CONTROLANDO EL DISEÑO
let parrafo = document.getElementById("parrafo")
parrafo.textContent = "Lo que ves y escuchas ahora mismo no es más que un sueño. En este mismo momento estás soñando. Sueñas con el cerebro despierto."

//2.1 AGREGANDO UN ESTILO (CLASS)
//text danger
parrafo.classList.add("text-danger","fs-1", "text-center")
etiquetaImagen.classList.add("d-block", "mx-auto")

//2.2 QUITANDO UN ESTILO ()
parrafo.classList.remove("text-danger")