const tombolNama = document.getElementById("tombolNama");

tombolNama.addEventListener("click", function() {
    const nama = document.getElementById("nama").value;
    const hasil = document.getElementById("hasil");

    if (nama.trim() === "") {
        hasil.textContent = "Nama tidak boleh kosong!";
    } else {
        hasil.textContent = "Halo, " + nama + "!";
    }
});