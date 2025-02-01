
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();  

        const targetId = item.getAttribute('href').substring(1); 
        const targetSection = document.getElementById(targetId);

    
        window.scrollTo({
            top: targetSection.offsetTop - 60,  
            behavior: 'smooth'
        });
    });
});
