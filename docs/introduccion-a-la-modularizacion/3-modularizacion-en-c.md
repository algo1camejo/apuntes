---
sidebar_position: 3
---

# Modularización en C

La pieza fundamental para la modularización en C se denomina **función**. Una función permite al
programador modularizar un programa. Según sus creadores:

> Las funciones dividen tareas grandes de computación en varias más pequeñas y permiten la
> posibilidad de construir sobre lo que otros ya han hecho, en lugar de comenzar desde cero... C ha
> sido diseñado para hacer que las funciones sean eficientes y fáciles de usar. Generalmente los
> programas en C consisten en muchas funciones pequeñas en lugar de unas pocas grandes.

## Funciones

En primer lugar, tenemos que develar que ya se ha utilizado el concepto de función sin saberlo.
Cuando se construye un programa en C y se escribe:

```c
int main () {

}
```

En realidad se está usando la función main de C. Que es el punto de entrada al programa, es decir,
el punto a partir del cual se empieza a ejecutar el mismo.

En C existen dos tipos de funciones:
1. Funciones definidas por el programador.
2. Funciones de la biblioteca estándar.

### Funciones definidas por el programador

Esencialmente la estructura de una función en C es la siguiente:

```c
tipo_retorno nombre_funcion(...parámetros) {
  declaraciones
  acciones
}
```

O, un toque más detallada, sería:

```c
tipo_retorno nombre_funcion(tipo_1 parametro_2, ..., tipo_n parametro_n) {
  declaracion_1;
  declaracion_2;

  accion_1;
  accion_2;
  ...
  accion_n;
}
```

**Tipo de retorno:**

El tipo de retorno corresponde al tipo de dato del valor que devolverá la función tras ser
ejecutada. La acción que permite la ejecución de una función se denomina _invocación_. Existen dos
roles entre una función y aquel que la utiliza. El rol de la parte del programa que hace uso de una
función se llama "invocador" o "llamador". El rol de la función al ser utilizada por alguna parte
del programa se denomina "invocada" o "llamada". Si a una función no se le asigna tipo de retorno
esta devolverá por defecto un valor de tipo entera. La instrucción que se encarga de devolver el
valor de la función y devolver el control al invocador es `return`, con la sintaxis:

```c
return expresion;
```

**Nombre de la función:**

Toda función debe tener un nombre que cumpla con las reglas sintácticas de los identificadores
válidos en C.

**Lista de parámetros:**

Un parámetro es una variable utilizada para recibir valores de entrada en una función. La lista de
parámetros consiste en una lista separada por comas que contiene _las declaraciones_ de los
parámetros recibidos por la función al ser invocada.

**Declaraciones y acciones:**

Dentro del cuerpo de una función se espera encontrar declaraciones de variables necesarias para
alcanzar el objetivo de la función. Estas variables declaradas dentro de la función se denominan
**variables locales**. Una variable es local dentro del bloque de programa, en este caso una
función, en la cual es declarada.

También se espera encontrar acciones y estructuras de control.

#### Ejemplo

```c
#include<stdio.h>

int cuadrado(int numero) {
  return numero * numero;
}

int main() {
  printf("\n");

  for(int i = 0; i < 10; i++) {
    printf("%d ", cuadrado(i));
  }

  printf("\n\n");

  return 0;
}

// Resultado:
// 1 4 9 16 25 36 49 64 81 100
```

Veamos los elementos mencionados anteriormente en este ejemplo, específicamente en la función
`cuadrado`:

**Tipo de retorno:**

El tipo de retorno es un entero, lo podemos ver declarado como `int`.
Por lo que el `return` debe cumplir con que sea un entero lo que devuelva. Como podemos ver en este
ejemplo sería un entero por que es una multiplicación de enteros:

```c
return numero * numero;
```

**Nombre de la función:**

El nombre de la función es `cuadrado` y es como va a ser llamada cuando querramos usarla.
Notar que en un programa de C no podemos tener dos definiciones con el mismo nombre:

```c
#include<stdio.h>

int cuadrado(int numero) {
  return numero * numero;
}

int cuadrado(int numero) {
  return numero * 2;
}

int main() {
  printf("\n");

  for(int i = 0; i < 10; i++) {
    printf("%d ", cuadrado(i));
  }

  printf("\n\n");

  return 0;
}
```

Nos va a dar el error de compilación:

```bash
prueba.c:7:5: error: redefinition of ‘cuadrado’
    7 | int cuadrado(int numero) {
      |     ^~~~~~~~
prueba.c:3:5: note: previous definition of ‘cuadrado’ with type ‘int(int)’
    3 | int cuadrado(int numero) {
```

**Lista de parámetros:**

Los parámetros de nuestra función serían `int numero`.

En este caso solo tenemos uno, pero pueden tantos como sean necesarios.

**Declaraciones y acciones:**

Dentro de nuestra función no tenemos ninguna declaración, porque no nos es necesario.

Pero sí tenemos una acción:

```c
return cuadrado * cuadrado;
```

#### Firma de una función

Se denomina firma de una función o prototipo, al tipo de dato de retorno + el nombre de la función +
la lista de parámetros de la misma. En el lenguaje de programación C se requiere que una función
esté declarada antes de ser utilizada por su llamador. Pero es posible poder dilatar la
implementación de la misma dentro del programa con solo indicar su firma.

Por ejemplo:

```c
#include<stdio.h>

// firma de la función "cuadrado"
int cuadrado(int numero);

int main() {
  printf("\n");

  for(int i = 0; i < 10; i++) {
    printf("%d ", cuadrado(i));
  }

  printf("\n\n");

  return 0;
}

int cuadrado(int numero) {
  return numero * numero;
}
```

De esta forma podemos hacer uso de nuestra función cuadrado antes de su implementación.

## Procedimientos

En muchos lenguajes de programación existe el concepto de **procedimiento**, éste es comparable a
una función que no retorna valor alguno. En C, no existen los procedimientos como estructura
separada de las funciones. Para definir estos mismo se utiliza una función con valor de retorno nul,
para ello se usa el tipo de dato `void`.

Este tipo de dato utilizado como valor de retorno de una función indica que la misma no devuelve
valor alguno. También puede ser usado en la lista de parámetros para indicar que la función no
recibe parámetros, aunque no es requerido.

Esencialmente la estructura de un procedimiento en C es la siguiente:

```c
void nombre_funcion(...parámetros) {
  declaraciones
  acciones
}
```

Como veran, es exactamente la estructura de una función.

### Ejemplo

```c
#include<stdio.h>

void hola_mundo() {
  printf("Hola mundo!\n");
}

int main() {
  hola_mundo();

  return 0;
}

// Resultado:
// Hola mundo!
```

### Return

Vale la pena aclarar que como definimos que no va a devolver ningún valor si hacemos un `return
valor` en la misma nos va a dar un error.

Por ejemplo:

```c
#include<stdio.h>

void hola_mundo() {
  printf("Hola mundo!\n");
  return 2;
}

int main() {
  hola_mundo();

  return 0;
}
```

Nos va a dar el error de compilación, o warning, según los flags que utilicen en la compilación:

```c
prueba.c:6:10: error: ‘return’ with a value, in function returning void [-Werror=return-type]
    6 |   return 2;
      |          ^
prueba.c:3:6: note: declared here
    3 | void hola_mundo() {
      |      ^~~~~~~~~~
```

Si por algún motivo se quiere salir de una función `void` se puede hacer uso del `return` pero sin
devolver nada:

```c
#include<stdio.h>

void hola_mundo() {
  printf("Hola mundo!\n");

  return;

  printf("Esto no se va a imprimir\n");
}

int main() {
  hola_mundo();

  return 0;
}

// Resultado:
// Hola mundo!
```

## Nombres de funciones

A este punto hay que prestarle bastante atención. Un nombre de una función debe definir o ser
equivalente a una acción.

Por ejemplo:

```c
long obtener_cuadrado(int numero) {
  // código
}

long calcular_factorial(int numero) {
  // código
}
```

### Problemas comunes

Si una función tiene un nombre como por ejemplo:

```c
int obtener_cuadrado_mostrandolo_por_pantalla(int numero) {
  // código
}
```

Es un indicativo que estamos frente a un problema de diseño y de mala programación.

A su vez si el nombre de la función indica que ésta realiza una única acción y en su interior hace
más cosas también nos encontramos frente al mismo problema.

Por ejemplo:

```c
long obtener_cuadrado(int numero) {
  long cuadrado = numero * numero;

  printf("%d", cuadrado);

  return cuadrado;
}
```
## Más sobre funciones

La idea principal, una vez conocido el concepto de función en C, es utilizar este concepto para
aplicar la idea de **Divide y vencerás**. Es decir, el concepto de función permite dividir el
programa en un conjunto de funciones que sirvan para resolver el problema.

Para ello las funciones deben seguir algunas de las siguientes reglas:
- Deben tener pocas lineas.
- Su nombre debe denotar el **hacer algo** o **responder algo**, no ambas cosas.
- La lista de parámetros debe estar entre 5 y 9.
- Los nombres de los parámetros deben seguir la misma reglas que los nombres de las variables.
- Es buena idea que tiendan a ser genéricas, es decir, poder reutilizarla en casos donde las
  condiciones son similares.

Además, se debe tener en cuenta que solo se podrán usar variables declaradas en el scope o ámbito de
la función que se está ejecutando. Ya sea porque se obtienen de los parámetros, sean globales o
estén declaradas en la misma función.
