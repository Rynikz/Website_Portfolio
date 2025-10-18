document.addEventListener('DOMContentLoaded', function() {

    // --- Efek Animasi Ketik ---
    const typingTextElement = document.getElementById('typing-text');
    const wordsToType = ["Robotics Programmer", "Cloud Enthusiast", "Problem Solver"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = wordsToType[wordIndex];
        
        if (isDeleting) {
            // Hapus karakter
            typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Tambah karakter
            typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        // Cek kondisi
        if (!isDeleting && charIndex === currentWord.length) {
            // Selesai mengetik, tunggu, lalu mulai hapus
            isDeleting = true;
            setTimeout(type, 2000); // Waktu jeda sebelum menghapus
        } else if (isDeleting && charIndex === 0) {
            // Selesai menghapus, ganti kata, mulai ketik lagi
            isDeleting = false;
            wordIndex = (wordIndex + 1) % wordsToType.length;
            setTimeout(type, 500); // Waktu jeda sebelum kata baru
        } else {
            // Lanjutkan mengetik/menghapus
            const typingSpeed = isDeleting ? 75 : 150;
            setTimeout(type, typingSpeed);
        }
    }

    type();


    // --- Navigasi Aktif saat Scroll ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Cek apakah section ada di dalam viewport
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            // href di link (misal: "#about") sama dengan id section saat ini
            if (link.getAttribute('href').substring(1) === currentSectionId) {
                link.classList.add('active');
            }
        });
    });
});