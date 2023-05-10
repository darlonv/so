"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[4825],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5750:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:3},i="Comunica\xe7\xe3o",l={unversionedId:"Linux/Comunicacao",id:"Linux/Comunicacao",title:"Comunica\xe7\xe3o",description:"Comandos relaciondos \xe0 comunica\xe7\xe3o e redes.",source:"@site/docs/01-Linux/03-Comunicacao.md",sourceDirName:"01-Linux",slug:"/Linux/Comunicacao",permalink:"/so/docs/Linux/Comunicacao",draft:!1,editUrl:"https://github.com/darlonv/so/tree/main/docs/01-Linux/03-Comunicacao.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Sistema",permalink:"/so/docs/Linux/Sistema"},next:{title:"Vari\xe1veis",permalink:"/so/docs/Linux/Variaveis"}},p={},m=[{value:"Rede",id:"rede",level:2},{value:"ping",id:"ping",level:3},{value:"Web",id:"web",level:2},{value:"wget",id:"wget",level:3},{value:"curl",id:"curl",level:3},{value:"Refer\xeancias",id:"refer\xeancias",level:2}],s={toc:m},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"comunica\xe7\xe3o"},"Comunica\xe7\xe3o"),(0,r.kt)("p",null,"Comandos relaciondos \xe0 comunica\xe7\xe3o e redes."),(0,r.kt)("h2",{id:"rede"},"Rede"),(0,r.kt)("h3",{id:"ping"},"ping"),(0,r.kt)("p",null,"O comando ",(0,r.kt)("inlineCode",{parentName:"p"},"ping")," \xe9 utilizado para testar a conex\xf5es entre duas m\xe1quinas distintas. Em ambientes Linux, os pacotes s\xe3o enviados indefinidamente, e o comando deve ser interrompido com ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl+c"),". Para limitar o n\xfamero de pacotes, pode ser utilizada a op\xe7\xe3o ",(0,r.kt)("inlineCode",{parentName:"p"},"-c"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Par\xe2metros")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-c x")," : envia ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," pacotes.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Envia 10 pacotes ao servidor DNS do Google (endere\xe7o IP ",(0,r.kt)("inlineCode",{parentName:"li"},"8.8.8.8"),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ping -c 10 8.8.8.8\n")),(0,r.kt)("admonition",{title:"Observa\xe7\xe3o",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Sistemas que respondem ao ",(0,r.kt)("inlineCode",{parentName:"p"},"ping")," devem ter a resposta ICMP habilita. Em ambientes Windows, esta op\xe7\xe3o \xe9 desabilitada por padr\xe3o.")),(0,r.kt)("h2",{id:"web"},"Web"),(0,r.kt)("h3",{id:"wget"},"wget"),(0,r.kt)("p",null,"O ",(0,r.kt)("inlineCode",{parentName:"p"},"wget")," \xe9 um comando que realiza o ",(0,r.kt)("em",{parentName:"p"},"download")," de p\xe1ginas ",(0,r.kt)("em",{parentName:"p"},"web"),". \xc9 bastante completo, e possui diversos par\xe2metros"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Par\xe2metros"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-c")," : (",(0,r.kt)("em",{parentName:"li"},"continue"),") continua um download pr\xe9vio. Esta funcionalidade depende de recursos do servidor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-p")," : obt\xe9m todos os arquivos do site."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-k")," : converte os links para arquivos locais. \xdatil em conjunto com ",(0,r.kt)("inlineCode",{parentName:"li"},"-p"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplos"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Download")," do site ",(0,r.kt)("a",{parentName:"li",href:"http://www.pudim.com.br"},"pudim.com.br"),". Obt\xe9m apenas o arquivo ",(0,r.kt)("em",{parentName:"li"},"index.html"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget www.pudim.com.br\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fazer o ",(0,r.kt)("em",{parentName:"li"},"download")," do site ",(0,r.kt)("a",{parentName:"li",href:"http://www.pudim.com.br"},"pudim.com.br"),", com todos seus arquivos. Por\xe9m, ao abrir a p\xe1gina local, os recursos ",(0,r.kt)("em",{parentName:"li"},"online")," ainda ser\xe3o utilizados, visto que a p\xe1gina n\xe3o foi modificada.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget -p www.pudim.com.br\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fazer o ",(0,r.kt)("em",{parentName:"li"},"download")," do site ",(0,r.kt)("a",{parentName:"li",href:"http://www.pudim.com.br"},"pudim.com.br"),", com todos seus arquivos. As p\xe1ginas s\xe3o alteradas para que os ",(0,r.kt)("em",{parentName:"li"},"links")," sejam atualizados para os arquivos obtidos.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget -p -k www.pudim.com.br\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Download")," do Docker, ",(0,r.kt)("em",{parentName:"li"},"software")," de conteineriza\xe7\xe3o.")),(0,r.kt)("h3",{id:"curl"},"curl"),(0,r.kt)("p",null,"O ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," \xe9 uma aplica\xe7\xe3o que possibilita obter recursos remotos, como p\xe1ginas web e arquivos. \xc9 uma ferramenta extremante poderosa, e tamb\xe9m permite alterar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Par\xe2metros")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-o")," : (output) salva o recurso obtido com um novo nome.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplos"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Download")," da imagem do site pudim.com.br e salva como foto.jpg")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -o foto.jpg www.pudim.com.br/pudim.jpg\n")),(0,r.kt)("h2",{id:"refer\xeancias"},"Refer\xeancias"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Outros materiais")))}c.isMDXComponent=!0}}]);