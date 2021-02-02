let slides = document.querySelectorAll(".pic-slider"),
    prev = document.querySelector(".slider-prev"),
    next = document.querySelector(".slider-next"),
    slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(item => item.style.display = "none");

    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

prev.addEventListener("click", () => {
    plusSlides(-1);
});
next.addEventListener("click", () => {
    plusSlides(1);
});