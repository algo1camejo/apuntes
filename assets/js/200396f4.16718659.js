"use strict";(self.webpackChunkapuntes=self.webpackChunkapuntes||[]).push([[361],{3905:(e,a,n)=>{n.d(a,{Zo:()=>s,kt:()=>m});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=r.createContext({}),u=function(e){var a=r.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},s=function(e){var a=u(e.components);return r.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=t,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,i(i({ref:a},s),{},{components:n})):r.createElement(g,i({ref:a},s))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},876:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),t=(n(7294),n(3905));const o={sidebar_position:1},i="Introducci\xf3n al lenguaje de programaci\xf3n C",l={unversionedId:"introduccion-lenguaje-c/introduccion",id:"introduccion-lenguaje-c/introduccion",title:"Introducci\xf3n al lenguaje de programaci\xf3n C",description:"Caracter\xedsticas e historia",source:"@site/docs/introduccion-lenguaje-c/introduccion.md",sourceDirName:"introduccion-lenguaje-c",slug:"/introduccion-lenguaje-c/introduccion",permalink:"/introduccion-lenguaje-c/introduccion",draft:!1,editUrl:"https://github.com/algo1camejo/apuntes/docs/introduccion-lenguaje-c/introduccion.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Buenas pr\xe1cticas de programaci\xf3n",permalink:"/primeros-pasos/buenas-practicas"},next:{title:"El lenguaje de programaci\xf3n C",permalink:"/introduccion-lenguaje-c/lenguaje-c"}},c={},u=[{value:"Caracter\xedsticas e historia",id:"caracter\xedsticas-e-historia",level:3},{value:"Instalaci\xf3n",id:"instalaci\xf3n",level:3},{value:"El Sistema de Compilaci\xf3n",id:"el-sistema-de-compilaci\xf3n",level:3}],s={toc:u};function d(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",(0,r.Z)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"introducci\xf3n-al-lenguaje-de-programaci\xf3n-c"},"Introducci\xf3n al lenguaje de programaci\xf3n C"),(0,t.kt)("h3",{id:"caracter\xedsticas-e-historia"},"Caracter\xedsticas e historia"),(0,t.kt)("p",null,"Un lenguaje de programaci\xf3n es una estructura que con determinada sint\xe1xis y base sem\xe1ntica permite a las personas darle \xf3rdenes a la computadora."),(0,t.kt)("p",null,"El lenguaje de programaci\xf3n C fue forjado en los laboratorios Bell (AT\\&T) por Dennis M. Ritchie en los a\xf1os 70. Basado originalmente en el lenguaje de programaci\xf3n B, cuyo mayor defecto era la carencia de tipos de datos predefinidos, Ritchie transform\xf3 el lenguaje de programaci\xf3n B en el lenguaje de programaci\xf3n C manteniendo la sintaxis de B y adem\xe1s agreg\xe1ndole tipos de datos predefinidos y otros cambios."),(0,t.kt)("p",null,'Citando al libro "El lenguaje de programaci\xf3n C" - Kernighan, Ritchie: '),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},'"C es un lenguaje de programaci\xf3n de prop\xf3sito general que ofrece como ventajas econom\xeda de expresi\xf3n, control de flujo y estructuras de datos modernos y un rico conjunto de operadores. Adem\xe1s, C no es un lenguaje de \u201cmuy alto nivel\u201d ni \u201cgrande", y no est\xe1 especializado en alguna \xe1rea especial de aplicaci\xf3n. El lenguaje C no est\xe1 ligado a ning\xfan hardware o sistema en particular y es f\xe1cil escribir programas que correr\xe1n sin cambios en cualquier m\xe1quina que maneje C." ')),(0,t.kt)("p",null,"C es un lenguaje de no muy alto nivel, tipado y compilado."),(0,t.kt)("p",null,'Se dice que un lenguaje de programaci\xf3n es de "muy  alto nivel" cuando este se m\xe1s al lenguaje natural humano que al lenguaje binario de las computadoras. '),(0,t.kt)("p",null,"Un lenguaje es tipado cuando se debe declarar el tipo de dato que va a guardar una variable."),(0,t.kt)("p",null,"Se dice que un lenguaje es compilado cuando para poder ejecutar un programa, primero hay que compilarlo (convertir el programa escrito en algo que la computadora pueda entender y ejecutar)."),(0,t.kt)("h3",{id:"instalaci\xf3n"},"Instalaci\xf3n"),(0,t.kt)("p",null,"A continuaci\xf3n se explicar\xe1 c\xf3mo instalar los programas necesarios para poder implementar programas en el lenguaje de programaci\xf3n C.\nPara ello se utilizar\xe1 el compilador Open Source m\xe1s conocido del lenguaje C llamado GCC, originalmente GCC significaba GNU C Compiler (compilador GNU de C), porque compilaba solamente este lenguaje.\nPosteriormente se extendi\xf3 para compilar C++, Fortran, Ada y muchos otros lenguajes de programaci\xf3n.\nActualmente su nombre significa GNU Compiler."),(0,t.kt)("p",null,"Si se est\xe1 utilizando una PC que tiene instalado un sistema operativo basado en Linux o Unix se debe ejecutar, desde la l\xednea de comandos, la siguiente instrucci\xf3n para saber si efectivamente GCC est\xe1 instalado:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"$gcc -v \n")),(0,t.kt)("p",null,"Si el compilador se encuentra instalado en esa computadora deber\xe1 aparecer el siguiente mensaje:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"Using built-in specs.\nCOLLECT_GCC=gcc\nCOLLECT_LTO_WRAPPER=/usr/lib/gcc/x86_64-linux-gnu/7/lto-wrapper\nOFFLOAD_TARGET_NAMES=nvptx-none\nOFFLOAD_TARGET_DEFAULT=1\nTarget: x86_64-linux-gnu\nConfigured with: ../src/configure -v --with-pkgversion='Ubuntu 7.5.0-3ubuntu1~18.04' --with-bugurl=file:///usr/share/doc/gcc-7/README.Bugs --enable-languages=c,ada,c++,go,brig,d,fortran,objc,obj-c++ --prefix=/usr --with-gcc-major-version-only --program-suffix=-7 --program-prefix=x86_64-linux-gnu- --enable-shared --enable-linker-build-id --libexecdir=/usr/lib --without-included-gettext --enable-threads=posix --libdir=/usr/lib --enable-nls --enable-bootstrap --enable-clocale=gnu --enable-libstdcxx-debug --enable-libstdcxx-time=yes --with-default-libstdcxx-abi=new --enable-gnu-unique-object --disable-vtable-verify --enable-libmpx --enable-plugin --enable-default-pie --with-system-zlib --with-target-system-zlib --enable-objc-gc=auto --enable-multiarch --disable-werror --with-arch-32=i686 --with-abi=m64 --with-multilib-list=m32,m64,mx32 --enable-multilib --with-tune=generic --enable-offload-targets=nvptx-none --without-cuda-driver --enable-checking=release --build=x86_64-linux-gnu --host=x86_64-linux-gnu --target=x86_64-linux-gnu\nThread model: posix\ngcc version 7.5.0 (Ubuntu 7.5.0-3ubuntu1~18.04) \n")),(0,t.kt)("p",null,"De no aparecer ning\xfan mensaje significa gcc no est\xe1 instalado en la computadora, por lo tanto se deber\xe1 proceder a la instalaci\xf3n manual.\nSi contamos con una de las instalaciones de linux m\xe1s comunes, como por ejemplo, Ubuntu o Mint podremos instalarlo desde la l\xednea de comando de una terminal escribiendo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"sudo apt-get install gcc\n")),(0,t.kt)("p",null,"Se puede encontrar m\xe1s informaci\xf3n para instalar gcc en ",(0,t.kt)("a",{parentName:"p",href:"http://gcc.gnu.org/install/"},"http://gcc.gnu.org/install/"),"."),(0,t.kt)("h3",{id:"el-sistema-de-compilaci\xf3n"},"El Sistema de Compilaci\xf3n"),(0,t.kt)("p",null,"Las partes del proceso de compilaci\xf3n son 4, y utilizan 4 herramientas para llevar a cabo cada una de estas fases. Estas herramientas son: "),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"el preprocesador."),(0,t.kt)("li",{parentName:"ul"},"el compilador"),(0,t.kt)("li",{parentName:"ul"},"el ensamblador"),(0,t.kt)("li",{parentName:"ul"},"el link-editor o linker")),(0,t.kt)("p",null,"Estas en conjunto son conocidas como un sistema de compilaci\xf3n.   "),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"La fase de procesamiento"),". El preprocesador (cpp) modifica el c\xf3digo de fuente original de un programa escrito en C de acuerdo a las directivas que comienzan con un caracter(","#","). El resultado de este proceso es otro programa en C con la extensi\xf3n."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"La fase de compilaci\xf3n"),". El compilador (cc) traduce el programa .i a un archivo de texto .s que contiene un programa en lenguaje assembly (lenguaje de bajo nivel)."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"La fase de ensamblaje"),". A continuaci\xf3n el ensamblador (as) traduce el archivo .s en instrucciones de lenguaje de m\xe1quina complet\xe1ndolas en un formato conocido como programa objeto realocable. Este es almacenado en un archivo con extensi\xf3n .o."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"La fase de link edici\xf3n"),". Generalmente los programas escritos en lenguaje C hacen uso de funciones que forman parte de la ",(0,t.kt)("em",{parentName:"li"},"biblioteca est\xe1ndar de C")," que es provista por cualquier compilador de ese lenguaje. Por ejemplo la funci\xf3n ",(0,t.kt)("inlineCode",{parentName:"li"},"printf()"),", la misma se encuentra en un archivo objeto precompilado que tiene que ser mezclado con el programa que se esta compilando, para ello el linker realiza esta tarea teniendo como resultado un archivo objeto ejecutable.")))}d.isMDXComponent=!0}}]);