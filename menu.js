let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

 /****************************************************************************/


var form = document.getElementById('form');

function funcaoAlerta() {
  if (form.checkValidity()) {
    alert("Email enviado com sucesso!");
  }
}

 /****************************************************************************/

 window.sr = ScrollReveal({ reset: true });

 sr.reveal('section', {
  duration: 2000,
  distance: '60px'
 })

 sr.reveal('div.contato', {
  duration: 2000,
  distance: '60px'
 })