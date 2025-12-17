📱 Proyecto Móvil: Registro de Gastos de Comida

Proyecto-movil es una aplicación móvil diseñada para que el personal técnico registre de forma rápida, sencilla y segura los gastos asociados a sus comidas durante las jornadas laborales.
La app permite capturar información clave del gasto junto con evidencia fotográfica, facilitando su validación y gestión posterior.

🎯 Objetivo del Proyecto

Optimizar el proceso de registro de gastos de comida, asegurando que:

Cada gasto quede correctamente asociado a un técnico.

La información registrada sea clara y completa.

Exista evidencia visual tanto de los alimentos como del ticket o factura.

✨ Funcionalidades Principales

La aplicación permite registrar:

Identificación del técnico
Asociación automática del gasto al técnico autenticado.

Datos del gasto
Importe, fecha y otros detalles relevantes.

Evidencia fotográfica

Imagen de los alimentos/comida.

Imagen del ticket o factura.

Carga automática de imágenes en la nube
Las imágenes se almacenan de forma organizada en Cloudinary.

🧾 Vista Principal del Formulario

Pantalla principal donde el técnico introduce toda la información necesaria para registrar el gasto.

<p align="center"> <img width="400" alt="Vista principal del formulario" src="https://github.com/user-attachments/assets/710009e1-0394-49e5-b7be-8158dbda2062" /> </p>
🚀 Guía de Uso: Registro de un Gasto

A continuación se describen los pasos necesarios para registrar un nuevo gasto correctamente.

1️⃣ Inicio de Sesión (Identificación del Técnico)

Antes de enviar cualquier dato, el técnico debe identificarse mediante su código personal.

Pulsa el botón de inicio de sesión, ubicado en la esquina superior derecha:

<p align="center"> <img width="400" alt="Botón de inicio de sesión" src="https://github.com/user-attachments/assets/8b5ca47d-facd-4204-be73-58b2c3d7402e" /> </p>

Introduce tu código de técnico y pulsa Aceptar:

<p align="center"> <img width="400" alt="Ingreso de código del técnico" src="https://github.com/user-attachments/assets/96e6ac7d-31f4-4126-8db3-1b556098d578" /> </p>

Una vez autenticado, el código se cargará automáticamente en el campo “Código del técnico” del formulario:

<p align="center"> <img width="400" alt="Código del técnico cargado" src="https://github.com/user-attachments/assets/9d9ffaa4-afa8-4496-9d49-0474d9c3d637" /> </p>
2️⃣ Completar el Formulario

Rellena todos los campos obligatorios del formulario, incluyendo:

Importe del gasto

Imágenes de los alimentos

Imagen del ticket o factura

<p align="center"> <img width="400" alt="Formulario completo" src="https://github.com/user-attachments/assets/b36ec1fb-0b79-401a-8407-472f5694f539" /> </p>
3️⃣ Envío del Registro

Una vez completado el formulario, pulsa el botón “Enviar”:

<p align="center"> <img width="400" alt="Botón enviar" src="https://github.com/user-attachments/assets/e6051837-9c05-4469-aead-5d2b7f674d00" /> </p>

Aparecerá una alerta de confirmación para verificar el envío de los datos:

<p align="center"> <img width="400" alt="Confirmación de envío" src="https://github.com/user-attachments/assets/a86a8fbb-e310-4ef8-b0d0-6f789de54453" /> </p>

Tras confirmar, se mostrará un mensaje indicando que el registro se ha enviado correctamente:

<p align="center"> <img width="400" alt="Mensaje de éxito" src="https://github.com/user-attachments/assets/cbef816a-460d-44d0-9d02-31ec11cdcc04" /> </p>
☁️ Almacenamiento en la Nube (Cloudinary)

Una vez enviado el formulario:

Se crea automáticamente una carpeta en Cloudinary para el registro.

Las imágenes subidas se almacenan de forma ordenada y segura.

<p align="center"> <img height="400" alt="Carpeta en Cloudinary" src="https://github.com/user-attachments/assets/26e2ce6a-8691-46d5-9e49-66a7befc3348" /> </p>

Dentro de la carpeta se pueden visualizar las imágenes correspondientes al gasto registrado:

<p align="center"> <img width="400" alt="Imágenes almacenadas en Cloudinary" src="https://github.com/user-attachments/assets/a786e9d3-ded6-4c27-92de-933038fbd662" /> </p>
