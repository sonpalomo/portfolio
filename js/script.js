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
//header blur siempre visible en layoutproject.html
const isLayoutProject = document.body.dataset.page === "layoutproject";

if (isLayoutProject) {
  header.classList.add("scrolled");
} else {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 5) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

}


// Buscar layoutproject x correspondiente

const parametro = new URLSearchParams(window.location.search);
const projectId = parametro.get("project");


const projects = {
  "1": {
    title: "Mesa Scheint",
    intro: "Diseño de mobiliario organico",
    background: ["url(../sources/images/scheint-1.png)",
    ],

    info: "Este proyecto se inspira en el diseño organico"
  },

  "2": {
    title: "NEA",
    intro: "Diseño Gráfico + Diseño Web",
    background: ["url(../sources/images/home-nea.webp)",
    ],

    info: "Este proyecto se inspira en el diseño organico"
  },



};

const images = {
  "1": {
    image: [
      "../sources/images/scheint-1.png",
      "../sources/images/scheint-2.png",
      "../sources/images/scheint-3.png"
    ]
  },

  "2": {
    image: [
      "../sources/images/scheint-1.png",
      "../sources/images/scheint-2.png",
      "../sources/images/scheint-3.png"
    ]
  }
};



const project = projects[projectId];

if (project) {
  document.getElementById("projectTitle").textContent = project.title;
  document.getElementById("projectIntro").textContent = project.intro;
  document.getElementById("projectInfo").textContent = project.info;



  // document.getElementById("projectFeatured").style.backgroundImage= project.background [0];

  const featured = document.getElementById("projectFeatured");
  featured.style.backgroundImage = project.background[0];
  featured.style.backgroundSize = "cover";
  featured.style.backgroundRepeat = "no-repeat";
  featured.style.backgroundPosition = "center";

} else {
  document.getElementById("projectTitle").textContent = "Proyecto no encontrado";
  document.getElementById("projectIntro").textContent = "Texto no encontrado";
  document.getElementById("projectInfo").textContent = "Texto no encontrado";

}








