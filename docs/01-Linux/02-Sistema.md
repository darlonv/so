---
sidebar_position: 2
---

# Sistema

Comandos relaciondos ao sistema operacional.

## Disco

### du

Apresenta o espaço em disco utilizado pelo diretório atual, ou pelos diretórios passados por parâmetro.

**Parâmetros**
- '-m' : apresenta o tamanho em MiB (MebiBytes)
- '-h' : apresenta o tamanho em múltiplos (KiB, MiB, GiB)

## df

Apresenta a quantidade de disco utilizada e disponível em cada sistema de arquivos.



## Sistema

### uname

Obtém o nome do sistema operacional.

**Parâmetros**  

- `-a` : apresenta a versão do *kernel* utilizada.

### free

Indica a quantidade de memória presente no sistema.


### top

Apresenta os processos sendo executados no sistema. Para sair, deve ser pressionada a tecla `q`.

### ps

Lista os processos em execução no sistema

**Exemplos**

```
ps -aux #lista todos processos que possuem um terminal (tty) associado e o usuário que originou o processo
```

### kill

Envia um sinal a um processo. O sinal mais comum é `-9`, que indica para que o terminal seja finalizado.

**Exemplos**
Solicita ao sistema operacional que o processo com PID 1025 seja finalizado.
```
kill -9 37493
```


### shutdown

Desliga o sistema. Permite que seja desligado dentro de determinado tempo.

**Exemplos**
```
shutdown -h now #desliga agora
shutdown -r now #reinicia agora
shutdown -h +90 #desligará o sistema em 90 minutos
shutdown -k #cancela um desligamento agendado previamente
```

### poweroff

Desliga o sistema.


## Referências

**Outros materiais**  
