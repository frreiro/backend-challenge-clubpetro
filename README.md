# Desafio de Backend

<img src="./img/logo-clubpetro.png" style="margin-left: 100px"
     alt="Clubpetro" width="300">

- [Desafio de Backend](#desafio-de-backend)
	- [Descrição](#descrição)
			- [O Desafio](#o-desafio)
	- [🚀 Technologies](#-technologies)
	- [📦 Instalação](#-instalação)
	- [🚀 Uso](#-uso)
		- [Development mode](#development-mode)
	- [📌 Features](#-features)
	- [🔀 Rotas](#-rotas)
- [Desafio](#desafio)
			- [Requisitos Obrigatórios](#requisitos-obrigatórios)
			- [Bônus](#bônus)
		- [Submissão e Prazo de entrega](#submissão-e-prazo-de-entrega)

## Descrição

Este desafio tem como objetivo avaliar as habilidades técnicas do candidato a vaga de desenvolvedor backend no Clubpetro.

#### O Desafio

O desafio consiste em desenvolver uma API rest que permita o CRUD de lugares para se conhecer ao redor do mundo para alimentar o frontend que pode ser visto na imagem a seguir:

<img src="./img/challenge.png" alt="Desafio" >

Os dados a ser considerados são:

- País: O país escolhido;
- Local: O local dentro do país escolhido;
- Meta: O mês e o ano que o usuário pretende visitar o local;
- Url da bandeira do país;
- Data de criação do registro;
- Data de atualização do registro.

## 🚀 Technologies

- [Nest.js](https://nestjs.com/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Eslint](https://eslint.org/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)


## 📦 Instalação

Clone o repositorio.

```bash
# https
$ git clone https://github.com/frreiro/backend-challenge-clubpetro
# ssh
$ git clone git@github.com:frreiro/backend-challenge-clubpetro.git
```


## 🚀 Uso

Crie o seguinte arquivo e preencha conforme seu exemplo 
 - .env
 - 
### Development mode

Para executar o projet, crie um arquivo `.env` baseado no `.env.example` e execute os seguinte comando:

```bash
$ npm run start:dev
#or
$ yarn run start:dev
```
## 📌 Features

- [x] Criar um novo local
- [x] Delete um local
- [x] Atualizar um local
- [x] Ler todas os locais
- [x] Ler todos os países


## 🔀 Rotas

- **POST** `/locations` - Cria um novo local	
  - headers: default
  - body:
	```json
	{
		"countryId": 1,
		"local": "XXXXXXXXX",
		"goal": "MM/YYYYY",
	}
	```
  - response: 201

	

- **GET** `/locations` - Obtem todas os locais

  - headers: default 
  - body: none
  - response:
	```json
	[
		{
			"id": 0,
			"country": "country_name",
			"local": "local_name",
			"goal": "MM/YYYYY",
			"flag_url": "http://",
			"created_at":"YYYY-MM-DDTHH:mm:ss",
			"updated_at":"YYYY-MM-DDTHH:mm:ss"
		}
	]
	```


- **PUT** `/locations/:id` - Atualiza um local
  
  - headers: default 
  - body: 
	```json
	{
		"local": "local_name",
		"goal": "MM/YYYYY",
	}
	```
	OBS: **local** e **goal** não são obrigatórios simultanễamente

- **DELETE** `/locations/:id` - Remove um local
  
  - headers: default 
  - body: nenhum

- **GET** `/health` - Get API health
    - headers: 
    - body: none
    - response: `OK`

# Desafio

#### Requisitos Obrigatórios

> Requisitos que serão avaliados no desafio.

- A API deverá ser desenvolvida com Node.js e Express;
- Apenas o Local e a Meta poderão ser editados;
- O mesmo local em determinado país não poderá ser adicionado de forma duplicada;
- A listagem dos dados deverá ser ordenada de forma crescente pela meta;
- O candidato deverá adicionar ao projeto uma explicação de como executar a aplicação.

#### Bônus

> Requisitos que não são obrigatórios mas podem te deixar em vantagem com relação aos outros candidatos.

- Utilização do framework [NestJS](https://nestjs.com/);
- Typescript;
- Testes automatizados;
- [TypeORM](https://typeorm.io/#/);
- [Docker](https://www.docker.com/);
- Deploy para [Google Cloud Platform](https://cloud.google.com/) (ao criar conta é possível receber um bonus para teste).

### Submissão e Prazo de entrega

- O canditado deverá realizar um fork deste repositório e submeter o código no mesmo;
- Em caso do deploy realizado, a url deverá ser adicionada no README;
- O prazo de entrega para este desafio é de 2 (duas) semanas, contando a partir do dia em que o candidato recebeu o email com o link do repositório;
- Ao finalizar o desafio, o candidato deverá submeter o desafio no questionário disponível na sua área de candidato na plataforma(https://menvievagas.com.br/vagas/fam%C3%8Dliapires/) do Processo Seletivo. É só clicar em RESPONDER no questionário e inserir o link do seu PR.
Em caso de dúvidas, enviar um e-mail para jobs@clubpetro.com.br
