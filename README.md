# App TO-DO Martinello

## Ambiente de desenvolvimento

## Tech Stack

**Client:**

- Next.js
- Storybook
- TailwindCSS

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
