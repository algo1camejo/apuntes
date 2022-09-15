# Entrada y salida de datos

Normalmente en pseudocódigo se utilizan dos acciones: una para la lectura de valores desde algún dispositivo de entrada y otra para la escritura de valores en algún dispositivo de salida.
A continuación veremos los equivalentes en C.
Para poder utilizar estas funciones se debe hacer referencia en el programa a la biblioteca estándar `stdio.h`.
Esto se realiza mediante la directiva `#include <stdio.h>`.

## Salida de datos: `printf()`
Esta función se utiliza para realizar operaciones de salida.
La misma recibe una cadena que determina el formato y una lista de variables o expresiones:

```c
printf (const char* formato, ..);
```

La cadena de formato provee una descripción de la salida.
Dicha cadena posee dos tipos de caracteres, los caracteres comunes, que serán impresos tal cual en el dispositivo de salida, y los caracteres de especificación de formato con marcadores determinados por caracteres de escape ```%```.
Estos especificadores de formato se asignan según la localización relativa y el tipo de salida que la función debe producir.
La lista de variables o expresiones proporcionan los valores a escribir, teniendo en cuenta su orden relativo:

```c
	printf("Nombre %s, numero uno %d, real %5.2f.\n", "Juan", 12345, 3.14);
```
la salida obtenida será:

```
 Nombre Juan, numero uno 12345, real 3.14.
```
A continuación se describen los marcadores de formato:

Formateador |Salida     
------------|-------------|
\%d ó \%i	|entero en base 10 con signo (int)|                                                          
%u		 | entero en base 10 sin signo (int) |                                                         
%o	| entero en base 8 sin signo (int)                                                             |
%x	| entero en base 16, letras en minúscula (int)                                                  
%X	|entero en base 16, letras en mayúscula (int)                                                 
\%f	| Coma flotante decimal de precisión simple (float)                                             
%lf	| Coma flotante decimal de precisión doble (double)                                           
%e |  La notación científica (mantisa / exponente)
%E | La notación científica (mantisa / exponente)   
%c	| caracter (char)                                                          
%s	| cadena de caracteres (string)                                                        

## Entrada de datos: `scanf()`

De la misma forma que en pseudocódigo es posible asignarle un valor a una variable desde un dispositivo de entrada (teclado, por ejemplo) en C también lo es.
Para ello se utiliza la función `scanf()`. Al igual que `printf()`, la misma recibe una cadena de control y una lista de variables o expresiones:
```c
	scanf (const char* formato, ... );
```

La cadena control o formato provee una descripción del formato de entrada de los datos.
A este formato serán convertidos los datos ingresados en el dispositivo de entrada.
Estos caracteres de especificación de formato se obtienen con marcadores determinados por caracteres de escape `%`.
Dichos especificadores de formato se asignan según su localización relativa.
La lista de variables o expresiones proporcionan los valores a escribir, teniendo en cuenta su orden relativo:

```c
	scanf("%f", &grados_centigrados);
```

Lo que obtendremos de esta acción es que se esperará que desde el dispositivo de entrada estándar se ingrese un valor, se lo convertirá utilizando la cadena de formato especificada (los formatos serán los mismos que se especificaron en la sección anterior).

## Compilando el primer programa en C
Recordando el primer programa en C mostrado:

```c
#include<stdio.h>
int main() {
        printf("Hello World!");
        return 0;
}
```

Para poder hacer que este funcione en nuestra computadora se lo guarda como `primerprograma.c`.
Para que dicho programa pueda ser ejecutado, en primer lugar debe ser compilado, para lo que se utilizará el compilador de C.
Desde el directorio en el que fue guardado el archivo se ejecutará por linea de comandos:

```gcc primer_programa.c```

Esto debería generar un nuevo archivo llamado `a.out`.
Para verificar que se haya creado, se inspeccionan los contenidos del directorio mediante `ls`. Esto debería mostrar por pantalla que existen tanto `primer_programa.c` como `a.out` (el ejecutable).

Para que el programa ejecutable tenga un nombre en especial en lugar de `a.out` se debe compilar de la siguiente forma: 
```gcc primer_programa.c -o primer_programa```

Para ejecutar el programa recién creado, lo invocamos con `./primer_programa`.
