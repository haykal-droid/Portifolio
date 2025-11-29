const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    console.log("Tombol tema diklik");

  
    document.body.classList.toggle("dark-mode");
});

const greetBtn = document.getElementById("greetBtn");
const greetingText = document.getElementById("greeting");

greetBtn.addEventListener("click", function () {
    console.log("Tombol sapa diklik");

    let nama = prompt("Siapa nama Anda?");
    if (nama) {
        greetingText.innerText = "Halo, " + nama + "!";
    } else {
        greetingText.innerText = "Halo, Pengunjung!";
    }
});

/*
Refleksi:

Bagian yang paling sulit dipahami adalah cara kerja event listener dan
bagaimana JavaScript bisa mengubah elemen HTML menggunakan DOM. Awalnya
saya bingung karena tombol tidak merespons, ternyata karena script harus
diletakkan di bagian bawah HTML. Setelah berhasil, saya merasa sangat
senang karena halaman yang awalnya statis bisa menjadi interaktif hanya
dengan beberapa baris kode JavaScript.
intinya saya masih pusing kerjakan ini tugas pak dan masih pake bantuan chat gpt sebagian🙏🙏
*/