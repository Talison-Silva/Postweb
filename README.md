## PostWeb - Meu Casca de Bala -

### Portugues (BR) | [English (US)](docs/README.en-us.md)

Todo desenvolvedor tem o seu "chodozinho", e esse é o meu. Esse foi o meu primeiro projeto publicado no GitHub, marcando uma fase importante na minha trajetória como programador. No começo, ele era apenas um projeto de curso de Node.js, e a proposta do site era ser uma plataforma de posts com ações CRUD simples: adicionar, editar e deletar posts. E foi assim por um bom tempo — eu chamo essa primeira versão de legacy, e inclusive ela está salva em um repositório privado. Mas, à medida que fui me desenvolvendo como programador, decidi criar meu primeiro site 'sério', ou seja, um projeto onde eu aplicaria todas as tecnologias que já tinha aprendido, para algo mais próximo de um produto real.

## Como Executar o PostWeb?
Dentro da pasta bash existe uma arquivo .bash chamado 'installer' ele automatiza todo o processo de instalação de dependencias, criação das databases e migrations. ela atua tanto no frontend quanto no backend. Porem ela só automatiza o processo, voçê ainda precisar instalar as dependencias abaixo
- Mysql | MariaDB
- Npm | Yarn | Bun
- Bash | caso voce utilize Windows

Caso voce já tenha todas as dependencias instaladas na sua Maquina e só seguir as etapas abaixo

### Copiando & Criando o .env
```bash
cd app-backend && cp .env.exemple .env
```

### Configurando o .env
```env
DB_PASSWORD=PASSWORD
DB_DATABASE=DATABASE
DB_USERNAME=ROOT
DB_DIALECT=MYSQL

SECRET=JWT
```

### Executando o 'Installer'
```shell
cd ../ && bash /scripts/install.sh
```

apos executar o comando acima, no diretório root, se tudo der certo o projeto já está pronto para ser executado

### Executando o Frontend
```shell
cd app-frontend

npm run start   # npm
yarn run start  # yarn
bun run start   # bun
```

### Executanto o Backend
```shell
cd app-backend

npm run start   # npm
yarn run start  # yarn
bun run start   # bun
```

### [Instalação Manual](docs/installer-manual.pt-br.md)
