# Personalizar o portfólio

## Logos

As logos originais estão em `public/images/`:

- `jujuba-logo-light.svg`: texto escuro para o tema claro.
- `jujuba-logo-dark.svg`: texto claro para o tema escuro.
- `jujuba-simbolo.svg`: ararajuba usada na capa, em Sobre e na galeria.
- `kiora-logo.svg`: logo clara do Kiora aplicada sobre imagens.

Os caminhos da marca ficam em `company`, no arquivo `src/content.js`. O favicon original está em `public/favicon.ico`.

## Imagens dos projetos

Cada entrada em `projects[].platforms[]`, no arquivo `src/content.js`, possui:

- `image`: caminho da imagem a partir de `public/` (ex.: `images/kiora-web.webp`).
- `imageAlt`: descrição acessível da imagem.
- `caption`: legenda que informa sua origem ou finalidade.
- `visualType`: `brand` para imagens ilustrativas que preenchem a área; `screen` para capturas inteiras; `mockup` para mockups de dispositivos.

Kiora usa materiais ilustrativos de gastronomia e ambientação enviados pelo autor, identificados na página. Ainda não são capturas do delivery nem do aplicativo. Ao receber as capturas, coloque-as em `public/images/`, altere o caminho e use `visualType: 'screen'`. A sobreposição da logo Kiora aparece apenas em imagens do tipo `brand`.

TechStart já usa a captura da landing page e o mockup original do sistema desktop. O mockup do aplicativo Juntaê não foi usado como se fosse o sistema desktop.

## Galeria

Adicione um item ao array `gallery`:

```js
{
  src: 'images/galeria/minha-imagem.webp',
  title: 'Título do material',
  category: 'TechStart',
  alt: 'Descrição do que aparece na imagem',
  kind: 'Captura do sistema',
  fit: 'contain'
}
```

O filtro da categoria aparece automaticamente. Use `contain` para mostrar a imagem inteira e `cover` para fotografias que podem preencher o quadro. Evite imagens com informações pessoais. Use nomes sem espaços e sem acentos.

## Cores, temas e animações

`src/identity.css` concentra os ajustes atuais. As variáveis de `:root` são do modo claro, e as de `[data-theme=dark]`, do modo escuro. O botão do cabeçalho acompanha o sistema na primeira visita e guarda a escolha localmente depois de um clique. As animações respeitam a opção de reduzir movimento do dispositivo.

## Contato e textos

Preencha `company.email` em `src/content.js` para ativar o botão de e-mail. Sem esse campo, o site mantém a chamada para conhecer os projetos, sem publicar contatos fictícios.

Textos dos projetos, funcionalidades, links e valores: `src/content.js`. Textos institucionais e capa: `src/main.jsx`. Título da aba e descrição para buscadores: `index.html`.

## Origem e tamanho das imagens

Os materiais selecionados foram copiados para dentro do projeto e convertidos para WebP, reduzindo cerca de 10,7 MB para 1,3 MB no conjunto convertido. As logos permanecem em SVG. Os originais enviados não foram alterados.

Consulte `public/images/ORIGEM-DOS-ARQUIVOS.md` para rastrear cada arquivo.
