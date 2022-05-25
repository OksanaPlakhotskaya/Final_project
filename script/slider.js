
/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);
let slideIndex2 = 1;
showSlides2(slideIndex2);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}
function plusSlide2() {
    showSlides2(slideIndex2 += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}
function minusSlide2() {
    showSlides2(slideIndex2 -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
};

function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("item2");
    let dots2 = document.getElementsByClassName("slider-dots_item2");
    if (n > slides2.length) {
      slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides2.length
    }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideIndex2 - 1].style.display = "block";
    dots2[slideIndex2 - 1].className += " active";
}