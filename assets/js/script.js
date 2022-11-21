//Vanilla carousel slide
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons carousel slide
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter slide
let  counter = 1;
let size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';

//Event listeners
nextBtn = addEventListener('click',()=>{
    if (counter >= carouselImages.lenght -1) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
});

prevBtn = addEventListener('click',()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length -2;
    carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
}
if (carouselImages[counter].id === 'firstClone')  {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length -counter;
    carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
}
});

window.addEventListener('resize', () => {
    carouselSlide.style.transition = "none";
    size = carouselImages[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});