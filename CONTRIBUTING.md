# Cómo contribuir
---

* [Formas de contribuir](#formas-de-contribuir)
    - [Avisar de un error](#avisar-de-un-error)
    - [Proponer un cambio](#proponer-un-cambio)
* [Cómo realizar cambios a la wiki](#cómo-realizar-cambios-a-la-wiki)
    - [Configuración del entorno](#configuración-del-entorno)
    - [Compilación de la wiki](#compilación-de-la-wiki)
    - [Generar PDF](#generar-pdf)

## Formas de contribuir

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

Normalmente se van a querer modificar los archivos contenidos dentro de `src/CapituloX`. El archivo `GLOSSARY.md` es generado automáticamente con el contenido de `glosario.json`, por lo que si se quiere modificar el glosario se debe editar este último archivo. Por su parte, `SUMMARY.md` también se genera automáticamente, buscando los títulos h1 y h2 (`#` y `##`) dentro de los archivos de las carpetas `CapituloX`, cada vez que se compila o prueba la página.

### Configuración del entorno

**Los siguientes pasos NO son necesarios para proponer cambios en los apuntes**, solo son para visualizar los cambios localmente antes de publicarlos.

Para probar los cambios localmente se deben tener instalados Node.js y npm. Para distribuciones basadas en Debian (Ubuntu, Linux Mint, etc.) se puede hacer de la siguiente forma:

```bash
sudo apt update
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install nodejs npm
```

Una vez instalados, se deben instalar las dependencias ejecutando:

```bash
npm install
```

### Compilación de la wiki

Para visualizar los cambios realizados se puede probar localmente utilizando el comando:

```bash
make test
```

Si se desean generar los archivos para la página web, se puede ejecutar:
> Este paso no es necesario para aplicar cambios a la página oficial ya que se realiza automáticamente a través de Github Actions.

```bash
make build
```

Los archivos se generarán en la carpeta `_book/`.

### Generar PDF

Si se quiere generar un PDF, primero hay que instalar _Calibre_:

```bash
sudo -v && wget -nv -O- https://download.calibre-ebook.com/linux-installer.sh | sudo sh /dev/stdin
```

Con las dependencias instaladas se puede generar el PDF con el comando:
> Nuevamente, este paso no es necesario para actualizar la página oficial.

```bash
make pdf
```

El PDF se encontrará en la carpeta `src/_build/pdf/`.