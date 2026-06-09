# Shopping Dev

Aplicação de e-commerce desenvolvida com React, TypeScript e Vite. O projeto exibe uma vitrine de produtos, permite visualizar detalhes de cada item e gerenciar um carrinho de compras com controle de quantidade e total calculado.

## Funcionalidades

- Listagem de produtos em destaque na página inicial
- Página de detalhes do produto com descrição completa
- Carrinho de compras com adição, remoção e alteração de quantidade
- Contador de itens no header
- Notificações ao adicionar produtos na home
- Redirecionamento automático para o carrinho ao adicionar um item na página de detalhes
- Layout responsivo com Tailwind CSS

## Tecnologias

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [JSON Server](https://github.com/typicode/json-server) (API mock)
- [React Hot Toast](https://react-hot-toast.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- npm

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositorio>
cd shopping-dev
npm install
```

## Como executar

O projeto depende de dois processos: a API mock e o frontend.

**Terminal 1 — API (json-server):**

```bash
npm run server
```

A API ficará disponível em `http://localhost:3000`.

**Terminal 2 — Frontend (Vite):**

```bash
npm run dev
```

O aplicativo ficará disponível em `http://localhost:5173`.

## Scripts disponíveis

| Comando           | Descrição                                      |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento (Vite)    |
| `npm run server`  | Inicia a API mock com json-server na porta 3000 |
| `npm run build`   | Gera o build de produção                       |
| `npm run preview` | Visualiza o build de produção localmente       |
| `npm run lint`    | Executa o ESLint no projeto                    |

## Rotas

| Rota              | Descrição                    |
| ----------------- | ---------------------------- |
| `/`               | Página inicial com produtos  |
| `/product/:id`    | Detalhes de um produto       |
| `/cart`           | Carrinho de compras          |

## Estrutura do projeto

```
shopping-dev/
├── db.json                    # Dados mock dos produtos
├── src/
│   ├── App.tsx                # Configuração das rotas
│   ├── main.tsx               # Ponto de entrada da aplicação
│   ├── components/
│   │   ├── header/            # Cabeçalho com link do carrinho
│   │   └── layout/            # Layout base com Outlet
│   ├── contexts/
│   │   └── CartContext.tsx    # Estado global do carrinho
│   ├── pages/
│   │   ├── home/              # Listagem de produtos
│   │   ├── detail/            # Detalhes do produto
│   │   └── cart/              # Carrinho de compras
│   └── services/
│       └── api.ts             # Cliente HTTP (Axios)
└── package.json
```

## API

Os produtos são servidos pelo [json-server](https://github.com/typicode/json-server) a partir do arquivo `db.json`.

Endpoints principais:

- `GET /products` — lista todos os produtos
- `GET /products/:id` — retorna um produto específico

A URL base da API está configurada em `src/services/api.ts`:

```
http://localhost:3000
```

## Carrinho de compras

O estado do carrinho é gerenciado pelo `CartContext` e oferece:

- `addItemCart` — adiciona um produto ou incrementa a quantidade
- `removeItemCart` — decrementa a quantidade ou remove o item
- `cart` — lista de itens no carrinho
- `cartAmount` — quantidade total de itens
- `total` — valor total formatado em BRL

## Build de produção

```bash
npm run build
```

Os arquivos gerados ficam na pasta `dist/`. Para visualizar localmente:

```bash
npm run preview
```

> **Nota:** o build de produção ainda depende da API mock em execução para carregar os produtos. Em um ambiente real, substitua a URL em `src/services/api.ts` por uma API de produção.

## Licença

Este projeto é de uso educacional.
