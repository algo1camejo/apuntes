---
sidebar_position: 6
---

# Buenas prácticas de programación

## Nombres Descriptivos

Se recomienda usar nombres descriptivos, tanto para nombrar funciones como variables, ya que le aporta **legibilidad y claridad** al código. Esto se debe principalmente a que, en general, el código siempre va a ser leído por alguien que no lo escribió, por lo tanto, es importante que un tercero pueda entenderlo con facilidad. Ejemplos de estos casos es en trabajos grupales, cuando alguien tiene que revisar el código, o cuando volvemos a leer el código después de un tiempo.

**Mala Práctica**

```c
#define ELEMENTO 'H'
#define MAX 100

bool funcion(int numero) {
    return (numero % 2 == 0);
}

char v[MAX];
```

```java
final char ELEMENTO = 'H';
final int MAX = 100;

public bool funcion(int numero) {
    return (numero % 2 == 0);
}

char v[] = new char[MAX];
```

```python
ELEMENTO = 'H'
MAX = 100

def funcion(numero):
    return (numero % 2 == 0)
    
v = "";
```

Los nombres son demasiado **genéricos**. `ELEMENTO` puede ser cualquier elemento de la tabla periódica (principalmente para alguien que no está familiarizado con dichos elementos). Un nombre tan genérico, *no permite determinar correctamente que representa*.
Lo mismo ocurre con el nombre de la función y del vector. En el caso de la función, se debería identificar la misma con un nombre que indique una **acción atómica**. En el caso de la variable, se podría identificar con el **contenido** que tendrá vector.

**Buena Práctica**

```c
#define HIDROGENO 'H'
#define MAX_LEGAJOS 100

bool es_impar(int numero) {
    return (numero % 2 == 0);
}

int legajos[MAX_LEGAJOS];
```

```java
final char HIDROGENO = 'H';
final int MAX_LEGAJOS = 100;

public bool es_impar(int numero) {
    return (numero % 2 == 0);
}

char legajos[] = new char[MAX_LEGAJOS];
```

```python
HIDROGENO = 'H'
MAX_LEGAJOS = 100

def es_impar(numero):
    return (numero % 2 == 0)
    
legajos = "";
```

Vale aclarar que es importante que los nombres sean autodescriptivos pero tampoco se debe exagerar en longitud. Por ejemplo, nombrar a la función como `funcion_que_calcula_si_un_numero_es_par` haría que sea una tortura escribirlo cada vez que sea necesario.

### Reglas para Poner Nombres
Según el libro Code Clean de Uncle Bob:
1. **Nombres reveladores**
Nombrar sin que luego exista la necesidad de realizar aclaraciones en un comentario. Los nombres deben aportar significado a las variables. Un ejemplo de mala práctica seria:
	```c
	int d; // Cantidad de días transcurridos
	```
	Sería mejor nombrar la variable como:
	```c
	int dias_transcurridos;
	```
	El nombre no es muy largo y aporta significado.
2. **Evitar la desinformación**
El nombre de la variable no debe ayudar a la incomprensión del código. Por ejemplo una variable booleana que se llame `verdadero` introduce desinformación dentro del contexto del código fuente. Esto se puede ver más claro viéndolo en código:
    ```C
    ...
    bool verdadero;
    if(verdadero == false) { ... }
    ```
    En este caso, que la variable se llame `verdadero` pero que se este verificando si la misma es falsa se presta a confusiones. Sería mejor nombrar la variable indicando que es lo que se quiere verificar si es verdadero o falso. Por ejemplo, si esa variable indica si un número es par o no, podría llamarse `es_impar`.
3. **Nombres distinguibles**
    A veces, hay dos variables o funciones de alguna manera relacionadas que debido a la restricción de que se llamen igual, la opción a la que uno se ve tentado es cambiar el nombre de una por alguna regla arbitraria. Por ejemplo:
    ```C
    int obtener_cuenta() {...}
    int obtener_cuentas() {...}
    ```
    No se puede notar la diferencia entre una función u otra a través del nombre. Por lo tanto, se deberían nombrar de manera distinta pero de forma tal que se pueda distinguir que hace una y que hace la otra. Por ejemplo:
    ```C
    int obtener_cuenta_corriente() {...}
    int obtener_cuenta_ahorro() {...}
    ```
4. **Nombres fáciles de buscar**
En la medida que sea posible, se deben evitar los nombres de una sola letra. Por ejemplo, si se intenta buscar una variable `int i` en un programa medianamente grande, el motor de búsqueda del editor se va a detener en cada `i` que se haya escrito, lentizando la búsqueda.
5.  **No Te Hagas el Canchero** 
Priorizar la claridad ante la ironía o comicidad, de manera que cualquier involucrado lo pueda entender y no solo quien lo programó.
6. **Una Sola Palabra por Concepto**
Se debe utilizar el mismo concepto en todo el código. Por ejemplo, si se utiliza la palabra "obtener_valor" como nombre de una función, no deberían utilizarse sus sinónimos para el mismo concepto (p. ej. conseguir o adquirir). Esto quiere decir que si hay una función que quiere obtener una letra, se debería llamar "obtener_letra" y no elegir un sinónimo como "conseguir_letra".
7. **Nombres pronunciables**
Los nombres deben poder pronunciarse. Evitar trabalenguas, por ejemplo, en vez de nombrar una variable como "fch_de_pbl", es preferible un nombre más claro como "fecha_publicacion".
8. **Evitar los Nombres Genéricos**
Los nombres deben ser autodescriptivos. Los nombres genéricos no reducen la complejidad del código fuente sino que la aumentan.

## Declaración de Variables
**Se pueden declarar distintas variables de un mismo tipo en una línea**. Es recomendable aplicar esta práctica cuando las variables tienen el mismo uso (por ejemplo, índices de iteración). Puede ser que en el caso de que se declaren variables que no tienen algo en común se entorpezca la lectura del código.

**Mala Práctica**
```C
int i, j, numero1, numero2, suma, resta;
```
Se puede observar que, por más que las variables corresponden al
mismo tipo de dato, no implica que su uso será el mismo.

**Buena Práctica**
```C
int i, j;
int numero1, numero2; 
int suma, resta;
```
En este caso, se agrupan las variables según el rol que cumplen en el código. Es mas informativo y prolijo.

## Uso de Constantes

Las constantes y/o literales se deben declarar antes que las funciones. Como convención, sus nombres deben ir en mayúsculas.

**Mala Práctica**
```C
int main() {
    ...
    const int PI = 3.14;
    const int GRAVEDAD = 9.8;
    ...
}
```
```Java
public class Main {
    public static void main(String args[]) {
        ...
        final int PI = 3.14;
        final int GRAVEDAD = 9.8;
        ...
    }
}
```
**Buena Práctica**
```C
const int PI = 3.14;
const int GRAVEDAD = 9.8;
    
int main() {
    ...
}
```
```Java
public class Main {
    final int PI = 3.14;
    final int GRAVEDAD = 9.8;
        
    public static void main(String args[]) {
        ...
    }
}
```

## Inicialización de variables

Inicializar una variable previo a su uso, evitará que se trabaje con basura, y como consecuencia, se evitarán errores de ejecución o de acceso a una posición no asignada de memoria. Esto es principalmente importante cuando, por ejemplo, se trate de variables que se utilizarán como índices de un vector o matriz, o acumuladores. 

**Mala Práctica**
```C
int contador;
for(int i = 0; i < 10; i++) {
    contador++;
}
printf("%i", contador);
```
El operador `++` intentará aumentar en una unidad el valor de la variable `contador`, pero la variable inicialmente no contiene nada que se pueda aumentar, simplemente es basura. Como consecuencia, el resultado de este programa será indefinido.

**Buena Práctica**
```C
int contador = 0;
for(int i = 0; i < 10; i++) {
    contador++;
}
printf("%i", contador);
```
En este caso, se imprimirá por pantalla "10".

## Emplear una sola convención
Cuando se toma una convención respecto a algo, debe ser utilizada en todo el código para que el mismo sea coherente. Cuando se utilizan varias palabras para nombrar una variable, constante o función, **camel case** une esas palabras, sin ningún espacio en blanco, y *delimita el comienzo de cada nueva palabra con una letra mayúscula*. Por el contrario, **snake case** utiliza un guión bajo entre las palabras para crear una separación. Entonces, cualquiera que se decida usar, esta convención debe ser respetada a lo largo de todo el programa.

```C
// Snake Case
int nombre_variable;
// Camel Case
int nombreVariable;
```

Lo mismo ocurre con la apertura y cierre de llaves. Las convenciones que se pueden tomar, por ejemplo, son:
```C
int main() {
    ...
}
// ó
int main() 
{
    ...
}
```
Como último ejemplo, también se debe respetar una única convención cuando se trata de la estructura condicional `if`:
```C
if(condicion) {
    ...    
} else if(condicion) {
    ...     
} else {
    ...     
}
// ó
if(condicion) {
    ...    
} 
else if(condicion) {
    ...     
} 
else {
    ...     
}
```
Como conclusión, en cualquier caso que se deba tomar una convención, la que se decida usar se debe respetar a lo largo de todo el programa.

## Variables Globales

El uso de variables globales no es recomendable, ya que al ser parte del entorno global del programa dicha variable se puede modificar en cualquier parte del mismo. A su vez, todo el programa dependería de ella y también dificultaría la lectura del código. 

**Mala Práctica**
```C
int resultado ;
int sumar (int num1 , int num2 ) {
    resultado = num1 + num2 ;
    return resultado ;
}
```
**Buena Práctica**
```C
int sumar (int num1 , int num2 ) {
    int resultado = num1 + num2 ;
    return resultado ;
}
```

**Observación**: en este curso está PROHIBIDO usar variables globales.

## Indentación

Cuando se trata del cuerpo de una función o una estructura de control, se debe indentar el mismo. Respecto a estructuras de control, esto aplica aún cuanod la sentencia es una sola (ya que en ese caso, a veces no se suelen usar llaves). Como toda buena práctica, aumenta la legibilidad del código.

**Mala Práctica**
```C
int suma = 0;
while(suma < MAX_PERSONAS) {
for(int i = 0; i < MAX_PERSONAS; i++) {
suma = suma + i;
printf (" %d\n" , i);
}
}
```
Se puede ver que es difícil saber dónde comienzan las instrucciones para
la estructura de control, como también la totalidad del código. 

**Buena Práctica**
```C
int suma = 0;
while(suma < MAX_PERSONAS) {
    for(int i = 0; i < MAX_PERSONAS; i++) {
        suma = suma + i;
        printf (" %d\n" , i);
    }
}
```

## Una instrucción por línea
Si se escribe la totalidad del programa en una sola línea, el compilador no tendrá problema en compilarlo y ejecutarlo (es decir, tener más de una instrucción en una línea, no traería problemas de compilación o ejecución). Se escribe una instrucción por línea para hacer el seguimiento del código de una manera más sencilla.

**Mala Práctica**
```C
for (int i = 0; i < MAX_PERSONAS; i++) { suma = suma + i; j = i + 1; }
```
**Buena Práctica**
```C
for (int i = 0; i < MAX_PERSONAS; i++) { 
    suma = suma + i; 
    j = i + 1; 
}
```

##  Usar paréntesis para cada operación lógica

No sólo será más clara la lectura para el programador, sino que también para el compilador.

**Mala Práctica**
```C
if(numero < MAX_PERSONAS && opcion == OPCION_SI ) { ... }
```
**Buena Práctica**
```C
if((numero < MAX_PERSONAS) && (opcion == OPCION_SI)) { ... }
```

##  Evitar comentarios redundantes en el código
Siempre que se cumplan las buenas prácticas mencionadas anteriormente, no debería ser necesario aclarar que hace una línea de código con un comentario. Por ejemplo:
```C
int salario = 100000; // Se asigna el salario mensual a la variable 'salario'
```
Ya es claro lo que realiza dicha línea de código con tal solo leerlo. El comentario en este ejemplo, es redundante.

## Modularización: Divide y vencerás
Modularizar un programa con funciones sencillas no sólo brinda legibilidad al código, sino también ayuda a evitar repetición del mismo. Es decir, que podemos reciclar código.

**Ejemplo** 

Se quiere calcular aproximadamente la cantidad de basura que se tira por día en Hogwarts. Se sabe que en cada habitación de cada casa conviven 3 alumnos, que hay un total de cuatro casas (Gryffindor, Hufflepuff, Ravenclaw y Slytherin) y que cada alumno genera aproximadamente 500 gramos de basura por día. La cantidad de habitaciones serán ingresadas por el usuario.

**Mala Práctica**

```C
int main() {
    int slytherin, gryffindor, ravenclaw, hufflepuff;
    int total_basura;

    printf("Ingrese cantidad de habitaciones para Gryffindor \n");
    scanf("%d", &gryffindor);
    printf("Ingrese cantidad de habitaciones para Hufflepuff \n");
    scanf("%d", &hufflepuff);
    printf("Ingrese cantidad de habitaciones para Ravenclaw \n") ;
    scanf("%d", &ravenclaw);
    printf("Ingrese cantidad de habitaciones para Slytherin \n");
    scanf("%d", &slytherin);

    total_basura = (slytherin + gryffindor + ravenclaw + hufflepuff)*3*500;
    printf("El total de basura generada por dia (gr/dia) en Hogwarts es: %d\n", total_basura);
    
    return 0;
}
```
No solo que no hay uso de constantes, si no que se repite código.

**Buena Práctica**
```C
#define GRYF "Gryffindor"
#define HUFF "Hufflepuff"
#define RAVE "Ravenclaw"
#define SLY "Slytherin"
#define CANT_ALUMNOS 3
#define CANT_BASURA 500

void pedir_cantidad_habitaciones(int* habitaciones, char* nombre_casa) {
    printf("Ingrese cantidad de habitaciones para %s\n" , nombre_casa);
    scanf("%d", habitaciones);
}

int sumar_habitaciones(int slytherin, int gryffindor, int ravenclaw, int hufflepuff) {
    return slytherin + gryffindor + ravenclaw + hufflepuff ;
}

int calcular_total_basura(int total_habitaciones) {
    return (CANT_ALUMNOS*CANT_BASURA*total_habitaciones);
}

int main() {
    int total_habitaciones;
    int slytherin, gryffindor, ravenclaw, hufflepuff;
    int total_basura;

    pedir_cantidad_habitaciones(&gryffindor, GRYFF);
    pedir_cantidad_habitaciones(&hufflepuff, HUFF);
    pedir_cantidad_habitaciones(&ravenclaw, RAVE);
    pedir_cantidad_habitaciones(&slytherin, SLY);

    total_habitaciones = sumar_habitaciones(slytherin, gryffindor, ravenclaw, hufflepuff);
    total_basura = calcular_total_basura(total_habitaciones);

    printf("El total de basura generada por dia (gr/dia) en Hogwarts es: %d\n", total_basura);
    return 0;
}
```
El código se lo dividió en funciones sencillas e incluso más "generales" (por ejemplo, `pedir_cantidad_habitaciones()` se puede usar la misma función para luego escribir distintos textos), se declararon constantes tal como se explicó anteriormente y da lugar a que dichas funciones puedan usarse reiteradas veces dentro del programa.

## Pre y Post Condiciones

**Precondiciones**: son las condiciones que deben estar dadas para que una función funcione correctamente. En otras palabras, en que estado deben estar los parámetros recibidos.

**Postcondiciones**: las condiciones sobre el estado en que quedan las variables y él o los valores de retorno. En otras palabras, cómo va a ser lo que se devuelve o qué sucede con los parámetros en caso de ser modificados.

Se utlizan para llevar una documentación precisa de cada función (o procedimiento), sin necesidad de aclarar o explicar que hace la misma exactamente. Esto es importante, principalmente en el caso en que se este trabajando con otras personas en un mismo código.

### Ejemplo

```C
/*
 * Precondiciones: la cantidad de estrellas debe ser un número mayor a 0.
 * Postcondiciones: se muestra por consola las estrellas enumeradas.
 * /
void listar_estrellas(int cantidad_estrellas) {
    for(int i = 1; i <= cantidad_estrellas; i++) {
        printf("Estrella n°: %i\n", i);
    }
}
```

## Procedimientos para interactuar con el usuario

Siempre que se necesite interactuar con el usuario, por ejemplo, pedirle que ingrese datos, o mostrar datos por pantalla, se debería realizar un **procedimiento** que se encargue de dicha funcionalidad. 

##  No declarar variables de más

No es necesario gastar memoria en declarar variables que no son necesarias o imprescindibles. 

## Cortar estructuras iterativas correctamente

Las estructuras iterativas tienen una condición de corte, la cual debe ser respetada y la única puerta de salida de dicha estructura. Usar instrucciones como `break` o `return` dentro de estructuras iterativas rompe con el flujo normal del algoritmo, obstruyendo la lectura y comprensión del código.







