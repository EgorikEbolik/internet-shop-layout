function changeConditions() {
    document.getElementById("conditions").addEventListener("click", function () {
        document.querySelector(".first_adventege_title").innerHTML = "Tasty Day предоставляет хорошие условия труда";
        document.querySelector(".first_adventege_desc").innerHTML = "Наша компания гарантирует высокую заработную плату и гибкий график для наших сотрудников.";
        document.querySelector(".adventege_img").src = "imgs/work.png";
    })
}

function chagneFood() {
    btn = document.getElementById("healty_food");

    btn.addEventListener("click", function () {
        document.querySelector(".first_adventege_title").innerHTML = "Полезная еда от проверенных поставщиков";
        document.querySelector(".first_adventege_desc").innerHTML = "Tasty Day предоставляет качественные и полезные продукты питания, которые изготавливаются только из проверенного сырья.";
        document.querySelector(".adventege_img").src = "imgs/healthy_food.png";
    })
}

function chagneDelivery() {
    btn = document.getElementById("quick_delivery");

    btn.addEventListener("click", function () {
        document.querySelector(".first_adventege_title").innerHTML = "Быстрая доставка";
        document.querySelector(".first_adventege_desc").innerHTML = "Вы будете получать доставки каждый день в указанное Вами время.";
        document.querySelector(".adventege_img").src = "imgs/delivery.png";
    })
}

changeConditions()
chagneFood()
chagneDelivery()
