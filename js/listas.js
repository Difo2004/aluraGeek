
export function crearListas (contenido, cuerpo, imagen) {

    contenido.forEach(elemento => {

        const elementos_lista = document.createElement("li");
        elementos_lista.classList.add("seccion__elementos");

        let caja_imagen = imagen.modo != "normal" ? `${imagen.datos}'>` : `'>${imagen.datos}`;

        elementos_lista.innerHTML = `
        <div class='seccion__elementos-imagen ${caja_imagen}</div>
        <p class="seccion__elementos-nombre">${elemento.nombre}</p>
        <p class="seccion__elementos-precio">${elemento.precio}</p>
        <p class="seccion__elementos-info">
            <a href="#" class="seccion__enlace">Ver producto</a>
        </p>`;

        cuerpo.appendChild(elementos_lista);
    });
}
