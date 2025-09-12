document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const tripDataString = urlParams.get('trip');
    const passengerDataString = urlParams.get('passenger');

    if (tripDataString && passengerDataString) {
        try {
            const trip = JSON.parse(decodeURIComponent(tripDataString));
            const passenger = JSON.parse(decodeURIComponent(passengerDataString));

            // Preenche o cartão de embarque com os dados
            document.getElementById('embarcacao-info').textContent = trip.name;
            document.getElementById('rota-info').textContent = trip.route;
            document.getElementById('data-partida-info').textContent = trip.date;
            document.getElementById('preco-info').textContent = `R$ ${trip.price.toFixed(2).replace('.', ',')}`;
            document.getElementById('passageiro-info').textContent = passenger.name;
            document.getElementById('num-passageiros-info').textContent = passenger.passengers;
            document.getElementById('email-info').textContent = passenger.email;
            document.getElementById('confirmacao-info').textContent = generateConfirmationCode();
        } catch (e) {
            console.error('Erro ao carregar dados do cartão de embarque:', e);
            // Exibe uma mensagem de erro na página
            document.querySelector('.boarding-pass').innerHTML = '<p style="color: red;">Não foi possível carregar o cartão de embarque. Tente novamente.</p>';
        }
    } else {
        document.querySelector('.boarding-pass').innerHTML = '<p>Nenhuma informação de embarque encontrada.</p>';
    }

    // Função simples para gerar um código de confirmação aleatório
    function generateConfirmationCode() {
        return Math.random().toString(36).substring(2, 10).toUpperCase();
    }
});