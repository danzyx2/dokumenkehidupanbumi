(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })

    
})(jQuery);

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


/*function copyCode() {
    var copyText = document.getElementById("code-to-copy");
    var range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    console.log("Kode berhasil disalin!");
}



function changeBackground() {
    // Ambil elemen <pre> dengan id 'codeBlock'
    var codeBlock = document.getElementById('codeBlock');
    
    // Ubah latar belakang menjadi hijau
    codeBlock.style.backgroundColor = '#28a745';  // Hijau
}


/*const copyButton =
document.getElementById('copyButton');
const progressBar =
document.getElementById('progressBar');
const copyText =
document.getElementById('code-to-copy');

copyButton.addEventListener('click', () => {
    function copyCode() {
        var range = document.createRange();
        range.selectNode(copyText);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
    }

    copyCode();
    progressBar.style.width = '100%';
    setTimeout(() => {
        progressBar.style.width = '0%';
    }, 1000);
});*/


function copyCode() {
    // Menambahkan animasi loading
    var loadingBar = document.getElementById("loadingBar");
    
    // Mengubah lebar loading dari 0% menjadi 100%
    loadingBar.style.width = '100%';

    // Menunggu 1 detik agar animasi selesai, kemudian mengubah latar belakang
    setTimeout(function() {
        // Menyalin teks
        var copyText = document.getElementById("code-to-copy");
        var range = document.createRange();
        range.selectNode(copyText);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        console.log("Kode berhasil disalin!");

        // Mengubah latar belakang menjadi hijau setelah animasi selesai
        var codeBlock = document.getElementById('codeBlock');
        codeBlock.style.backgroundColor = '#28a745';  // Hijau
    }, 1000); // Waktu tunggu 1 detik untuk animasi loading selesai
}

