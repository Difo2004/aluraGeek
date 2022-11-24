import { comprobacion } from "./comprobaciones.js";

const inputs = document.querySelectorAll("input");
inputs.forEach(input => {

    input.addEventListener("blur", () => {
        console.log("algo");
    })
});