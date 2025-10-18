document.addEventListener('DOMContentLoaded', function() {

    // --- KODE BARU: Fungsionalitas Menu Hamburger ---
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const overlayMenu = document.getElementById('overlay-menu');
    const navLinks = overlayMenu.querySelectorAll('.nav-link');

    // Buka menu
    menuToggle.addEventListener('click', () => {
        overlayMenu.classList.add('open');
    });

    // Tutup menu
    closeMenu.addEventListener('click', () => {
        overlayMenu.classList.remove('open');
    });

    // Tutup menu setelah link diklik (untuk navigasi di halaman yang sama)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            overlayMenu.classList.remove('open');
        });
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