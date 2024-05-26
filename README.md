# Micro serviço Payment

## Requisitos:

Docker

Node

TypeScript

NestJS

Obs: o Docker Daemon deve estar em execução

## Instruções para execução do projeto

Primeiramente faça um clone do repositório:

```git clone git@github.com:giovannitamanini/payment.git```

Na raiz do projeto baixe as dependências com:
```npm install```

Crie um arquivo .env com as variáveis necessárias para conexão com o banco de dados e com o RabbitMQ: 

```DATABASE_URL="postgresql://postgres:root@localhost:5432/notification?schema=public"```

```RABBITMQ_USER="admin"```

```RABBITMQ_PASS="123456"```

Execute o seguinte comando para deixar o banco de dados pronto para conexões:

```docker-compose -f docker/docker-postgres.yml up -d```

O -d garante que o PostgreSQL ficará execução em segundo plano, sem a necessidade de um terminal dedicado.

Ainda na raiz do projeto, utilize o comando para utilizar o ORM e migrar as entidades para o banco de dados:

```npx prisma migrate dev --name init```

Inicie o RabbitMQ com o seguinte comando:

```docker-compose -f docker/docker-rabbit.yml up```

Inicie o micro serviço com:

```npm run start:dev```