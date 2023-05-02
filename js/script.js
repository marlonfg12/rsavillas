function mostrarLogin() {
    document.getElementById("login").style.display = "block";
    document.getElementById("registrar").style.display = "none";

    // Agrega la clase "active" al botón de login
    document.querySelector(".btn-login").classList.add("active");

    // Elimina la clase "active" del botón de registro (si la tiene)
    document.querySelector(".btn-registrar").classList.remove("active");

}


// ------- Para posible funcion de ocultar -------------
//   function ocultarLogin() {
//     document.getElementById("login").style.display = "none";
//}


function mostrarRegistrar() {
    document.getElementById("registrar").style.display = "block";
    document.getElementById("login").style.display = "none";

    // Agrega la clase "active" al botón de registro
    document.querySelector(".btn-registrar").classList.add("active");

    // Elimina la clase "active" del botón de login (si la tiene)
    document.querySelector(".btn-login").classList.remove("active");

}



//   function ocultarRegistrar() {
//     document.getElementById("registrar").style.display = "none";
//   } 