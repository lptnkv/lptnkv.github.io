document.querySelector(".dropdown .dropbtn").addEventListener("click", () => {
    window.location = "spaceships.html";
});

// Вперед/назад
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Текущее изображение
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

let slideIndex = 1;
if (document.querySelector(".slider")){
    showSlides(slideIndex);
}
