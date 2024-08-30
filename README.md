# Propuesta de solución para prueba técnica:


### Preparación/Instalación:

#### Local
- Descargar mediante git clone el repositorio 

`git clone https://github.com/jseiglie/prueba-Tec`


- instalar las dependencias con `npm install`


#### Codespaces/Gitpod

- Abrir el repositorio utilizando Codespaces o Gitpod `https://github.com/jseiglie/prueba-Tec`

- Instalar las dependencias con `npm install`


### Visualización del proyecto

El proyecto hace uso de variables de entorno por motivos de seguridad, por lo que será necesario que se cree un archivo ENV y se le pasen los siguientes valores:
REACT_APP_API_KEY=<API KEY> ---> API KEY
REACT_APP_ENDPOINT=<ENDPOINT> ---> endpoint que se va a consumir 

Para iniciar el servidor y acceder a la aplicación: 
`npm start` 
`npm run start` 

### Dependencias

- React
El proyecto se genero a partir de `npx create-react-app@latest`

- Bootstrap 
Se importa Bootstrap mediante CDN, por lo que no se requiere instalación.

- Fontawesome
Se importa fontawesome mediante CDN, por lo que no se requiere instalación.

- react-i18next
Para manejo de las traducciones de la applicación. (Instalación del paquete con `npm install i18next react-i18next`, no necesario si se hace un npm install.)