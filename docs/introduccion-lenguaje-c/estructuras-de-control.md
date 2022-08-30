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

### Estructuras de control selectivas
Estas estructuras de control permiten alterar el flujo normal del programa según se cumpla o no una determinada condición.
Esta condición está contenida en la expresi�n que est� entre paréntesis.
El resultado de evaluar esta expresión puede ser _true_(verdadero) o _false_ (falso).
En C el valor _true_ está representado por un valor distinto de cero y _false_ corresponde al 0.

#### if simple: