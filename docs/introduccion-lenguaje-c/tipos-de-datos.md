# Tipos básicos de datos
El lenguaje C provee varios tipos básicos de datos, la mayoría de estos están formados por uno de los cuatro especificadores de tipos aritméticos básicos del lenguaje C (char, int, float y double).

### Tipo char
Las variables caracter (tipo char) contienen un único caracter y se almacenan en un byte de memoria (8 bits). Como se vió el byte es una unidad de medida correspondiente a 8 bits, un bit (Binary Digit) es la mínima unidad de medida de la información.

La cantidad de combinaciones posibles que se pueden obtener con j bits está dada por la fórmula  2<sup>j</sup>, por ende con un byte se pueden obtener 2<sup>8</sup> combinaciones, es decir, 256 valores posibles.

### Tipo de dato entero
En este caso veremos los tipos de datos que surgen del especificador de tipo aritmético básico int y también de la combinación de especificadores opcionales (signed, unsigned, short, long).


|Tipo | Tamaño | Mínimo | Máximo |
------|--------|--------|--------|
 char|	  1 byte          |  -128 		 |     127  
 unsigned char 	|  1 byte          |     0 		 |    255   
short 		|  2 bytes         | -32,768 | 32,767 
unsigned short   |  2 bytes         |  0 | 65,535  |  
int	|  4 bytes         | -2,147,483,648      | 2,147,483,647 
unsigned int	|  4 bytes   |  0   | 4,294,967,295
long 	        |  4 bytes   | -2,147,483,648 | 2,147,483,647  
unsigned long 	|  4 bytes   |  0 | 4,294,967,295 
int32\_t		|  4 bytes	  | -2,147,483,648 | 2,147,483,647 	|  4 bytes	   |  0 | 4,294,967,295
int64\_t		|  4 bytes	   |  -9,223,372,036,854,775,808  | 9,223,372,036,854,775,807 
uint64\_t	|  8 bytes	|  0 | 18,446,744,073,709,551,615

_Rangos de tipos de datos de C en una arquitectura de 32 bits_

Para saber cómo se obtienen los valores máximos y mínimos de cada tipo de dato, hay que remitirse a la cantidad de combinaciones posibles según la longitud en bytes del mismo.
Vale la pena destacar que los tipos de datos marcados como signed utilizan el bit más significativo para almacenar el signo, un 1 corresponde a negativo y un 0 corresponde a positivo.


### Tipo booleano
El tipo de dato booleano se define como uno que sólo admite dos valores posibles: _true_ (verdadero) y _false_ (falso).
El lenguaje de programación C no incluye (por defecto) un tipo de dato booleano, en cambio, aquellas expresiones que evalúen a 0 se las considera falsas, y a todas las demás, verdaderas.

Es posible abstraerse de esta implementación poco intuitiva mediante la inclusión de ```stdbool.h```, una biblioteca del estándar, que permite declarar variables de tipo bool y asignarles ```true``` o ```false```.

### Tipo de datos de coma flotante (floats)
La representación de coma flotante (en inglés floating point) es una forma de notación científica usada en los microprocesadores con la cual se pueden representar números racionales extremadamente grandes y pequeños de una manera muy eficiente y compacta, y con la que se pueden realizar operaciones aritméticas.
Es importante destacar que la comparación de flotantes puede resultar problemática, debido a errores de redondeo, variables que se espera que sean iguales pueden tener valores ligeramente distintos.


|Tipo| Tamaño| Rango de valores| Precisión |
-----|-------|-----------------|-----------|
float | 4 byte | 1.2E-38 to 3.4E+38 |	6 lugares decimales|
double | 8 byte	| 2.3E-308 to 1.7E+308	| 15 lugares decimales
long double |	 10 byte | 3.4E-4932 to 1.1E+4932 |	19 lugares decimales| 

El estándar define formatos para la representación de números en coma flotante (incluyendo el cero) y valores desnormalizados, así como valores especiales como infinito y NaN (Not a Number).
IEEE 754 especifica cuatro formatos para la representación de valores en coma flotante: precisión simple (32 bits), precisión doble (64 bits).
