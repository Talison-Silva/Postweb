#!/bin/bash

if [ "$1" == "--channel" ]; then
  channel_value="$2"
  echo "O valor de channel é: $channel_value"
else
  echo "Parâmetro --channel não foi fornecido."
fi

# BACKEND
# instalando as dependências do projeto
cd app-backend
bun install
echo -e "\033[34mDependências Instaladas\033[0m"

# criando o database
bunx bunx sequelize-cli db:migrate --env development
echo -e "\033[34mDatabase Criado\033[0m"

# Migrate
bun migrate
echo -e "\033[34mMigrations Concluidas com Sucesso\033[0m"

# FRONTEND

# instalando as dependências do projeto
cd ../app-frontend
bun install
echo -e "\033[34mDependências Instaladas\033[0m"
