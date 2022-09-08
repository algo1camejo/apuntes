---
sidebar_position: 1
---

# El lenguaje de programación C

### Primer programa en C
En esta sección se muestra un primer ejemplo de programa escrito en el lenguaje de programación C.
* Algoritmo hola_mundo en pseudocódigo:
```
    inicio
        escribir("Hello World!");
    fin
```
* Algoritmo hola_mundo en C:
```c
    #include<stdio.h>

    int main() {
            printf("Hello World!");
            return 0;
    }
```

Una pequeña explicación de qué es cada una de las cosas que se ven en el programa escrito en lenguaje C:

 ```c 
  #include <stdio.h> 
  ```
   Es la directiva de preprocesador necesaria para poder usar ```printf()```.
	En pseudocódigo se omite la inclusión de bibliotecas por simplicidad, y por ese mismo motivo se usa escribir() en vez de las complejas funciones de entrada/salida de C.
```c
int main()
```
Es la forma de entrada al programa. Cuando se ejecuta un programa, comienza a ejecutarse desde esta línea.
```c
printf("Hello World!");
```
Esta línea es la que hace que se muestre "Hello World!".  
```c
return 0;
```
Ordena que el programa termine su ejecución y devuelva 0 al contexto en el que fue ejecutado.


### Variables
Para definir una variable en C se debe establecer el tipo de dato al cual pertenece, para ello se utiliza cualquiera de los especificadores de tipos de las tablas de la sección anterior. Seguidamente se debe dotar de un nombre a la variable, a ese nombre se lo denomina **identificador**. Un identificador se lo escribe teniendo en cuenta que es una secuencia de letras (letras minúsculas, letras mayúsculas, y el caracter ``\_'' es considerado una letra) y dígitos.} 
Es importante recalcar que la primera letra de un identificador no puede ser un dígito numérico (0,1,2,3,4,5,6,7,8,9). La declaraciún se termina con un caracter '';''. Se hace distinción entre letras mayúsculas y minúsculas. Así, Casa es considerado como un identificador distinto de casa y de CASA.
Ejemplos de declaración de variables: 

```c
int 	 contador;
char     inicial_nombre;
float    raiz;
```

Otros ejemplos de identificadores válidos son los siguientes:
```tiempo```, ```distancia1```, ```caso_A```, ```PI```, ```velocidad_de_la_luz```
Por el contrario, los siguientes nombres no son válidos (¿Por qué?):

```1_valor```, ```tiempo-total```, ```dolare$```, ```%final```.

Cuando se desea realizar más de una declaración de variables del mismo tipo de dato son equivalentes:

```c
int	numero;
int	contador;
int	cantidadDePasos;
double	raiz;
double 	importe;
```

```c
int	    numero, contador,cantidadDePasos;
double	raiz, importe;
```

### Constantes
Las constantes son un tipo especial de variables que guardan un valor que no puede ser modificado. Se declaran inmediatamente abajo de los ```#include```, y su nombre son en mayúsculas. 
Por ejemplo:
```c
#include <stdio.h>

const int MAYOR_DE_EDAD=18;

int main(){
    int edad = 4;
    if(edad>= MAYOR_DE_EDAD)
        printf("Es mayor de edad!");
    else
        printf("No es mayor de edad");

    return 0;
}
```

### Comentarios
Los caracteres /* se emplean para iniciar un comentario  introducido entre el código del programa; el comentario termina con los caracteres */.
No se puede introducir un comentario dentro de otro.
Todo texto introducido entre los símbolos de comienzo /* y final*/ de comentario son siempre ignorados por el compilador.
Por ejemplo:

```c
variable_1 = variable_2; /* En esta línea se asigna a
	                            variable_1 el valor
	                            contenido en variable_2 */
```

El lenguaje C permite también otro tipo de comentarios, usando los caracteres //. Todo lo que va en cualquier línea del código detrás de la doble barra // y hasta el final de dicha línea, se considera como un comentario y es ignorado por el compilador.
Para comentarios cortos, esta forma es más cómoda que la anterior, pues no hay que preocuparse de cerrarlos (el fin de línea actúa como cierre).
Como contrapartida, si un comentario ocupa varias líneas hay que repetir la doble barra // en cada una de las líneas.
Con este segundo procedimiento de introducir comentarios, el último ejemplo podría ponerse en la forma:

```c
variable_1 = variable_2; // En esta línea se asigna a
                            // variable_1 el valor
                            // contenido en variable_2
```

### Palabras reservadas
Las palabras reservadas son aquellas que tienen un significado o función en el lenguaje de programación, por lo que no podrán ser utilizadas para otro propósito. Por ejemplo, no se podrá usar ninguna de estas palabras como nombre de una variable.
Según la sección 3.1.1 del American National Standard for Information Systems --- Programming Language C, X3.J11-1988 las 32 palabras reservadas del lenguaje de programación C se listan a continuación:

```c
  auto     double   int      struct
  break    else     long     switch
  case     enum     register typedef
  char     extern   return   union
  const    float    short    unsigned
  continue for      signed   void
  default  goto     sizeof   volatile
  do       if       static   while
```
