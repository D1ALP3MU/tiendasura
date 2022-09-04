import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"

let botonIngresar = document.getElementById("botonIngresar")

botonIngresar.addEventListener("click", function(evento){

    evento.preventDefault()
    let userName = document.getElementById("inputName").value
    let userPassword = document.getElementById("inputPassword").value

    let formularioLogin = document.getElementById("fomularioLogin")
    

    if (userName == "" || userPassword == "") {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Por favor llena los campos',
            showConfirmButton: false,
            toast: true,
            timer: 2000
        })
    }
    else {
        console.log("Ingresaste")
        Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Ingresaste datos',
                showConfirmButton: false,
                toast: true,
                timer: 2000
        })
    }
})

// const auth = getAuth();
// signInWithEmailAndPassword(auth, userName, userPassword)
// .then((userCredential) => {
// // Signed in
// const user = userCredential.user;
// // ...

// })
// .catch((error) => {
// const errorCode = error.code;
// const errorMessage = error.message;
// });