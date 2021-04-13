# Getting Started - Let's Code API

Esse projeto foi construído utilizando a seguinte stack:
- NodeJS
- Jest
- Nodemon
- Jsonwebtoken
- Winston
- Express
- Bcrypt
- Sequelize
- Sqlite3

## Descrição
Ao iniciar a aplicação, o sistema cria um usuário admin com as credenciais fornecidas.
Faça o login pela rota /login enviando as credenciais no body:

´´´
{
    "login": "admin_login",
    "password": "admin_password"
}
´´´
