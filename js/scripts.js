document.addEventListener('DOMContentLoaded', () => {
    // Lógica para o Menu Hambúrguer
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }

    // Lógica para atualizar o ano no footer
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('#ano, #ano2');
    
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
});
