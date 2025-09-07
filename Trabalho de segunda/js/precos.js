
  // Dados de exemplo para as passagens
  const trips = [
    { route: 'Manaus-Barrerinha', date: '2025-09-10', boatType: 'Lancha Rápida', price: 150.00 },
    { route: 'Manaus-Parintins', date: '2025-09-15', boatType: 'Barco Regional', price: 220.00 },
    { route: 'Manaus-Parintins', date: '2025-09-12', boatType: 'Barco de Luxo', price: 650.00 },
    { route: 'Manaus-Tefé', date: '2025-09-20', boatType: 'Lancha Rápida', price: 320.00 },
    { route: 'Manaus-Anóri', date: '2025-09-18', boatType: 'Barco Regional', price: 350.00 },
  { route: 'Manaus-Novo Airão', date: '2025-09-10', boatType: 'Lancha Rápida', price: 250.00 },
  { route: 'Manaus-Tefé', date: '2025-09-15', boatType: 'Barco Regional', price: 180.00 },
  { route: 'Manaus-Parintins', date: '2025-09-18', boatType: 'Lancha Rápida', price: 450.00 },
  { route: 'Manaus-Barcelos', date: '2025-09-22', boatType: 'Barco de Luxo', price: 800.00 },
  { route: 'Manaus-Novo Airão', date: '2025-09-12', boatType: 'Barco de Luxo', price: 650.00 },
  { route: 'Manaus-Tefé', date: '2025-09-20', boatType: 'Lancha Rápida', price: 320.00 },
  { route: 'Manaus-Novo Airão', date: '2025-09-18', boatType: 'Barco Regional', price: 150.00 },
  { route: 'Manaus-Parintins', date: '2025-09-25', boatType: 'Barco Regional', price: 200.00 },
];

function renderTrips(tripsToRender) {
  const resultsContainer = document.getElementById('results-container');
  if (!resultsContainer) return;

  resultsContainer.innerHTML = '';
  if (tripsToRender.length === 0) {
    resultsContainer.innerHTML = '<p class="text-center text-gray-500">Nenhuma passagem encontrada com os critérios de busca.</p>';
    return;
  }

  tripsToRender.forEach(trip => {
    const formattedDate = new Date(trip.date).toLocaleDateString('pt-BR');
    const tripCard = document.createElement('div');
    tripCard.className = 'trip-card';

   tripCard.innerHTML = `
      <div class="trip-details">
        <h3>${trip.route}</h3>
        <p><strong>Embarcação:</strong> ${trip.boatType}</p>
        <p><strong>Data:</strong> ${formattedDate}</p>
      </div>
      <div class="trip-price">R$ ${trip.price.toFixed(2).replace('.', ',')}</div>
      <div>
        <button class="btn-book" 
          onclick="window.location.href='pagamento.html?route=${encodeURIComponent(trip.route)}&date=${trip.date}&boatType=${encodeURIComponent(trip.boatType)}&price=${trip.price}'">
          Reservar Agora
        </button>
      </div>
    `;
    resultsContainer.appendChild(tripCard);
  });
}

function filterAndDisplayTrips() {
  const urlParams = new URLSearchParams(window.location.search);
  const routeParam = urlParams.get('route');
  const boatTypeParam = urlParams.get('boatType');

  if (document.getElementById('search-route')) {
      document.getElementById('search-route').value = routeParam || '';
  }
  if (document.getElementById('search-boat-type')) {
      document.getElementById('search-boat-type').value = boatTypeParam || '';
  }

  const filteredTrips = trips.filter(trip => {
    const routeMatch = !routeParam || trip.route === routeParam;
    const boatTypeMatch = !boatTypeParam || trip.boatType === boatTypeParam;
    return routeMatch && boatTypeMatch;
  });

  renderTrips(filteredTrips);
}

// Lógica para a página de formulário
document.addEventListener('DOMContentLoaded', () => {
  filterAndDisplayTrips();

  const searchForm = document.getElementById('search-form');
  if (searchForm) {
      searchForm.addEventListener('submit', function(event) {
          event.preventDefault();
          const route = document.getElementById('search-route').value;
          const boatType = document.getElementById('search-boat-type').value;

          const filteredTrips = trips.filter(trip => {
              const routeMatch = route === '' || trip.route === route;
              const boatTypeMatch = boatType === '' || trip.boatType === boatType;
              return routeMatch && boatTypeMatch;
          });

          renderTrips(filteredTrips);
      });
  }
});
