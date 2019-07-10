function login(e) {
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'https://localhost:44394/Login/authenticate',
        dataType: 'json',
        data: $('#loginForm').serialize(),
        error: function (data) {
            alert("Usuario o contraseña invalidos.")
        },
        success: function (data) {
            if (data === "admin") {
                location.href = "HomeAdmin.html"
            }
            else {
                location.href="HomeUser.html"
            }     
        }

    })
}
