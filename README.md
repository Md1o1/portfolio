# Portfolio VsCode
[![Open in Visual Studio Code](https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc)](https://vscode.dev/github/Md1o1/portfolio)

Um portfolio temático inspirado no Visual Studio construído com Next.js e publicado com o Vercel.

![Exemplo](/public/img/portfolio.png)

## Variáveis de Ambiente
Caso queira dar um fork nesse repositório, crie um arquivo `.env.local` dentro do diretório do projeto, veja o arquivo `.env.exemplo`.

## Executando em ambiente local
Basta instalar as dependências com npm install e depois executar: 
```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) com o seu navegador para ver o resultado.

Todos os componentes relacionados ao VSCode podem ser encontrados na pasta `components`. Para alterar o conteúdo do portfólio, confira a pasta `pages`. Para adicionar ou remover páginas, modifique `components/Sidebar.jsx` e `components/Tabsbar.jsx`.

## Recursos do Next.js 

Para aprender mais sobre o Next.js, veja os recursos seguintes:

- [Documentação Next.js](https://nextjs.org/docs) - Aprenda sobre Next.js, recursos e API.
- [Aprenda Next.js](https://nextjs.org/learn) - um tutorial interativo do Next.js.

Para mais informações você pode acessar o repositório oficial: [Next.js](https://github.com/vercel/next.js/)

## Publicação no Vercel

A forma mais simples de fazer a publicação do seu projeto Next.js app é usando a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira a  [Documentação de publicação do Next.js ](https://nextjs.org/docs/deployment) para mais detalhes.
