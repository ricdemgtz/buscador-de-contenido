# Descripción del Proyecto - Buscador de Películas y Series

Este repositorio contiene el código fuente y los archivos necesarios para implementar un buscador de películas y series. Este proyecto fue desarrollado como parte de un desafío que busca integrar y aplicar los conocimientos adquiridos en eventos, manejo de archivos JSON, y manipulación de elementos HTML con JavaScript.

## Características Principales

- **Selector de Fuente de Datos:** El usuario puede elegir entre buscar en el archivo JSON de películas o series mediante un elemento `<select>`.

- **Input de Búsqueda:** Se proporciona un campo de entrada (`<input>`) donde el usuario puede escribir el título o parte del título que desea buscar.

- **Botón de Búsqueda:** Un botón dedicado a iniciar la búsqueda, que estará atento al evento de clic (`click`) para ejecutar la operación de búsqueda.

- **Lista de Resultados:** Se ha preparado una etiqueta `<ul>` en el HTML para mostrar los resultados de la búsqueda. Cada resultado estará representado por una etiqueta `<li>`.

- **Validación de Input:** El campo de entrada solo permite letras, la tecla espacio y la tecla borrar, evitando la entrada de números y otros caracteres. Esto se logra mediante el manejo del evento `keydown`.

- **Eventos Personalizados:** Se ha implementado un evento personalizado que se dispara al cambiar la fuente de datos, mostrando un mensaje informativo mediante un alert.

- **Búsqueda de Coincidencias:** La función de búsqueda recorre el archivo JSON seleccionado y verifica si el nombre coincide, ya sea total o parcialmente, con la entrada del usuario. Se utiliza `startsWith()` para verificar coincidencias parciales y `toUpperCase()` para evitar problemas con mayúsculas y minúsculas.

- **Presentación de Resultados:** Los resultados se presentan en una lista (`<ul>`) con elementos `<li>`, cada uno conteniendo un nombre y su correspondiente sinopsis en una etiqueta `<p>`. Los eventos `mouseover` y `mouseout` se utilizan para mostrar y ocultar la sinopsis al posicionar el mouse sobre el título.

## Instrucciones para Ejecutar

1. Clona este repositorio en tu máquina local.
2. Descarga los archivos JSON de películas y series proporcionados en los materiales adjuntos y guárdalos en la misma carpeta que el código fuente.
3. Abre el archivo HTML en un navegador web.

**Consejos:**
- Consulta el cuestionario proporcionado junto con el desafío para obtener una guía paso a paso.
- ¡Disfruta del proceso de programación y enfrenta este desafío con alegría! Recuerda que estás demostrando tu capacidad para programar de manera autónoma.
