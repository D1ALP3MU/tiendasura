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
let popularidad = document.getElementById("popularidadInfo")
popularidad.textContent = producto.popularidad

// var item = {input1: 'input1value', input2: 'input2value'};
// localStorage.setItem(itemIndex, JSON.stringify(item));

// for(var i=0;i<localStorage.length; i++) {
//     var key = localStorage.key(i);
//     var item = JSON.parse(localStorage.getItem(key));
// }


// for (let index = 0; index < 5; index++) {
//     if (i < popularidad) {
//         document.getElementById(i + 1).style.color="warning"
//     } else {
//         document.getElementById(i + 1).style.color="dark"
//     }    
// }
// let contador = 0
// function calificar(item) {
//     console.log(item)
//     contador = item.getElementById(id[0])
//     let name = item.getElementById(id).substring(1)
//     for (let index = 0; index < 5; index++) {
//         if (index < contador) {
//             document.getElementById((index + 1) + name).style.color="text-warning"
//         } else {
//             document.getElementById((index + 1) + name).style.color="text-dark"
//         }
        
//     }
    // popularidad = item.id[0] //capturar el primer caracter
    // let name = item.id.substring(1)//captura todo menos el primer caracter ejm: 4-->estrella
    // for (let index = 0; index < 5; index++) {
    //     if (i < popularidad) {
    //         document.getElementById((i + 1) + name).style.color="warning"
    //     } else {
    //         document.getElementById((i + 1) + name).style.color="dark"
    //     }    
    // }
// }
