# GreenBox — Site institucional

Site estático desenvolvido com **HTML5, CSS3 e JavaScript puro**, preparado para publicação no GitHub Pages.

## Estrutura

```text
greenbox/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── favicon.svg
│   └── README.txt
└── README.md
```

## Como visualizar no computador

1. Extraia a pasta do projeto.
2. Abra `index.html` no navegador.
3. Para editar, abra a pasta inteira no VS Code ou editor de sua preferência.

Não é necessário instalar dependências ou executar um servidor para visualizar a versão básica.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `greenbox`.
2. Envie **todos os arquivos e pastas** deste projeto para a raiz do repositório.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`.
6. Clique em **Save** e aguarde a publicação.
7. O GitHub mostrará o endereço público do site na mesma página.

O arquivo `index.html` precisa ficar na raiz do repositório.

## Configuração do formulário

O GitHub Pages hospeda arquivos estáticos e não recebe nem armazena formulários por conta própria.

Para fazer o formulário preparar uma mensagem de e-mail:
1. Abra `js/script.js`.
2. Localize `const destinationEmail = "SEU_EMAIL_AQUI";`.
3. Substitua pelo endereço de e-mail oficial do GreenBox.

Isso abre o aplicativo de e-mail do visitante. Para receber formulários diretamente no site, será necessário conectar um serviço de formulários ou criar um backend.

## Imagens oficiais

A pasta `assets/` está preparada para receber o logotipo e as fotografias oficiais. As ilustrações atuais são feitas em CSS e podem ser substituídas quando as imagens forem fornecidas.

## Observação sobre as funcionalidades

A página apresenta o conceito e o escopo do GreenBox. Não representa, por si só, a implementação de carrinho, pagamento, pedidos, entregas ou autenticação. Esses recursos exigem integração com o marketplace e/ou um backend.
