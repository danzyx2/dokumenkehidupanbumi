const soalElement = document.getElementById('soal');
        const jawabButton = document.getElementById('jawab');
        const bantuanButton = document.getElementById('bantuan');
        const hasilElement = document.getElementById('hasil');
        const countdownDisplay = document.getElementById('countdown');
        const timerElement = document.getElementById('timer');

        const jawabanBenar = "telur";
        const linkBenar = "https://link.dana.id/danakaget?c=svy53d8nb&r=fkh29J&orderId=20250403101214728715010300166099615490357";
        const linkBantuan = "https://youtube.com/@kehidupanbumi7332?feature=shared";

        let waktuHabis = false;
        let sudahMenjawabBenar = false;
        let intervalId;

        // Set the target date and time
        const targetDate = new Date("April 2, 2025 21:00:00").getTime();  // Ubah tanggal dan waktu hitung mundur

        function startCountdown() {
            intervalId = setInterval(function() {
                let waktuSekarang = new Date().getTime();
                let selisih = targetDate - waktuSekarang;

                if (selisih <= 0) {
                    clearInterval(intervalId);
                    waktuHabis = true;
                    countdownDisplay.textContent = "Waktu Habis!";
                    hasilElement.textContent = "Waktu Habis, Silakan Coba Lagi Nanti!";
                    jawabButton.disabled = true;
                    jawabButton.classList.remove('bg-indigo-500', 'hover:bg-indigo-700');
                    jawabButton.classList.add('bg-gray-400', 'cursor-not-allowed');
                    return;
                }

                // Calculate days, hours, minutes, and seconds remaining
                let hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
                let jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
                let detik = Math.floor((selisih % (1000 * 60)) / 1000);

                countdownDisplay.textContent = hari + " Hari " + jam + " Jam " + menit + " Menit " + detik + " Detik ";
            }, 1000);
        }


        jawabButton.addEventListener('click', function() {
            if (waktuHabis) {
                hasilElement.textContent = "Waktu sudah habis!";
                return;
            }
            if (sudahMenjawabBenar) {
                hasilElement.textContent = "Sudah ada yang menjawab benar!";
                return;
            }

            let jawaban = prompt("Masukkan jawaban Anda:").toLowerCase();
            if (jawaban === jawabanBenar) {
                hasilElement.textContent = "Benar! Anda akan dialihkan...";
                sudahMenjawabBenar = true;
                clearInterval(intervalId); // Stop the countdown timer when the correct answer is given
                jawabButton.disabled = true;
                jawabButton.classList.remove('bg-indigo-500', 'hover:bg-indigo-700');
                jawabButton.classList.add('bg-gray-400', 'cursor-not-allowed');
                setTimeout(function() {
                    window.location.href = linkBenar;
                }, 1000);
            } else {
                hasilElement.textContent = "Salah, silakan coba lagi!";
            }
        });

        bantuanButton.addEventListener('click', function() {
            window.location.href = linkBantuan;
        });

        startCountdown();
