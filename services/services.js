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

//NAVBAR
const navBar = document.querySelector('.navBar');
const navLink = document.querySelector('.navLink');

navBar.addEventListener('click', () =>{
    navLink.classList.toggle('active')
})
