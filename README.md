# :construction: README em construção ! :construction:

Projeto Trybe - API Rest simples de um sistema de loja de produtos do mundo RPG

Essa API foi construida durante o curso de Dev Web Fullstack da Trybe. Esse projeto consiste em fazer requisições para uma loja de produtos de RPG, sendo possível realizar um CRUD de produtos, usuários e pedidos. Utilizando Node.js e Express, desenvolvi essa API no modelo MSC (Model, Service e Controller), com o uso de classes em Typescript e também, o JWT para validações de token.

Dentre as funcionalidades esta: 

- Cadastrar um produto
- Listagem de produtos
- Cadastrar pessoas usuárias
- Listagem de pedidos
- Fazer login de usuario
- Cadastrar um pedido

O banco utilizado nessa API foi o MySQL

## Tecnologias e habilidades usadas

 - TypeScript
 - Node.js
 - Express
 - MySQL
 - API Rest
 - JWT (Json Web Token)
 - MSC (Model, Service, Controller)
 - CRUD 

Todos os arquivos desenvolvidos por mim estão dentro da pasta `src`, os restantes, são arquivos de configuração ou arquivos desenvolvidos pela Trybe

## Como rodar 🚀

Caso queira executar esse projeto em sua máquina utilizando o docker, você pode:
 * Fazer o clone desse repositório 
 * Instalar as dependências utilizando rodando em seu terminal `npm install`
 * Com o docker instalado e inicializado, rode em seu terminal `docker-compose up -d`
 * Execute os containers criados `docker exec -it <container-name> bash` e `docker exec -it <container-name-db> bash`
 * No container de back-end, rode `npm run dev`
 * No container do banco de dados, rode `mysql -u root -p` utilizando a senha configurada nas variaveis de ambiente do docker-compose.yml, `password`
 * Pronto! Agora só executar endpoints com as requisições configuradas no arquivo `src/app.ts`

## Autor

**Melqui Brito de Jesus**

[Linkedin](https://www.linkedin.com/in/melqui-brito/)

[Telegram](https://t.me/Merkulino)
