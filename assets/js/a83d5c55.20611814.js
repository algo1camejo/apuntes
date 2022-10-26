"use strict";(self.webpackChunkapuntes=self.webpackChunkapuntes||[]).push([[452],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1701:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={},c="Estructras de control",s={unversionedId:"introduccion-lenguaje-c/estructuras-de-control",id:"introduccion-lenguaje-c/estructuras-de-control",title:"Estructras de control",description:"En esta secci\xf3n se estudiar\xe1n las estructuras de control que proporciona el lenguaje de programaci\xf3n C realizando una comparaci\xf3n con las estructuras de control vistas en pseudoc\xf3digo.",source:"@site/docs/introduccion-lenguaje-c/estructuras-de-control.md",sourceDirName:"introduccion-lenguaje-c",slug:"/introduccion-lenguaje-c/estructuras-de-control",permalink:"/introduccion-lenguaje-c/estructuras-de-control",draft:!1,editUrl:"https://github.com/algo1camejo/apuntes/docs/introduccion-lenguaje-c/estructuras-de-control.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"El lenguaje de programaci\xf3n C",permalink:"/introduccion-lenguaje-c/lenguaje-c"},next:{title:"Tipos b\xe1sicos de datos",permalink:"/introduccion-lenguaje-c/tipos-de-datos"}},l={},i=[{value:"Bloque de acciones",id:"bloque-de-acciones",level:3},{value:"Estructuras de control selectivas",id:"estructuras-de-control-selectivas",level:3},{value:"if simple:",id:"if-simple",level:4}],u={toc:i};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"estructras-de-control"},"Estructras de control"),(0,a.kt)("p",null,"En esta secci\xf3n se estudiar\xe1n las estructuras de control que proporciona el lenguaje de programaci\xf3n C realizando una comparaci\xf3n con las estructuras de control vistas en pseudoc\xf3digo."),(0,a.kt)("h3",{id:"bloque-de-acciones"},"Bloque de acciones"),(0,a.kt)("p",null,'Los bloques de acciones son agrupaciones de acciones o declaraciones que sint\xe1cticamente son equivalentes a una acci\xf3n sencilla, permitiendo asegurar que si el bloque se ejecuta todas sus instrucciones se ejecutar\xe1n respetando la secuencia de las mismas dentro del bloque.\nCabe recordar que las acciones se delimitan con el caracter ";". En el lenguaje de programaci\xf3n C los caracteres {} delimitan el inicio y el fin de un bloque.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'// el caracter { marca el inicio del bloque\n{ \n    x =1;\n    y =2;\n    printf("%i",x+1);\n} \n// el caracter } marca el fin del bloque\n')),(0,a.kt)("h3",{id:"estructuras-de-control-selectivas"},"Estructuras de control selectivas"),(0,a.kt)("p",null,"Estas estructuras de control permiten alterar el flujo normal del programa seg\xfan se cumpla o no una determinada condici\xf3n.\nEsta condici\xf3n est\xe1 contenida en la expresi\ufffdn que est\ufffd entre par\xe9ntesis.\nEl resultado de evaluar esta expresi\xf3n puede ser ",(0,a.kt)("em",{parentName:"p"},"true"),"(verdadero) o ",(0,a.kt)("em",{parentName:"p"},"false")," (falso).\nEn C el valor ",(0,a.kt)("em",{parentName:"p"},"true")," est\xe1 representado por un valor distinto de cero y ",(0,a.kt)("em",{parentName:"p"},"false")," corresponde al 0."),(0,a.kt)("h4",{id:"if-simple"},"if simple:"))}d.isMDXComponent=!0}}]);