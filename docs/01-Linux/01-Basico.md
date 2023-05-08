---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Básico

## Introdução

### Interpretadores

Um *shell* é uma interface de comunicação com o sistema operacional, e para que possa ser utilizado é necessário a utilização de um **interpretador**. Os interpretadores definirão qual sintaxe será utilizada, bem como o uso de variáveis ou recursos auxiliares, como autocomplete, cores, dentre outros.

Interpretadores bastante conhecidos 

### Comandos e parâmetros

Cada interpretador pode possuir comandos específicos dele, sem a necessidade de nenhum *sofware* externo. Ou seja, comandos internos a ele que não dependem de instalação ou configuração do ambiente.

Porém, a grande variedade de 




### Caminhos relativos e absolutos

Comandos básicos.

## Manipulação de arquivos e dirétórios

### pwd

Informa qual é o diretório atual em que o interpretador está sendo executado.

```
pwd
```

### ls

Lista os arquivos e diretórios presentes no diretório atual.

**Exemplo**

```
ls
```

O comando `ls` pode possuir diversos 

### cd

### mkdir

### cp

### mv

### rm

## Visualização de arquivos

### cat

### less

### head

### tail

### grep

### wc

### diff


## Outros comandos

### echo

Apresenta uma mensagem na saída padrão.

```bash
echo "Boa noite pessoal
```

## clear

Limpa a tela, movendo o cursor para a linha inicial. Há um atalho para este comando: `ctrl+l`.

**Exemplo**  

```
clear
```

### exit

Encerra a sessão atual. Em sistemas gráficos, pode fechar a janela. Em sistemas sem janela, retorna para tela de login do usuário.

```
exit
```

### man

Acessa o manual referente ao sofware/comando, caso exista. Para sair, digite `q`.  

**Exemplos**  
```
man ls
man pwd
```

### history

Apresenta a lista de comandos digitados recentemente.

### alias

Permite criar um *alias* para uma sequência digitada. O *alias* criado possui validade durante a sessão. Pode sobrescrever um comando já existente ou criar um novo.

**Exemplos**

- ls com opções
```
alias ls="ls -l -a"
ls
```

- ativando ambientes virtuais Python

```
alias py="source /home/usuario/.env/bin/activate" #alias para o comando que carrega o ambiente python
py #ativa o ambiente python
```

### unalias

Desfaz um *alias* previamente criado.

**Exemplos**  

```
unalias ls
unalias py
```

### which

Informa o caminho para o *software* responsável pelo comando.

**Exemplos**  

```
which ls
which pwd
which cat
which less
```

O `which` retorna vazio para comandos *built-in* do bash, ou seja comandos que são executados pelo próprio interpretador, sem a necessidade de *softwares* externos. Exemplos: `cd`, `for`, `if`.

## Referências

**Outros materiais**  





<!-- 
<details>
  <summary>Resposta</summary>
</details> 
-->

<!-- 
<Tabs groupId='language'>
  <TabItem value="portugol" label="Portugol" default>

  ```
  escreva("Olá Mundo");
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```js
  System.out.println("Olá Mundo");
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  print("Olá Mundo")
  ```

  </TabItem>
</Tabs>
 -->

<!-- <Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs> -->




<!-- <details>
  <summary>Resposta</summary>
<Tabs groupId='language'>
  
  <TabItem value="java" label="Java">

  ```java
//Variáveis
int valor;
int antecessor, sucessor;
Scanner entrada;

//Entrada
System.out.println("Digite um número: ");
entrada = new Scanner(System.in);
valor = entrada.nextInt();
entrada.close();

//Processamento
antecessor = valor -1;
sucessor = valor +1;

//Saída
System.out.printf("O antecessor de %d é %d\n", valor, antecessor);
System.out.printf("O sucessor de %d é %d\n", valor, sucessor);
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
n1 = input()
n2 = input()
n1 = int(n1)
n2 = int(n2)

print(f'SOMA = {n1+n2}')
  ```

  ou

```python
n1 = int(input())
n2 = int(input())

print(f'SOMA = {n1+n2}')
  ```

  ou

```python
print(f'SOMA = {int(input())+int(input())}')
  ```
  ala

  </TabItem>
</Tabs>
</details> -->