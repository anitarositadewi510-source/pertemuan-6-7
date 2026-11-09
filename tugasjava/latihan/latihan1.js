const daftarWarna = ["white", "lightblue", "yellow"];
let indeksWarna = 0;

document.getElementById("tombolWarna").addEventListener("click", function() {
    document.body.style.backgroundColor = daftarWarna[indeksWarna];

    indeksWarna++;

    if (indeksWarna >= daftarWarna.length) {
        indeksWarna = 0;
    }
});