# PRISMA

## Inicializando o Prisma com o SGBDR MySQL

```
npx prisma init --datasource-provider mysql
```

## Executando o Prisma Studio

```
npx prisma studio
```

Prisma Studio é uma interface gráfica que facilita a visualização e manipulação de dados no banco de dados. Ele permite explorar, editar e gerenciar registros de forma intuitiva através de uma interface web, integrando-se diretamente com o Prisma Client para refletir as alterações feitas no banco de dados. Ideal para desenvolvimento e teste, o Prisma Studio simplifica o gerenciamento de dados sem a necessidade de escrever consultas SQL manualmente.

## Criando a Migration Inicial

```
npx prisma migrate dev --name init
```

Uma migration é um processo de gerenciamento de alterações no esquema do banco de dados que permite aplicar, versionar e reverter modificações de forma controlada e incremental. Elas registram mudanças estruturais, como a adição ou modificação de tabelas e colunas, e garantem que o esquema do banco de dados esteja alinhado com o modelo de dados definido no código. As migrations facilitam a sincronização entre diferentes ambientes e permitem que alterações sejam implementadas de maneira consistente e segura ao longo do tempo.

A migration inicial (ou init) é o primeiro passo no processo de gerenciamento de esquemas de banco de dados usando migrations. Ela cria a estrutura básica de controle para gerenciar as alterações no banco de dados, incluindo a criação de uma tabela de histórico de migrations que registra todas as mudanças aplicadas. Essa migration inicial configura o ambiente para futuras migrações e é essencial para iniciar o versionamento e a aplicação de alterações estruturais no banco de dados. Normalmente, é executada uma vez no início de um projeto para preparar o banco de dados para o gerenciamento contínuo de alterações.

## Material para Estudo

### Prisma Playground - Exemplos de Código 

- https://playground.prisma.io/examples/reading/find/find-all?path=examples&host=playground.prisma.io