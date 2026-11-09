document.getElementById("tombolLogin").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const errorUsername = document.getElementById("errorUsername");
    const errorPassword = document.getElementById("errorPassword");
    const hasilLogin = document.getElementById("hasilLogin");

    errorUsername.textContent = "";
    errorPassword.textContent = "";
    hasilLogin.textContent = "";

    let valid = true;

    if (username.trim() === "") {
        errorUsername.textContent = "Username tidak boleh kosong!";
        valid = false;
    }

    if (password.length < 8) {
        errorPassword.textContent = "Password minimal 8 karakter!";
        valid = false;
    }

    if (valid) {
        hasilLogin.textContent = "Login berhasil!";
        hasilLogin.style.color = "green";
    }
});