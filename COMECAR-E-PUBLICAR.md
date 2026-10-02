# Rodar no Mac e publicar no GitHub

## 1. Abrir o site no seu computador

O projeto está em `/Users/claytonbrito/Desktop/jujubas-dev`.

Abra o Terminal e execute, uma linha de cada vez:

```sh
cd /Users/claytonbrito/Desktop/jujubas-dev
npm install
npm run dev
```

A instalação já foi feita nesta atualização. Nas próximas vezes, basta entrar na pasta e executar `npm run dev`. Também deixei `npm start` como alternativa.

Abra o endereço **Local** que aparecer no terminal, normalmente http://localhost:5173. Deixe o terminal aberto enquanto usa o site. Para encerrar, pressione **Control + C**. Se a porta 5173 já estiver ocupada por outra prévia, o Vite poderá mostrar 5174; use o endereço que ele informar.

No VS Code: **File → Open Folder → Desktop → jujubas-dev**, depois **Terminal → New Terminal** e `npm run dev`.

### Por que `npm run` não abriu?

`npm run` sozinho apenas lista os comandos do projeto. É preciso informar qual executar: `npm run dev`. A cópia do Desktop também estava sem a pasta de dependências, `node_modules`; ela foi instalada.

### Se aparecer erro

- `ENOENT … package.json`: o terminal está na pasta errada. Execute o `cd` acima.
- `vite: command not found` ou `Cannot find package`: execute `npm install` na pasta do projeto.
- `npm: command not found`: instale o Node.js LTS e reabra o terminal. O projeto pede Node 22.12+ ou uma versão LTS posterior compatível.
- Tela de listagem de arquivos ou página em branco ao clicar no HTML: use o endereço do servidor local; não abra `index.html` diretamente.

Para conferir a versão que será publicada:

```sh
npm run build
npm run preview
```

Abra o endereço exibido por `preview`, normalmente http://localhost:4173.

## 2. Enviar as alterações para seu repositório

Esta pasta **já é um repositório Git**, está na branch `main` e tem este remoto configurado:

https://github.com/GhostRiley115/Jujubas-LandindPage

O nome acima preserva exatamente o repositório que você configurou. Não precisa executar `git init`, criar outro repositório nem adicionar o remoto novamente.

No terminal, dentro da pasta do projeto:

```sh
cd /Users/claytonbrito/Desktop/jujubas-dev
git status
git add .
git commit -m "Atualiza identidade visual, imagens e temas claro e escuro"
git push origin main
```

O que cada etapa faz:

1. `git status` mostra os arquivos alterados; confira antes de continuar.
2. `git add .` prepara as alterações da pasta para o commit.
3. `git commit` salva uma versão local com uma descrição.
4. `git push` envia essa versão ao GitHub.

Se não houver alterações, o commit informa isso; não é um erro. Se pedir autenticação, use o fluxo de login do GitHub/VS Code ou GitHub Desktop; a senha comum da conta não serve como senha de Git por HTTPS. Se o envio for recusado porque há novas alterações no remoto, não use `--force`: primeiro sincronize e resolva eventuais conflitos.

### Alternativa sem comandos Git

No GitHub Desktop, escolha **File → Add Local Repository**, selecione a pasta `jujubas-dev`, revise os arquivos, escreva um resumo no campo **Summary**, clique em **Commit to main** e depois **Push origin**.

Nenhum commit ou push foi feito automaticamente nesta atualização. Sua configuração e seu histórico Git foram preservados.

## 3. Colocar o site no ar com GitHub Pages

Enviar código e publicar o site são etapas diferentes. O fluxo de publicação já está em `.github/workflows/deploy.yml`.

1. Abra o repositório no GitHub.
2. Vá a **Settings → Pages**.
3. Em **Build and deployment → Source**, escolha **GitHub Actions**.
4. Envie suas alterações com os comandos acima. Se já enviou antes de ativar Pages, vá a **Actions → Publicar no GitHub Pages → Run workflow**, selecione `main` e execute.
5. Aguarde as etapas `build` e `deploy` ficarem verdes.
6. Abra o endereço informado em **Settings → Pages** ou na execução da publicação.

Com o nome atual do repositório e sem domínio personalizado, o endereço esperado é:

https://ghostriley115.github.io/Jujubas-LandindPage/

Esse endereço é uma previsão baseada no remoto; a publicação pública ainda não foi verificada. O endereço definitivo deve ser conferido no GitHub após o deploy.

No GitHub Free, utilize repositório público para Pages. Outros planos podem oferecer Pages para repositórios privados. Não crie outro workflow sugerido pelo GitHub: o projeto já contém um.

Para futuras atualizações, repita `git add`, `git commit` e `git push`. O workflow instala as dependências, gera a pasta `dist` e publica. Não é necessário enviar `node_modules` nem `dist`; ambas estão no `.gitignore`.

Documentação oficial:
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

## 4. Próximas personalizações

- `src/content.js`: textos, galeria, links e e-mail.
- `src/theme.jsx`: botão de tema e preferência salva.
- `src/identity.css`: aparência atual, claro/escuro e animações.
- `src/styles.css`: base do layout e responsividade.
- `public/images/`: imagens e logos já copiadas; nada depende das pastas Downloads.

Veja `PERSONALIZAR.md` para detalhes. Falta apenas informar um e-mail real se quiser ativar contato e fornecer capturas do sistema Kiora se quiser substituir as imagens ilustrativas do restaurante.
