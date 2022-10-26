"use strict";(self.webpackChunkapuntes=self.webpackChunkapuntes||[]).push([[919],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>m});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=r.createContext({}),s=function(e){var a=r.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=s(e.components);return r.createElement(c.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=t,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(g,l(l({ref:a},d),{},{components:n})):r.createElement(g,l({ref:a},d))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1802:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),t=(n(7294),n(3905));const o={sidebar_position:1},l="El lenguaje de programaci\xf3n C",i={unversionedId:"introduccion-lenguaje-c/lenguaje-c",id:"introduccion-lenguaje-c/lenguaje-c",title:"El lenguaje de programaci\xf3n C",description:"Primer programa en C",source:"@site/docs/introduccion-lenguaje-c/lenguaje-c.md",sourceDirName:"introduccion-lenguaje-c",slug:"/introduccion-lenguaje-c/lenguaje-c",permalink:"/introduccion-lenguaje-c/lenguaje-c",draft:!1,editUrl:"https://github.com/algo1camejo/apuntes/docs/introduccion-lenguaje-c/lenguaje-c.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n al lenguaje de programaci\xf3n C",permalink:"/introduccion-lenguaje-c/introduccion"},next:{title:"Estructras de control",permalink:"/introduccion-lenguaje-c/estructuras-de-control"}},c={},s=[{value:"Primer programa en C",id:"primer-programa-en-c",level:3},{value:"Variables",id:"variables",level:3},{value:"Constantes",id:"constantes",level:3},{value:"Comentarios",id:"comentarios",level:3},{value:"Palabras reservadas",id:"palabras-reservadas",level:3}],d={toc:s};function u(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",(0,r.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"el-lenguaje-de-programaci\xf3n-c"},"El lenguaje de programaci\xf3n C"),(0,t.kt)("h3",{id:"primer-programa-en-c"},"Primer programa en C"),(0,t.kt)("p",null,"En esta secci\xf3n se muestra un primer ejemplo de programa escrito en el lenguaje de programaci\xf3n C."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Algoritmo hola_mundo en pseudoc\xf3digo:")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'    inicio\n        escribir("Hello World!");\n    fin\n')),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Algoritmo hola_mundo en C:")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},'    #include<stdio.h>\n\n    int main() {\n            printf("Hello World!");\n            return 0;\n    }\n')),(0,t.kt)("p",null,"Una peque\xf1a explicaci\xf3n de qu\xe9 es cada una de las cosas que se ven en el programa escrito en lenguaje C:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"}," #include <stdio.h> \n")),(0,t.kt)("p",null,"   Es la directiva de preprocesador necesaria para poder usar ",(0,t.kt)("inlineCode",{parentName:"p"},"printf()"),".\nEn pseudoc\xf3digo se omite la inclusi\xf3n de bibliotecas por simplicidad, y por ese mismo motivo se usa escribir() en vez de las complejas funciones de entrada/salida de C."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"int main()\n")),(0,t.kt)("p",null,"Es la forma de entrada al programa. Cuando se ejecuta un programa, comienza a ejecutarse desde esta l\xednea."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},'printf("Hello World!");\n')),(0,t.kt)("p",null,'Esta l\xednea es la que hace que se muestre "Hello World!".  '),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"return 0;\n")),(0,t.kt)("p",null,"Ordena que el programa termine su ejecuci\xf3n y devuelva 0 al contexto en el que fue ejecutado."),(0,t.kt)("h3",{id:"variables"},"Variables"),(0,t.kt)("p",null,"Para definir una variable en C se debe establecer el tipo de dato al cual pertenece, para ello se utiliza cualquiera de los especificadores de tipos de las tablas de la secci\xf3n anterior. Seguidamente se debe dotar de un nombre a la variable, a ese nombre se lo denomina ",(0,t.kt)("strong",{parentName:"p"},"identificador"),". Un identificador se lo escribe teniendo en cuenta que es una secuencia de letras (letras min\xfasculas, letras may\xfasculas, y el caracter ``","_","'' es considerado una letra) y d\xedgitos.}\nEs importante recalcar que la primera letra de un identificador no puede ser un d\xedgito num\xe9rico (0,1,2,3,4,5,6,7,8,9). La declaraci\xfan se termina con un caracter '';''. Se hace distinci\xf3n entre letras may\xfasculas y min\xfasculas. As\xed, Casa es considerado como un identificador distinto de casa y de CASA.\nEjemplos de declaraci\xf3n de variables: "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"int      contador;\nchar     inicial_nombre;\nfloat    raiz;\n")),(0,t.kt)("p",null,"Otros ejemplos de identificadores v\xe1lidos son los siguientes:\n",(0,t.kt)("inlineCode",{parentName:"p"},"tiempo"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"distancia1"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"caso_A"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"PI"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"velocidad_de_la_luz"),"\nPor el contrario, los siguientes nombres no son v\xe1lidos (\xbfPor qu\xe9?):"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"1_valor"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"tiempo-total"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"dolare$"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"%final"),"."),(0,t.kt)("p",null,"Cuando se desea realizar m\xe1s de una declaraci\xf3n de variables del mismo tipo de dato son equivalentes:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"int numero;\nint contador;\nint cantidadDePasos;\ndouble  raiz;\ndouble  importe;\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"int     numero, contador,cantidadDePasos;\ndouble  raiz, importe;\n")),(0,t.kt)("h3",{id:"constantes"},"Constantes"),(0,t.kt)("p",null,"..."),(0,t.kt)("h3",{id:"comentarios"},"Comentarios"),(0,t.kt)("p",null,"Los caracteres /",(0,t.kt)("em",{parentName:"p"}," se emplean para iniciar un comentario  introducido entre el c\xf3digo del programa; el comentario termina con los caracteres "),"/.\nNo se puede introducir un comentario dentro de otro.\nTodo texto introducido entre los s\xedmbolos de comienzo /",(0,t.kt)("em",{parentName:"p"}," y final"),"/ de comentario son siempre ignorados por el compilador.\nPor ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"variable_1 = variable_2; /* En esta l\xednea se asigna a\n                                variable_1 el valor\n                                contenido en variable_2 */\n")),(0,t.kt)("p",null,"El lenguaje C permite tambi\xe9n otro tipo de comentarios, usando los caracteres //. Todo lo que va en cualquier l\xednea del c\xf3digo detr\xe1s de la doble barra // y hasta el final de dicha l\xednea, se considera como un comentario y es ignorado por el compilador.\nPara comentarios cortos, esta forma es m\xe1s c\xf3moda que la anterior, pues no hay que preocuparse de cerrarlos (el fin de l\xednea act\xfaa como cierre).\nComo contrapartida, si un comentario ocupa varias l\xedneas hay que repetir la doble barra // en cada una de las l\xedneas.\nCon este segundo procedimiento de introducir comentarios, el \xfaltimo ejemplo podr\xeda ponerse en la forma:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"variable_1 = variable_2; // En esta l\xednea se asigna a\n                            // variable_1 el valor\n                            // contenido en variable_2\n")),(0,t.kt)("h3",{id:"palabras-reservadas"},"Palabras reservadas"),(0,t.kt)("p",null,"Las palabras reservadas son aquellas que tienen un significado o funci\xf3n en el lenguaje de programaci\xf3n, por lo que no podr\xe1n ser utilizadas para otro prop\xf3sito. Por ejemplo, no se podr\xe1 usar ninguna de estas palabras como nombre de una variable.\nSeg\xfan la secci\xf3n 3.1.1 del American National Standard for Information Systems --- Programming Language C, X3.J11-1988 las 32 palabras reservadas del lenguaje de programaci\xf3n C se listan a continuaci\xf3n:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"  auto     double   int      struct\n  break    else     long     switch\n  case     enum     register typedef\n  char     extern   return   union\n  const    float    short    unsigned\n  continue for      signed   void\n  default  goto     sizeof   volatile\n  do       if       static   while\n")))}u.isMDXComponent=!0}}]);