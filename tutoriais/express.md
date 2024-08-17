# EXPRESS

## Criando um Projeto Express com npx:

```
npx express --no-view chatapp
```

O comando é utilizado para criar um novo projeto usando o framework Express para Node.js. 

- **`npx`**: O npx é uma ferramenta que vem junto com o npm e permite executar pacotes Node diretamente da linha de comando sem precisar instalá-los globalmente na máquina. Isso é útil para rodar comandos ou scripts sem a necessidade de instalação manual dos pacotes.

- **`express`**: Este é o comando que chama o gerador de aplicações Express (Express Application Generator - https://expressjs.com/en/starter/generator.html). O gerador Express é uma ferramenta que facilita a criação de uma estrutura básica de aplicação web usando o Express.

- **`--no-view`**: Esta flag indica que o projeto não deve incluir um mecanismo de visualização (Template/View Engine) por padrão. As view engines são usadas para renderizar páginas HTML em resposta a solicitações de rota. Ao usar ``--no-view``, você cria um projeto mais minimalista, sem a configuração inicial para lidar com templates HTML.

- **`chatapp`**: Este é o nome do diretório onde o novo projeto será criado. O comando cria uma nova pasta chamada chatapp e gera a estrutura básica de arquivos e diretórios dentro dela.

## Instalando as Dependências do Projeto:
```
npm install bcrypt
npm install @faker-js/faker --save-dev
npm install jsonwebtoken
npm install multer
npm install nodemon --save-dev
npm install @prisma/client
npm install prisma --save-dev
npm install zod
```

## Instalando as Dependências do Projeto:

- **`bcrypt`**: Hash de senhas para autenticação segura.

- **`@faker-js/faker`**: Geração de dados fictícios para testes.

- **`jsonwebtoken`**: Criação e verificação de tokens JWT para autenticação.

- **`multer`**: Middleware para upload de arquivos em Express.

- **`nodemon`**: Reinicia o servidor Node.js automaticamente durante o desenvolvimento.

- **`@prisma/client`**: Cliente ORM para interagir com o banco de dados Prisma.

- **`prisma`**: CLI para gerenciar o esquema e migrações do banco de dados Prisma.

- **`zod`**: Validação de dados com esquemas.

## Inicializando o Servidor em Ambiente de Desenvolvimento:

```
npm install
SET DEBUG=chatapp:* 
npm run dev
```