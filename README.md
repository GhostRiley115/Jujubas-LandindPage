# Jujuba’s Dev — portfólio React

Site acadêmico da empresa fictícia Jujuba’s Dev, desenvolvido em React + Vite. Preserva o conceito, as cores, o slogan e o conteúdo institucional do projeto original, acrescentando apresentação de Kiora e TechStart, abas, galeria ampliável, navegação responsiva e animações com respeito à preferência de movimento reduzido.

## Rodar no computador

Instale Node.js 22.12+ (ou 24 LTS). Abra esta pasta no VS Code e, no terminal, execute:

```sh
npm ci
npm run dev
```

Abra o endereço exibido no terminal. Para gerar a versão publicável, execute `npm run build`. Para conferir essa versão, execute `npm run preview`. Não abra `index.html` diretamente com dois cliques: o React precisa do servidor local ou do build publicado.

## Onde editar

- `src/content.js`: nomes, links, descrições, funcionalidades, fotos da galeria e e-mail.
- `src/main.jsx`: estrutura das seções, textos institucionais e elementos visuais.
- `src/styles.css`: paleta, tamanhos, estilos responsivos e animações.
- `public/images/`: logos, materiais de identidade e capturas dos sistemas.
- `public/favicon.svg`: ícone da aba do navegador.

Veja o guia **PERSONALIZAR.md** para as imagens que faltam e exemplos de preenchimento.

## O que é real e o que é ilustrativo

Os materiais visuais de Jujuba’s Dev e Kiora foram extraídos do DOCX fornecido. As telas estilizadas de Kiora e TechStart são composições conceituais identificadas na página, não capturas nem uma simulação funcional dos produtos. O portfólio não implementa delivery, reservas ou o CRUD de eventos: apresenta as soluções e leva aos links informados.

As descrições do aplicativo Kiora seguem a solicitação atual do autor. O documento original o apresentava como expansão futura; confirme o estágio antes de apresentar funcionalidades como concluídas. Os sites externos não puderam ser consultados neste ambiente durante a criação; os links fornecidos foram preservados.

Não foram publicados telefone, endereço, redes sociais ou e-mail fictícios dos cartões. Sem um e-mail configurado, o bloco final apresenta os projetos e informa que o canal de contato será adicionado.

## Hospedagem recomendada: GitHub Pages

Para este portfólio acadêmico estático, recomendo GitHub Pages: pode ficar junto do código, não exige servidor próprio e atende React depois do build. Um repositório público permite usar GitHub Free. Como o site usa âncoras e caminhos relativos, ele funciona também em `usuario.github.io/nome-do-repositorio/`.

1. Crie um repositório no GitHub e envie **o conteúdo desta pasta** para a raiz, incluindo `.github/workflows/deploy.yml` e `package-lock.json`. Não envie `node_modules`.
2. Use a branch `main`. Se escolher outro nome, ajuste o workflow.
3. Em **Settings → Pages → Build and deployment**, escolha **GitHub Actions**.
4. Na aba **Actions**, execute ou acompanhe “Publicar no GitHub Pages”.
5. Ao finalizar, o GitHub informa o endereço público em Pages.

O workflow já foi incluído, mas ainda não foi executado no GitHub. Nenhum repositório ou site público foi criado nesta entrega.

Documentação: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

## Alternativa: Render Static Site

Também funciona, especialmente se você preferir manter a organização dos projetos no Render. Este portfólio usa **Static Site**, não Web Service. Static Sites têm implantação gratuita sujeita aos limites do plano para transferência e builds.

1. Envie esta pasta para um repositório.
2. No Render, escolha **New → Static Site** e conecte o repositório.
3. Build Command: `npm ci && npm run build`.
4. Publish Directory: `dist`.
5. Configure Node 22 (variável `NODE_VERSION=22`).

O `render.yaml` também permite criação via Blueprint. Se o projeto estiver numa subpasta do repositório, defina essa subpasta como Root Directory e ajuste o workflow do GitHub para executar nela. Não são necessárias regras de redirecionamento para esta versão, pois a navegação usa âncoras.

Documentação: https://render.com/docs/static-sites

O backend do Kiora pode continuar no Render; a hospedagem do portfólio é independente. Não há necessidade de migrar as duas soluções.
