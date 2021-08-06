//NAVBAR
const navBar = document.querySelector('.navBar');
const navLink = document.querySelector('.navLink');

navBar.addEventListener('click', () =>{
    navLink.classList.toggle('active')
})
