document.addEventListener('DOMContentLoaded', () => {

    // Dados de exemplo para as passagens
    const trips = [
        {
            name: 'Lancha Veloz',
            route: 'Manaus-Novo Airão',
            boatType: 'Lancha Rápida',
            date: '2025-09-10',
            price: 250.00,
            passengers: 35,
            location: 'Porto de Manaus',
            image: 'https://www.barcosdonorte.com.br/wp-content/uploads/2023/02/Foto-185-1024x683.jpg'
          },
          {
            name: 'Barco Regional Oásis',
            route: 'Manaus-Parintins',
            boatType: 'Barco Regional',
            date: '2025-09-15',
            price: 220.00,
            passengers: 150,
            location: 'Porto de Manaus',
            image: 'https://vanguardadonorte.com.br/wp-content/uploads/2025/05/Festival-de-Parintins-2025-Barcos-e-lanchas-se-preparam-para-aumento-de-vendas-com-proximidade-da-festa-dos-bumbas-4_Foto-Antonio-Lima-Secom.jpeg'
          },
          {
            name: 'Barco Solimões',
            route: 'Manaus-Tefé',
            boatType: 'Barco Regional',
            date: '2025-09-20',
            price: 650.00,
            passengers: 120,
            location: 'Porto de Manaus',
            image: 'https://www.acritica.com/image/policy:1.111547.1647054016:1647054016/image.jpg?f=default&w=1200'
          },
          {
            name: 'Lancha Eclipse',
            route: 'Manaus-Parintins',
            boatType: 'Lancha Rápida',
            date: '2025-09-18',
            price: 450.00,
            passengers: 40,
            location: 'Porto de Manaus',
            image: 'https://www.barcosdonorte.com.br/wp-content/uploads/2021/11/5-3.png'
          },
          {
            name: 'Barco de Luxo Amazonas',
            route: 'Manaus-Parintins',
            boatType: 'Barco de Luxo',
            date: '2025-09-22',
            price: 680.00,
            passengers: 25,
            location: 'Porto de Manaus',
            image: 'https://maiaexpeditions.com/wp-content/uploads/2019/03/maia-expeditions-iates-zenith-1.jpg'
          },
          {
            name: 'Barco Estrela',
            route: 'Manaus-Barcelos',
            boatType: 'Barco de Luxo',
            date: '2025-09-22',
            price: 400.00,
            passengers: 20,
            location: 'Porto de Manaus',
            image: 'https://placehold.co/400x200/773344/white?text=Barco+de+Luxo'
          },
          {
            name: 'Barco Rio Negro',
            route: 'Manaus-Barrerinha',
            boatType: 'Barco Regional',
            date: '2025-09-10',
            price: 150.00,
            passengers: 100,
            location: 'Porto de Manaus',
            image: 'https://placehold.co/400x200/223355/white?text=Barco+Regional'
          },
          {
            name: 'Lancha Albatroz',
            route: 'Manaus-Anóri',
            boatType: 'Lancha Rápida',
            date: '2025-09-18',
            price: 550.00,
            passengers: 30,
            location: 'Porto de Manaus',
            image: 'https://placehold.co/400x200/6A0572/white?text=Lancha+Rápida'
          },
        
          // Rotas de VOLTA
          {
            name: 'Lancha Veloz',
            route: 'Novo Airão-Manaus',
            boatType: 'Lancha Rápida',
            date: '2025-09-20',
            price: 260.00,
            passengers: 35,
            location: 'Porto de Novo Airão',
            image: 'https://www.zarpar.app/wp-content/uploads/2024/02/WhatsApp-Image-2024-01-26-at-09.36.29.jpeg'
          },
          {
            name: 'Barco Regional Oásis',
            route: 'Parintins-Manaus',
            boatType: 'Barco Regional',
            date: '2025-09-25',
            price: 210.00,
            passengers: 150,
            location: 'Porto de Parintins',
            image: 'https://www.acritica.com/image/policy:1.111547.1647054016:1647054016/image.jpg?f=default&w=1200'
          },
          {
            name: 'Barco Solimões',
            route: 'Tefé-Manaus',
            boatType: 'Barco de Luxo',
            date: '2025-09-30',
            price: 600.00,
            passengers: 120,
            description: 'Barco popular com um ambiente acolhedor e familiar. Oferece refeições regionais e deck para observação da paisagem.',
            location: 'Porto de Tefé',
            image: 'https://placehold.co/400x200/F17105/white?text=Barco+Regional'
          },
          {
            name: 'Lancha Eclipse',
            route: 'Parintins-Manaus',
            boatType: 'Lancha Rápida',
            date: '2025-09-20',
            price: 430.00,
            passengers: 40,
            location: 'Porto de Parintins',
            image: 'https://www.acritica.com/image/policy:1.21189.1646829833:1646829833/image.jpg?f=default&w=1200'
          },
          {
            name: 'Barco de Luxo Amazonas',
            route: 'Parintins-Manaus',
            boatType: 'Barco de Luxo',
            date: '2025-09-28',
            price: 620.00,
            passengers: 25,
            location: 'Porto de Parintins',
            image: 'https://cdn.2rscms.com.br/uploads/2424/album/955/photo_67ce00c7c9967.jpeg'
          },
          {
            name: 'Barco Estrela',
            route: 'Barcelos-Manaus',
            boatType: 'Lancha Rápida',
            date: '2025-09-25',
            price: 380.00,
            passengers: 20,
            location: 'Porto de Barcelos',
            image: 'https://www.portaldoholanda.com.br/sites/default/files/imagecache/2020_noticia_fotogrande/portaldoholanda-750130-imagem-foto-amazonas.jpg'
          },
          {
            name: 'Barco Rio Negro',
            route: 'Barrerinha-Manaus',
            boatType: 'Barco Regional',
            date: '2025-09-18',
            price: 160.00,
            passengers: 100,
            location: 'Porto de Barrerinha',
            image: 'https://macamazon.com.br/wp-content/uploads/2025/04/Navio-Amazon-Star.jpg'
          },
          {
            name: 'Lancha Albatroz',
            route: 'Anóri-Manaus',
            boatType: 'Barco de Luxo',
            date: '2025-09-28',
            price: 580.00,
            passengers: 30,
            location: 'Porto de Anóri',
            image: 'https://amazonlord.com.br/themes/amazon_lord/img/barcos-amazonlordiii-fotos04.jpg'
            }
  ];

    const urlParams = new URLSearchParams(window.location.search);
    const routeParam = urlParams.get('route');
    const boatTypeParam = urlParams.get('boatType');
    const departureDateParam = urlParams.get('date');
    const returnDateParam = urlParams.get('returnDate');
    
    const tableBody = document.querySelector('#results-table tbody');
    const noResultsMessage = document.getElementById('no-results-message');

    // Função para renderizar as linhas da tabela
    function renderTrips(tripsToRender, title, highlightDate) {
      // Cria uma linha de título para a seção (ex: "Passagens de IDA")
      const titleRow = document.createElement('tr');
      const titleCell = document.createElement('td');
      titleCell.colSpan = 6; // Altere o colspan para 6
      titleCell.textContent = title;
      titleCell.style.fontWeight = 'bold';
      titleCell.style.backgroundColor = '#e0f2f1';
      titleCell.style.textAlign = 'center';
      tableBody.appendChild(titleRow);
      titleRow.appendChild(titleCell);

      if (tripsToRender.length === 0) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 6; // Altere o colspan para 6
        cell.textContent = `Nenhuma passagem de ${title.toLowerCase()} encontrada para esta rota.`;
        cell.style.textAlign = 'center';
        cell.style.fontStyle = 'italic';
        row.appendChild(cell);
        tableBody.appendChild(row);
      } else {
        tripsToRender.forEach(trip => {
            const row = document.createElement('tr');
            
            if (trip.date === highlightDate) {
                row.classList.add('highlight-row');
            }
            
            row.innerHTML = `
                <td>${trip.name}</td>
                <td><img src="${trip.image}" alt="Imagem de ${trip.name}" style="width:100px; height:auto; border-radius: 4px;"></td>
                <td>${trip.route}</td>
                <td>${trip.date}</td>
                <td>R$ ${trip.price.toFixed(2).replace('.', ',')}</td>
                <td><button class="buy-btn" data-trip-data='${JSON.stringify(trip)}'>Comprar</button></td>
            `;
            
            tableBody.appendChild(row);
            
            // Seleciona o botão que acabou de ser criado e adiciona o event listener
            const buyButton = row.querySelector('.buy-btn');
            buyButton.addEventListener('click', () => {
                const tripData = buyButton.getAttribute('data-trip-data');
                window.location.href = `compra.html?trip=${encodeURIComponent(tripData)}`;
            });
          });
        }
    }
    
    // --- Lógica de Filtro ---
    
    // 1. Lógica para a viagem de IDA
    const filteredOutboundTrips = trips.filter(trip => {
        const routeMatch = trip.route === routeParam;
        const boatTypeMatch = !boatTypeParam || trip.boatType === boatTypeParam;
        return routeMatch && boatTypeMatch;
    });
    renderTrips(filteredOutboundTrips, 'Passagens de IDA', departureDateParam);

    // 2. Lógica para a viagem de VOLTA (se a data de retorno foi fornecida)
    if (returnDateParam) {
        // Inverte a rota para a viagem de volta
        const [origin, destination] = routeParam.split('-');
        const returnRoute = `${destination}-${origin}`;

        const filteredReturnTrips = trips.filter(trip => {
            const routeMatch = trip.route === returnRoute;
            const boatTypeMatch = !boatTypeParam || trip.boatType === boatTypeParam;
            return routeMatch && boatTypeMatch;
        });

        renderTrips(filteredReturnTrips, 'Passagens de VOLTA', returnDateParam);
    }
    
    // Mostra a mensagem de "nenhum resultado" se nenhuma passagem for encontrada para ida ou volta
    if (filteredOutboundTrips.length === 0 && (!returnDateParam || filteredReturnTrips.length === 0)) {
        noResultsMessage.classList.remove('hidden');
    } else {
        noResultsMessage.classList.add('hidden');
    }
});