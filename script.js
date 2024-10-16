// Simulierter "Benutzerdatenbank" Speicher
let users = [];

// Registrierung
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let regUsername = document.getElementById("reg-username").value;
    let regPassword = document.getElementById("reg-password").value;
    let registerMessage = document.getElementById("register-message");

    // Prüfen, ob der Benutzername bereits existiert
    let userExists = users.some(user => user.username === regUsername);

    if (userExists) {
        registerMessage.textContent = "Benutzername existiert bereits!";
        registerMessage.style.color = "red";
    } else {
        // Benutzer registrieren
        users.push({ name: name, email: email, username: regUsername, password: regPassword });
        registerMessage.textContent = "Registrierung erfolgreich!";
        registerMessage.style.color = "green";

        // Felder leeren
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("reg-username").value = "";
        document.getElementById("reg-password").value = "";

        // Login-Formular anzeigen
        document.getElementById("login-container").style.display = "block";

        // Registrierungs-Formular ausblenden
        document.querySelector(".form-container").style.display = "none";
    }
});

// Login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let loginUsername = document.getElementById("login-username").value;
    let loginPassword = document.getElementById("login-password").value;
    let loginMessage = document.getElementById("login-message");

    // Überprüfen, ob die Anmeldedaten korrekt sind
    let validUser = users.find(user => user.username === loginUsername && user.password === loginPassword);

    if (validUser) {
        loginMessage.textContent = "Login erfolgreich!";
        loginMessage.style.color = "green";
        // Hier könntest du den Benutzer weiterleiten oder andere Aktionen ausführen
    } else {
        loginMessage.textContent = "Falscher Benutzername oder Passwort!";
        loginMessage.style.color = "red";
    }
});
