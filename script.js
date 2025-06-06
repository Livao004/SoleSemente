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

