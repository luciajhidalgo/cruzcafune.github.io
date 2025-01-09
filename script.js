const navbar = document.querySelector("#navbar");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const enlaces = document.querySelectorAll(".menu a");

if (navbar && abrir && cerrar) {
    abrir.addEventListener("click", () => {
        navbar.classList.add("visible");
        console.log("Menú abierto"); 
    });

    cerrar.addEventListener("click", () => {
        navbar.classList.remove("visible");
        console.log("Menú cerrado"); 
    });

    
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", () => {
            navbar.classList.remove("visible"); 
            console.log("Menú cerrado tras hacer clic en enlace"); 
        });
    });
    
} else {
    console.error("No se encontraron todos los elementos necesarios para el menú hamburguesa.");
}
