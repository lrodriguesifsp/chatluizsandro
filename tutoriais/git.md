# GIT

## Configuração do Nome de Usuário e E-mail:

```
git config --global user.name "Fulano da Silva"
git config --global user.email "fulano@gmail.com"
```

A opção ``--global`` serve para indicar que a configuração deve ser aplicada globalmente, ou seja, em todos os repositórios do usuário na máquina. Se omitida, a configuração se aplica apenas ao repositório local em que o comando é executado.

## Limpeza das Credenciais do Usuário:

Quando você trabalha com repositórios Git que exigem autenticação (como no GitHub), suas credenciais de login (nome de usuário e senha ou token de acesso) podem ser armazenadas na máquina para facilitar futuros acessos. Em algumas situações, pode ser necessário limpar essas credenciais, seja para alterar a conta que está sendo usada, resolver problemas de autenticação ou por motivos de segurança.

No Windows, o comando cmdkey é utilizado para gerenciar as credenciais armazenadas no sistema. Vamos detalhar os comandos:

### Listar todas as credenciais armazenadas:

```
cmdkey /list
```

Este comando exibe uma lista de todas as credenciais armazenadas no Gerenciador de Credenciais do Windows. Cada credencial é listada com um identificador que descreve para qual serviço ou domínio ela é usada.

### Excluir credenciais específicas do GitHub:

```
cmdkey /delete:git:https://github.com
```

Este comando exclui especificamente as credenciais associadas ao GitHub. Aqui, ``git:https://github.com`` é o identificador das credenciais que o Git usa para acessar repositórios no GitHub. Após executar este comando, o Git não terá mais acesso às credenciais armazenadas e solicitará novas credenciais na próxima vez que você tentar interagir com um repositório GitHub.