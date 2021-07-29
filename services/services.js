const slider = document.querySelector('.slider');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

let sectionIndex = 0;

left.addEventListener('click', function(){
    sectionIndex = (sectionIndex > 0)? sectionIndex -1 : 0;
    slider.style.transform='translate('+ (sectionIndex) * -33.33 +'%)'
})
right.addEventListener('click', function(){
    sectionIndex = (sectionIndex < 2) ? sectionIndex +1 : 2;
    slider.style.transform='translate('+ (sectionIndex) * -33.33 +'%)'
})

const mq = window.matchMedia("(max-width: 427px)");

if(mq.matches){
const ul = document.querySelector('.navLink');
const button = document.querySelector('.headerButton');
const menuBar = document.querySelector('.navBar');


function showNav(e){
    if(e.currentTarget === menuBar){
    if(ul.style.display != "block" & button.style.display !="block") {
        ul.style.display = "block";
        button.style.display ="block";
        console.log(e.currentTarget)
    } else {
        ul.style.display = "none";
        button.style.display ="none";
    }
}

}


menuBar.addEventListener('click', showNav)
}