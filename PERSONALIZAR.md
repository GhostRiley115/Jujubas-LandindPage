# Seu guia de personalização

Os arquivos que o navegador usa ficam em `public/images/`. Nos textos de configuração, escreva `images/nome-do-arquivo.png`, sem `public/` e sem barra inicial. Prefira nomes sem espaços e sem acentos.

## 1. Logo da empresa

Já incluí a identidade extraída do documento:

- `public/images/logo-jujubas.png`: logo horizontal original, disponível para uso.
- `public/images/jujubas-identidade.jpg`: versão vertical, exibida em “Sobre nós”.

O cabeçalho usa uma assinatura tipográfica compacta criada para a página. Para trocar pela logo original, defina `headerLogo: 'images/logo-jujubas.png'` em `company`, no arquivo `src/content.js`. A mesma troca será aplicada ao rodapé. Um SVG ou PNG transparente exportado do arquivo original da marca é a melhor opção. A versão extraída do DOCX tem fundo claro.

## 2. Capturas reais do Kiora — falta você adicionar

Salve, por exemplo:

- `public/images/kiora-web.webp`: página do delivery, de preferência 1440 × 1000 px.
- `public/images/kiora-app.webp`: tela do aplicativo, por exemplo 900 × 1600 px.

Em `src/content.js`, dentro do projeto `kiora`, há duas entradas em `platforms`. Troque `image: ''` por `image: 'images/kiora-web.webp'` na entrada “Web delivery” e por `image: 'images/kiora-app.webp'` na entrada “Aplicativo”. A captura substitui automaticamente a composição conceitual. Não é preciso alterar o componente.

Evite capturas com dados pessoais, pedidos reais ou informações de clientes.

## 3. Capturas reais da TechStart — falta você adicionar

- `public/images/techstart-web.webp`: captura da landing page.
- `public/images/techstart-desktop.webp`: captura do CRUD de eventos.

Preencha o campo `image` das respectivas plataformas do projeto `techstart`, da mesma forma que no Kiora. As imagens são exibidas inteiras, sem recortar a interface.

## 4. Galeria

A galeria já usa três materiais do documento, sem os cartões que expõem contatos fictícios. Para acrescentar imagens, salve os arquivos em `public/images/galeria/` e adicione um objeto ao array `gallery`:

```js
{
  src: 'images/galeria/kiora-tela-inicial.webp',
  title: 'A experiência de pedir um lámen',
  category: 'Kiora',
  alt: 'Tela inicial do delivery Kiora com o cardápio de lámen'
}
```

As categorias atuais são `Jujuba’s Dev` e `Kiora`. Para incluir TechStart como filtro, acrescente `TechStart` à lista de filtros no componente `Gallery`, em `src/main.jsx`, e use essa categoria nas novas imagens. O filtro “Todos” já mostra qualquer imagem adicionada.

Prefira WebP/JPG para fotos e capturas, até cerca de 500 KB por arquivo; PNG/SVG para logos. Escreva um texto alternativo descritivo em `alt`.

## 5. Contato — falta confirmar

Em `src/content.js`, preencha `company.email` com o endereço que realmente deseja divulgar. Isso ativa o botão para abrir o aplicativo de e-mail do visitante. Não existe formulário nem servidor de envio. Enquanto o campo estiver vazio, o site não oferece contato fictício.

## 6. Informações

- Links externos, descrições e recursos dos sistemas: `src/content.js`.
- História, missão, visão e textos da capa: `src/main.jsx`.
- Cores da empresa: variáveis no início de `src/styles.css`.
- Título da aba e resumo para buscadores: `index.html`.

Confirme o estágio de desenvolvimento das funcionalidades antes da apresentação do TCC. Não foram inventados números de clientes, depoimentos, resultados comerciais ou integrantes da equipe.

Após alterar, confira com `npm run dev`; para publicar, envie as mudanças ao repositório conectado à hospedagem.
