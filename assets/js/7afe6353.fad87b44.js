"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[6499],{3905:(e,a,o)=>{o.d(a,{Zo:()=>d,kt:()=>v});var t=o(7294);function i(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function n(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){i(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,t,i=function(e,a){if(null==e)return{};var o,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(i[o]=e[o]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=t.createContext({}),p=function(e){var a=t.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):n(n({},a),e)),o},d=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(o),u=i,v=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return o?t.createElement(v,n(n({ref:a},d),{},{components:o})):t.createElement(v,n({ref:a},d))}));function v(e,a){var o=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=o.length,n=new Array(r);n[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[c]="string"==typeof e?e:i,n[1]=s;for(var p=2;p<r;p++)n[p]=o[p];return t.createElement.apply(null,n)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7445:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var t=o(7462),i=(o(7294),o(3905));const r={sidebar_position:4},n="Vari\xe1veis",s={unversionedId:"Linux/Variaveis",id:"Linux/Variaveis",title:"Vari\xe1veis",description:"Uso de vari\xe1veis.",source:"@site/docs/01-Linux/04-Variaveis.md",sourceDirName:"01-Linux",slug:"/Linux/Variaveis",permalink:"/so/docs/Linux/Variaveis",draft:!1,editUrl:"https://github.com/darlonv/so/tree/main/docs/01-Linux/04-Variaveis.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Comunica\xe7\xe3o",permalink:"/so/docs/Linux/Comunicacao"},next:{title:"Redirecionamentos",permalink:"/so/docs/Linux/Redirecionamentos"}},l={},p=[{value:"Utiliza\xe7\xe3o",id:"utiliza\xe7\xe3o",level:2},{value:"Vari\xe1veis especiais",id:"vari\xe1veis-especiais",level:2},{value:"Vari\xe1veis de ambiente",id:"vari\xe1veis-de-ambiente",level:2},{value:"Vari\xe1veis de ambiente especiais",id:"vari\xe1veis-de-ambiente-especiais",level:2},{value:"PATH",id:"path",level:3},{value:"Resultados de comandos em vari\xe1veis",id:"resultados-de-comandos-em-vari\xe1veis",level:2},{value:"source",id:"source",level:3},{value:"Scripts especiais",id:"scripts-especiais",level:2},{value:".bashrc",id:"bashrc",level:3},{value:"Refer\xeancias",id:"refer\xeancias",level:2}],d={toc:p},c="wrapper";function m(e){let{components:a,...o}=e;return(0,i.kt)(c,(0,t.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vari\xe1veis"},"Vari\xe1veis"),(0,i.kt)("p",null,"Uso de vari\xe1veis."),(0,i.kt)("h2",{id:"utiliza\xe7\xe3o"},"Utiliza\xe7\xe3o"),(0,i.kt)("p",null,"Em shell, as vari\xe1veis n\xe3o possuem tipo de dados. Existem apenas vari\xe1veis locais e vari\xe1veis de ambiente. Inicialmente trataremos as vari\xe1veis locais e em seguida abordaremos vari\xe1veis de amteinte e suas particularidades."),(0,i.kt)("p",null,"Uma vari\xe1vel em Shell passa a existir a partir da sua atribui\xe7\xe3o.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Exemplo")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vari\xe1vel hello")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'HELLO="boa noite pessoal"\n')),(0,i.kt)("p",null,"Para acessar o conte\xfado de uma vari\xe1vel, utilizamos o ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," antes do identificador, ou ",(0,i.kt)("inlineCode",{parentName:"p"},"${}"),".  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Exemplo")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"echo ${HELLO}\necho $HELLO\n")),(0,i.kt)("admonition",{title:"Cuidado",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Observe que ao criar uma vari\xe1vel, o sinal de atribui\xe7\xe3o (",(0,i.kt)("inlineCode",{parentName:"p"},"="),") deve estar logo ap\xf3s o identificador, sem o uso de espa\xe7o. Lembre que o ",(0,i.kt)("strong",{parentName:"p"},"espa\xe7o \xe9 separador de par\xe2metros"),". Caso exista espa\xe7o antes da atribui\xe7\xe3o, \xe9 entendido que h\xe1 um comando a ser executado e ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," \xe9 um par\xe2metro para esse comando.  "),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Exemplo")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},'HELLO = "Boa noite pessoal" #Uso incorreto da atribui\xe7\xe3o\n'))),(0,i.kt)("h1",{id:"aspas-simples-e-aspas-duplas"},"Aspas simples e aspas duplas"),(0,i.kt)("p",null,"H\xe1 diferen\xe7a entre as aspas duplas (",(0,i.kt)("inlineCode",{parentName:"p"},'"'),") e aspas simples (",(0,i.kt)("inlineCode",{parentName:"p"},"'"),"). Dentro das aspas duplas h\xe1 a resolu\xe7\xe3o de vari\xe1veis, o que n\xe3o ocorre com as aspas simples."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Exemplo")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"echo \"${HELLO}, estudantes de Shell Linux\" #O identificado \xe9 substitu\xeddo pelo conte\xfado da vari\xe1vel\necho '${HELLO}, estudantes de Shell Linux' #O texto \xe9 mantido inalterado\n")),(0,i.kt)("h2",{id:"vari\xe1veis-especiais"},"Vari\xe1veis especiais"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"vari\xe1vel"),(0,i.kt)("th",{parentName:"tr",align:null},"conte\xfado"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"$USER")),(0,i.kt)("td",{parentName:"tr",align:null},"usu\xe1rio")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"$?")),(0,i.kt)("td",{parentName:"tr",align:null},"Resultado do \xfaltimo comando executado. 0 indica executado com sucesso")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Exemplos")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'echo "Crise de identidade? Voc\xea \xe9 ${USER}"\nls #Comando executado com sucesso\necho $? #0, visto que o ls executou com sucesso\nls /tmp/-- #ls executado com erro\necho $? #valor diferente de 0, visto que ls (\xfaltimo comando) executou com erro\n')),(0,i.kt)("h2",{id:"vari\xe1veis-de-ambiente"},"Vari\xe1veis de ambiente"),(0,i.kt)("p",null,"As vari\xe1veis de ambiente s\xe3o vari\xe1veis que podem ter seu conte\xfado dispon\xedvel a processos filho. Observe o exemplo:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Exemplo"),"  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vari\xe1veis locais n\xe3o ficam dispon\xedvel a processos filhos.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"TEMPO=10        #vari\xe1vel \xe9 criada\necho ${TEMPO}   #a vari\xe1vel existe no processo pai\nbash            #processo filho \xe9 criado e assume o terminal\necho ${TEMPO}   #vari\xe1vel n\xe3o existe no processo filho\nexit            #sai do processo filho\necho ${TEMPO}   #a vari\xe1vel ainda existe no processo pai\n")),(0,i.kt)("p",null,"Para que as vari\xe1veis possam ser acessadas por processos filho, \xe9 necess\xe1rio que sejam ",(0,i.kt)("strong",{parentName:"p"},"vari\xe1veis de ambiente"),". Para tal, utilizamos o comando ",(0,i.kt)("inlineCode",{parentName:"p"},"export"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Exemplo")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vari\xe1veis de ambiente tem seu conte\xfado dispon\xedvel a processos filhos.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export VALOR=50 #vari\xe1vel \xe9 criada e j\xe1 declarada como vari\xe1vel de ambiente\necho ${VALOR}   #vari\xe1vel existe no processo pai\nbash            #processo filho \xe9 criado e assume o terminal\necho ${TEMPO}   #vari\xe1vel existe no processo filho\nexit            #sai do processo filho\necho ${TEMPO}   #vari\xe1vel continua existindo no processo pai\n")),(0,i.kt)("p",null,"Observe que a \xfanica diferen\xe7a em rela\xe7\xe3o ao exemplo anterior \xe9 o uso do comando ",(0,i.kt)("inlineCode",{parentName:"p"},"export"),", que cria a vari\xe1vel de ambiente."),(0,i.kt)("p",null,"Outro ponto a ser observado \xe9 que apenas o ",(0,i.kt)("strong",{parentName:"p"},"conte\xfado")," da vari\xe1vel \xe9 repassado aos processos filhos. Nenhum processo filho pode alterar o conte\xfado de uma vari\xe1vel de ambiente de um processo pai."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Exemplos")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Processo pai tenta acessar vari\xe1vel local gerada por processo filho")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bash            #processo filho \xe9 criado e assume o terminal\nVARFILHO=100    #vari\xe1vel local \xe9 criada no processo filho\necho ${VARFILHO} #vari\xe1vel local existe no processo filho\nexit            #sai do processo filho e retorna ao processo pai\necho ${VARFILHO} #vari\xe1vel n\xe3o existe no processo pai\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Processo pai tenta acessar vari\xe1vel de ambiente gerada por processo filho")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bash            #processo filho \xe9 criado e assume o terminal\nexport VARFILHO=100    #vari\xe1vel de ambiente \xe9 criada no processo filho\necho ${VARFILHO} #vari\xe1vel local existe no processo filho\nexit            #sai do processo filho e retorna ao processo pai\necho ${VARFILHO} #vari\xe1vel n\xe3o existe no processo pai\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Processo filho tenta modificar vari\xe1vel de ambiente gerada por processo pai")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export VARPAI=100 #processo pai cria variavel de ambiente\nbash            #processo filho \xe9 criado e assume o terminal\necho ${VARPAI}  #Vari\xe1vel de ambiente existe no processo filho\nVARPAI=200      #vari\xe1vel de ambiente \xe9 modificada deplo processo filho\necho ${VARPAI}  #vari\xe1vel existe no processo filho\nexit            #sai do processo filho e retorna ao processo pai\necho ${VARPAI}  #vari\xe1vel no processo pai n\xe3o foi modificada\n")),(0,i.kt)("admonition",{title:"Informa\xe7\xe3o",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Em 2014, foi descoberta uma falha de seguran\xe7a nos sistemas bash. Tal vulnerabilidade permitia que processos filhos alterassem vari\xe1veis de ambiente de processos pai. Essa falha foi conhecida como Shellshock ou Bashdoor, reportada na ",(0,i.kt)("a",{parentName:"p",href:"https://www.cve.org/CVERecord?id=CVE-2014-6271"},"CVE-2014-6271")," (",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Shellshock_(software_bug)"},"Shellshock")," )."),(0,i.kt)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Shellshock-bug.svg",alt:"Shellshock logo",width:"100",height:"100"}),"  ",(0,i.kt)("p",{parentName:"admonition"},"Figura: Logo do Shellshock.")),(0,i.kt)("h2",{id:"vari\xe1veis-de-ambiente-especiais"},"Vari\xe1veis de ambiente especiais"),(0,i.kt)("p",null,"Algumas vari\xe1veis de ambiente s\xe3o especiais, e seu uso \xe9 fundamental para o funcionamento do bash."),(0,i.kt)("h3",{id:"path"},"PATH"),(0,i.kt)("p",null,"A vari\xe1vel ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," indica ao bash a localiza\xe7\xe3o em que deve ser procurado para que determinado comando seja executado. Est\xe1 organizada em caminhos para diversos diret\xf3rios, separados por ",(0,i.kt)("inlineCode",{parentName:"p"},":"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Exemplo")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Conte\xfado da vari\xe1vel ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"echo $PATH\n")),(0,i.kt)("p",null,"A execu\xe7\xe3o de comandos diretamente (sem a necessidade do caminho absoluto ou relativo) se d\xe1 pela vari\xe1vel ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Exemplo")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vari\xe1vel ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," sem conte\xfado")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ls #Execu\xe7\xe3o de um comando\nexport PATH='' #Deixa a vari\xe1vel PATH sem conte\xfado\nls #Comando n\xe3o encontrado\n")),(0,i.kt)("p",null,"Para restaurar a vari\xe1vel ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),", basta sair do terminal e abr\xed-lo novamente."),(0,i.kt)("p",null,"Outro comando abordado anteriormente \xe9 o comando ",(0,i.kt)("inlineCode",{parentName:"p"},"which"),". Este, consistia em informar a localiza\xe7\xe3o da aplica\xe7\xe3o respons\xe1vel pelo comando. O que este comando faz na verdade \xe9 percorrer os diret\xf3rios presentes em ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),", procurando pelo nome passado por par\xe2metro."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Exemplo")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Caminho para os arquivos execut\xe1veis de ",(0,i.kt)("inlineCode",{parentName:"li"},"which")," e ",(0,i.kt)("inlineCode",{parentName:"li"},"ls"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"which ls    #obt\xe9m o caminho para ls\nexport PATH='' #PATH sem conte\xfado\nls          #comando n\xe3o encontrado\n/usr/bin/ls #ls executado pelo caminho at\xe9 o comando\n")),(0,i.kt)("h2",{id:"resultados-de-comandos-em-vari\xe1veis"},"Resultados de comandos em vari\xe1veis"),(0,i.kt)("p",null,"A sa\xedda de comandos tamb\xe9m pode ser repassada a vari\xe1veis, com o uso de ",(0,i.kt)("inlineCode",{parentName:"p"},"$()"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Exemplo")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Salvando o conte\xfado de comandos em uma vari\xe1vel")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ARQUIVOS=$(ls)      #o comando ls \xe9 executado, e sua sa\xedda \xe9 armazenada em vari\xe1vel\necho ${ARQUIVOS}    #conte\xfado resultante do comando ls\n")),(0,i.kt)("h3",{id:"source"},"source"),(0,i.kt)("p",null,"O comando ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," possibilita que comandos existentes em determinado arquivo sejam executados no mesmo processo, sem a cria\xe7\xe3o de um processo filho. Isto permite que vari\xe1veis sejam carregadas para o processo atual."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Exemplo")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Gerando um arquivo com vari\xe1veis")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"echo '\nUSER=aluno\nPASS=\"1q2!Q@\"\nVALOR=50\n' > .env\ncat .env    #visualiza o conte\xfado do arquivo\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Carregando vari\xe1veis armazadas em arquivo.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"source .env     #Carrega o conte\xfado do arquivo .env\necho ${USER}    #Vari\xe1veis existem no processo\necho ${PASS}\necho ${VALOR}\n")),(0,i.kt)("admonition",{title:"Observa\xe7\xe3o",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Em ambiente Linux, nomes inicializados com ",(0,i.kt)("inlineCode",{parentName:"p"},".")," indicam arquivos ocultos. Para visualizar esses arquivos com ",(0,i.kt)("inlineCode",{parentName:"p"},"ls"),", \xe9 necess\xe1rio utilizar o par\xe2metro ",(0,i.kt)("inlineCode",{parentName:"p"},"-a"),". ")),(0,i.kt)("h2",{id:"scripts-especiais"},"Scripts especiais"),(0,i.kt)("h3",{id:"bashrc"},".bashrc"),(0,i.kt)("h2",{id:"refer\xeancias"},"Refer\xeancias"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Outros materiais"),"  "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.cve.org/CVERecord?id=CVE-2014-6271"},"CVE. CVE-2014-6271"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Shellshock_(software_bug)"},"Shellshock. Shellshock (Software bug). Wikipedia.")))}m.isMDXComponent=!0}}]);