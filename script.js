let carrinho = [];

document.addEventListener("DOMContentLoaded", () => {
  const salvo = localStorage.getItem("carrinho");
  if (salvo) {
    carrinho = JSON.parse(salvo);
    atualizarCarrinhoVisual();
  }
});

function obterPrecoProduto(nome) {
  const precos = {
    'Buquê de Rosas': 79.90,
    'Buquê de Girassol': 69.90,
    // Adicione os demais produtos aqui
  };
  return precos[nome] || 0;
}

function adicionarCarrinho(nomeProduto) {
  const preco = obterPrecoProduto(nomeProduto);
  carrinho.push({ nome: nomeProduto, preco });
  salvarCarrinho();
  atualizarCarrinhoVisual();
  mostrarMensagemConfirmacao(`${nomeProduto} foi adicionado ao carrinho!`);
}

function atualizarCarrinhoVisual() {
  const lista = document.getElementById('lista-carrinho');
  const totalSpan = document.getElementById('total');
  lista.innerHTML = '';
  let total = 0;

  carrinho.forEach(item => {
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

  const nome = document.getElementById('nome').value;
  const pagamento = document.getElementById('pagamento').value;

  if (!nome || !pagamento) {
    alert("Preencha todos os campos!");
    return;
  }

  alert(`Obrigado, ${nome}! Sua compra com pagamento via ${pagamento} foi finalizada.`);

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

function mostrarMensagemConfirmacao(texto) {
  const mensagem = document.getElementById('mensagem-confirmacao');
  mensagem.textContent = texto;
  mensagem.style.display = 'block';
  mensagem.style.animation = 'fadeInOut 2.5s ease';

  setTimeout(() => {
    mensagem.style.display = 'none';
  }, 2500);
}
