// ======================
// JavaScript del sitio Valle Esmeralda
// ======================

console.log("main.js cargado");

// --- Código de excursiones (solo se ejecuta si los botones existen en la página actual) ---
const boton1 = document.getElementById("btn-exc-1");
const info1 = document.getElementById("excursion-1");

if (boton1 && info1) {
  boton1.addEventListener("click", () => {
    info1.classList.toggle("oculto");

    if (info1.classList.contains("oculto")) {
      boton1.textContent = "Ver más";
    } else {
      boton1.textContent = "Ocultar";
    }
  });
}

const boton2 = document.getElementById("btn-exc-2");
const info2 = document.getElementById("excursion-2");

if (boton2 && info2) {
  boton2.addEventListener("click", () => {
    info2.classList.toggle("oculto");

    if (info2.classList.contains("oculto")) {
      boton2.textContent = "Ver más";
    } else {
      boton2.textContent = "Ocultar";
    }
  });
}

const boton3 = document.getElementById("btn-exc-3");
const info3 = document.getElementById("excursion-3");

if (boton3 && info3) {
  boton3.addEventListener("click", () => {
    info3.classList.toggle("oculto");

    if (info3.classList.contains("oculto")) {
      boton3.textContent = "Ver más";
    } else {
      boton3.textContent = "Ocultar";
    }
  });
}

// --- Botón de modo claro y oscuro ---
const boton = document.getElementById("btn-modo");

function aplicarTema(tema) {
  if (tema === "oscuro") {
    document.body.classList.add("oscuro");
    if (boton) {
      boton.innerHTML = "☀️ Modo claro";
      boton.classList.remove("btn-outline-light");
      boton.classList.add("btn-warning");
    }
  } else {
    document.body.classList.remove("oscuro");
    if (boton) {
      boton.innerHTML = "🌙 Modo oscuro";
      boton.classList.remove("btn-warning");
      boton.classList.add("btn-outline-light");
    }
  }
}

const temaGuardado = localStorage.getItem("tema-valle-esmeralda");
aplicarTema(temaGuardado);

if (boton) {
  boton.addEventListener("click", () => {
    const esOscuro = document.body.classList.contains("oscuro");
    const nuevoTema = esOscuro ? "claro" : "oscuro";

    aplicarTema(nuevoTema);
    localStorage.setItem("tema-valle-esmeralda", nuevoTema);
  });
}
