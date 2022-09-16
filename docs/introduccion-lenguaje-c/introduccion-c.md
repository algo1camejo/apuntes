---
sidebar_position: 1
---

# Introducción al lenguaje de programación C

### Características e historia
Un lenguaje de programación es una estructura que con determinada sintáxis y base semántica permite a las personas darle órdenes a la computadora.

El lenguaje de programación C fue forjado en los laboratorios Bell (AT&T) por Dennis M. Ritchie en los años 70. Basado originalmente en el lenguaje de programación B, cuyo mayor defecto era la carencia de tipos de datos predefinidos, Ritchie transformó el lenguaje de programación B en el lenguaje de programación C manteniendo la sintaxis de B y además agregándole tipos de datos predefinidos y otros cambios.

Citando al libro "El lenguaje de programación C" - Kernighan, Ritchie: 
> "C es un lenguaje de programación de propósito general que ofrece como ventajas economía de expresión, control de flujo y estructuras de datos modernos y un rico conjunto de operadores. Además, C no es un lenguaje de “muy alto nivel” ni “grande", y no está especializado en alguna área especial de aplicación. El lenguaje C no está ligado a ningún hardware o sistema en particular y es fácil escribir programas que correrán sin cambios en cualquier máquina que maneje C." 


C es un lenguaje de no muy alto nivel, tipado y compilado.

Se dice que un lenguaje de programación es de "muy  alto nivel" cuando este se acerca más al lenguaje natural humano que al lenguaje binario de las computadoras. 

Un lenguaje es tipado cuando se debe declarar el tipo de dato que va a guardar una variable.

Se dice que un lenguaje es compilado cuando para poder ejecutar un programa, primero hay que compilarlo (convertir el programa escrito en algo que la computadora pueda entender y ejecutar).

### Instalación 

A continuación se explicará cómo instalar los programas necesarios para poder implementar programas en el lenguaje de programación C.
Para ello se utilizará el compilador Open Source más conocido del lenguaje C llamado GCC, originalmente GCC significaba GNU C Compiler (compilador GNU de C), porque compilaba solamente este lenguaje.
Posteriormente se extendió para compilar C++, Fortran, Ada y muchos otros lenguajes de programación.
Actualmente su nombre significa GNU Compiler.

Si se está utilizando una PC que tiene instalado un sistema operativo basado en Linux o Unix se debe ejecutar, desde la línea de comandos, la siguiente instrucción para saber si efectivamente GCC está instalado:

```
gcc -v 
```
Si el compilador se encuentra instalado en esa computadora deberá aparecer el siguiente mensaje:


```
Using built-in specs.
COLLECT_GCC=gcc
COLLECT_LTO_WRAPPER=/usr/lib/gcc/x86_64-linux-gnu/7/lto-wrapper
OFFLOAD_TARGET_NAMES=nvptx-none
OFFLOAD_TARGET_DEFAULT=1
Target: x86_64-linux-gnu
Configured with: ../src/configure -v --with-pkgversion='Ubuntu 7.5.0-3ubuntu1~18.04' --with-bugurl=file:///usr/share/doc/gcc-7/README.Bugs --enable-languages=c,ada,c++,go,brig,d,fortran,objc,obj-c++ --prefix=/usr --with-gcc-major-version-only --program-suffix=-7 --program-prefix=x86_64-linux-gnu- --enable-shared --enable-linker-build-id --libexecdir=/usr/lib --without-included-gettext --enable-threads=posix --libdir=/usr/lib --enable-nls --enable-bootstrap --enable-clocale=gnu --enable-libstdcxx-debug --enable-libstdcxx-time=yes --with-default-libstdcxx-abi=new --enable-gnu-unique-object --disable-vtable-verify --enable-libmpx --enable-plugin --enable-default-pie --with-system-zlib --with-target-system-zlib --enable-objc-gc=auto --enable-multiarch --disable-werror --with-arch-32=i686 --with-abi=m64 --with-multilib-list=m32,m64,mx32 --enable-multilib --with-tune=generic --enable-offload-targets=nvptx-none --without-cuda-driver --enable-checking=release --build=x86_64-linux-gnu --host=x86_64-linux-gnu --target=x86_64-linux-gnu
Thread model: posix
gcc version 7.5.0 (Ubuntu 7.5.0-3ubuntu1~18.04) 
```
De no aparecer ningún mensaje significa que gcc no está instalado en la computadora, por lo tanto se deberá proceder a la instalación manual.
Si contamos con una de las instalaciones de linux más comunes, como por ejemplo, Ubuntu o Mint podremos instalarlo desde la línea de comando de una terminal escribiendo:

```
sudo apt-get install gcc
```

Se puede encontrar más información para instalar gcc en http://gcc.gnu.org/install/.



### El Sistema de Compilación

Las partes del proceso de compilación son 4, y utilizan 4 herramientas para llevar a cabo cada una de estas fases. Estas herramientas son: 
*  el preprocesador.
*  el compilador
*  el ensamblador
*  el link-editor o linker

Estas en conjunto son conocidas como un sistema de compilación.   

* **La fase de procesamiento**. El preprocesador (cpp) modifica el código de fuente original de un programa escrito en C de acuerdo a las directivas que comienzan con un caracter(\#). El resultado de este proceso es otro programa en C con la extensión.
* **La fase de compilación**. El compilador (cc) traduce el programa .i a un archivo de texto .s que contiene un programa en lenguaje assembly (lenguaje de bajo nivel).
* **La fase de ensamblaje**. A continuación el ensamblador (as) traduce el archivo .s en instrucciones de lenguaje de máquina completándolas en un formato conocido como programa objeto realocable. Este es almacenado en un archivo con extensión .o.
* **La fase de link edición**. Generalmente los programas escritos en lenguaje C hacen uso de funciones que forman parte de la _biblioteca estándar de C_ que es provista por cualquier compilador de ese lenguaje. Por ejemplo la función `printf()`, la misma se encuentra en un archivo objeto precompilado que tiene que ser mezclado con el programa que se esta compilando, para ello el linker realiza esta tarea teniendo como resultado un archivo objeto ejecutable. 
