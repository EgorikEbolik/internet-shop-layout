
let rightBtn = document.querySelector(".slider_right_btn");
let slides = document.querySelectorAll(".slider_element");

let i = 0;

rightBtn.addEventListener("click", function () {
    ++i

    if (i >= slides.length) {
        slides[i - 1].classList.remove("slider_block");
        i = 0;
        slides[i].classList.add("slider_block");
        
    }

    else {
        slides[i - 1].classList.remove("slider_block");
        slides[i].classList.add("slider_block")
    }
})