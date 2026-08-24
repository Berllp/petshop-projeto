# Projeto da Disciplina - Sistema Web Petshop "Pet Feliz"
## Fase 1: Estrutura HTML (sem CSS, sem Bootstrap, sem JavaScript)

---

## 1. Objetivo

Desenvolver a estrutura inicial (Fase 1) de um sistema web para um petshop fictício, o
**Pet Feliz Petshop**, contemplando as páginas de apresentação, produtos, serviços, contato e
ajuda, construídas exclusivamente com HTML semântico, sem o uso de customizações visuais (CSS,
Bootstrap) e sem funções em JavaScript, conforme especificado para esta etapa do projeto.

O objetivo final do sistema (a ser completado nas próximas fases) é oferecer aos clientes do
petshop uma vitrine on-line com visualização de produtos por categoria e dos serviços prestados,
incluindo informação sobre a disponibilidade de tele-busca (retirada e entrega do pet a domicílio).

## 2. Metas / Atividades específicas

Para atingir o objetivo proposto, foram definidas as seguintes metas e atividades:

1. **Definir a identidade do petshop**: nome, slogan, endereço, contato e horário de
   funcionamento, para compor o cabeçalho e o rodapé do site.
2. **Planejar a arquitetura de páginas** do site (Início, Produtos, Serviços, Contato e Ajuda),
   definindo a navegação entre elas.
3. **Construir o cabeçalho (header)**, presente em todas as páginas, contendo:
   - Nome/logotipo textual do petshop;
   - Breve descrição/slogan;
   - Menu de navegação (links) para as demais páginas.
4. **Construir o corpo (body/main) das páginas**, com destaque para:
   - Página de produtos: visualização de **2 produtos de cada uma das 3 categorias**
     (Ração; Higiene e Beleza; Brinquedos e Acessórios), cada um com foto, descrição e valor;
   - Página de serviços: listagem dos serviços do petshop, com descrição, valor e indicação de
     disponibilidade de **tele-busca**.
5. **Construir o rodapé (footer)**, presente em todas as páginas, contendo:
   - Informações legais (CNPJ);
   - Dados de contato e endereço;
   - Links de navegação;
   - Direitos autorais.
6. **Elaborar o arquivo de ajuda** (`ajuda.html`), descrevendo as funcionalidades de cada página
   do site.
7. **Publicar o projeto no GitHub**, criando um repositório público com todos os arquivos-fonte
   HTML e o arquivo de ajuda.
8. **Publicar o site no GitHub Pages**, tornando o sistema acessível publicamente pela web.

## 3. Requisitos mínimos atendidos nesta fase

- [x] Visualização das 3 categorias de produtos, com 2 produtos cada (imagem, descrição e valor).
- [x] Visualização dos serviços oferecidos (descrição, valor e indicação de tele-busca).
- [x] Cabeçalho com identificação do petshop e navegação.
- [x] Rodapé com informações legais, de contato e navegação.
- [x] Construção somente com HTML (sem CSS, sem Bootstrap, sem JavaScript).
- [x] Arquivo de ajuda descrevendo as funcionalidades das páginas.

## 4. Estrutura de arquivos do repositório

```
petshop-projeto/
├── index.html        (Página inicial)
├── produtos.html      (Produtos: 3 categorias, 2 produtos cada)
├── servicos.html      (Serviços: descrição, valor e tele-busca)
├── contato.html        (Dados de contato)
├── ajuda.html          (Arquivo de ajuda com as funcionalidades do site)
└── README.md          (Este documento: objetivo, metas e links)
```

## 5. Links do Projeto

> **Atenção:** substitua os links abaixo pelos endereços reais após criar o repositório no
> GitHub e ativar o GitHub Pages.

- **Repositório no GitHub (código-fonte HTML):**
  `https://github.com/SEU-USUARIO/petshop-projeto`

- **Sistema publicado (GitHub Pages):**
  `https://SEU-USUARIO.github.io/petshop-projeto/`

### Como publicar no GitHub Pages (resumo)

1. Crie uma conta no GitHub (caso ainda não tenha) em https://github.com.
2. Crie um novo repositório público, por exemplo `petshop-projeto`.
3. Faça o upload de todos os arquivos deste projeto (`index.html`, `produtos.html`,
   `servicos.html`, `contato.html`, `ajuda.html`, `README.md`) para o repositório.
4. No repositório, acesse **Settings > Pages**.
5. Em "Build and deployment", selecione a branch `main` (ou `master`) e a pasta `/root`, depois
   clique em **Save**.
6. Aguarde alguns minutos e acesse o link gerado (formato
   `https://SEU-USUARIO.github.io/petshop-projeto/`) para visualizar o site publicado.
7. Mais detalhes em:
   https://docs.github.com/pt/pages/getting-started-with-github-pages/creating-a-github-pages-site

## 6. Observações sobre esta fase

Nesta Fase 1, propositalmente, **não foram utilizados CSS, Bootstrap ou JavaScript**. A
estilização visual (cores, layout responsivo, tipografia) e as funcionalidades dinâmicas
(carrinho de compras, formulário de contato funcional, filtros de busca etc.) ficam previstas
para a **Fase 2** do Projeto da Disciplina.
