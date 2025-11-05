// src/index.js
import "./styles.css";

let slideIndex = 0;
showSlides(slideIndex);

const dots = document.getElementsByClassName("dot");

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots =  document.getElementsByClassName("dot");
    if (n >= slides.length) { slideIndex = n % slides.length }
    if (n < 0) { slideIndex = slides.length + n }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}

document.getElementsByClassName("prev")[0].addEventListener("click", prevSlide);
document.getElementsByClassName("next")[0].addEventListener("click", nextSlide);

for (let i = 0; i < dots.length; i++) {    
    dots[i].addEventListener("click", () => {
        currentSlide(i);
    });
}

setInterval(nextSlide, 5000);