# Gerenciar Tarefas

## Descrição
Esta é uma API para gerenciamento de tarefas.


"Foi desenvolvida para obter nota na Disciplina de Programação Web II"

## Instruções de Uso
1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Configure o arquivo `.env` com suas credenciais do banco de dados.
4. Execute as migrações com `npx sequelize-cli db:migrate`.
5. Inicie o servidor com `npm start`.

## Variáveis de Ambiente
Crie um arquivo `.env` com as seguintes variáveis:
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=nome_do_banco

## Rotas Disponíveis
### Usuários
- `POST /api/users` - Criar um novo usuário.
- `GET /api/users` - Obter todos os usuários.
- `GET /api/users/:id` - Obter um usuário pelo ID.
- `PUT /api/users/:id` - Atualizar um usuário pelo ID.
- `DELETE /api/users/:id` - Deletar um usuário pelo ID.

### Tarefas
- `POST /api/tasks` - Criar uma nova tarefa.
- `GET /api/tasks` - Obter todas as tarefas.
- `GET /api/tasks/:id` - Obter uma tarefa pelo ID.
- `PUT /api/tasks/:id` - Atualizar uma tarefa pelo ID.
- `DELETE /api/tasks/:id` - Deletar uma tarefa pelo ID.
