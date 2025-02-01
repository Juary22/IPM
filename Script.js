// Script para a navegação responsiva (hamburguer)
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Script para rolagem suave ao clicar nos links da navbar
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();  // Previne o comportamento padrão de rolagem

        const targetId = item.getAttribute('href').substring(1);  // Pega o id da seção
        const targetSection = document.getElementById(targetId);

        // Rola até a seção com um tempo de 1 segundo
        window.scrollTo({
            top: targetSection.offsetTop - 60,  // Ajusta para não cobrir com a navbar
            behavior: 'smooth'
        });
    });
});
