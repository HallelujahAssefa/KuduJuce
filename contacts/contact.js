const mq = window.matchMedia("(max-width: 427px)");

if(mq.matches){
const ul = document.querySelector('ul');
const button = document.querySelector('.headerButton');
const menuBar = document.querySelector('.navBar');

function showNav(){
    if(ul.style.display != "block" & button.style.display !="block") {
        ul.style.display = "block";
        button.style.display ="block";
    } else {
        ul.style.display = "none";
        button.style.display ="none";
    }
}

menuBar.addEventListener('click', showNav)
}
