# Apuntes de Algoritmos y programación I (75.40)

* [Cómo contribuir](#cómo-contribuir)
    - [Avisar de un error](#avisar-de-un-error)
    - [Proponer un cambio](#proponer-un-cambio)
* [Cómo realizar cambios a la wiki](#cómo-realizar-cambios-a-la-wiki)
    - [Instalación del entorno](#instalación-del-entorno)
    - [Servidor de desarrollo local](#servidor-de-desarrollo-local)

## Cómo contribuir

Si creés que el apunte tiene un error, podés avisarnos para que lo revisemos o, si te animás, corregirlo vos mismo y enviarnos los cambios que propongas.

### Avisar de un error

1. En la pestaña [Issues](https://github.com/algo1camejo/apuntes/issues) del repositorio de Github crear uno nuevo.
2. Seleccionar el template "Error en el apunte" y completar los datos que se piden. Ser lo más claro posible.
3. Poner un título descriptivo y enviar. En cuanto se pueda se revisará y se tratará de corregir.

### Proponer un cambio

1. Clonar el repositorio.
2. Crear una nueva rama con el nombre `correccion/tu-correccion`, siendo `tu-correccion` algún nombre que describa el cambio que vas a hacer.
3. Realizar los cambios que se deseen \(ver [Cómo realizar cambios a la wiki](#cómo-realizar-cambios-a-la-wiki)\).
4. Cuando los cambios estén listos, crear un Pull Request y esperar la devolución de un miembro del equipo.

En este [enlace](https://github.com/firstcontributions/first-contributions/blob/master/translations/README.es.md) podés encontrar un instructivo más detallado sobre cómo realizar este proceso.

## Cómo realizar cambios a la wiki

Los archivos de la documentación se encuentran en `/docs/` organizados en carpetas por capítulos.

### Instalación del entorno

Al descargar el repo por primera vez (e incluso se recomienda después de un _pull_), es necesario instalar las dependencias. Para hacer esto es requisito contar con [Node.js](https://nodejs.dev/) instalado.

```bash
npm install
```

### Servidor de desarrollo local

Para visualizar los cambios realizados, correr el siguiente comando para iniciar un servidor de desarrollo local. La mayoría de los cambios se verán reflejados sin necesidad de reiniciar el servidor.

```bash
npm run start
```
