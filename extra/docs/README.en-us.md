PostWeb - My Baby Project -
===

### English (US) | [Portugues (BR)](../../README.md)

Every developer has their 'baby project', and this one’s mine. It was the first project I published on GitHub, marking an important phase in my journey as a programmer. Initially, it was just a Node.js course project, intended to be a simple platform for CRUD operations: adding, editing, and deleting posts. And it stayed like that for a while—I call that first version the 'legacy,' and it’s even saved in a private repository. But as I grew as a developer, I decided to turn it into my first 'serious' website, applying all the technologies I had learned to create something closer to a real-world product.

How to Run PostWeb?
===

At the root of the project there is a `bash` file called **installer**. This file automates the process of installing dependencies, creating databases and executing migrations, covering both the frontend and backend. However, it only makes the process easier, you will still need to install the dependencies listed below if you don't already have them on your machine:

- MySQL or MariaDB
- NPM, Yarn, or Bun
- Bash (if you're using the Windows operating system)

If these dependencies are already installed on your machine, simply follow the 3 steps described below.


### 1. Copying & Creating the .env
```bash
cp app-backend/.env.exemple app-backend/.env
```
This command will copy the contents of the `.env.example` file and create a new `.env` file, which will contain the same settings as `.env.example`.



### 2. Configuring the .env
```env
DB_PASSWORD=PASSWORD
DB_DATABASE=DATABASE
DB_USERNAME=ROOT
DB_DIALECT=MYSQL

SECRET=JWT
```
Replace the values in the `.env` file with the corresponding data for your **MySQL** user and set a secret key for **JWT**.


### 3. Executando o **installer**
```bash
./installer --package-manager --channel --language
# any order of parameters is accepted
```
**installer** carries three parameters, **package manager**, **channel** and **language** all three inform how the installation process should proceed.

| package manager | channel | language |
| -------- | ------- | ------- |
| npm | development | pt |
| yarn | production | en |
| bun | test |   |

```bash
./installer --bun --development --pt

# gerenciador de pacote bun
# canal development
# e idioma português
```

After running the installation script, the project will be configured and ready to run, both for the frontend and the backend.


### Running the Frontend
```shell
cd app-frontend

npm run start   # npm
yarn run start  # yarn
bun run start   # bun
```


### Running the Backend
```shell
cd app-backend

npm run start   # npm
yarn run start  # yarn
bun run start   # bun
```

### [manual installation](./installer-manual.en-us.md)
