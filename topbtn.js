let btn = document.querySelector(".topBtn");

function scrollFunction() {
    window.onscroll = function () {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            btn.style.display = "block";
        }
        else {
            btn.style.display = "none";
        }
    }
}

function topFunction() {
    btn.addEventListener("click", function () {
        document.documentElement.scrollTop = 0;
    })
}

scrollFunction()
topFunction()