const menuBtn = document.getElementById("menuBtn");
const navList = document.querySelector(".Header-menuNav");

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("Active");
    if (navList.classList.contains("Active")) {
        menuBtn.textContent = "close";
    } else {
        menuBtn.textContent = "menu";
    }
});

