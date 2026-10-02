# Jujuba’s Dev — React + Vite

Portfólio acadêmico com identidade original da Jujuba’s Dev, apresentações de Kiora e TechStart, temas claro e escuro, preferência persistente, animações com suporte a movimento reduzido, abas acessíveis e galeria com filtros e ampliação.

## Começar

```sh
cd /Users/claytonbrito/Desktop/jujubas-dev
npm install
npm run dev
```

`npm run` sozinho lista os scripts; `npm run dev` abre o servidor de desenvolvimento. `npm start` também funciona. Use Node 22.12+ ou uma versão LTS posterior compatível.

## Guias

- **COMECAR-E-PUBLICAR.md**: rodar no Mac, resolver erros comuns, enviar ao repositório já configurado e ativar GitHub Pages.
- **PERSONALIZAR.md**: logos, imagens, textos, temas e contato.
- **public/images/ORIGEM-DOS-ARQUIVOS.md**: materiais utilizados e seus arquivos de origem.

## Publicação

- `npm run build` gera `dist`.
- `npm run preview` permite conferir o resultado localmente.
- GitHub Pages: `.github/workflows/deploy.yml`; escolha GitHub Actions em Settings → Pages.
- Render: Static Site, build `npm ci && npm run build`, diretório `dist`; configuração alternativa em `render.yaml`.

O portfólio é estático; não implementa delivery, reservas ou CRUD. Ele apresenta essas soluções e abre seus sites. As imagens do Kiora são ilustrativas e estão identificadas. TechStart usa uma captura da landing page e o mockup desktop fornecidos. Nenhum contato fictício é publicado; configure seu e-mail para ativá-lo.

O projeto está independente das pastas de origem: as imagens necessárias ficam em `public/images/`. As alterações desta atualização não foram enviadas ao GitHub automaticamente.
