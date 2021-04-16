# Getting Started - Let's Code API

- crie um `.env` a partir do `.env.schema`
```
npm install
cd BACK/
```

### Rodando localmente
```
~/BACK npm run dev
```

### Rodando com Docker
```
~/BACK docker build . -t codeapi
~/BACK docker run -p 5000:5000 -d codeapi
```


## Stack
Esse projeto foi construído utilizando:
- NodeJS
- Jest
- Nodemon
- Jsonwebtoken
- Winston
- Express
- Bcrypt
- Sequelize
- Sqlite3
- Moment


## Descrição
Ao iniciar a aplicação, o sistema cria um usuário admin com as credenciais fornecidas.
Faça o login pela rota `/login` enviando as credenciais no body:

```
{
    "login": "admin_login",
    "password": "admin_password"
}
```


## Considerações
- Foi adicionada uma rota de criação de usuário somente para fins de teste.
- Fiz uma versão simplificada de log para as requisições.
