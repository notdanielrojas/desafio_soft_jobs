# Soft Jobs Backend Challenge

## Descripción

Este proyecto es una aplicación backend desarrollada para la empresa **Soft Jobs**, cuyo objetivo es proporcionar una plataforma para ayudar a desarrolladores juniors a encontrar trabajos cortos y sencillos para acumular experiencia laboral. El servidor maneja la autenticación y autorización de usuarios utilizando JWT.

## Requisitos

- Registro de nuevos usuarios.
- Autenticación de usuarios con JWT.
- Autorización de usuarios con JWT.
- Manejo de errores y encriptación de contraseñas.
- Modularización del código.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- **controllers/**: Contiene los controladores para manejar la lógica de negocio.

  - `handleCredentials.js`: Controlador para el manejo de credenciales y generación de tokens JWT.
  - `handleUser.js`: Controlador para el manejo de registros de usuarios y obtención de datos de usuario.

- **models/**: Contiene los modelos para la interacción con la base de datos.

  - `database.model.js`: Configuración y conexión con la base de datos PostgreSQL.
  - `login.model.js`: Modelos para la verificación de credenciales de usuario.
  - `user.model.js`: Modelos para el registro y obtención de datos de usuarios.

- **middlewares/**: Contiene middlewares para la verificación y manejo de solicitudes.

  - `authMiddleware.js`: Middleware para verificar la existencia y validez del token JWT.
  - `logger.middleware.js`: Middleware para registrar las consultas y errores en el servidor.
  - `validate.middleware.js`: Middleware para validar los datos de entrada en las rutas de registro y autentificación de usuarios.

- **routes/**: Contiene las rutas del servidor.

  - `login.routes.js`: Rutas para el manejo de autenticación de usuarios.
  - `user.routes.js`: Rutas para el manejo de registros y obtención de datos de usuarios.

- **utils/**: Contiene utilidades y funciones auxiliares.

  - `codes.utils.js`: Funciones para manejar códigos de éxito y error.
  - `token.utils.js`: Funciones para la verificación y decodificación de tokens JWT.

- **.env**: Archivo de configuración para variables de entorno, incluyendo el secreto para firmar los tokens JWT.

- **index.js**: Archivo principal que configura y arranca el servidor Express.
