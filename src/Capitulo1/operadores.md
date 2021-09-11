## Operadores

Un operador es un caracter o grupo de caracteres que actúa sobre una, dos o más variables y/o constantes, para realizar una determinada operación con un determinado resultado.

### Aritméticos

Permiten realizar operaciones aritméticas. Cada lenguaje debe proporciona ciertos operadores báscicos, así como:

- Multiplicación.
- División.
- Suma.
- Resta.
- Módulo.

Hay lenguajes que también brindan el operador de potencia.

Por ejemplo, Python

```py
numero = 2**3
```
Al ejecutarse esa línea la variable numero almacenará 8.

### Relacionales

Se utilizan para comparar dos valores. Devuelven un valor lógico, verdadero o falso.

Se tienen los operadores:
- Menor que
- Menor o igual que
- Mayor que
- Mayor o igual que
- Igual
- No igual

### Lógicos

A través de valores booleanos (verdadero o falso), devuelve otro valor booleano.

Operadores:
- o (or) : Devuelve true si al menos uno de los valores es verdadero.
- y (and) : Devuelve true si todos los valores son verdaderos.
- negacion (negation) : Niega el valor lógico.


## Operadores en C


### Aritméticos

- `*` : Multiplicación
- `/` : División
- `+` : Suma
- `-` : Resta
- `%` : Módulo

### Relacionales

- `<` : Menor que
- `<=` : Menor o igual que
- `>` : Mayor que
- `>=` : Mayor o igual que
- `==` : Igual 
- `!=` : Diferente

Ejemplos,
```c
5 < 5 : false
5 == 5 : true
6 > 5 : true
```

### Lógicos

- `||` : or
- `&&` : and

Ejemplos,
```c
// Con que alguna de las dos expresiones sea verdadera es suficiente para que || lo sea también.
((5 > 4):true || (2 == 3):false) : true

// Ambas expresiones deben ser verdaderas para que && también lo sea.
((5 == 6):false && (8==8):true) : false
((2 > 1):true && (5 < 10):true) : true
```