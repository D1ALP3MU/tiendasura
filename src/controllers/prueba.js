// let etiquetaBoton = document.getElementById("InputPassword1")

// //PASOS PARA DETECTAR EVENTOS 
// etiquetaBoton.addEventListener("click", function(){
//     console.log("Estoy haciendo clic")
//     let nombre = document.getElementById("nombre").value
//     let saludo = document.getElementById("saludo")
//     saludo.textContent = "Hola " + nombre + ", cómo estás?"
    
// })

//Función para mosrtrar contraseña
let checkPassword = document.getElementById("CheckPassword")
checkPassword.addEventListener("click", function(){
    let password = document.getElementById("password")
    if (password.type == "password") {
        password.type = "text"
    } else {
        password.type = "password"
    }
})



// function mostrarContrasenia() {
//     let password = document.getElementById("password")
//     if(password.type == "password"){
//         password.type = "text";
//     }else{
//         password.type = "password";
//     }
// }