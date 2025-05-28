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


