var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const burger = document.querySelector(".burger");

burger.addEventListener("click", burgerMenu);

function burgerMenu() {
    burger.classList.toggle("open");
    document.querySelector(".menu").classList.toggle("open");
}
