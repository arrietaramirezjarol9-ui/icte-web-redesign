// Abrir menú
document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".menu").classList.add("active");
});

// Cerrar menú
document.querySelector(".close-btn").addEventListener("click", function () {
    document.querySelector(".menu").classList.remove("active");
});
