// ======================
// JavaScript del sitio Valle Esmeralda
// ======================

console.log("main.js cargado");

const boton1 = document.getElementById("btn-exc-1");
const info1 = document.getElementById("excursion-1");

boton1.addEventListener("click", () => {
    info1.classList.toggle("oculto");

    if (info1.classList.contains("oculto")) {
        boton1.textContent = "Ver más";
    } else {
        boton1.textContent = "Ocultar";
    }
});

const boton2 = document.getElementById("btn-exc-2");
const info2 = document.getElementById("excursion-2");

boton2.addEventListener("click", () => {
    info2.classList.toggle("oculto");

    if (info2.classList.contains("oculto")) {
        boton2.textContent = "Ver más";
    } else {
        boton2.textContent = "Ocultar";
    }
});

const boton3 = document.getElementById("btn-exc-3");
const info3 = document.getElementById("excursion-3");   

boton3.addEventListener("click", () => {
    info3.classList.toggle("oculto");

    if (info3.classList.contains("oculto")) {
        boton3.textContent = "Ver más";
    } else {
        boton3.textContent = "Ocultar";
    }
});