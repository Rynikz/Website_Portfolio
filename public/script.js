document.addEventListener('DOMContentLoaded', function() {

    // --- Efek Animasi Ketik (Sama seperti sebelumnya) ---
    const typingTextElement = document.getElementById('typing-text');
    const wordsToType = ["Mechatronics Engineer", "AI/ML Developer", "Robotics Programmer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        // ... (Fungsi 'type' tidak berubah, biarkan seperti sebelumnya)
        const currentWord = wordsToType[wordIndex];
        if (isDeleting) {
            typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % wordsToType.length;
            setTimeout(type, 500);
        } else {
            const typingSpeed = isDeleting ? 75 : 150;
            setTimeout(type, typingSpeed);
        }
    }
    type();

    // --- Navigasi Aktif saat Scroll (Sama seperti sebelumnya) ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    // ... (Logika event listener untuk scroll nav tidak berubah)
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSectionId = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSectionId) {
                link.classList.add('active');
            }
        });
    });

    // --- KODE BARU: Animasi Fade-in saat Scroll ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Memicu animasi saat 10% elemen terlihat
    });

    // Ambil semua elemen dengan class 'fade-in' dan amati
    const elementsToFadeIn = document.querySelectorAll('.fade-in');
    elementsToFadeIn.forEach(el => observer.observe(el));
});