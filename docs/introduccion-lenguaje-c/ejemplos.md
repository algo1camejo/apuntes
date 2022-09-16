# Ejemplos

En esta sección se muestran algunos ejemplos de programas que contiene entrada y salida de datos.
Además se presentan algunos ejemplos básicos en los que se utilizan también las estructuras de control.

### Entrada y salida de datos con formato

**Ejemplo**: *Lectura de un valor numérico por teclado.*

En este ejemplo se define una variable de tipo entera a la cual se le asigna un valor entero ingresado por teclado.
Posteriormente se muestra el contenido de la variable por la salida estándar.

```c
#include<stdio.h>

int main(){
    int mi_variable;	/* declaracion de la variable */

    /* recordar que antes de un scanf() siempre va un printf()*/
    printf("ingrese un número entero:");   // escritura
    scanf("%d",&mi_variable);               // lectura
    printf("%d",mi_variable);
    return 0;
}
```

**Ejemplo**: *Área y circunferencia.*
Diseñar un algoritmo que calcule la longitud de la circunferencia y el área de un círculo de radio dado.

* Análisis del problema:
	- Longitud=2\*π\*radio
	- Area=π\*radio<sup>2</sup>
	- Datos de entrada: Radio del círculo.
	- Datos de salida: Longitud y área del circulo.
* Diseño del algoritmo:
```
Algoritmo circulo;
Constantes
    pi=3.1416;
Variables
    radio:real;
    longitud:real;
    area:real;
inicio
    longitud:=0;
    area:=0;
    escribir("ingrese el valor del radio del círculo");
    leer(radio);
    longitud:=2*pi*radio;
    area:=pi * radio * radio;
    escribir("La longitud del circulo es:",longitud);
    escribir("El area del circulo es:",area);
fin.
```
* Implementación en C:
```c
#include<stdio.h>

const float PI = 3.1416;

int main(){
    float radio;
    float longitud;
    float area;


    printf("ingrese el valor del radio del c�rculo");
    scanf("%f",&radio);
    longitud=2*PI*radio;
    area=PI* radio * radio;
    printf("La longitud del circulo es:%f",longitud);
    printf("El area del circulo es:%f",area);
    return 0;
}
```

**Ejemplo**: *Informar signo de un número real*.

Problema: Leer un número real y emitir una leyenda informando si es mayor, menor o igual a cero.

* Análisis del problema: Se solicita al usuario que ingrese  un número real; y según:
    * Si el numero es igual a 0 se muestra por pantalla "El número ingresado es 0"
    * Si no, si el numero ingresado es > 0 se muestra "El número ingresado es mayor que 0".
    * en todo otro caso, se muestra por pantalla "El número ingresado es menor 0".
* Diseño del algoritmo:
```
	Algoritmo circulo;

	Variables
		numero:real;

	inicio
		escribir("Ingrese el valor de un número real");
		leer(numero);
		si (numero == 0 ) entonces
			escribir ("El número ingresado es 0")
		sino si (numero>0) entonces
			escribir ("El número ingresado es mayor a 0")
		sino
			escribir ("El número ingresado es menor a 0")
	fin
```

```c
#include<stdio.h>

int main(){
    int numero;

    printf("Ingrese el valor de un numero real");
    scanf("%i",&numero);
    if (numero == 0 )
            printf("El numero ingresado es 0")
    else if (numero > 0 )
            printf("El numero ingresado es mayor a 0")
            else
            printf("El numero ingresado es menor a 0");
    return 0;
}
```

## Ejemplos varios
Problema: Se ingresa un texto por teclado, caracter a caracter, y se desea saber cuantas letras posee el texto.
* Análisis del problema: Muchas veces realizar un buen análisis puede ser determinante para la resolución del problema. El enunciado de este problema suele llevar a las personas a creer que el texto debe ser almacenado completamente en una variable. Teniendo en cuenta los tipos de datos vistos hasta el momento, sería imposible de solucionar, pues no se ha visto aún, la forma de almacenar un texto entero en una variable.
	Aquí es donde una correcta interpretación del problema nos lleva a una solución simple y elegante. 
	* ¿Cómo se ingresa el texto? Caracter a caracter, por ende ¿Es necesario guardar en un caracter cada uno de los simbolos del texto?
	* En algún lado del enunciado dice que el texto debe ser almacenado completo? No

* Diseño del algoritmo:
``` 
Algoritmo letrasDeUnTexto;

Constante FIN='@';

Variables
	letra:caracter;
	cantidad:entero;

inicio
    cantidad =0;
	escribir("Ingrese el textto caracter a caracter y presione @ para finalizar");
	leer(letra);
	mientras (letra != FIN) hacer
	inicio
		si (letra<='A' && letra>='Z') || (letra<='a' && letra>='z') cantidad<-cantidad+1;
		leer(letra); 
	fin
	escribir("la cantidad de letras ingresadas es:", cantidad);
fin
``` 
```c
#include <stdio.h>

const char FIN = '@';

int main() {	
	char letra='.';
	int cantidad =0;
	
	printf("Ingrese un texto letra por letra y termine con arroba\n");
	
	while (letra!=FIN){
		if(  (letra<='A' && letra>='Z') || (letra<='a' && letra>='z') )     
		cantidad++;
		scanf(" %c", &letra);
	}
	printf("hay %d letras ingresadas \n", cantidad);
	return 0;
}
``` 
