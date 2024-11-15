PostWeb - Meu Casca de Bala -
===

### Portugues (BR) | [English (US)](extra/docs/README.en-us.md)

Todo desenvolvedor tem o seu "chodozinho", e esse é o meu. Esse foi o meu primeiro projeto publicado no GitHub, marcando uma fase importante na minha trajetória como programador. No começo, ele era apenas um projeto de curso de Node.js, e a proposta do site era ser uma plataforma de posts com ações CRUD simples: adicionar, editar e deletar posts. E foi assim por um bom tempo — eu chamo essa primeira versão de legacy, e inclusive ela está salva em um repositório privado. Mas, à medida que fui me desenvolvendo como programador, decidi criar meu primeiro site 'sério', ou seja, um projeto onde eu aplicaria todas as tecnologias que já tinha aprendido, para algo mais próximo de um produto real.

Como Executar o PostWeb?
===

Na raiz do projeto existe um arquivo `bash` denominado **installer**. Este arquivo automatiza o processo de instalação das dependências, criação das bases de dados e execução das migrations, abrangendo tanto o frontend quanto o backend. Contudo, ele apenas facilita o processo, você ainda precisará instalar as dependências listadas abaixo, caso ainda não as tenha em sua máquina:

- MySQL ou MariaDB
- NPM, Yarn ou Bun
- Bash (caso utilize o sistema operacional Windows)

Se as dependências já estiverem instaladas em sua máquina, basta seguir as 3 etapas descritas abaixo.


### 1. Copiando & Criando o .env
```bash
cp app-backend/.env.exemple app-backend/.env
```
Este comando irá copiar o conteúdo do arquivo `.env.exemple` e criar um novo arquivo `.env`, que conterá as mesmas configurações do `.env.exemple`.


### 2. Configurando o .env
```env
DB_PASSWORD=PASSWORD
DB_DATABASE=DATABASE
DB_USERNAME=ROOT
DB_DIALECT=MYSQL

SECRET=JWT
```
Substitua os valores do arquivo `.env` pelos dados correspondentes ao seu usuário **MySQL** e defina uma chave secreta para o **JWT**.


### 3. Executando o **installer**
```bash
./installer --package-manager --channel --language
# qualquer ordem de parâmetros é aceita
```
o **installer** carrega três parâmetros, o **package manager**, **channel** e o **language** os três informam como o processo de instalação deve proseguir.

| package manager | channel | language |
| -------- | ------- | ------- |
| npm | development | pt |
| yarn | production | en |
| bun | test |   |

```bash
./installer --bun --development --pt

# gerenciador de pacote bun
# canal development
# idioma português
```

Após a execução do script de instalação, o projeto estará configurado e pronto para ser executado, tanto para o frontend quanto para o backend.


### Rodando o Frontend
```shell
cd app-frontend

npm run start   # npm
yarn run start  # yarn
bun run start   # bun
```


### Rodando o Backend
```shell
cd app-backend

npm run start   # npm
yarn run start  # yarn
bun run start   # bun
```

### [Instalação Manual](extra/docs/installer-manual.pt-br.md)
