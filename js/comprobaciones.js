export function valida(input) {

    const tipoDeInput = input.dataset.tipo;

    if (!input.validity.valid) {

      let mensaje = mostrarMensajeDeError(tipoDeInput, input);
      input.setCustomValidity(mensaje);
    }
  }
  
  const tipoDeErrores = [ "valueMissing", "typeMismatch" ];
  
  const mensajesDeError = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío",
    },
    mensaje: {
        valueMissing: "Debe de escribir un mensaje"
    },
    email: {
      valueMissing: "El campo correo no puede estar vacío",
      typeMismatch: "El correo no es válido",
    }
  };
  
  function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
  }