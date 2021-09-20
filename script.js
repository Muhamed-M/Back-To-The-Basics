function mobileNav() {
    const btn = document.getElementById('open-nav');
    const nav = document.getElementsByClassName('mobile-nav')[0];

    btn.addEventListener('click', () => {
        if (nav.style.height === '60vh') nav.style.height = '0';
        else nav.style.height = '60vh';
    });
}
mobileNav();

function animations() {
    const navBar = document.querySelector('nav');
    const slike = document.querySelector('.slike');
    const naslov = document.querySelector('.naslov');
    const text = document.querySelectorAll('.text');

    window.addEventListener('load', () => {
        navBar.style.transform = 'translateY(0)';
        slike.style.transform = 'translateX(0)';
        slike.style.opacity = '1';
        naslov.style.transform = 'translateY(0)';
        naslov.style.opacity = '1';
    });

    window.addEventListener('scroll', () => {
        for (let i = 0; i < text.length; i++) {
            let windowHeight = innerHeight;
            let elY = text[i].getBoundingClientRect().top;
    
            if (elY < windowHeight - 50) text[i].style.transform = 'scale(1)';
            else text[i].style.transform = 'scale(0)';
        }
    });
}
animations();

function modal() {
    const openCloseBtn = document.querySelectorAll('.open-close-modal');
    const modal = document.querySelector('.overlay');

    openCloseBtn.forEach((item) => {
        item.addEventListener('click', () => {
            if (modal.style.transform === 'scale(1)') modal.style.transform = 'scale(0)';
            else modal.style.transform = 'scale(1)';
        });
    });
    
    window.addEventListener('click', (m) => {
        if (m.target === modal) modal.style.transform = 'scale(0)';
    });
}
modal();