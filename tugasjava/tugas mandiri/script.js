const form = document.getElementById("formPendaftaran");

const nama = document.getElementById("nama");
const email = document.getElementById("email");
const password = document.getElementById("password");

const errorNama = document.getElementById("errorNama");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");

const pesan = document.getElementById("pesan");

// Validasi ketika tombol daftar diklik
form.addEventListener("submit", function(event) {
    event.preventDefault();

    let valid = true;

    errorNama.textContent = "";
    errorEmail.textContent = "";
    errorPassword.textContent = "";
    pesan.textContent = "";

    // Validasi nama
    if (nama.value.trim() === "") {
        errorNama.textContent = "Nama tidak boleh kosong!";
        valid = false;
    }

    // Validasi email
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!polaEmail.test(email.value)) {
        errorEmail.textContent = "Format email tidak valid!";
        valid = false;
    }

    // Validasi password
    if (password.value.length < 8) {
        errorPassword.textContent = "Password minimal 8 karakter!";
        valid = false;
    }

    // Menampilkan hasil
    if (valid) {
        pesan.textContent = "Pendaftaran berhasil!";
        pesan.style.color = "green";
        document.body.style.backgroundColor = "#d5f5e3";
    } else {
        pesan.textContent = "Silakan periksa kembali data Anda.";
        pesan.style.color = "red";
        document.body.style.backgroundColor = "#fadbd8";
    }
});

// Event keyup untuk menampilkan teks saat mengetik nama
nama.addEventListener("keyup", function() {
    if (nama.value.trim() !== "") {
        errorNama.textContent = "";
    }
});