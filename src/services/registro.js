import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"

let botonRegistro = document.getElementById("botonRegistro")

botonRegistro.addEventListener("click", function(evento){

    evento.preventDefault()

    let email = document.getElementById("InputEmail1").value
    let password = document.getElementById("password").value
    console.log(email, password)

    const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        alert("Registro exitoso")
    })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert("Upss fallamos" + errorMessage)
  });

})