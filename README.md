#♻️ ReUse! – Plataforma de Marketplace para Materiais Recicláveis

#📌 Sobre o Projeto

O ReUse! é uma plataforma web que conecta pessoas que possuem materiais recicláveis com usuários interessados em coletar, comprar ou reutilizar esses materiais.

A proposta é incentivar a economia circular e facilitar a reutilização de recursos que normalmente seriam descartados.

Este projeto foi desenvolvido como parte de uma atividade acadêmica utilizando tecnologias modernas de desenvolvimento web.

#🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

Next.js – Framework React para desenvolvimento web

Prisma ORM – ORM para comunicação com o banco de dados

PostgreSQL – Banco de dados relacional

React – Biblioteca para construção da interface

TailwindCSS – Estilização da interface


#🧠 Funcionalidades da Plataforma

A versão web da plataforma possui as seguintes funcionalidades principais:


#👤 Cadastro de Usuário

Permite que novos usuários criem uma conta na plataforma informando:

Nome

Email

Senha

Cidade


#🔐 Login de Usuário

Usuários cadastrados podem acessar a plataforma utilizando seu email e senha.

Após o login, o usuário pode acessar as funcionalidades da plataforma.


#📦 Publicação de Materiais Recicláveis

Usuários podem anunciar materiais recicláveis disponíveis para coleta ou venda.

Informações do anúncio:

Nome do material

Categoria

Descrição

Quantidade

Localização


#🔎 Listagem de Itens

A plataforma apresenta uma lista com todos os materiais recicláveis cadastrados.

Os usuários podem visualizar:

descrição do item

categoria

quantidade disponível

localização do material


#🗄️ Estrutura do Banco de Dados

O banco de dados utilizado foi o PostgreSQL, integrado à aplicação através do Prisma ORM.

Tabela Users

Armazena os dados dos usuários da plataforma.

Campos principais:

id

name

email

password

city

createdAt

Tabela Items

Armazena os materiais recicláveis publicados pelos usuários.

Campos principais:

id

title

description

category

quantity

location

createdAt

userId

Relacionamento

Um usuário pode publicar vários itens, enquanto cada item pertence a apenas um usuário.

#📂 Estrutura do Projeto
src
 ├ app
 │ ├ page.tsx
 │ ├ login
 │ │ └ page.tsx
 │ ├ register
 │ │ └ page.tsx
 │ ├ items
 │ │ └ page.tsx
 │ ├ publish
 │ │ └ page.tsx
 │
 │ └ api
 │   ├ register
 │   │ └ route.ts
 │   └ items
 │     └ route.ts
 │
 ├ components
 │ └ Navbar.tsx
 │
 └ lib
   └ prisma.ts

#⚙️ Como Rodar o Projeto
1️⃣ Clonar o repositório
git clone https://github.com/AryCord26/reuse-web.git

2️⃣ Entrar na pasta do projeto
cd reuse-web

3️⃣ Instalar dependências
npm install

4️⃣ Configurar o banco de dados

Criar um arquivo .env com a conexão do banco:
DATABASE_URL="postgresql://usuario:senha@localhost:5432/reuse"

5️⃣ Executar as migrations do Prisma
npx prisma migrate dev

6️⃣ Rodar o projeto
npm run dev

A aplicação ficará disponível em: http://localhost:3000

#🌱 Objetivo do Projeto

O ReUse! busca incentivar práticas sustentáveis e facilitar o acesso a materiais recicláveis, contribuindo para:

redução de resíduos

incentivo à reciclagem

fortalecimento da economia circular

#👨‍💻 Desenvolvedor

Projeto desenvolvido por:

Ary Cordeiro

GitHub:
https://github.com/AryCord26
