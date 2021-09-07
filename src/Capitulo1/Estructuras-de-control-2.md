# Estructuras de Control
---

## Introducción

Un **programa** tiene un punto de partida, desde ahí, comenzará su ejecución y continuará secuencialmente, una línea a la vez, hasta que se alcance el final del programa. Este es el flujo normal de un programa, **secuencial**. \
A la hora de programar, vamos a encontrar situaciones en las que debemos, por ejemplo, decidir ir por un camino u otro en base a una situación dada, o ejecutar una instrucción más de una vez. Acá es donde entran las *estructuras de control*. 
Las **estructuras de control** permiten controlar el flujo de un programa realizando saltos, bifurcaciones o iteraciones. En otras palabras, nos permiten decidir cómo será el flujo del programa. 

Veremos dos tipos de estructuras de control (además de la secuencial):
1. **Iterativa**: permiten ejecutar una instrucción más de una vez.
2. **Selectiva**: permiten tomar decisiones, es decir, realizar una acción u otra/s.

## Estructuras de control selectivas

Estas estructuras de control permiten alterar el flujo normal del programa según se cumpla o no una determinada condición. Las estructuras de control selectivas que veremos son:

- `if`
- `if...else`
- `if...else if...else`
- `switch`

### if

La sentencia `if` evalúa la expresión dentro del paréntesis. Si la expresión es verdadera, se ejecutan las declaraciones dentro del cuerpo de `if`. Si la expresión es falsa, no se ejecutan.
La expresión necesariamente tiene que ser una **expresión booleana**. Esto vale para cualquier expresión que deba ser evaluada por una estructura de control a excepción del `switch`, la cual mencionaremos más adelante.

```pseudocode
si(expresión) entonces 
    acción/es
```

```c
// C, Java, C++
if(expresión) {
	// acción/es
}
```

```python
# Pyhton
if expresión:           
   # acción/es
```

### if...else

La sentencia `if` puede tener un bloque `else` opcional. En el caso de que la expresión del `if` evalúe como falsa, se ejecutará el bloque `else`. Sería el caso por defecto.

```pseudocode
si(expresión) entonces 
    acción/es
sino 
    acción/es
```

```c
// C, Java, C++
if(expresión) {
	// acción/es
}
else {
    // acción/es
}
```

```python
# Pyhton
if expresión:           
   # acción/es
else:
    # acción/es
```

### Escalera if...else

En ocasiones, vamos a necesitar evaluar más de uno o dos casos. Para eso esta la escalera `if...else`, que permite evaluar múltiples expresiones (cuantas queramos). A esta estructura también se la conoce como `if` múltiple.
**Se ejecutará únicamente el bloque que evalúe la expresión como verdadera.** Esto quiere decir que, si alguna de las expresiones es verdadera, entonces se saltearan el resto de las evaluaciones que siguen, si las hay (recordar que el bloque `else` es opcional).

```pseudocode
si(expresión) entonces 
    acción/es
sino(expresión) entonces
    acción/es
...
sino(expresión) entonces
    acción/es
sino 
    acción/es
```

```c
// C, Java, C++
if(expresión) {
	// acción/es
}
else if(expresión) {
    // acción/es
}
...
else if(expresión) {
    // acción/es
}
else {
    acción/es
}
```

```python
# Pyhton
if expresión:           
   # acción/es
elif expresión:
    # acción/es
...
elif expresión:
    # acción/es
else:
    # acción/es
```

### if anidado

Es legal incluir dentro de cualquier bloque `if`, `else if` o `else` otra estructura de las vistas anteriormente. Veamos un ejemplo:

```pseudocode
si(expresión) entonces 
    si(expresión) entonces 
        acción/es
    sino
        acción/es
```

```c
// C, Java, C++
if(expresión) {
	if(expresión) {
	    // acción/es
	}
	else {
	    // acción/es
	}
}
```

```python
if expresión:
    if expresión:
        acción/es
    else:
        acción/es
```

### switch...case

La estructura `switch case` nos permite ejecutar una acción o un bloque de código en base a distintas alternativas, llamadas **casos**. El valor de la variable a evaluar es comparado con los distintos casos, cuando el valor de la misma coincide con una de las **etiquetas** (valores posibles de la variable), se ejecuta el bloque de código después de la etiqueta coincidente. Si no hay coincidencia, se ejecuta la declaración por defecto.

```
según(variable)
    caso etiqueta:
        acción/es
    ...
    caso etiqueta:
        acción/es
    defecto:
        acción/es
```

```c
// C, Java, C++
switch(variable){
    case etiqueta:
        // acción/es
        break;
    ...
    case etiqueta:
        // acción/es
        break;
    default:
        // acción/es
}
```

```python
# Python
# No existe esta estructura en Python
```
Qué debemos tener en cuenta a la hora de usar `switch case`:
- Cada caso, excepto el caso por defecto, debe usar `break`. Si no usamos `break`, se ejecutan todas las declaraciones después de la etiqueta coincidente. Lo que hace `break`, es cortar la ejecución del `switch case`.
- El caso por defecto es opcional y en caso de usarlo, debe ir a lo último.
- Puede haber como máximo una declaración por defecto.
- No se permiten etiquetas duplicadas.
- El valor de una etiqueta debe ser una constante o un literal (declaradas con `#define`). No se permiten variables.
- El valor de una etiqueta debe ser del mismo tipo de dato que el de la variable.

Se utiliza en lugar de una escalera `if else` cuando dicha estructura comienza a perder claridad al realizar reiteradamente la misma consulta. Por lo tanto, en ese caso, es mejor práctica usar `switch case` por una cuestión de legibilidad (en otras palabras, queda más limpio).

## Estructuras de control iterativas
Estas estructuras de control permiten repetir una acción o un bloque de código según se cumpla o no, o mientras se cumpla, una determinada condición. Las estructuras de control iterativas que veremos son:

- `while`
- `do while`
- `for`

Con este tipo de estructuras hay que ser cuidadoso con los **bucles infinitos**. Esto ocurre cuando la condición que finalizaría el mismo, nunca deja de cumplirse. Se entenderá mejor luego de ver las distintas estructuras.

### while loop

Esta estructura repite una acción o bloque de código **mientras** que el resultado de la evaluación de la expresión sea verdadero, la cual se realiza antes de la ejecución del bloque. Cuando la expresión resulte falsa, terminará la ejecución del bucle. 

```pseudocode
mientras(expresión) hacer
    acción/es
```

```c
// C, Java, C++
while(expresión) {
    // acción/es
}
```

```python
# Python
while expresión:
    # acción/es
```
Supongamos que queremos realizar un bucle de 10 iteraciones. Tendríamos la siguiente condición: `n < 10`, donde `n` es una variable que acumula la cantidad de iteraciones realizadas inicializada en 0. Esto quiere decir, que cuando `n` alcance valor 10, terminará la ejecución del `while`. Para no entrar en un bucle infinito, no solo debemos asegurarnos de que la variable `n` este inicializada, si no que debemos tener una actualización al final del bloque `while`. Veamos el ejemplo en código a continuación:

```c
// C, Java, C++
int n = 0;
while(n < 10) {
    // acción/es
    n++; 
}
```

```python
# Python
n = 0
while n < 10:
    # acción/es
    n += 1
```

### do...while loop
Esta estructura iterativa es similar a la anterior. La única diferencia es que la expresión la evalúa luego de ejecutar la acción o el bloque de código. Esto quiere decir que va a ejecutar la acción o el bloque **al menos una vez**, lo cual puede llegar a ser muy útil. A continuación, se muestra la sintaxis de esta estructura:
```pseudocode
repetir
    acción/es
hasta(!expresión) 
```

```c
// C, Java, C++
do {
    // acción/es
} while(expresión);
```

```python
# Python
# No existe esta estructura en Python
```

### for loop
Esta estructura de control **se utiliza cuando se conoce la cantidad de iteraciones previamente** y esta cantidad es un número finito de repeticiones.

```pseudocode
para(inicialización; expresión; actualización)
    acción/es
```

```c
// C, Java, C++
for(int i = 0; i < cantidad; i++) {
    // acción/es
}
```
En Java, además del mostrado arriba, hay un loop más llamado `for each`, que nos permite iterar sobre un conjunto de valores (similar al `for x in conjunto` de python):
```java
for(tipo variable: conjunto) {
  // acción/es
}
```
En Python hay dos `for` loop:
```python
# Python
# Para iterar sobre un conjunto de valores
for x in conjunto:
    # acción/es
# Para iterar una determinada cantidad de veces (el inicio es opcional, empieza en 0 por defecto)
for x in range(inicio, fin):
    # acción/es
```
