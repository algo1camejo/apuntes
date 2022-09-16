# Estructras de control

En esta sección se estudiarán las estructuras de control que proporciona el lenguaje de programación C realizando una comparación con las estructuras de control vistas en pseudocódigo.

### Bloque de acciones
Los bloques de acciones son agrupaciones de acciones o declaraciones que sintácticamente son equivalentes a una acción sencilla, permitiendo asegurar que si el bloque se ejecuta todas sus instrucciones se ejecutarán respetando la secuencia de las mismas dentro del bloque.
Cabe recordar que las acciones se delimitan con el caracter ";". En el lenguaje de programación C los caracteres {} delimitan el inicio y el fin de un bloque.

```c
// el caracter { marca el inicio del bloque
{ 
    x =1;
    y =2;
    printf("%i",x+1);
} 
// el caracter } marca el fin del bloque
```

## Estructuras de control selectivas
Estas estructuras de control permiten alterar el flujo normal del programa según se cumpla o no una determinada condición.
Esta condición está contenida en la expresión que está entre paréntesis.
El resultado de evaluar esta expresión puede ser _true_(verdadero) o _false_ (falso).
En C el valor _true_ está representado por un valor distinto de cero y _false_ corresponde al 0.

### if simple
Esta estructura nos permite ejecutar un bloque de acción si la condición dentro del if se cumple. En pseudocódigo sería así:
```
si (expresion) entonces  accion;
```
```c
if (expresion) accion;
```
También se puede usar un bloque de acciones, en lugar de una sola acción.

```
si (expresion) entonces
inicio
    accion1;
    accion2;
    accion3;
    ...
    accionj;
fin
```

Que traducido al lenguaje C sería: 
```c
if (expresion){
    accion1;
    accion2;
    accion3;
    ...
    accionj;
}
```
Por ejemplo: 
```c
if(contador == 3){
    printf("Llegaste al 3!");
    contador ++; 
}
``` 
En el código anterior, la condición que se tiene que cumplir para que se ejecuten las acciones entre las llaves es que el valor que guarda la variable contador sea igual a 3. Si se cumple esta condición, se imprime el mensaje por pantalla y se le suma uno al valor del contador.

### if - else
Esta estructura nos permite controlar el flujo del programa para que se ejecuten unas u otras acciones dependiendo en una condición.
```
si (expresion) entonces
    accion1;
sino
    accion2;
```
```c
if (expresion)
    accion1;
else
    accion2;
```

Utilizando un bloque de acciones:

```
si (expresion) entonces
    inicio
        accion1	;
        accion2;
        accion3;
        ...
        accionj;
    fin
sino
    inicio
        accionj+1;
        accionj+2;
        accionj+3;
        ...
        accionj+n;
    fin
```

Y traducido al lenguaje C: 
```c
if (expresion){
    accion1;
    accion2;
    accion3;
    ...
    accionj;
}else{
    accionj+1;
    accionj+2;
    accionj+3;
    ...
    accionj+n;
}
```

Por ejemplo: 
```c
if(termino){
    contador = 5;
}
else {
    contador = 3;
}
```
En el ejemplo anterior, si la variable ```terminó``` tiene el valor true, (sería lo mismo que poner ```termino == true```), al contador se le asigna el valor 5. Por el contrario, si ```termino``` no es true, a la variable contador se le asignará el valor 3.


### if - else if

La construcción de esta forma de la estructura de control si (if) se la denomina si múltiple (if múltiple) o si anidados;
```
si (expresion) entonces
    accion1
sino si (expresion2) entonces
    accion2
sino si (expresion3) entonces
    accion3
sino si (expresion4) entonces
    accion4
sino
    accion5;
```

```c
if (expresion)
    accion1;
else if (expresion2)
    accion2;
else if (expresion3)
    accion3;
else if (expresion4)
    accion4;
else accion5;
```

Análisis: se evalúa expresion1. Si el resultado es ```true```, se ejecuta accion1.
Si el resultado es ```false```, se evalúa expresion2.
Si el resultado es ```true```, se ejecuta accion2, mientras que si es ```false``` se evalúa expresion3 y así sucesivamente.
Si ninguna de las expresiones evalúa a ```true```, se ejecuta accion5 que es la opción por defecto.
Todas las acciones pueden ser simples o compuestas.
Por ejemplo, el siguiente programa mostrará por pantalla si el valor de una variable entera es cero, negtivo o positivo.

```c
#include<stdio.h>

int main(){
	int mi_numero=10; // Se crea una variable con nombre mi_numero y
			// se le asigna el valor 10
	if (mi_numero == 0)
		printf("mi_numero vale 0");
	else if (mi_numero > 0)
		printf("mi_numero es positivo");
	else if (mi_numero < 0)
		printf("mi_numer es negativo");
	
	return 0;
}
```
### switch - case

Esta estructura de control surge debido a situaciones en las cuales se deben realizar un bloque de acciones, o al menos una acción diferente, para cada valor/es posible/es de una variable.
Lógicamente se podría seguir utilizando un ```if - else if```, pero el código rápidamente perdería claridad al repetir múltiples veces siempre la misma pregunta: cuál es el valor de la misma variable.
Con un switch se puede agrupar a todos los ```ifs``` en una estructura clara que muestra sencillamente toda la información relevante de lo que esta sucediendo.
```c
switch (variable) {
    case valor1:
        accion1;   //Bloque de acciones que se
                    //ejecuta si variable==valor1
    break;

    case valor2:
            accion2;   //Bloque de acciones que se
                    //ejecuta si variable==valor2
    break;

    ...
    ...

    case valorN:
            accionN;   //Bloque de acciones que se
                    //ejecuta si variable==valorN
    break;

    default:
        accionDefault;  //Bloque de acciones que se ejecuta
                        //si variable guarda un valor
                        //distinto a todos los anteriores
    break;
}
```

Nótese que si bien los valores fueron enumerados, no se requiere que estos sean sucesivos.
Es decir, podría ser :

```c
switch (variable) {
    case 5:
    accion1_si_variable_es_5;
    accion2_si_variable_es_5;
    ...
    accionN_si_variable_es_5;
    break;
    case 3:
    accion1_si_variable_es_3;
    accion2_si_variable_es_3;
    ...
    accionN_si_variable_es_3;
    break;
    case 7:
    accion1_si_variable_es_7;
    accion2_si_variable_es_7;
    ...
    accionN_si_variable_es_7;
    break;
}
```

Mas allá de las posibilidades del lenguaje, para facilitar la lectura los case deberían seguir un orden lógico, y las condiciones ser constantes nombradas o funciones booleanas.
El caso ```default``` es puramente _opcional_, y no se requiere para el funcionamiento del ```case```.

## Estructuras de control iterativas
Las estructuras de control iterativas o repetitivas, repiten un bloque de acciones mientras se cumple una condición.
Este tipo de estructura de control suele denominarse en inglés _loop_ y en español ciclo o bucle.

### while
Esta estructura de control repite una acción o bloque de acciones mientras la expresión de control evalúe a true.
Esta evaluación se realiza antes de la ejecución del bloque.
Funciona de la siguiente manera:
* Se evalúa la expresión booleana de control de la iteración.
* Si la evaluación arroja ```true```, se ejecuta el bloque de acciones y se vuelve al paso anterior.
* Si no, se continúa con la ejecución de la acción siguiente al bloque de acciones.

Ejemplo del uso de la estructura de control while de una sola acción:

```
mientras (expresion)  Hacer accion;
```
```c
while (expresion) accion;
```

Ejemplo del uso de la estructura de control while repitiendo un bloque de acciones:

```
mientras (expresion)  hacer
inicio
        accion1;
        accion2;
        ...
        accionj;
fin
```
```c
while (expresion){
        accion1;
        accion2;
        ...
        accionj;
}
```
A continuación se muestra un sencillo ejemplo escrito en lenguaje C:
```c
/* El siguiente programa muestra por pantalla el valor de una variable entera
sumada a si misma mientras que el valor de esta sea menor a 100 */

#include<stdio.h>

int main(){
	int mi_numero=1;
	
	while (mi_numero < 100) {
		mi_numero= mi_numero + mi_numero;
	}
	printf("valor final de mi_numero es %i\n",mi_numero);
	
	return 0;
}
```

### do - while
Esta estructura de control repite una acción o bloque de acciones mientras la expresión de control resulte ```true```.
Pero en este caso, evalúa dicha expresión una vez terminada la ejecución, es decir que se garantiza que su acción o bloque de acciones se ejecute por lo menos una vez.
Ejemplo del uso de la estructura de control ```do while``` de una sola acción:

```
repetir
    accion
mientras(expresion);
```
```c
do
    accion;
while (expresion);
```

Ejemplo del uso de la estructura de control ```do - while``` repitiendo un bloque de acciones:

```
repetir
    accion1;
    accion2;
    ...
    accionj;
mientras(expresion);
```
```c
do{
    accion1;
    accion2;
    ...
    accionj;
} while (!expresion);
```

### for
Esta estructura de control se utiliza cuando se conoce la cantidad de iteraciones previamente y esta cantidad es un número finito de repeticiones (iteración definida).
Ejemplo del uso de la estructura de control **for** de una sola acción:

```
Para variable <- expresion1 hasta  expresion2  Hacer accion;
```
Lo que en C se traduce como: 
```c
for (expresion1 ;  expresion2 ;  expresion3 )  accion;
```

Ejemplo del uso de la estructura de control **for** repitiendo un bloque de acciones:

```
Para Contador <- expresion1 hasta  expresion2  Hacer
Inicion
    accion1;
    accion2;
    ...
    accionj;
Fin
```
Y en C: 
```c
for (expresion1 ;  expresion2 ;  expresion3 ) {
    accion1;
    accion2;
    ...
    accionj;
}
```

Dado que la estructura de control for puede parecer compleja a continuación se propone un pequeño ejemplo;

```c
/*En el siguiente código se van a realizar las dos acciones de suma iniciando con el contador igual a 1 hasta que contador valga 8*/
for (int contador = 1;  contador <=8; contador++) {
    suma = suma + contador ;
    tolal= total + suma ;
}
```

Cada una de las tres expresiones que intervienen en el for tienen un propósito bien específico:
* La expresion1 se encarga de definir cuál es la variable de control del ciclo y el valor inicial de la misma (en el ejemplo anterior ```int contador = 1```).
* La expresion2 define cuál será la condición del corte del ciclo (```contador <=8```). Como es una condición, esta tiene que ser una expresión booleana.
* La expresion3 define cómo se incrementa la variable de control (```contador++```).

Otro ejemplo más de una iteración escrita con un for:

```c
/*Suma una variable a si misma una cantidad de veces determinada*/
#include<stdio.h>

int main(){
	int cantidad_de_sumas=10;
	int mi_numero=1;

	for(int i=0; i<=cantidad_de_sumas;i= i+1){
		mi_numero=mi_numero + mi_numero;
	}
	
	return 0;
}
```

Es interesante destacar que la estructura de control **for** es totalmente equivalente a la siguiente construcción utilizando la estructura de control **while**:

```
for (expresion1 ;  expresion2 ;  expresion3 )  accion;
```

```
expresion1;
while (expresion2){
    accion;
    expresion3;
}
```
