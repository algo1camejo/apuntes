# Introducción a los algoritmos

## ¿Qué es un algoritmo?

Hay muchas definiciones para lo que es un algoritmo pero la mayoría se puede resumir en lo siguiente: 
> Un algoritmo es **una serie de instrucciones precisas, finitas y ordenadas** que permiten **resolver un problema**. 

Esto significa que no cualquier instrucción puede ser parte de un algoritmo, esta deben tener tres características:

- **Precisa**: tienen que estar definidas de antemano y no pueden dejar lugar a ambigüedades.
- **Finita**: la cantidad de instrucciones debe estar definida, no puede ser infinita.
- **Ordenadas**: las instrucciones deben tener un orden establecido. No se pueden realizaren cualquier orden y esperar que el problema se resuelva.

Usamos algoritmos todo el tiempo para resolver problemas pero rara vez los tenemos en cuenta, nos salen automáticos. Algunos de los ejemplos más comunes de un algoritmo (que no esté relacionado a la computación) son el de una receta o el de la división de la ropa para lavar.

### Resolución de problemas con una computadora

> Un **problema** es una cuestión que se plantea para hallar un dato desconocido a partir de otros datos conocidos, o para determinar el método que hay que seguir para obtener un resultado dado.
Se puede decir que siempre que hay un salto entre donde estás y donde querés llegar y no sabés cómo encontrar el camino para salvar este salto, tenés un problema.

Resolver un problema con una computadora va más allá de simplemente sentarse delante de ella y comenzar a escribir una solución. Proponemos el siguiente método para resolver problemas con una computadora:

1. **Entender el problema en sí**: para poder dar por entendido el problema hay que poder explicarlo con nuestras palabras. Hay que entender cuales son sus restricciones y cual es el resultado final. En otras palabras, se debe poder describir **que** hay que hacer. 
Esta descripción puede ser un dibujo o un párrafo en nuestras palabras pero no podemos darlo por analizado con solo leer un enunciado.
2. **Diseñar un algoritmo para la solución**: una vez analizado el problema, se diseña una o varias soluciones y se elegirá aquella que se considere la mejor. Hay que buscar la *secuencia de pasos a seguir* para poder resolver el problema.
3. **Implementación de un programa**: una vez que tenemos el algoritmo (la secuencia de pasos) hay que transformarlo en un programa *usando un lenguaje de programación*.
4. **Ejecución, verificación y depuración**: hay que *ejecutar* el programa, *comprobar* que haga lo que esperamos. En el caso de obtener errores, se deben eliminar (esto se llama *depurar*).

### Formas de ver un problema
Según la **teoría de sistemas** hay dos *formas distintas de ver un problema*, podemos verlo como una caja negra o como una caja blanca.

- **Caja negra**: eate enfoque se centra en las entradas y salidas de un elemento, *sin tener en cuenta su funcionamiento interno*. Se concentra en la pregunta ***¿Qué hace?***.
- **Caja blanca**: este enfoque se centra en las *interacciones de los componentes internos* del elemento. Se concentra en al pregunta ***¿Cómo lo hace?***.

## ¿Qué es un programa?
Un programa es la **traducción de un algoritmo a un lenguaje de programación** determinado capaz de ser ejecutado por una computadora. En otras palabras, le otorgamos una serie de instrucciones a una computadora para que las realice. Pero esto nos lleva a otra pregunta, **¿qué es un lenguaje de programación?**

## Programar
Programar es escribir las instrucciones que luego le daremos a la computadora para que realice. 
Algo que no esta de más mencionar, es que muchos creen que programar es sentarse delante de una computadora y comenzar a escribir instrucciones indiscriminadamente hasta llegar a la solución del problema. Justamente eso no es programar. Como dijo Martin Fowler:
> Any fool can write code that a computer can understand. Good programmers write code that humans can understand"

En español:

> Cualquier tonto puede escribir código que una computadora puede entender. Los buenos programadores escriben código que los humanos pueden entender".

Es importante tener en cuenta esto a la hora de programar.

### Lenguaje de programación
Un lenguaje de programación es como un idioma, un idioma es un sistema que utilizamos para comunicarnos con otras personas. Por lo tanto, un lenguaje de programación es una **manera de comunicarse con una computadora**. Con esta herramienta, conseguimos indicarle las instrucciones que deseamos que ejecute.

Dado que una computadora solo comprende lenguaje de máquina (binario) necesitamos encontrar otra manera de poder comunicarnos con ella. Los lenguajes de programación se pueden clasificar en: lenguajes de alto nivel y de bajo nivel.

- **Bajo nivel**: están más cerca del lenguaje de máquina, es decir, se acercan más al hardware. 
- **Alto nivel**: están más cerca del lenguaje humano, utilizan un lenguaje que nos puede resultar más familiar. Estos lenguajes, luego son traducidos a código máquina para que la computadora pueda comprender nuestro código.

Supongamos que tenemos el siguiente algoritmo:
    
    - Escribir "Hola Mundo!"

Veamos su traducción en distintos lenguajes de programación.

- Assembly (bajo nivel):

    ```x86asm
    DOSSEG
    .MODEL TINY
    .DATA
    TXT DB "Hola Mundo!$"
    START:
        MOV ax, @DATA
        MOV ds, ax

        MOV ah, 09h
        MOV dx, OFFSET TXT
        INT 21h

        MOV AX, 4C00h
        INT 21h
    END START
    ```

- C (medio nivel):

    ```c
    #include <stdio.h>
    int main(){
        printf("Hola Mundo!");
        return 0;
    }
    ```

- Pascal (alto nivel):

    ```pascal
    program helloworld;
    begin
        writeln('Hola Mundo!');
    end.
    ```

- Python (alto nivel):

    ```python
    print("Hola Mundo!")
    ```
    
### Pseudocódigo
Es una **manera de representar la implementación de un algoritmo**. La ventaja del pseudocódigo, es que permite abstraerse de un lenguaje de programación en específico, permitiendo que cualquier persona pueda comprender el algoritmo. 

El pseudocódigo no tiene sintaxis como cualquiera de los lenguajes de programación y es por eso que no puede ser compilado o interpretado por la computadora. Es un **subconjunto del lenguaje natural**, que permite describir un algoritmo sin lugar a ambiguedades. 

En pseudocódigo existe un conjunto de palabras que se llaman **palabras reservadas** que pueden ser utilizadas dentro de la descripción del algoritmo con un solo propósito. Éstas se listan a continuación: si,para, mientras, sino, fin, repetir, hasta, hacer, entero, real, caracter, algoritmo, const, var, tipo, inicio, fin, segun, caso.

Veamos un ejemplo del algoritmo anterior en pseudocódigo:

```pseudocode
inicio
    mostrar por pantalla "Hello World!"
fin
```

### Traducción de un lenguaje de alto nivel a binario
Un programa puede ser **compilado o interpretado**.
1. Compilación: el proceso de traducción se realiza mediante un programa que traduce las acciones de alto nivel a un lenguaje de más bajo nivel, es decir, más cerca del procesador que del ser humano. Este programa se llama **compilador**. Existe un compilador por cada lenguaje que necesite ser compilado.
Ejemplos de lenguajes compilados son: C, Rust, Swift, Go, Java, entre otros.
2. Interpretación: el proceso de interpretación difiere con el de compilación, ya que en éste no se genera un programa ejecutable (para luego ser ejecutado en binario). El **intérprete** es un programa que toma una línea del programa escrito y en el momento realiza la traducción y ejecución de la acción. 
Ejmplos de lenguajes interpretados son: Python, Ruby y Smalltalk.


