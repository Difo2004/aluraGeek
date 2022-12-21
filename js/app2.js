import { elementos } from "./elementos.js";
import { crearListas } from "./listas.js";

const seccion = document.querySelector(".totalidad");

let apartados = Object.values(elementos);
apartados.forEach(contenido => {

    const imagen = {
        modo: "normal",
        datos: 
        `<div class="opciones_imagen">
            <i class="fa-sharp fa-solid fa-trash ajustar ajustar--borrar"></i>
            <i class="fa-solid fa-pen ajustar ajustar--editar"></i>
        </div>`
    }

    crearListas(contenido, seccion.children[1], imagen);
});