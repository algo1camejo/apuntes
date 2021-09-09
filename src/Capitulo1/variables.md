## Variables

Desde el punto de vista de la programación, una variable es una entidad que tiene su propio espacio de memoria asignado, puede almacenar un valor de un determinado tipo de dato. Una variable puede ser accedida para lectura (consulta del valor) o escritura (modificación del valor).

Las variables tienen un identificador único, es decir, no pueden haber dos con el mismo nombre.

Entonces, abstrayéndonos un poco, se puede pensar a la variable como una "caja", la cual te permite meter o sacar diferentes cosas (valores). Es decir que NO es un valor, sino un contenedor de valores.

### ¿Cómo definimos una variable?

Depende completamente del lenguaje con el que estemos trabajando, hay ciertos que lenguajes que utilizan palabras reservadas para las definiciones de variables y otros que no.

Por ejemplo,

```c
// C, Java, C++, C#
int nombre_var_entera;
float nombre_var_numerica; // admite valores con coma.
char nombre_var_caracter;
bool nombre_var_booleana;
```

En JavaScript se tienen dos palabras para declarar una variable de cualquier tipo de dato.
```javascript
let una_variable;
var otra_variable;
```

Y después hay lenguajes como Python en los cuales no se utilizan palabras reservadas:
```py
una_variable = 5
otra_variable = False
```
## Constantes

En la programación una constante es un conjunto de celdas de memoria que toman un valor al iniciar el algoritmo y posee un identificador único.

Un ejemplo de constante podría ser el número PI. También, la cantidad de días de la semana.

## Nombres para Constantes y Variables
La elección de nombres de las variables y constantes no es tan fácil como parece. A continuación se enumeran algunas reglas a seguir.

- Evitar la desinformación.
- Nombres dintinguibles.
- Nombres fáciles de buscar.
- Una sola palabra por concepto.
- Evitar los nombres muy genéricos.