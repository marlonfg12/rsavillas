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
const btnShop = document.querySelectorAll('.btn-info');
const formEco = document.querySelector('.formulario.eco');
const btnFormEco = document.querySelector('.btn-formulaio-eco');

function activeCard() {
  card.forEach((item) => item.classList.remove('open'));
  this.classList.add('open');

  const closeBtn = this.querySelector('.close');
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el evento se propague a otros elementos
    this.classList.remove('open');
  });
}



function shareCardInfo() {
  const cardNombre = this.closest('.card').querySelector('.card__nombre').textContent;
  const cardPrice = this.closest('.card').querySelector('.card__precio').textContent;

  const whatsappText = `Hola, me puedes dar mas información sobre: ${cardNombre}-${cardPrice}`;
  const whatsappLink = `https://api.whatsapp.com/send/?phone=3508382046&text=${encodeURIComponent(whatsappText)}&type=phone_number&app_absent=0`;

  window.open(whatsappLink, '_blank');
}



function shareFormInfo() {
  const nombre = formEco.querySelector('.Nombre').value;
  const producto = formEco.querySelector('.Producto').value;
  const desc = formEco.querySelector('.desc-textarea').value;
  const whatsappText = `Hola me llamo ${nombre}, estoy interesado en ${producto}, Descripción: ${desc}`;
  const whatsappLink = `https://api.whatsapp.com/send/?phone=3508382046&text=${encodeURIComponent(whatsappText)}&type=phone_number&app_absent=0`;

  window.open(whatsappLink, '_blank');
}

btnFormEco.addEventListener('click', shareFormInfo);

card.forEach((item) =>
  item.addEventListener('click', activeCard));

btnShop.forEach((item) =>
  item.addEventListener('click', shareCardInfo));


// Carrito de compras

const btnCart = document.querySelector('.icon-car');
const CartProduct = document.querySelector('.carrito');

btnCart.onclick = function(){
  btnCart.classList.toggle('active');
  CartProduct.classList.toggle('active');
}


/** Dropdown **/

let toggle = document.querySelector('.navegacion__enlace--desp');
let menu_sobre = document.querySelector('#sobre');

toggle.onclick = function(){
    menu_sobre.classList.toggle('active');
}