const slides = document.querySelectorAll('slide');
const next = querySelector('#next');
const prev = querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    //Get current/active image
    const   active = document.querySelector ('.active');
    //Remove current/active image
    active.classList.remove('active');
}