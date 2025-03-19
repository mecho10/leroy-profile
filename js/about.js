

let slideIndex = 1;
showSlides(slideIndex);

// 自動輪播
setInterval(function() {
    plusSlides(1);
}, 5000); // 5秒換一次

// 下一個/上一個
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// 縮略圖
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}