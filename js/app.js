import { elementos } from "./elementos.js";
import { crearListas } from "./listas.js";

const secciones = document.querySelectorAll(".seccion");
secciones.forEach(seccion => {

    let titulo = seccion.children[0].firstElementChild.textContent.toLowerCase().replace(" ", "-");

    const contenido = elementos[titulo];

    const imagen = {
        modo: "editar",
        datos: `elementos_${titulo}`
    }

    crearListas(contenido, seccion.children[1], imagen);
});