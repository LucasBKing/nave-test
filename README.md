## Projeto teste Nave

Projeto single page responsivo onde os dados utilizados são consumidos de uma API utilizando o json-server.

### Pré-requisitos

```
NodeJS
React
```

### Instalando
Crie uma nova pasta com o nome que desejar, ali clone o repósito:
```
$ ~/path/to/folder: git clone https://github.com/LucasBKing/nave-test.git
```

Após clonar o repositório instale as dependências de ambos os repositorios:

```
$ ~/path/to/folder/nave-test: npm install
```

### Inicializando

Com as dependências instaladas, inicialize o json-server em uma porta diferente da deafult, pois o Rgeact também utiliza a porta 3000:

```
$ ~/path/to/folder/nave-test/src/models: json-server --watch db.json --port 3001
```

Inicialize o projeto utilizando npm start ou yarn start
```
$ ~/path/to/folder/nave-test: npm start

```

## Autor
* Lucas Barbosa
