# Prueba Técnica - FrontEnd - Promarketing Chile 
Ing. Pedro A. Alarcon Atencio <br>
pedroangel126@gmail.com

# Información General
Esta es una pequeña aplicación web diseñada para dar fácil acceso al listado de juegos disponibles y la opcion de visualizar un Demo.

# Instalación
Clonar el repositorio: 
```sh
$ git clone https://github.com/pedroangel/promarketing.git
```
Ejecuta el comando para descargar todas las librarías necesarias.
```sh
$ npm install
```
Es importante señalar que la aplicación esta creada usando el framework VueJS por lo que es necesario tener instalados, de manera global en el equipo donde se desea correr el proyecto, los componentes básicos como el core Vue y el VueCLI. Documentación <a href="https://es.vuejs.org/v2/guide/installation.html" target="_blank">Vue</a> y <a href="https://cli.vuejs.org/" target="_blank">VueCLI</a>

## Detalle de dependencias especificas.
Utilicé un <a href="https://www.creative-tim.com/product/vue-material-dashboard" target="_blank">Template</a> de VueJS y Material Design que he usado para hacer pruebas y cursos por mi cuenta, y aprovechar los componentes y estilos que este ofrece. 
Este template ya posee sus dependencias internas que ofrecen componentes como la tarjeta usada para presentar los datos de los juegos, las animaciones y efectos visuales, el manejo de grillas y el diseño responsive. Por esto es recomendable utilizar el comando anterior.

Una vez instaladas las dependencias, es necesario ejecutar el comando:
```sh
$ npm run serve
```
Para ejecutar el servidor en modo desarrolladores.

O si prefieren, ejecutar el comando:
```sh
$ npm run build
```
Para crear una build de producción y al terminar el proceso ejecutar:
```sh
$ npm start
```
Para ver la versión productiva compilada.

# Build de Producción Hosteado.
La rama master de este repositorio posee un pipeline configurado en el servicio de Heroku.

<a href="https://promarketing-test.herokuapp.com/games" target="_blank">Promarketing-Test</a>

Esta es la información básica del proceso y las herramientas usadas en el desarrollo del servicio requerido para la Prueba Técnica.

Agradezco la oportunidad y el reto que represento este requerimiento.

De ser necesario, por favor indicarme algún otro tipo de información que deba ser aclarada de mi parte. 