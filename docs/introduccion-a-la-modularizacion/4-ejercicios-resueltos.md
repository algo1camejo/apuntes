---
sidebar_position: 4
---

# Ejercicios resueltos

## Qui-Gon en la primaria

Cuando niño, el maestro Qui-Gon, era un alumno bastante duro, y le costaban mucho las operaciones
matemáticas elementales. Para ayudarlo a entender, vamos a armar algunas operaciones para que el
pequeño Qui-Gon pueda usar de ejemplo.

En este caso, necesitamos que implemente una multiplicación de números naturales.

### Posible solución

```c
unsigned int multiplicar(unsigned int factor1, unsigned int factor2) {
  long multiplicacion = (factor1 * factor2);

  return multiplicacion;
}
```

### Posible solución 2

Recordemos que se puede hacer `return` de una expresión.

```c
unsigned int multiplicar(unsigned int factor1, unsigned int factor2) {
  return (factor1 * factor2);
}
```

### Aclaraciones

Tener en cuenta que este ejercicio se hizo de ejemplo. En el día a día no es recomendable hacerse
una función para multiplicar, porque esto es algo que ya nos permite hacer C haciendo uso del
operador `*`.

También es importante saber cuándo estamos llevando la modularización a un extremo en el que no nos
suma claridad de código ni reutilización. Este caso es un ejemplo de ese extremo que hay que evitar.

## Alimentando al monstruo

El proyecto Estrella de la muerte está estancado, y el emperador está furioso. Todos conocemos su
fama de poco piadoso y antes de que enfoque su ira en nosotros debemos solucionar cómo obtener la
descomunal energía que necesita la estrella de la muerte. Dado que nos encontramos en el espacio,
podemos contar con energía solar en los sistemas que cuentan con soles, pero para los sistemas
oscuros, la elección ideal es la energía nuclear. También savemos lo siguiente:
- Capacidad de generación de un **panel solar**: 2w/h.
- Capacidad de generación de una **planta nuclear de plutonio**: 700kw/h.
- Capacidad de generación de una **planta nuclear de uranio**: 400kw/h

**Se pide:**

Generar una función que calcule la energía total generada por hora, tomando como base la cantidad de
paneles solares y el rendimiento de los reactores nucleares de plutonio y de uranio.

**Aclaraciones:**

Expresar el resultado en w/h.

### Posible solución

```c
#define POTENCIA_SOLAR 2
#define POTENCIA_PLUTONIO 700000
#define POTENCIA_URANIO 400000

double energia_por_hora(unsigned int paneles_solares, unsigned int reactores_plutonio, unsigned int
    reactores_uranio) {
  double potencia_total;

  potencia_total = potencia_total + (POTENCIA_SOLAR * paneles_solares);
  potencia_total = potencia_total + (POTENCIA_PLUTONIO * reactores_plutonio);
  potencia_total = potencia_total + (POTENCIA_URANIO * reactores_uranio);

  return potencia_total;
}
```

### Posible solución 2

Podemos hacer uso del operador `+=`, para ir sumando a la variable `potencia_total`.

```c
#define POTENCIA_SOLAR 2
#define POTENCIA_PLUTONIO 700000
#define POTENCIA_URANIO 400000

double energia_por_hora(unsigned int paneles_solares, unsigned int reactores_plutonio, unsigned int
    reactores_uranio) {
  double potencia_total;

  potencia_total += (POTENCIA_SOLAR * paneles_solares);
  potencia_total += (POTENCIA_PLUTONIO * reactores_plutonio);
  potencia_total += (POTENCIA_URANIO * reactores_uranio);

  return potencia_total;
}
```

### Posible solución 3

En vez de mantener una potencia total, podemos ir calculando primero la potencia de cada elemento y
después el total.

```c
#define POTENCIA_SOLAR 2
#define POTENCIA_PLUTONIO 700000
#define POTENCIA_URANIO 400000

double energia_por_hora(unsigned int paneles_solares, unsigned int reactores_plutonio, unsigned int
    reactores_uranio) {
  double potencia_solar = (POTENCIA_SOLAR * paneles_solares);
  double potencia_plutonio = (POTENCIA_PLUTONIO * reactores_plutonio);
  double potencia_uranio = (POTENCIA_URANIO * reactores_uranio);

  return (potencia_solar + potencia_plutonio + potencia_uranio);
}
```

### Posible solución 4

Como se puede devolver expresiones matemáticas en el `return` podemos hacer todo directamente en
este.

```c
#define POTENCIA_SOLAR 2
#define POTENCIA_PLUTONIO 700000
#define POTENCIA_URANIO 400000

double energia_por_hora(unsigned int paneles_solares, unsigned int reactores_plutonio, unsigned int
    reactores_uranio) {
  return (
    (POTENCIA_SOLAR * paneles_solares) +
    (POTENCIA_PLUTONIO * reactores_plutonio) +
    (POTENCIA_URANIO * reactores_uranio)
  );
}
```

Cuidado al usar esta resolución. No es recomendable si el calculo es complicado o largo, ya que
dificulta la claridad del código.

## La ambición de Darth Vader

El propósito del maligno ser es dominar la galaxia y para eso necesita un gran ejército. Su plan de
alistamiento consistía en la clonación de Stormtroopers, empezando con uno, y doblando su ejército
día a día. El segundo día tendría 2, el tercero 4, el cuarto 8 y así sucesivamente.

**Se pide:**

Escribir una función que permita saber cuántos soldados tendrá Darth Vader en su Ejército Imperial
al cabo de N días.

**Aclaraciones:**

La cantidad de días se recibe como parámetro.

### Posible solución

```c
int calcular_clones(int dias) {
  int clones = 1;

  for(int i = 1; i < dias; i++) {
    clones += 2;
  }

  return clones;
}
```

### Posible solución 2

Hagamos uso de constantes:
- El 2, que representa la cantidad de clones que aumentan diariamente.
- El 1, que representa la cantidad inicial de clones.

```c
#define CLONES_INICIALES 1;
#define AUMENTO_DIARIO 2;

int calcular_clones(int dias) {
  int clones = CLONES_INICIALES;

  for(int i = 1; i < dias; i++) {
    clones += AUMENTO_DIARIO;
  }

  return clones;
}
```

## Mantener el control

Darth Vader sabe que la mejor forma de mantener el control de la galaxia es mediante la constante
vigilancia de Stormtroopers en cada planeta.

**Se pide:**
Escribir una función que reciba la población y devuelva la cantidad de Stormtroopers necesarios para
mantener el control.

**Aclaraciones:**
La cantidad de Stormtroopers a posicionar en cada región de un planeta guarda relación con la
cantidad de rebeldes dentro de una población de dicha región:
- Por cada rebelde debe haber 2 Stormtroopers.
- La cantidad de rebeldes en una población es igual al 10% de la misma.

### Posible solución

```c
unsigned int calcular_cantidad_soldados(unsigned int poblacion) {
  int cantidad_rebeldes = 0.1 * poblacion;
  unsigned int cantidad_soldados = cantidad_rebeldes * 2;

  return cantidad_soldados;
}
```

### Posible solución 2

Hagamos uso de las constantes:
- El 0.1, que representa el porcentaje de rebeldes que hay en la población.
- El 2, que representa la cantidad de soldados que debería haber por rebelde.

```c
#define PORCENTAJE_DE_REBELDES 0.1
#define SOLDADOS_POR_REBELDE 2

unsigned int calcular_cantidad_soldados(unsigned int poblacion) {
  int cantidad_rebeldes = PORCENTAJE_DE_REBELDES * poblacion;
  unsigned int cantidad_soldados = cantidad_rebeldes * SOLDADOS_POR_REBELDE;

  return cantidad_soldados;
}
```

### Posible solución 3

Ahora hagamos uso de la modularización, moviendo la lógica de calcular la cantidad de rebeldes que
hay en una población a otra función.

```c
#define PORCENTAJE_DE_REBELDES 0.1
#define SOLDADOS_POR_REBELDE 2

unsigned int calcular_cantidad_rebeldes(unsigned int poblacion) {
  return (PORCENTAJE_DE_REBELDES * poblacion);
}

unsigned int calcular_cantidad_soldados(unsigned int poblacion) {
  int cantidad_rebeldes = calcular_cantidad_rebeldes(poblacion);
  unsigned int cantidad_soldados = cantidad_rebeldes * SOLDADOS_POR_REBELDE;

  return cantidad_soldados;
}
```

### Posible solución 3

Y recordemos que podemos devolver expresiones directamente en el `return`.

```c
#define PORCENTAJE_DE_REBELDES 0.1
#define SOLDADOS_POR_REBELDE 2

unsigned int calcular_cantidad_rebeldes(unsigned int poblacion) {
  return (PORCENTAJE_DE_REBELDES * poblacion);
}

unsigned int calcular_cantidad_soldados(unsigned int poblacion) {
  return (calcular_cantidad_rebeldes(poblacion) * SOLDADOS_POR_REBELDE);
}
```

Notar que podemos llamar a una función en una expresión matemática.
