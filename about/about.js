//NAVBAR
const navBar = document.querySelector('.navBar');
const navLink = document.querySelector('.navLink');

navBar.addEventListener('click', () =>{
    navLink.classList.toggle('active')
})

//MAIN

const staff = document.querySelector('.staff');
const theresoView = document.querySelector('#theresoView');
const theresoP = document.querySelector('.theresoP');
const tomView = document.querySelector('#tomView');
const tomP = document.querySelector('.tomP');
const christinaView = document.querySelector('#christinaView');
const christinaP = document.querySelector('.christinaP');
const erikP = document.querySelector('.erikP');
const erikView = document.querySelector('#erikView');
const kateP = document.querySelector('.kateP');
const kateView = document.querySelector('#kateView')
const ninaP = document.querySelector('.ninaP');
const ninaView = document.querySelector('#ninaView');


function clickeddThereso() {

    if ( theresoP.style.display === "none") {
        theresoP.style.display = "block";
        console.log('clicked')
    } else {
        theresoP.style.display = "none";
    }
  }
function clickedTom(){
    if ( tomP.style.display === "none") {
        tomP.style.display = "block";
    } else {
        tomP.style.display = "none";
    }
  }
function clickedChristina(){
    if ( christinaP.style.display === "none") {
        christinaP.style.display = "block";
    } else {
        christinaP.style.display = "none";
    }
  }
function clickeddErik(){
    if ( erikP.style.display === "none") {
        erikP.style.display = "block";
    } else {
        erikP.style.display = "none";
    }
  }
function clickeddKate(){
    if ( kateP.style.display === "none") {
       kateP.style.display = "block";
    } else {
       kateP.style.display = "none";
    }
  }

function clickeddNina(){
    if ( ninaP.style.display === "none") {
       ninaP.style.display = "block";
    } else {
       ninaP.style.display = "none";
    }
  }





// Event Listener 
theresoView.addEventListener('click',clickeddThereso);
tomView.addEventListener('click', clickedTom);
christinaView.addEventListener('click', clickedChristina);
erikView.addEventListener('click', clickeddErik);
kateView.addEventListener('click', clickeddKate);
ninaView.addEventListener('click',clickeddNina);

