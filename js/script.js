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



const menuIcon = document.querySelector('.menu-icon');
const menuItems = document.querySelector('.menu');

function toggleMenu() {
  menuIcon.classList.toggle('open');
  menuItems.classList.toggle('open');
}

menuIcon.addEventListener('click', toggleMenu);



//------------------ Overlay -----------------

const card = document.querySelectorAll('.card');
const open = document.querySelectorAll('.btn');

function activeCard() {
  card.forEach((item) => item.classList.remove('open'));
  this.classList.add('open');

  const closeBtn = this.querySelector('.close');
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el evento se propague a otros elementos
    this.classList.remove('open');
  });
}

card.forEach((item)=> 
item.addEventListener('click', activeCard));


