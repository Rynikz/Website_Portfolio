document.addEventListener('DOMContentLoaded', function() {

    // --- KODE BARU: Fungsionalitas Menu Sidebar ---
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const sidebar = document.getElementById('sidebar-nav');
    const backdrop = document.getElementById('backdrop');
    const navLinks = sidebar.querySelectorAll('.nav-link');

    const openSidebar = () => {
        sidebar.classList.add('open');
        backdrop.classList.add('open');
    };

    const closeSidebar = () => {
        sidebar.classList.remove('open');
        backdrop.classList.remove('open');
    };

    menuToggle.addEventListener('click', openSidebar);
    closeMenu.addEventListener('click', closeSidebar);
    backdrop.addEventListener('click', closeSidebar);

    navLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });


    // --- Efek Animasi Ketik (Sama seperti sebelumnya) ---
    const typingTextElement = document.getElementById('typing-text');
    const wordsToType = ["Mechatronics Engineer", "AI/ML Developer", "Robotics Programmer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        if (!typingTextElement) return;
        const currentWord = wordsToType[wordIndex];
        if (isDeleting) {
            typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true; setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false; wordIndex = (wordIndex + 1) % wordsToType.length; setTimeout(type, 500);
        } else {
            const typingSpeed = isDeleting ? 75 : 150; setTimeout(type, typingSpeed);
        }
    }
    type();

    // --- Animasi Fade-in saat Scroll (Sama seperti sebelumnya) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    const elementsToFadeIn = document.querySelectorAll('.fade-in');
    elementsToFadeIn.forEach(el => observer.observe(el));
});