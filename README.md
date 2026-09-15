# Projeto da Disciplina - Sistema Web Petshop "Pet Feliz"
## Fase 2: CSS/Bootstrap, JavaScript, Formulário e Acessibilidade

---

## 1. O que mudou desde a Fase 1

Na Fase 1 o site foi construído apenas com HTML semântico (sem estilo e sem
interatividade). Nesta Fase 2, o mesmo conteúdo foi mantido e expandido,
adicionando:

- **Bootstrap 5** (CSS e JS, via CDN) para layout responsivo, navbar,
  cartões, formulário e o **carrossel** da página inicial.
- Uma folha de estilos própria (`css/style.css`) com a identidade visual do
  Pet Feliz (cores, tipografia, componentes de marca), separada do
  Bootstrap.
- Um arquivo JavaScript próprio (`js/script.js`), comentado função por
  função, com saudação dinâmica por horário, validação de formulário,
  validação de CPF, campo condicional de endereço e outras interações.
- Uma nova página, **agendamento.html**, com o formulário de cadastro do
  cliente e do pet e o agendamento de banho/tosa (tele-busca ou entrega no
  local).
- Melhorias de **acessibilidade** em todas as páginas.

## 2. Ajustes realizados (para minimizar problemas antes da publicação)

Durante a Fase 2, além das novas funcionalidades pedidas, foram feitos os
seguintes ajustes de qualidade no que já existia desde a Fase 1:

1. **Organização em arquivos separados**: o CSS e o JavaScript, que antes
   não existiam (Fase 1 era só HTML), foram colocados em `css/style.css` e
   `js/script.js` — nunca inline — e são reutilizados por todas as
   páginas, evitando duplicação de código.
2. **Cabeçalho e rodapé padronizados**: o mesmo `header` (barra de
   contato + menu) e o mesmo `footer` (dados legais, contato e navegação)
   foram revisados e replicados de forma idêntica em todas as páginas,
   corrigindo pequenas inconsistências de texto que existiam entre as
   páginas da Fase 1.
3. **Hierarquia de títulos corrigida**: cada página passou a ter um único
   `<h1>`, com `<h2>`/`<h3>` organizando as seções internas — na Fase 1
   alguns títulos de card usavam `<h4>` soltos, quebrando a hierarquia.
4. **Tabela de serviços com `<caption>` e `scope`**: a tabela de serviços
   ganhou legenda e cabeçalhos de linha/coluna associados corretamente,
   o que também melhora a leitura por leitores de tela.
5. **Textos alternativos (`alt`) revisados**: todas as imagens (produtos e
   slides do carrossel) receberam descrições mais específicas, em vez de
   textos genéricos.
6. **Validação e testes antes da publicação**: as seis páginas HTML foram
   validadas com um parser HTML5 (biblioteca `html5lib`) para garantir que
   não há tags mal fechadas ou aninhamento incorreto; o arquivo
   `js/script.js` foi checado com `node --check` (sem erros de sintaxe); a
   função de validação de CPF foi testada isoladamente com casos válidos e
   inválidos antes de ser integrada ao formulário.
7. **Links de navegação revisados**: todos os menus (cabeçalho e rodapé)
   foram conferidos em todas as páginas para apontar para os arquivos
   corretos, incluindo o novo link para `agendamento.html`.
8. **Uso de CDN com HTTPS**: Bootstrap e a fonte do Google Fonts são
   carregados via HTTPS a partir de CDNs confiáveis (jsDelivr e Google
   Fonts), evitando conteúdo misto (mixed content) ao publicar em HTTPS no
   GitHub Pages.

## 3. Requisitos desta fase e onde foram atendidos

| Requisito | Onde foi implementado |
|---|---|
| CSS/Bootstrap e carrossel | Bootstrap via CDN em todas as páginas; carrossel em `index.html`; estilos próprios em `css/style.css` |
| JavaScript (funções temporais e outras) | `js/script.js`: saudação por horário, data mínima do agendamento, ano do rodapé, validação de formulário e de CPF, campo condicional, contador de caracteres |
| Formulário de cadastro do cliente e do pet | `agendamento.html`: nome, endereço, CPF, sexo, telefone, e-mail (cliente) e nome, raça, idade (pet), com `input`, `checkbox`, `radio`, `number`, `email`, `tel`, `date`, `time`, `placeholder` e campos obrigatórios |
| Escolha do serviço e agendamento (tele-busca / entrega no local) | `agendamento.html`: radio buttons para Banho/Tosa e para a forma de atendimento, com `input type="date"` e `input type="time"` funcionando como calendário/horário |
| Acessibilidade para deficientes visuais | `alt` descritivo em imagens, link "Pular para o conteúdo", `label` associado a todo campo, `fieldset`/`legend`, `aria-live` nas mensagens, foco de teclado nunca removido, tabela com `caption`/`scope` |

## 4. Estrutura de arquivos do repositório

```
petshop-projeto/
├── index.html          (Página inicial, com carrossel)
├── produtos.html        (Produtos: 3 categorias, 2 produtos cada)
├── servicos.html        (Serviços: banho e tosa)
├── agendamento.html     (Cadastro do cliente/pet + agendamento)
├── contato.html         (Dados de contato)
├── ajuda.html           (Arquivo de ajuda com as funcionalidades do site)
├── css/
│   └── style.css        (Estilos próprios do Pet Feliz, usados com o Bootstrap)
├── js/
│   └── script.js        (Funções JavaScript comentadas)
└── README.md            (Este documento)
```

## 5. Links do Projeto

- **Repositório no GitHub (código-fonte):**
  https://github.com/Berllp/petshop-projeto

- **Sistema publicado (GitHub Pages):**
  https://Berllp.github.io/petshop-projeto/

## 6. Observações

O envio do formulário de agendamento é **simulado em JavaScript** (sem
backend/servidor), pois o projeto desta disciplina é de front-end. Ao
confirmar um agendamento válido, uma mensagem de sucesso com o resumo dos
dados é exibida na tela, no lugar de um envio real a um servidor.
