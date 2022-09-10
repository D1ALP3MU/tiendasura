import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"


let botonSalir = document.getElementById("botonSalir")

botonSalir.addEventListener("click", function(evento){
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Gracias, hasta pronto',
            showConfirmButton: false,
            timer: 2000
        })
        window.location.href = "../views/tienda.html"
    })
    .catch((error) => {
        // An error happened.
    });

})