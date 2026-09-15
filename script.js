/* ==========================================================================
   Pet Feliz Petshop - script.js (Fase 2)
   Funções JavaScript utilizadas em todas as páginas do site.
   Cada função tem uma responsabilidade única e é comentada individualmente.
   Nenhuma biblioteca externa é usada aqui (o Bootstrap Bundle cuida apenas
   dos componentes visuais, como o carrossel e o menu responsivo).
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  saudacaoPorHorario();
  marcarLinkDeNavegacaoAtivo();
  atualizarAnoNoRodape();
  configurarFormularioAgendamento();
});

/* --------------------------------------------------------------------------
 * saudacaoPorHorario()
 * Função temporal: lê a hora atual do dispositivo do visitante e escreve
 * uma saudação (Bom dia / Boa tarde / Boa noite) no elemento com
 * id="pf-saudacao", presente no cabeçalho de todas as páginas.
 * -------------------------------------------------------------------------- */
function saudacaoPorHorario() {
  var elemento = document.getElementById('pf-saudacao');
  if (!elemento) return; // a página pode não ter esse elemento

  var horaAtual = new Date().getHours();
  var saudacao;

  if (horaAtual >= 5 && horaAtual < 12) {
    saudacao = 'Bom dia';
  } else if (horaAtual >= 12 && horaAtual < 18) {
    saudacao = 'Boa tarde';
  } else {
    saudacao = 'Boa noite';
  }

  elemento.textContent = saudacao + '! Seja bem-vindo(a) ao Pet Feliz.';
}

/* --------------------------------------------------------------------------
 * marcarLinkDeNavegacaoAtivo()
 * Percorre os links do menu de navegação e adiciona a classe "active" e o
 * atributo aria-current="page" ao link que corresponde à página atual.
 * Isso ajuda tanto na orientação visual quanto na leitura por leitores de
 * tela (acessibilidade).
 * -------------------------------------------------------------------------- */
function marcarLinkDeNavegacaoAtivo() {
  var paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
  var links = document.querySelectorAll('.navbar-pf .nav-link');

  links.forEach(function (link) {
    var destino = link.getAttribute('href');
    if (destino === paginaAtual) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

/* --------------------------------------------------------------------------
 * atualizarAnoNoRodape()
 * Escreve o ano atual no elemento id="pf-ano" do rodapé, para que a nota
 * de direitos autorais nunca fique desatualizada.
 * -------------------------------------------------------------------------- */
function atualizarAnoNoRodape() {
  var elemento = document.getElementById('pf-ano');
  if (!elemento) return;
  elemento.textContent = new Date().getFullYear();
}

/* --------------------------------------------------------------------------
 * validarCPF(cpf)
 * Valida o formato e os dígitos verificadores de um CPF brasileiro.
 * Retorna true se o CPF for válido, false caso contrário.
 * Implementa o algoritmo oficial dos dois dígitos verificadores.
 * -------------------------------------------------------------------------- */
function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]/g, ''); // remove pontos e traço, mantém só números

  if (cpf.length !== 11) return false;

  // Rejeita sequências repetidas (ex.: 111.111.111-11), que passariam no
  // cálculo dos dígitos mas não são CPFs válidos
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  var soma = 0;
  var resto;

  for (var i = 1; i <= 9; i++) {
    soma += parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10), 10)) return false;

  soma = 0;
  for (i = 1; i <= 10; i++) {
    soma += parseInt(cpf.substring(i - 1, i), 10) * (12 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(10, 11), 10)) return false;

  return true;
}

/* --------------------------------------------------------------------------
 * configurarFormularioAgendamento()
 * Reúne toda a lógica da página agendamento.html:
 *  - define a data mínima do agendamento como "hoje" (função temporal);
 *  - alterna a exibição do campo de endereço conforme a forma de
 *    atendimento (tele-busca x entrega no local);
 *  - conta os caracteres digitados no campo de observações;
 *  - valida o formulário (campos obrigatórios, e-mail, CPF) antes de
 *    simular o envio e exibir a confirmação do agendamento.
 * A função verifica a existência dos elementos antes de usá-los, então
 * não gera erro em páginas que não possuem o formulário.
 * -------------------------------------------------------------------------- */
function configurarFormularioAgendamento() {
  var formulario = document.getElementById('form-agendamento');
  if (!formulario) return; // só executa na página de agendamento

  /* 1) Data mínima do agendamento = hoje, para impedir escolher uma data
        que já passou. */
  var campoData = document.getElementById('data-agendamento');
  if (campoData) {
    var hoje = new Date();
    var ano = hoje.getFullYear();
    var mes = String(hoje.getMonth() + 1).padStart(2, '0');
    var dia = String(hoje.getDate()).padStart(2, '0');
    campoData.setAttribute('min', ano + '-' + mes + '-' + dia);
  }

  /* 2) Alterna o campo "Endereço para busca" conforme a forma de
        atendimento escolhida pelo cliente (radio buttons). */
  var radiosAtendimento = document.querySelectorAll('input[name="forma-atendimento"]');
  var blocoEndereco = document.getElementById('bloco-endereco-busca');
  var campoEnderecoBusca = document.getElementById('endereco-busca');

  function alternarCampoEndereco() {
    var telebuscaSelecionada = document.querySelector(
      'input[name="forma-atendimento"]:checked'
    );
    if (!telebuscaSelecionada || !blocoEndereco) return;

    if (telebuscaSelecionada.value === 'tele-busca') {
      blocoEndereco.hidden = false;
      if (campoEnderecoBusca) campoEnderecoBusca.required = true;
    } else {
      blocoEndereco.hidden = true;
      if (campoEnderecoBusca) {
        campoEnderecoBusca.required = false;
        campoEnderecoBusca.value = '';
      }
    }
  }

  radiosAtendimento.forEach(function (radio) {
    radio.addEventListener('change', alternarCampoEndereco);
  });
  alternarCampoEndereco(); // aplica o estado inicial ao carregar a página

  /* 3) Contador de caracteres do campo de observações. */
  var textareaObs = document.getElementById('observacoes');
  var contadorObs = document.getElementById('contador-observacoes');
  if (textareaObs && contadorObs) {
    var limite = 300;
    textareaObs.setAttribute('maxlength', limite);
    textareaObs.addEventListener('input', function () {
      contadorObs.textContent = textareaObs.value.length + '/' + limite + ' caracteres';
    });
    contadorObs.textContent = '0/' + limite + ' caracteres';
  }

  /* 4) Validação e "envio" (simulado, pois não há backend nesta fase). */
  var campoCPF = document.getElementById('cpf');
  var mensagemCPF = document.getElementById('cpf-feedback');
  var caixaConfirmacao = document.getElementById('pf-confirmacao');

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    // Validação extra de CPF, além da validação nativa do HTML5
    var cpfValido = campoCPF ? validarCPF(campoCPF.value) : true;
    if (campoCPF) {
      if (!cpfValido) {
        campoCPF.setCustomValidity('CPF inválido. Verifique os números digitados.');
        if (mensagemCPF) mensagemCPF.textContent = 'CPF inválido. Verifique os números digitados.';
      } else {
        campoCPF.setCustomValidity('');
        if (mensagemCPF) mensagemCPF.textContent = '';
      }
    }

    if (!formulario.checkValidity() || !cpfValido) {
      formulario.classList.add('was-validated');
      // Move o foco para o primeiro campo inválido (acessibilidade)
      var primeiroInvalido = formulario.querySelector(':invalid');
      if (primeiroInvalido) primeiroInvalido.focus();
      if (caixaConfirmacao) caixaConfirmacao.classList.add('d-none');
      return;
    }

    formulario.classList.add('was-validated');
    exibirConfirmacaoDeAgendamento(formulario);
  });
}

/* --------------------------------------------------------------------------
 * exibirConfirmacaoDeAgendamento(formulario)
 * Monta um resumo com os dados preenchidos e exibe uma mensagem de
 * confirmação acessível (aria-live) na tela, simulando o envio do
 * agendamento (não há servidor nesta fase do projeto).
 * -------------------------------------------------------------------------- */
function exibirConfirmacaoDeAgendamento(formulario) {
  var dados = new FormData(formulario);
  var caixaConfirmacao = document.getElementById('pf-confirmacao');
  if (!caixaConfirmacao) return;

  var nomeCliente = dados.get('nome-cliente');
  var nomePet = dados.get('nome-pet');
  var servico = dados.get('servico');
  var forma = dados.get('forma-atendimento');
  var data = dados.get('data-agendamento');
  var hora = dados.get('hora-agendamento');

  var formaTexto = forma === 'tele-busca' ? 'Tele-busca (retirada e entrega em casa)' : 'Entrega no local';
  var dataFormatada = data ? data.split('-').reverse().join('/') : '';

  caixaConfirmacao.innerHTML =
    '<strong>Agendamento recebido com sucesso!</strong> ' +
    'Olá, ' + nomeCliente + '. O serviço de <strong>' + servico + '</strong> para o pet ' +
    '<strong>' + nomePet + '</strong> foi agendado para o dia <strong>' + dataFormatada +
    '</strong> às <strong>' + hora + '</strong>, na modalidade "' + formaTexto + '". ' +
    'Em breve entraremos em contato para confirmar os detalhes.';

  caixaConfirmacao.classList.remove('d-none');
  caixaConfirmacao.setAttribute('tabindex', '-1');
  caixaConfirmacao.focus();

  formulario.reset();
  formulario.classList.remove('was-validated');

  // Restaura o estado inicial do campo condicional de endereço
  var blocoEndereco = document.getElementById('bloco-endereco-busca');
  if (blocoEndereco) blocoEndereco.hidden = true;
}
