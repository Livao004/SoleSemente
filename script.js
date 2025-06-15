let carrinho = [];

document.addEventListener("DOMContentLoaded", () => {
  const salvo = localStorage.getItem("carrinho");
  if (salvo) {
    carrinho = JSON.parse(salvo);
  }

  atualizarCarrinhoVisual();
});

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

function adicionarCarrinho(nomeProduto) {
  const preco = obterPrecoProduto(nomeProduto);
  carrinho.push({ nome: nomeProduto, preco });
  salvarCarrinho();
  atualizarCarrinhoVisual();
  mostrarMensagemConfirmacao(`${nomeProduto} foi adicionado ao carrinho!`);
}

function salvarCarrinho() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function atualizarCarrinhoVisual() {
  // Atualiza lista no carrinho.html, se existir
  const lista = document.getElementById('lista-carrinho');
  const totalSpan = document.getElementById('total');
  if (lista && totalSpan) {
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

  // Atualiza contador em todas as páginas
  const contador = document.getElementById('contador-carrinho');
  if (contador) {
    contador.textContent = carrinho.length;
  }
}

function mostrarMensagemConfirmacao(texto) {
  const mensagem = document.getElementById('mensagem-confirmacao');
  if (mensagem) {
    mensagem.textContent = texto;
    mensagem.style.display = 'block';
    mensagem.style.animation = 'fadeInOut 2.5s ease';
    setTimeout(() => {
      mensagem.style.display = 'none';
    }, 2500);
  }
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

function aplicarCupom() {
  const campo = document.getElementById("cupom");
  const valor = campo.value.trim().toLowerCase();
  const totalSpan = document.getElementById("total");

  let total = carrinho.reduce((soma, item) => soma + item.preco, 0);
  let desconto = 0;

  if (valor === "flores10") {
    desconto = total * 0.10;
    alert("Cupom aplicado! 10% de desconto.");
  } else if (valor) {
    alert("Cupom inválido.");
  }

  totalSpan.innerText = (total - desconto).toFixed(2);
}

