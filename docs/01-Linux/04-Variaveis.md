---
sidebar_position: 4
---

# Variáveis

Uso de variáveis.

## Utilização

Uma variável em Shell passa a existir a partir da sua atribuição.  

**Exemplo**
- Variável hello
```
HELLO="boa noite pessoal"
```

Para acessar o conteúdo de uma variável, utilizamos o `$` antes do identificador, ou `${}`.  

**Exemplo**
```
echo ${HELLO}
echo $HELLO
```

:::caution Cuidado
Observe que ao criar uma variável, o sinal de atribuição (`=`) deve estar logo após o identificador, sem o uso de espaço. Lembre que o espaço é o separador de parâmetros. Caso exista espaço antes da atribuição, é entendido que há um comando a ser executado e `=` é um parâmetro para esse comando.  

**Exemplo**
```
HELLO = "Boa noite pessoal" #Uso incorreto da atribuição
```
:::

# Aspas e aspas

Há diferença entre as aspas duplas (`"`) e aspas simples (`'`). Dentro das aspas duplas, há a resolução de variável.

**Exemplo**
```
echo "${HELLO}, estudantes de Shell Linux" #O identificado é substituído pelo conteúdo da variável
echo '${HELLO}, estudantes de Shell Linux' #O texto é mantido inalterado
```

## Variáveis especiais

|variável|conteúdo|
|--------|--------|
|`$USER` |usuário |
|`$?` |Resultado do último comando executado. 0 indica executado com sucesso |

**Exemplos**

```bash
echo "Crise de identidade? Você é ${USER}"
ls #Comando executado com sucesso
echo $? #0, visto que o ls executou com sucesso
ls /tmp/-- #ls executado com erro
echo $? #valor diferente de 0, visto que ls (último comando) executou com erro
```

## Variáveis de ambiente

## Resultados de comandos em variáveis

## Scripts especiais

### .bashrc

### source

## Referências

**Outros materiais**  

