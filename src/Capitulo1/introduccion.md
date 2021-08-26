## Nociones básicas

### ¿Qué es un algoritmo?
Hay muchas definiciones para lo que es un algoritmo pero la mayoría se puede resumir en lo siguiente: un algoritmo es una serie de instrucciones **precisas, finitas y ordenadas** que permiten **resolver un problema**. Esto significa que no cualquier instrucción puede ser parte de un algoritmo, esta deben tener tres características:

- Deben ser **precisas**, tienen que estar definidas de antemano y no pueden dejar lugar a ambigüedades.

- Debe haber una cantidad **finita** de instrucciones. 

- Las instrucciones deben tener un **orden** establecido. No puedo realizarlas en cualquier orden y esperar que el problema se resuelva.

Usamos algoritmos todo el tiempo para resolver problemas pero rara vez los tenemos en cuenta, nos salen automáticos. Uno de los ejemplos más comunes de un algoritmo (que no esté relacionado a la computación) es el de una receta.

### ¿Cómo vamos a resolver problemas con la computadora?

Resolver un problema con una computadora va más allá de simplemente sentarse delante de ella y comenzar a tecelar una solución. Proponemos el siguiente método para resolver problemas con una computadora:

1. **Entender el problema en sí**: Para poder dar por entendido el problema hay que poder explicarlo con nuestras palabras. Hay que entender cuales son sus , restricciones y cual es el resultado final, se debe poder **describir que hay que hacer**. Esta descripción puede ser un dibujo o un párrafo en nuestras palabras pero no podemos darlo por analizado con solo leer un enunciado.

2. **Diseñar un algoritmo para la solución**: Una vez analizado el problema, se diseña una o varias soluciones y se elegirá aquella que se considere la mejor. Hay que buscar la secuencia de pasos a seguir para resolver el problema.

3. **Implementación de un programa**: Una vez que tenemos el algoritmo hay que transformarlo en un programa usando un lenguaje de programación.

4. **Ejecución, verificación y depuración**: Hay que ejecutar el programa, comprobar que haga lo que esperamos y se eliminar todos los errores que puedan aparecer.

#### Caja negra y caja blanca
Según la teoría de sistemas hay dos formas distintas de ver un problema, podemos verlo como una caja negra o como una caja blanca.

- **Caja negra**: El enfoque caja negra se centra en las entradas y salidas de un elemento, sin tener en cuenta su funcionamiento interno. Se concentra en la pregunta **¿Qué hace?**.

- **Caja blanca**: El enfoque caja blanca se centra en las interacciones de los componentes internos del elemento. Se concentra en al pregunta **¿Cómo lo hace?**.

### ¿Qué es un programa?
Un programa es la traducción de un algoritmo a un lenguaje de programación determinado capaz de ser ejecutado por una computadora. 

Supongamos que tenemos el siguiente algoritmo:
    - Escribir "Hola Mundo!"

¿Cuál sería su traducción en diferentes lenguajes de programación?

- Assembly:
    ```
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
- C:
    ```c
    #include <stdio.h>
    int main(){
        printf("Hola Mundo!");
        return 0;
    }
    ```

- Pascal:
    ```pascal
    program helloworld;
    begin
        writeln('Hola Mundo!');
    end.
    ```

- Python:
    ```
    print("Hola Mundo!")
    ```
