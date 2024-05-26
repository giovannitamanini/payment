# Micro serviço Payment

## Requisitos:
VS Code
Docker
Node
TypeScript
NestJS

## Instruções para execução do projeto

Primeiramente faça um clone do repositório:

```git clone git@github.com:giovannitamanini/payment.git```

Na raiz do projeto baixe as dependências com:
```npm install``
`
Execute o seguinte comando para deixar o banco de dados pronto para conexões:

```docker-compose -f docker/docker-postgres.yml up -d```

O -d garante que o PostgreSQL ficará execução em segundo plano, sem a necessidade de um terminal dedicado.

Ainda na raiz do projeto, utilize o comando para utilizar o ORM e migrar as entidades para o banco de dados:

```npx prisma migrate dev --name init```

Inicie o RabbitMQ com o seguinte comando:

```docker-compose -f docker/docker-rabbit.yml up```

Inicie o micro serviço com:
```npm run start:dev```