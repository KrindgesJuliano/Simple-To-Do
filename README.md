# App TO-DO Martinello

## Ambiente de desenvolvimento

## Tech Stack

**Client:**

- React
- React-router-dom
- TailwindCSS

**Server:**

- Express
- Prisma ORM
- postgres

## Rodar Localmente

### Clone o projeto

```bash
  git clone https://github.com/KrindgesJuliano/desafio-martinello.git
```

### ir parar o diretorio do projeto

```bash
  cd desafio-martinello
```

### Install dependencies

```bash
  yarn install
```

### Ir para o diretorio do server 

```bash
cd packages/server

```

### Iniciar Docker Postgres
```
docker-compose up -d
```
### Variaveis de ambiente
- renomei o arquivo .env.example dentre de packages/server para .env
- mude as informações entre <> para postgresql://docker:power5@localhost:5432/dbTodo?schema=public
### Iniciar o server

```bash
  yarn prisma migrate dev && yarn prisma generate
  yarn dev
```

### Ir para diretorio do frontend e iniciar o app

```
cd ../../packages/web
```

### Iniciar o App frontend

```
yarn dev
```
