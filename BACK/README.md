# Getting Started - Let's Code API

- Crie um `.env` a partir do `.env.schema`, e preencha as variáveis:
```
ADMIN_LOGIN=
ADMIN_PASSWORD=
JWT_KEY=
```

Na raiz do projeto insira os seguintes comandos:
```
cd BACK/
npm install
```

### Rodando localmente
```
npm run dev
```

### Rodando com Docker
```
docker build . -t codeapi
docker run -p 5000:5000 -d codeapi
```

### Rodando os testes
Para visualização dos testes sem interferências do logger, troque a variável de ambiente `ENV_STAGE` para `test` e insira o comando:
```
npm test
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
- Foi adicionada uma rota `/user` de criação de usuário somente para fins de teste.
- Fiz uma versão simplificada de log para as requisições.
