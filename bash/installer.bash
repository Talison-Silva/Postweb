#!/bin/bash

# Clean Terminal
clear

# Vars
channel=development
packageManager="npm"

echo "
██████╗  █████═╗ ██████╗████████╗██╗     ██╗██████╗██████╗
██╔══██╗██╔══██║██╔════╝╚══██╔══╝██║ ██╗ ██║██════╝██║  ██
██████╔╝██║  ██║███████║   ██║   ██║ ██║ ██║██████╗██████╗
██╔═══╝ ██║  ██║╚════██║   ██║   ██╚═██╚═██║██════╝██║  ██
██║     ╚█████╔╝██████╔╝   ██║    ╚██╔═██╔═╝██████╗██████╗
╚═╝      ╚════╝ ╚═════╝    ╚═╝     ╚═╝ ╚═╝  ╚═════╝╚═════╝
"

echo -e "\033[38;2;126;126;124mdefault package manager \033[38;2;36;135;90m$packageManager\033[38;2;126;126;124m && default channel \033[38;2;36;135;90m$channel\033[0m\n"

# |------------------------------------------------------------------
# Choice Package Manager | Npm | Yarn | Bun

if [ "$1" == "--npm" ] || [ "$2" == "--npm" ]; then
    packageManager="npm"
    echo -e "\033[38;5;15mchange package manager for \033[38;2;36;135;90m+  \033[38;2;126;126;124m--npm\033[0m"
fi

if [ "$1" == "--yarn" ] || [ "$2" == "--yarn" ]; then
    packageManager="yarn"
    echo -e "\033[38;5;15mchange package manager for \033[38;2;36;135;90m+  \033[38;2;126;126;124m--yarn\033[0m"
fi

if [ "$1" == "--bun" ] || [ "$2" == "--bun" ]; then
    packageManager="bun"
    echo -e "\033[38;5;15mchange package manager for \033[38;2;36;135;90m+  \033[38;2;126;126;124m--bun\033[0m"
fi

# Choice Channel

if [ "$1" == "--development" ] || [ "$2" == "--development" ]; then
    channel="--development"
    echo -e "\033[38;5;15mchange cannel for \033[38;2;36;135;90m         +  \033[38;2;126;126;124m--development\033[0m"
fi


if [ "$1" == "--production" ] || [ "$2" == "--production" ]; then
    channel="--production"
    echo -e "\033[38;5;15mchange cannel for \033[38;2;36;135;90m         +  \033[38;2;126;126;124m--production\033[0m"
fi









# |------------------------------------------------------------------

# BACKEND
echo -e "\n\n\n\n\n\033[38;5;15mdependências instaladas                                 \033[38;2;126;126;124mBACKEND\033[0m"
# instalando as dependências do projeto
cd app-backend

echo "+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+"
if [ $packageManager == "npm" ]; then
    npm install
elif [ $packageManager == "yarn" ]; then
    yarn install
elif [ $packageManager == "bun" ]; then
    bun install
fi
echo "+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+"

# criando o database
echo -e "\n\n\n\n\n\033[38;5;15mcriando o database                                      \033[38;2;126;126;124mBACKEND\033[0m"
#bunx bunx sequelize-cli db:migrate --env development
echo "+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+"
if [ $packageManager == "npm" ]; then
    npm sequelize-cli db:create --env development
elif [ $packageManager == "yarn" ]; then
    yarn sequelize-cli db:create --env development
elif [ $packageManager == "bun" ]; then
    bun sequelize-cli db:create --env development
fi
echo "+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+"

# Migrate
echo -e "\n\n\n\n\n\033[38;5;15mcriandos as migrations                                  \033[38;2;126;126;124mBACKEND\033[0m"
#bun migrate
echo "+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+"
if [ $packageManager == "npm" ]; then
    npm sequelize-cli db:migrate --env development
elif [ $packageManager == "yarn" ]; then
    yarn sequelize-cli db:migrate --env development
elif [ $packageManager == "bun" ]; then
    bun sequelize-cli db:migrate --env development
fi
echo "+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+"

# FRONTEND

# instalando as dependências do projeto
echo -e "\n\n\n\n\n\033[38;5;15mdependências instaladas                                \033[38;2;126;126;124mFRONTEND\033[0m"
cd ../app-frontend

echo "+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+"
if [ $packageManager == "npm" ]; then
    npm install
elif [ $packageManager == "yarn" ]; then
    yarn install
elif [ $packageManager == "bun" ]; then
    bun install
fi
echo "+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+"


echo -e "\n\n\n\n\n
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
INSTALAÇÃO FINALIZADA | PROJETO PRONTO PARA EXECUÇÃO
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
"
