# CHAT

## Tecnologias
- Git - https://git-scm.com/downloads.
- Node - https://nodejs.org/pt/download/.
- MySQL Server - https://dev.mysql.com/downloads/installer/.
- MySQL Workbench - https://dev.mysql.com/downloads/workbench.
- VSCode - https://code.visualstudio.com/download.

## Configurando o Ambiente de Desenvolvimento

1) Abra uma nova janela do VSCode (CTRL + SHIFT + N) e clone este repositório:

    ```
    https://github.com/sandrodonizeti/chatluizsandro.git
    ```

2) Instale as dependências do projeto:

    ```
    npm install
    ```

3) Crie um arquivo chamado `.env` na raiz do projeto e configure a string de conexão com base no seu banco de dados:

    ```
    DATABASE_URL="mysql://root:aluno@localhost:3306/chatdb"
    ```

4) Execute as Migrations:

    ```
    npx prisma migrate deploy
    ```

5) Abra dois terminais para executar a aplicação e o Prisma Studio:

    #### Terminal 1: API

    ```
    npm run dev
    ```

    Isso inicia o servidor de desenvolvimento da API.

    #### Terminal 2: Prisma Studio

    ```
    npx prisma studio
    ```    

    Isso abrirá uma interface gráfica para visualizar e manipular os dados no banco de dados.