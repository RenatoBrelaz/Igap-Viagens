document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const summaryContainer = document.getElementById('summary-container');
    const confirmButton = document.getElementById('confirm-booking-btn');

    // Obtenha os dados da URL
    const route = urlParams.get('route');
    const boatType = urlParams.get('boatType');
    const date = urlParams.get('date');
    const price = parseFloat(urlParams.get('price'));
    const passengers = parseInt(urlParams.get('passengers') || '1', 10);
    const formattedDate = new Date(date).toLocaleDateString('pt-BR');
    const totalPrice = (price * passengers).toFixed(2).replace('.', ',');

    if (route && boatType && date && price) {
      summaryContainer.innerHTML = `
        <p><strong>Rota:</strong> ${route}</p>
        <p><strong>Embarcação:</strong> ${boatType}</p>
        <p><strong>Data:</strong> ${formattedDate}</p>
        <p><strong>Número de Passageiros:</strong> ${passengers}</p>
        <div class="total-price">Total: R$ ${totalPrice}</div>
      `;
    } else {
      summaryContainer.innerHTML = `<p>Não foi possível encontrar os detalhes da reserva. Por favor, volte e tente novamente.</p>`;
      confirmButton.disabled = true;
    }

    confirmButton.addEventListener('click', () => {
      alert('Reserva confirmada! Um e-mail com os detalhes foi enviado.');
      // Aqui você pode adicionar lógica para, por exemplo, redirecionar para uma página de sucesso
      window.location.href = 'index..html';
    });
  });