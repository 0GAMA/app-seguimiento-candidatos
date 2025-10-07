# Sistema de Seguimiento de Candidatos

## Introducción

Este proyecto es una aplicación web desarrollada para gestionar el seguimiento de candidatos en procesos de selección dentro de una empresa.

### ¿Qué es?

Es un sistema frontend que permite visualizar, registrar y actualizar la información de candidatos, sus etapas en el proceso de selección y otros datos relevantes.

### ¿Para qué se usa?

Se utiliza para centralizar y organizar el proceso de reclutamiento, facilitando el acceso a la información de los candidatos y mejorando la eficiencia del equipo de recursos humanos.

---

## Stack de Desarrollo

Tecnologías y lenguajes utilizados:

- **React** (v18+): Framework principal para la interfaz de usuario
- **Vite**: Herramienta de desarrollo rápida para React
- **HTML5**: Estructura base de la aplicación
- **JavaScript (ES6+)**: Lógica de programación
- **CSS Modules / Tailwind**: Estilos y diseño responsivo
- **JSON Server**: API falsa para simular peticiones backend
- **Node.js**: Entorno de ejecución para herramientas de desarrollo

---

## Estructura del Proyecto

La aplicación está organizada en las siguientes carpetas principales:


src/ ├── api/           # Servicios y llamadas a la API (JSON Server) 
     ├── components/    # Componentes reutilizables (botones, inputs, etc.) 
     ├── pages/         # Vistas principales (Dashboard, DetalleCandidato, etc.) 
     ├── routes/        # Definición de rutas con React Router 
     ├── helps/         # Funciones utilitarias y helpers 
     ├── assets/        # Imágenes, íconos y recursos estáticos 
     ├── App.jsx        # Componente raíz 
     └── main.jsx       # Punto de entrada de la aplicación


## Instalación

Sigue estos pasos para instalar y configurar el proyecto en tu entorno local:

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/seguimiento-candidatos.git

Navegar al directorio del proyecto:

cd seguimiento-candidatos

Instalar las dependencias:

npm install

Configurar la API falsa con JSON Server:

Crear un archivo db.json en la raíz con datos simulados.

Ejecutar JSON Server:

npx json-server --watch db.json --port 3001

Iniciar el servidor de desarrollo:

npm run dev

## Colaboración (Pull Request)

Si deseas colaborar en el proyecto, sigue estos pasos:

Contacta al autor por correo electrónico para coordinar la colaboración.

Haz un fork del repositorio y crea una nueva rama para tus cambios:

git checkout -b feature/nueva-funcionalidad

Realiza tus modificaciones y haz commit:

git commit -m "Agrega nueva funcionalidad"

Sube tus cambios y crea un Pull Request desde GitHub.

En el Pull Request, describe claramente los cambios realizados y su propósito.

Participa en la discusión y ajustes necesarios hasta que se apruebe tu contribución.

## Contacto

Email: trucutrucu@gmail.com

LinkedIn: linkedin.com/in/tintantun

Twitter: @tintantun
