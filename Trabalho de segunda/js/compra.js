document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const tripDataString = urlParams.get('trip');
    const tripDetailsDiv = document.getElementById('trip-details');
    const purchaseForm = document.getElementById('purchase-form');
    const paymentOptions = document.querySelectorAll('input[name="payment-method"]');
    
    // Pega os elementos que contêm os campos de pagamento
    const creditCardFields = document.getElementById('credit-card-fields');
    const pixInfo = document.getElementById('pix-info');
    const boletoInfo = document.getElementById('boleto-info');

    // Adiciona um "listener" de evento para cada botão de rádio
    paymentOptions.forEach(option => {
        option.addEventListener('change', (event) => {
            // Oculta todos os campos de pagamento primeiro
            creditCardFields.style.display = 'none';
            pixInfo.style.display = 'none';
            boletoInfo.style.display = 'none';

            // Mostra os campos relevantes com base na opção selecionada
            if (event.target.value === 'credit' || event.target.value === 'debit') {
                creditCardFields.style.display = 'block';
            } else if (event.target.value === 'pix') {
                pixInfo.style.display = 'block';
            } else if (event.target.value === 'boleto') {
                boletoInfo.style.display = 'block';
            }
        });
    });

    if (tripDataString) {
        try {
            const trip = JSON.parse(decodeURIComponent(tripDataString));

            // Exibe os detalhes da passagem na página
            tripDetailsDiv.innerHTML = `
                <h4>Detalhes da Viagem</h4>
                <p><strong>Embarcação:</strong> ${trip.name}</p>
                <p><strong>Rota:</strong> ${trip.route}</p>
                <p><strong>Data de Partida:</strong> ${trip.date}</p>
                <p><strong>Preço:</strong> R$ ${trip.price.toFixed(2).replace('.', ',')}</p>
            `;

            // Lida com a submissão do formulário
            purchaseForm.addEventListener('submit', (event) => {
                event.preventDefault(); // Impede o envio padrão do formulário

                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const passengers = document.getElementById('passengers').value;

                // Cria um objeto com os dados do passageiro
                const passengerData = {
                    name: name,
                    email: email,
                    passengers: passengers
                };

                // Codifica os dados da viagem e do passageiro para a URL
                const tripDataEncoded = encodeURIComponent(JSON.stringify(trip));
                const passengerDataEncoded = encodeURIComponent(JSON.stringify(passengerData));

                // Redireciona para a nova página de cartão de embarque
                window.location.href = `embarque.html?trip=${tripDataEncoded}&passenger=${passengerDataEncoded}`;
            });

        } catch (e) {
            console.error('Erro ao decodificar os dados da viagem:', e);
            tripDetailsDiv.innerHTML = '<p>Não foi possível carregar os detalhes da viagem. Por favor, retorne à página de resultados e tente novamente.</p>';
            purchaseForm.style.display = 'none';
        }
    } else {
        tripDetailsDiv.innerHTML = '<p>Nenhuma viagem selecionada. Por favor, retorne à página de resultados.</p>';
        purchaseForm.style.display = 'none';
    }
});