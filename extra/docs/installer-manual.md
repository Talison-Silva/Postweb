Manual Backend
===

```bash
cd app-backend

# npm
npm install
npm sequelize-cli db:create --env development
npm sequelize-cli db:migrate --env development

npm run start

# yarn
yarn install
yarn sequelize-cli db:create --env development
yarn sequelize-cli db:migrate --env development

yarn run start

# bun
bun install
bun sequelize-cli db:create --env development
bun sequelize-cli db:migrate --env development

bun run start
```

Manual Frontend
===

```bash
cd app-frontend

# npm
npm install
npm run start

# yarn
yarn install
yarn run start

# bun
bun install
bun run start
```
