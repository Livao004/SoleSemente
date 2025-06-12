function adicionarCarrinho(produto) {
  alert(produto + ' foi adicionado ao carrinho!');
}

function enviarFormulario(event) {
  event.preventDefault();

  const status = document.getElementById('mensagem-status');
  status.style.display = 'block';

  // Limpa os campos após o envio
  document.getElementById('form-contato').reset();

  // Oculta a mensagem depois de 4 segundos
  setTimeout(() => {
    status.style.display = 'none';
  }, 4000);
}


document.addEventListener('DOMContentLoaded', () => {
  const titulos = document.querySelectorAll('.titulo-dica');

  titulos.forEach(titulo => {
    titulo.addEventListener('click', () => {
      const texto = titulo.nextElementSibling;
      const seta = titulo.querySelector('.seta');

      texto.classList.toggle('ativa');
      seta.classList.toggle('girar');
    });
  });
});


  function toggleHorario() {
    const bloco = document.getElementById('tabelaHorario');
    const seta = document.getElementById('setaHorario');
    bloco.classList.toggle('ativa');
    seta.classList.toggle('girar');
  }

    function toggleHorario() {
      const bloco = document.getElementById('tabelaHorario');
      const seta = document.getElementById('setaHorario');
      bloco.classList.toggle('ativa');
      seta.classList.toggle('girar');
    }

let carrinho = [];

// Carregar do localStorage ao iniciar
window.addEventListener("DOMContentLoaded", () => {
  const salvo = localStorage.getItem("carrinho");
  if (salvo) {
    carrinho = JSON.parse(salvo);
    atualizarCarrinhoVisual();
  }
});

function adicionarCarrinho(nomeProduto) {
  const preco = obterPrecoProduto(nomeProduto);
  carrinho.push({ nome: nomeProduto, preco });
  salvarCarrinho();
  atualizarCarrinhoVisual();
}

function obterPrecoProduto(nome) {
  const precos = {
    'Buquê de Rosas': 79.90,
    'Buquê de Girassol': 69.90,
    'buquê de begônia': 89.90,
    'Buquê de Lírios Branco': 99.90,
    'Margaridas': 60.00,
    'Buquê de Rosas Negras': 119.99,
    'Arranjo de rosas azuis': 116.90,
    'Bonsai de Azaleia': 149.99,
    'Bonsai figueira': 169.99,
    'Arranjo de Astromélia Branca': 120.90,
    'Buquê de Gérbera': 179.90,
    'Arranjo de Peônia': 179.99,
    'Buquê de Mosquitinhos': 59.92
  };
  return precos[nome] || 0;
}

function atualizarCarrinhoVisual() {
  const lista = document.getElementById('lista-carrinho');
  const totalSpan = document.getElementById('total');
  if (!lista || !totalSpan) return; // evita erro em outras páginas

  lista.innerHTML = '';
  let total = 0;

  carrinho.forEach((item) => {
    total += item.preco;
    const li = document.createElement('li');
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    lista.appendChild(li);
  });

  totalSpan.textContent = total.toFixed(2);
}

function salvarCarrinho() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function finalizarCompra(event) {
  event.preventDefault();

  if (carrinho.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }

  const nome = document.getElementById('nome').value;
  const pagamento = document.getElementById('pagamento').value;

  if (!nome || !pagamento) {
    alert('Preencha todos os campos.');
    return;
  }

  alert(`Obrigado, ${nome}! Sua compra com ${pagamento} foi realizada com sucesso.`);

  carrinho = [];
  salvarCarrinho();
  atualizarCarrinhoVisual();
  document.getElementById('form-pagamento').reset();
}

function limparCarrinho() {
  if (confirm("Deseja realmente limpar o carrinho?")) {
    carrinho = [];
    salvarCarrinho();
    atualizarCarrinhoVisual();
  }
}

  function adicionarAoCarrinho() {
    // Aqui você poderia adicionar a lógica de adicionar ao carrinho se necessário

    // Exibe a mensagem de sucesso
    const mensagem = document.getElementById('mensagem-sucesso');
    mensagem.style.display = 'block';

    // Esconde a mensagem depois de 3 segundos (opcional)
    setTimeout(() => {
      mensagem.style.display = 'none';
    }, 3000);
  }
