# Prof Henrique

Site pessoal do **Prof Henrique Brandão**: professor dos anos iniciais, técnico em redes de computadores e autor.

🌐 Site: https://riqueikki.github.io

## Páginas

| Arquivo | Conteúdo |
|---|---|
| `index.html` | Apresentação, últimas postagens do blog Pedagogia em Foco e atalhos |
| `quem-sou-eu.html` | Trajetória, formação e áreas de atuação |
| `livros.html` | Sagas literárias e thriller (O Legado do Soldado, The World League, Necro-Rede, Crônicas da Nova Fronteira) |
| `producoes.html` | Redes de Computadores e Pedagogia, Tecnologia e Conectividade |
| `parceria.html` | Robô Maker e Tchê Guri |
| `links.html` | YouTube, Instagram, Lattes, Blog e GitHub |

## Estrutura

```
├── index.html
├── quem-sou-eu.html
├── livros.html
├── producoes.html
├── parceria.html
├── links.html
├── style.css      # visual de todas as páginas
├── script.js      # menu, texto animado, botões de compra e feed do blog
└── assets/        # capas, banners, logos e foto
```

## Como publicar no GitHub Pages

1. Crie um repositório público chamado exatamente `riqueikki.github.io`.
2. Envie todos os arquivos deste projeto para a raiz do repositório (o `index.html` não pode ficar dentro de subpasta).
3. Em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`.
4. Aguarde alguns minutos e acesse https://riqueikki.github.io.

## Como ativar a venda dos livros

Os livros mostram o botão **Em breve**. Quando tiver o link de venda (Hotmart, por exemplo), abra `livros.html` ou `producoes.html`, ache o botão do livro e preencha o atributo `data-buy`:

```html
<a class="btn off" href="#" data-buy="https://pay.hotmart.com/SEU-LINK" aria-disabled="true">Em breve</a>
```

O botão passa a mostrar **Comprar** e fica clicável automaticamente.

## Como editar

- **Textos:** edite diretamente os arquivos `.html`.
- **Cores e fontes:** variáveis no início do `style.css` (`--y`, `--g`, `--b`).
- **Imagens:** troque o arquivo em `assets/` mantendo o mesmo nome.
- **Blog:** o `script.js` lê os 3 posts mais recentes do blog https://pedagogiaeducacaoemfoco.blogspot.com/.

## Links oficiais

- YouTube: https://www.youtube.com/@ProfHenriqueBrandao
- Instagram: https://www.instagram.com/prof.henriquebrandao/
- Blog: https://pedagogiaeducacaoemfoco.blogspot.com/
- GitHub: https://github.com/riqueikki

© Prof Henrique Brandão. Todos os direitos reservados.
