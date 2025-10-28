const inputFecha = document.getElementById("fecha");
const alimento = document.getElementById("alimento-upload");
const previewAlimento = document.getElementById("alimento-preview");
const ticket = document.getElementById("ticket-upload");
const previewTicket = document.getElementById("ticket-preview");
const botonEnviar = document.getElementById("btnEnviar");
const importe = document.getElementById("importe");
const imagenIniciarSesion = document.getElementsByClassName("sesion");
const mensajeP = document.getElementById("mensajeTecnico");
const codTecnico = localStorage.getItem("codTecnico");
const nombreTecnico = localStorage.getItem("nombreTecnico");
const delegacion = document.getElementById("areageografica");

function setHorayFecha() {
    if(inputFecha){
        const date = new Date();
        const año  = date.getFullYear();
        const mes  = String(date.getMonth() + 1).padStart(2, "0");
        const dia  = String(date.getDate()).padStart(2, "0");
        const hora = String(date.getHours()).padStart(2, "0");
        const min  = String(date.getMinutes()).padStart(2, "0");
        inputFecha.value = `${año}-${mes}-${dia}T${hora}:${min}`;
    }
}

function fotoAlimento() {
    if (alimento) {
        alimento.addEventListener("change", function(e) {
            const file = e.target.files[0];
            if (file) {
                if (file.size > 5 * 1024 * 1024) {
                    Swal.fire('Error', 'La imagen es demasiado grande. Máximo 5MB.', 'error');
                    alimento.value = '';
                    return;
                }
                const reader = new FileReader();
                reader.onload = function(ev) {
                    previewAlimento.innerHTML = `<img src="${ev.target.result}" width="150">`;
                };
                reader.onerror = function() {
                    Swal.fire('Error', 'No se pudo cargar la imagen', 'error');
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

function fotoTicket(){
    if (ticket) {
        ticket.addEventListener("change", function(e) {
            const file = e.target.files[0];
            if (file) {
                if (file.size > 5 * 1024 * 1024) {
                    Swal.fire('Error', 'La imagen es demasiado grande. Máximo 5MB.', 'error');
                    ticket.value = '';
                    return;
                }
                const reader = new FileReader();
                reader.onload = function(ev) {
                    previewTicket.innerHTML = `<img src="${ev.target.result}" width="150">`;
                };
                reader.onerror = function() {
                    Swal.fire('Error', 'No se pudo cargar la imagen', 'error');
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

function iniciarSesion() {
  Swal.fire({
    title: 'Iniciar sesión',
    text: 'Introduce el código del técnico',
    input: 'text',
    inputPlaceholder: 'Código del técnico',
    showCancelButton: true,
    confirmButtonText: 'Ingresar',
    cancelButtonText: 'Cancelar',
    inputValidator: (value) => {
      if (!value) {
        return 'Debes ingresar un código válido';
      }
      return null; 
    },
    allowOutsideClick: false
  }).then((result) => {
    if (result.isConfirmed) {
      const codTecnico = result.value.trim();
      localStorage.setItem("codTecnico", codTecnico);
      getAllTecnicos(codTecnico);
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      toastr.warning("Inicio de sesión cancelado");
    }
  });
}

function cambiarTectoTecnico(tecnicoEncontrado){
    if (tecnicoEncontrado && tecnicoEncontrado.codTecnico) {
        mensajeP.textContent = tecnicoEncontrado.codTecnico;
        mensajeP.style.display = "inline";
    } 
}

function comprobar(e) {
    e.preventDefault();

    const codTecnico = localStorage.getItem("codTecnico");
    const nombreTecnico = localStorage.getItem("nombreTecnico");
    const delegacionValue = delegacion.value;

    let errores = [];

    if (!importe.value || parseFloat(importe.value) <= 0) {
        errores.push("El importe es obligatorio y debe ser mayor que 0.");
    }

    if (!inputFecha.value) {
        errores.push("La fecha es obligatoria.");
    }

    if (!codTecnico) {
        errores.push("Debes iniciar sesión con un código de técnico.");
    }

    if (!nombreTecnico) {
        errores.push("No se encontró el nombre del técnico. Inicia sesión nuevamente.");
    }

    if (!delegacionValue) {
        errores.push("Debes seleccionar una delegación.");
    }

    if (!alimento.files || alimento.files.length === 0) {
        errores.push("Debes subir una foto del alimento.");
    }

    if (!ticket.files || ticket.files.length === 0) {
        errores.push("Debes subir una foto del ticket.");
    }

    if (errores.length > 0) {
       Swal.fire({
        icon: 'error',
        title: '¡Ups! Se encontraron errores',
        html: `
            <p class="swal-texto">Por favor revisa los siguientes puntos antes de continuar:</p>
            <ul class="swal-lista">
            ${errores.map(err => `<li>${err}</li>`).join('')}
            </ul>
        `,
        confirmButtonText: 'Entendido',
        customClass: {
            popup: 'swal-popup',
            confirmButton: 'swal-btn-confirm'
        }
        });
        return; 
    }

     Swal.fire({
        title: '¿Quieres enviar estos datos?',
        text: 'Se guardarán en la base de datos.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, enviar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
    }).then((result) => {
        if (result.isConfirmed) {
            enviar(
                codTecnico,
                nombreTecnico,
                importe.value,
                delegacionValue,
                inputFecha.value,
                alimento.files[0],
                ticket.files[0]
            );
            limpiar();
            setHorayFecha();
        } else if (result.isDismissed) {
            console.log("El usuario canceló el envío");
            return;
        }
    });
}

function limpiar() {
    importe.value = "";
    inputFecha.value = "";
    alimento.value = "";
    ticket.value = "";
    previewAlimento.innerHTML = "";
    previewTicket.innerHTML = "";
}

window.addEventListener("DOMContentLoaded", () => {
    setHorayFecha();
    fotoAlimento();
    fotoTicket();

    if (botonEnviar) {
        botonEnviar.addEventListener("click", comprobar); 
    }
});