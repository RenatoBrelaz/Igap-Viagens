document.addEventListener('DOMContentLoaded', () => {
    // Exemplo 1: Rolagem suave (smooth scroll)
    const linksInternos = document.querySelectorAll('a[href^="#"]');

    if (linksInternos.length > 0) {
        linksInternos.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Exemplo 2: Lógica para o formulário de agendamento na página inicial
    const formularioAgendamento = document.querySelector('.agendamento form');
    
    if (formularioAgendamento) {
        formularioAgendamento.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aqui você pode adicionar lógica de validação do formulário, se necessário.

            // Obter os valores do formulário
            const destino = this.querySelector('select').value;
            // E qualquer outro campo que você adicione.
            
            // Exemplo de redirecionamento para a página de agendamento com o destino pré-selecionado
            const url = `form.html?route=${encodeURIComponent(destino)}`;
            window.location.href = url;
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica do Carrossel de Imagens ---
    const galleryContainer = document.querySelector('.hero-gallery .background-images');
    const images = [
        'imagens/manaus.jpg',
        'imagens/manaus2.jpg',
        'imagens/manaus3.jpg',
        'imagens/manaus4.jpg',
        'imagens/manaus.jpg'
    ];
    let currentImageIndex = 0;

    // Adiciona as imagens ao contêiner
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Destino de viagem Igapó';
        galleryContainer.appendChild(img);
    });

    // Função para mover a galeria
    function moveGallery() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const offset = -currentImageIndex * 100;
        galleryContainer.style.transform = `translateX(${offset}%)`;
    }

    // Define o intervalo para a transição das imagens (a cada 5 segundos)
    setInterval(moveGallery, 5000);

    // --- Lógica para a rolagem suave ao clicar nos links de navegação internos ---
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Ajuste para o tamanho do cabeçalho
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Lógica para o formulário de agendamento na página inicial ---
    const bookingForm = document.querySelector('.agendamento form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Pega o valor do destino selecionado
            const selectedRoute = this.querySelector('select').value;
            
            // Redireciona para a página de formulário com o destino pré-selecionado
            const url = `form.html?route=${encodeURIComponent(selectedRoute)}`;
            window.location.href = url;
        });
    }
});


// Classe para o menu de navegação móvel
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleCLICK = this.handleCLICK.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s');
        });
    }

    handleCLICK(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    
    addClickEvent (){
        this.mobileMenu.addEventListener("click", this.handleCLICK);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

// Inicializa a classe do menu de navegação
const mobileNavbar = new MobileNavbar( 
    ".mobile-menu",
    ".nav-links",
    ".nav-links li"
);
mobileNavbar.init();

// Aplica o efeito VanillaTilt aos cards de destino
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare:true,
    "max-glare": 0.5
});
