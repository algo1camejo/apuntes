# Apuntes de Algoritmos y programación I (75.40)
* [Cómo contribuir](#cómo-contribuir)
    - [Avisar de un error](#avisar-de-un-error)
    - [Proponer un cambio](#proponer-un-cambio)
* [Cómo realizar cambios a la wiki](#cómo-realizar-cambios-a-la-wiki)
    - [Configuración del entorno](#configuración-del-entorno)
    - [Compilación de la wiki](#compilación-de-la-wiki)
    - [Generar PDF](#generar-pdf)

## Cómo contribuir

Si creés que el apunte tiene un error, podés avisarnos para que lo revisemos o, si te animás, corregirlo vos mismo y enviarnos los cambios que propongas.

### Avisar de un error

1. En la pestaña [Issues](https://github.com/algo1camejo/apuntes/issues) del repositorio de Github crear uno nuevo.
2. Seleccionar el template "Error en el apunte" y completar los datos que se piden. Ser lo más claro posible.
3. Poner un título descriptivo y enviar. En cuanto se pueda se revisará y se tratará de corregir.

### Proponer un cambio

1. Clonar el repositorio.
2. Crear una nueva rama con el nombre `correccion/tu-correccion`, siendo `tu-correccion` algún nombre que describa el cambio que vas a hacer.
3. Realizar los cambios que se deseen \(ver [Cómo realizar cambios a la wiki](cómo-realizar-cambios-a-la-wiki)\).
4. Cuando los cambios estén listos, crear un Pull Request y esperar la devolución de un miembro del equipo.

En este [enlace](https://github.com/firstcontributions/first-contributions/blob/master/translations/README.es.md) podés encontrar un instructivo más detallado sobre cómo realizar este proceso.

## Cómo realizar cambios a la wiki

### Configuración del entorno

Se recomienda crear un entorno virtual para aislar los paquetes externos. Para esto, si aún no se hizo, instalar virtualenv y crear el entorno. Para distribuciones basadas en Debian (Ubuntu, Linux Mint, etc.) se puede hacer de la siguiente forma:
```bash
sudo apt update
sudo apt install python3-venv
python3 -m venv .venv
```
Cuando ya se tiene el entorno creado hay que activarlo con:
```bash
source .venv/bin/activate
```
Y luego instalar y actualizar las dependencias ejecutando:
```bash
pip install --upgrade pip
pip install -r requirements.txt
```

### Compilación de la wiki

Para visualizar los cambios realizados se debe compilar la wiki, para hacerlo simplemente ejecutar:
```bash
make html
```
Una vez compilado, el archivo de inicio se encuentra en `_build/html/index.html` y se puede abrir con el navegador.

### Generar PDF

Si se quiere generar un PDF, primero hay que asegurarse de tener todas las dependencias instaladas:
```bash
sudo apt update
sudo apt install texlive-latex-recommended texlive-fonts-recommended \
    tex-gyre texlive-latex-extra texlive-lang-cyrillic cm-super cm-super-minimal \
    texlive-lang-greek texlive-xetex texlive-luatex fonts-freefont-otf texlive-lang-spanish
```
Con las dependencias instaladas se puede generar el PDF con el comando:
```bash
make latexpdf
```
El PDF se encontrará en la carpeta `_build/latex`