document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Beispielhafte Login-Daten
    var validUsername = "admin";
    var validPassword = "1234";

    if (username === validUsername && password === validPassword) {
        alert("Login erfolgreich!");
        errorMessage.textContent = "";
        // Hier kann man den Benutzer weiterleiten oder andere Aktionen durchführen
    } else {
        errorMessage.textContent = "Benutzername oder Passwort ist falsch!";
    }
});
