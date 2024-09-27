// Smooth Scroll untuk navigasi halaman yang sama
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetUrl = this.getAttribute('href');

        // Cek apakah link mengarah ke halaman yang berbeda (misalnya, pantai.html)
        if (targetUrl.includes('.html')) {
            window.location.href = targetUrl;  // Pindah halaman jika .html
        } else {
            // Jika hanya scroll ke bagian halaman
            e.preventDefault();
            const targetId = targetUrl.substring(1); // Hilangkan '#' dari href
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust sesuai kebutuhan
                    behavior: 'smooth'
                });
            }
        }
    });
});

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

/*document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.gallery-container');

    // Membuat tombol scroll ke kanan
    const scrollRightButton = document.createElement('button');
    scrollRightButton.textContent = 'Scroll Kanan';
    scrollRightButton.onclick = () => {
        galleryContainer.scrollBy({ left: 200, behavior: 'smooth' });
    };

    // Membuat tombol scroll ke kiri
    const scrollLeftButton = document.createElement('button');
    scrollLeftButton.textContent = 'Scroll Kiri';
    scrollLeftButton.onclick = () => {
        galleryContainer.scrollBy({ left: -200, behavior: 'smooth' });
    };



    // Menambahkan tombol ke galeri
    galleryContainer.parentNode.insertBefore(scrollLeftButton, galleryContainer);
    galleryContainer.parentNode.insertBefore(scrollRightButton, galleryContainer.nextSibling);
});*/

document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.gallery-container');

    // Membuat tombol scroll ke kanan
    const scrollRightButton = document.createElement('button');
    scrollRightButton.textContent = 'Scroll Kanan';
    scrollRightButton.onclick = () => {
        galleryContainer.scrollBy({ left: 200, behavior: 'smooth' });
    };
    scrollRightButton.style.backgroundColor = 'black'; // Mengubah warna latar belakang tombol
    scrollRightButton.style.color = 'white'; // Mengubah warna teks tombol

    // Membuat tombol scroll ke kiri
    const scrollLeftButton = document.createElement('button');
    scrollLeftButton.textContent = 'Scroll Kiri';
    scrollLeftButton.onclick = () => {
        galleryContainer.scrollBy({ left: -200, behavior: 'smooth' });
    };
    scrollLeftButton.style.backgroundColor = 'black'; // Mengubah warna latar belakang tombol
    scrollLeftButton.style.color = 'black'; // Mengubah warna teks tombol

    // Menambahkan tombol ke galeri
    galleryContainer.parentNode.insertBefore(scrollLeftButton, galleryContainer);
    galleryContainer.parentNode.insertBefore(scrollRightButton, galleryContainer.nextSibling);
});
