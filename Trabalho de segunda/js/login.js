// --- Lógica de Autenticação ---
// Nota: Esta é uma solução simples usando localStorage e não é segura para produção.

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('section.login form');
    if (!loginForm) return;

    // Adiciona uma caixa de mensagem para feedback ao usuário
    const messageBox = document.createElement('p');
    messageBox.id = 'message-box';
    messageBox.style.marginTop = '1rem';
    messageBox.style.color = '#dc2626';
    loginForm.parentNode.insertBefore(messageBox, loginForm.nextSibling);

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            localStorage.setItem('isLoggedIn', 'true');
            messageBox.textContent = 'Login realizado com sucesso!';
            messageBox.style.color = '#16a34a';
            setTimeout(() => {
                window.location.href = 'form.html';
            }, 1500);
        } else {
            messageBox.textContent = 'E-mail ou senha incorretos.';
            messageBox.style.color = '#dc2626';
        }
    });

    // Simulação de cadastro
    const registerLink = document.querySelector('.register-link');
    if (registerLink) {
        registerLink.addEventListener('click', (event) => {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (email && password) {
                const newUser = { email, password };
                localStorage.setItem('user', JSON.stringify(newUser));
                messageBox.textContent = 'Cadastro realizado com sucesso! Faça login.';
                messageBox.style.color = '#16a34a';
            } else {
                messageBox.textContent = 'Por favor, preencha e-mail e senha para se cadastrar.';
                messageBox.style.color = '#dc2626';
            }
        });
    }
});