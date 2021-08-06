//NAVBAR
const navBar = document.querySelector('.navBar');
const navLink = document.querySelector('.navLink');

navBar.addEventListener('click', () =>{
    navLink.classList.toggle('active')
})


const slider = document.querySelector('#slider');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const img1Overlay = document.querySelector('.img1Overlay')
const img2Overlay = document.querySelector('.img2Overlay')
const img3Overlay = document.querySelector('.img3Overlay')
// slider
let sectionIndex = 0;

left.addEventListener('click', function(){
    sectionIndex = (sectionIndex > 0)? sectionIndex -1 : 0;
    slider.style.transform='translate('+ (sectionIndex) * -20 +'%)'
})
right.addEventListener('click', function(){
    sectionIndex = (sectionIndex < 4) ? sectionIndex +1 : 4;
    slider.style.transform='translate('+ (sectionIndex) * -20 +'%)'
})
// pictures
function pictureDisplay1(){
if(heading1.style.display="block"){
    heading1.style.display="none";
}

}

function removeDisplay1(){
    if(heading1.style.display = "none"){
        heading1.style.display="block"
       
    }
    console.log('removed')
}

function pictureDisplay2(){
    if(heading2.style.display="block"){
        heading2.style.display="none";
    }
 }

 function removeDisplay2(){
    if(heading2.style.display = "none"){
        heading2.style.display="block"
       
    }
    console.log('removed')
}

 function pictureDisplay3(e){
    if(heading3.style.display="block"){
        heading3.style.display="none";
    }
 }
 function removeDisplay3(){
    if(heading3.style.display = "none"){
        heading3.style.display="block"
       
    }
    console.log('removed')
}

img1Overlay.addEventListener('mouseover', pictureDisplay1)
img1Overlay.addEventListener('mouseout',removeDisplay1)
img2Overlay.addEventListener('mouseover', pictureDisplay2)
img2Overlay.addEventListener('mouseout',removeDisplay2)
img3Overlay.addEventListener('mouseover', pictureDisplay3)
img3Overlay.addEventListener('mouseout',removeDisplay3)


