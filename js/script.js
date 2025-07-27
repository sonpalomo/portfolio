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
    background: ["url(./images/scheint-1.webp)"],
    info: `

                <div class="Bloque"> 
                  
                   <h3 class="Bloque-title">Inspiración <h3>
                   <p style="font-weight:300; ">Basada en el diseño orgánico (u organicismo) y en el diseño paramétrico. </p> 
                   <p style="font-weight:300; ">El mueble adopta carácterísticas de
                   ambos y se concibe como una pieza simple, bella y con formas orgánicas. </p> 
                </div>

                 <div class="Bloque"> 
                   <h3 class="Bloque-title">Técnicas<h3>
                   
                   <p style="font-weight:300; "> 
                  El proceso de <strong>diseño y modelación</strong> de la figura se se realizó a través del software de <strong>Rhinoceros-3D.</strong>  </p> 
                   <p style="font-weight:300;"> 
                  Para la materialización de este objeto digital en un mueble funcional se utiliza la técnica de corte láser mediante software CNC.</p> 
                </div>

                 <div class="Bloque"> 
                   <h3 class="Bloque-title">Materiales<h3>
                   <p style="font-weight:300;">El producto final se compone unicamente de madera mdf. Un material muy versátil por sus características: económico, duradero y con fibras recicladas lo que le hace también respetuoso con el medio ambiente.  </p> 
                </div>

                
                `
  },


  "2": {
    title: "NEA",
    intro: "Diseño Gráfico + Diseño Web",
    background: ["url(./images/home-nea.webp)",
    ],

    info: `
    
                <div class="Bloque"> 
                   <h3 class="Bloque-title">Identidad visual <h3>
                   <p style="font-weight:300; font-size:1.2rem"> COLORES  </p> 
                  
                </div>

                 <div class="Bloque"> 
                   <h3 class="Bloque-title">Softwares <h3>
                   <p style="font-weight:300; font-size:1.2rem"> Prototipado web con Figma previo a presentación final en Wordpress </p> 
                </div>

                 <div class="Bloque"> 
                   <h3 class="Bloque-title">Titulo <h3>
                   <p style="font-weight:300; font-size:1.2rem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nemo unde suscipit beatae officiis aspernatur sint vero, reiciendis, eaque corporis placeat non sit adipisci facilis. Est, quasi. Perferendis, enim sint!  </p> 
                </div>

                
                `
  },

  "3": {
    title: "Blume Light",
    intro: "Diseño de mobiliario + CNC",
    background: ["url(./images/blume-1.webp)",
    ],

    info: `
    
                   <div class="Bloque"> 
                  
                   <h3 class="Bloque-title">Inspiración <h3>
                   <p style="font-weight:300; ">Basada en el diseño orgánico (u organicismo) y en el diseño paramétrico. </p> 
                   <p style="font-weight:300; ">El mueble adopta carácterísticas de
                   ambos y se concibe como una pieza simple, bella y con formas orgánicas. </p> 
                </div>

                 <div class="Bloque"> 
                   <h3 class="Bloque-title">Técnicas<h3>
                   
                   <p style="font-weight:300; "> 
                  El proceso de <strong>diseño y modelación</strong> de la figura se se realizó a través del software de <strong>Rhinoceros-3D.</strong>  </p> 
                   <p style="font-weight:300;"> 
                  Para la materialización de este objeto digital en un mueble funcional se utiliza la técnica de corte láser mediante software CNC.</p> 
                </div>

                 <div class="Bloque"> 
                   <h3 class="Bloque-title">Materiales<h3>
                   <p style="font-weight:300;">El producto final se compone de madera mdf + pie metálico de acero forjado. Un material muy versátil por sus características: económico, duradero y con fibras recicladas lo que le hace también respetuoso con el medio ambiente.  </p> 
                </div>

                `
  },



};

const images = {
  "1": {
    image: [
      "./images/scheint-1.webp",
      "./images/scheint-2.webp",
      "./images/scheint-3.webp",
      // "./images/dimension-1.webp",
      // "./images/dimension-2.webp",
    ]
  },

  "2": {
    image: [
      "./images/home-nea.webp",
      "./images/nea-2.webp",
      "./images/nea-3.webp",
      "./images/nea-4.webp"
    ]
  },

  "3": {
    image: [
      "./images/blume-1.webp",
      "./images/blume-2.webp",
      "./images/blume-3.webp",
      "./images/blume-4.webp",
      "./images/blume-5.webp",
    ]
  },
};



const project = projects[projectId];

if (project) {
  document.getElementById("projectTitle").textContent = project.title;
  document.getElementById("projectIntro").textContent = project.intro;
  document.getElementById("projectInfo").innerHTML = project.info;



  // document.getElementById("projectFeatured").style.backgroundImage= project.background [0];

  const featured = document.getElementById("projectFeatured");
  featured.style.backgroundImage = project.background[0];
  featured.style.backgroundSize = "cover";
  featured.style.backgroundRepeat = "no-repeat";
  featured.style.backgroundPosition = "center";
  featured.style.width = "100%";
  featured.style.minHeight = "100vh";

  // Carrusel automático 
  const imagesContainer = document.getElementById("projectImages");
  const projectImages = images[projectId]?.image;

  if (projectImages && projectImages.length > 0) {
    // Insertar imágenes
    projectImages.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `${project.title} - Imagen ${i + 1}`;
      img.className = i === 0 ? "active" : "";
      imagesContainer.appendChild(img);
    });

    // Cambiar imagen active cada 3 segundos
    let currentIndex = 0;
    const imgs = imagesContainer.querySelectorAll("img");

    setInterval(() => {
      imgs[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % imgs.length;
      imgs[currentIndex].classList.add("active");
    }, 2500);
  } else {
    imagesContainer.textContent = "No hay imágenes disponibles.";
  }

} else {
  document.getElementById("projectTitle").textContent = "Proyecto no encontrado";
  document.getElementById("projectIntro").textContent = "Texto no encontrado";
  document.getElementById("projectInfo").textContent = "Texto no encontrado";

}








