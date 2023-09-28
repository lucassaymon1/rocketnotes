# rocketnotes
Uma aplicação que permite que o usuário crie e edite suas notas pessoais. O usuário também pode usar tags criadas para filtrar as notas já existentes. Além disso, o app conta com sistema de cadastro e autenticação de usuário.

## Deploy do projeto
Você pode acessar e usar a aplicação através do deploy feito em: https://lsrocketnotes.netlify.app
O repositório para a API criada para essa aplicação se encontra no repositório: https://github.com/lucassaymon1/rocketnotes-API

## Funcionalidades
* Cadastro de novo usuário e login
* Autenticação do usuário existente com JWT token
* Armazenamento e upload de imagens com Multer
* Edição das informações pessoais do usuário (Nome, foto do perfil, email e senha)
* Cadastro e exclusão de notas no usuário
* Filtragem de notas por tags
* Filtragem de notas por barra de pesquisa (título da nota / tags)

## Instruções de login
Para começar a usar a aplicação, é necessário fazer o login com uma conta já existente. Para isso você pode usar a conta de demonstração que notas já existentes:

Email: `user.demo@email.com` / Senha: `123456`

Ou se preferir, pode também criar uma nova conta pela pagina de cadastro e acessá-la fazendo login logo em seguida:

![Rocketnotes-signin](https://github.com/lucassaymon1/rocketnotes/assets/102837549/19b781ea-5682-437b-bd9d-1883c062d233)

![Rocketnotes-login](https://github.com/lucassaymon1/rocketnotes/assets/102837549/00fd04fb-7408-4ade-91cb-458b17cd6b13)

## Interfaces

### Página inicial

![Rocketnotes-home_1](https://github.com/lucassaymon1/rocketnotes/assets/102837549/04cd6a33-2236-4e06-bff0-d89c12a0f7ed)

### Detalhes

![Rocketnotes-details](https://github.com/lucassaymon1/rocketnotes/assets/102837549/2895df3f-4818-4f91-bd07-8ff28fd3e98c)

### Nova nota

![Rocketnotes-new](https://github.com/lucassaymon1/rocketnotes/assets/102837549/31864985-790f-4530-858b-0ccbb3128f35)

![Rocketnotes-new-2](https://github.com/lucassaymon1/rocketnotes/assets/102837549/d5680731-818d-4a3b-8025-2fb86030a4b0)

## Tecnologias utilizadas

O projeto foi desenvolvido utilizando `javascript` como linguagem de programação, além de outras tecnologias como `ReactJS` e `Styled Components` para a parte Frontend e `NodeJS`, `Express` e `SQLite` para o Backend.
O desenvolvimento desta aplicação contou também com a utilização de conceitos e tecnologias como: 
* React Router
* React Rooks
* Operações CRUD
* API Rest
* JWT Token
* Multer
