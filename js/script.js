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

//Cuando CLICK en Title,
//QUITAR la clase activo de todos los bloques
//Vamos a añadir la clase activo al bloque con la posición del title

Title.forEach((cadaTitle, i) => {
  cadaTitle.addEventListener("click", () => {
    bloques.forEach((cadaBloque) =>
      cadaBloque.classList.remove("active"));

    bloques[i].classList.add("active");
  });
});


//header blur visible al hacer scroll, if not is hidden
const header = document.querySelector(".Header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 5) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// Buscar layoutproject x correspondiente

const parametro = new URLSearchParams(window.location.search);
const projectId = parametro.get("project");

const projects = {
  "1": {
    title: "Mesa Scheint",
    intro: "Diseño de mobiliario organico",
    images: ["./sources/images/scheint-1.png",
      "./sources/images/scheint-2.png",
      "./sources/images/scheint-3.png",
      "./sources/images/scheint-4.png",
    ],

    info: "Este proyecto se inspira en el diseño organico"
  },

  "2": {
    title: "LIA",
    intro: "Identidad Visual - Branding para centro de cultura contemporánea",
    images: ["./sources/images/scheint-.png",
      "./sources/images/scheint-2.png",
      "./sources/images/scheint-3.png",
      "./sources/images/scheint-4.png",
    ],

    info: "Este proyecto se inspira en el diseño organico"
   },

   "3": {
    title: " NEA",
    intro: "Identidad Visual - Branding para centro de cultura contemporánea",
    images: ["./sources/images/scheint-.png",
      "./sources/images/nea-featuredimage.webp",
      "./sources/images/scheint-3.png",
      "./sources/images/scheint-4.png",
    ],

    info: "Este proyecto se inspira en el diseño organico"
   },
  };

  const project = projects[projectId];

  if (project) {
    document.getElementById("projectTitle").textContent = project.title;
    document.getElementById("projectIntro").textContent = project.intro;
    document.getElementById("projectInfo").textContent= project.info;

    //Carrusel de imagenes de proyectos

    const carousel =document.getElementById("projectCarousel");

    project.images.forEach(src =>{
      const img =document.createElement("img");
      img.src =src;
      img.alt = project.title;
      img.className= "carousel-img";
      carousel.appendChild (img);

    })



   

  } else {
    document.getElementById("projectTitle").textContent = "Proyecto no encontrado";
    document.getElementById("projectIntro").textContent = "";
    document.getElementById("projectInfo").textContent = "Texto no encontrado";

  }








