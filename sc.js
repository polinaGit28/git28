let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide(index){
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide(){
    currentIndex = ( currentIndex + 1) % slides.length;
    showSlide(currentIndex)
}

function prevSlide(){
    currentIndex = ( currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex)
}

showSlide(currentIndex);   