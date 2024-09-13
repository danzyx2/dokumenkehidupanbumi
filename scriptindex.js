
// Galeri gambar interaktif
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        // Buat overlay besar untuk menampilkan gambar
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '1000';

        // Gambar besar
        const largeImage = document.createElement('img');
        largeImage.src = image.src;
        largeImage.style.maxWidth = '80%';
        largeImage.style.maxHeight = '80%';
        overlay.appendChild(largeImage);

        // Menambahkan overlay ke body
        document.body.appendChild(overlay);

        // Klik pada overlay untuk menutup
        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});
