---
sidebar_position: 3
---

# Tipos de Datos

Al solucionar un determinado problema mediante un algoritmo no es posible utilizar cualquier tipo de información. Es decir, no siempre se puede utilizar cualquier tipo de dato.

Un tipo de dato se puede definir como **"Todos los valores posibles que una variable de ese tipo de dato puede tomar"**.

## Clasificación

### Simples

Estos a su vez se dividen en dos. 

#### Ordinales
Aquellos cuyos valores poseen sucesor y antecesor.

Por ejemplo, los números enteros, se sabe que el antecesor de 5 siempre será el 4 y el sucesor el 6.

#### No Ordinales 
Aquellos que no se puede determinar un sucesor o antecesor.

Por ejemplo, los números reales, no se puede representar en la computación el número que sucede al 0.

### Complejos (Estructurados)

Estos se ven más adelante.


## Tipos de Datos en C

### Char

Las variables caracter contienen un único caracter y se almacenan en un byte de memoria (8 bits).

### Enteros

Se pueden definir variables de tipo enteras de diferentes rangos.

- `short` : Entero con signo de 2 bytes.
- `int` : Entero con signo de 4 bytes.
- `long` : Entero con signo de 8 bytes.

Mientras más bytes tenga, el rango que puede representar es más grande.

Los rangos de cada uno son:

- `short` : [-32,768, 32,767]
- `int` : [-2,147,483,648, 2,147,483,647]
- `long` : [-9,223,372,036,854,775,808, -9,223,372,036,854,775,808]

Cabe aclarar que estos rangos son para arquitecturas de 64 bits, en arquitecturas de 32 bits el long y el int tienen el mismo rango (el de 4 bytes).

Ahora, si solo se quiere utilizar los positivos se debe poner la palabra reservada `unsigned` delante del tipo de dato, de la forma:

- `unsigned short` : [0, 65,535]
- `unsigned int` : [0, 4,294,967,295]
- `unsigned long` : [0, 18,446,744,073,709,551,615]


### Booleano

Es un tipo de dato que solo admite dos valores posibles: `true` (verdadero) o `false` (falso).

En C, cualquier expresión que evalúen cero se las considera falsas, y a todas las demás, verdadera.

Pero para poder utilizar este tipo de dato se debe hacer inclusión de una biblioteca.

```c
#include <stdbool.h>
```

### Coma Flotante (Números racionales)

Es una forma de notación cientifica usada en los microprocesadores con la se pueden representar números racionales extremandamente grandes y pequeños de manera muy eficiente y compacta, y se pueden realizar operaciones aritméticas.

Es importante destacar que la comparación de flotantes puede resultar problemática, debido a errores de redondeo, variables que se espera que sean iguales pueden tener valores ligeralmente distintos. Por esto mismo, se debe evitar la comparación desnuda (==).

- ``Float`` : Este tipo de dato corresponde a la precisión simple. Ocupa 4 bytes.

- ``double`` : Este tipo de dato corresponde a la precisión doble de 64 bits. Ocupa 8 bytes. Doble precisión implica que los números que puede representar pueden ser mucho más chicos que los de un float o mucho más grandes. 

Cabe aclarar que en una arquitectura de 32 bits no hay diferencia entre usar float o double.
