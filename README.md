## PostWeb - Meu Casca de Bala -

- [English (US)](docs/README.en-us.md)

Todo desenvolvedor tem o seu "chodozinho", e esse é o meu. Esse foi o meu primeiro projeto publicado no GitHub, marcando uma fase importante na minha trajetória como programador. No começo, ele era apenas um projeto de curso de Node.js, e a proposta do site era ser uma plataforma de posts com ações CRUD simples: adicionar, editar e deletar posts. E foi assim por um bom tempo — eu chamo essa primeira versão de legacy, e inclusive ela está salva em um repositório privado. Mas, à medida que fui me desenvolvendo como programador, decidi criar meu primeiro site 'sério', ou seja, um projeto onde eu aplicaria todas as tecnologias que já tinha aprendido, para algo mais próximo de um produto real.

## Como Executar o PostWeb?
### Automatico - Simples
```shell
bash /scripts/install.sh
```
Mesmo os scritps automatizando o processo, o sistema operacional: linux, windows ou mac, necessitam ter estas dependencias instaladas.
- Mysql | MariaDB
- Npm | Yarn | Bun



### Manual Frontend
npm
```shell
# instalando as dependencias
cd frontend-app
npm install

# executando o projeto
npm run start
```

yarn
```shell
# instalando as dependencias
cd frontend-app
yarn install

# executando o projeto
yarn run start
```

bun
```shell
# instalando as dependencias
cd frontend-app
bun install

# executando o projeto
bun run start
```

### Manual Backend
npm
```shell
# instalando as dependencias
cd backend-app
npm install

# gera as tabelas no database
npm run  migrate

# executando o projeto
npm run dev
```

yarn
```shell
# instalando as dependencias
cd backend-app
yarn install

# gera as tabelas no database
yarn run  migrate

# executando o projeto
yarn run dev
```

bun 
```shell
# instalando as dependencias
cd backend-app
bun install

# gera as tabelas no database
bun run  migrate

# executando o projeto
bun run dev
```
