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


const bloques = document.querySelectorAll(".Bloque-content");
const Title = document.querySelectorAll(".Bloque-title");

//Cuando CLICK en h2,
  //QUITAR la clase activo de todos los bloques
  //Vamos a añadir la clase activo al bloque con la posición del title

  Title.forEach( ( cadaTitle , i )=>{
    cadaTitle.addEventListener("click", ()=> {

        bloques.forEach( (cadaBloque , i ) => {
            cadaBloque.classList.remove("active");
        });
            bloques[i].classList.add("active");
    });
});


