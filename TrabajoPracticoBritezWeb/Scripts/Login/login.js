function login(e) {
    if ($('#loginForm').valid()) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'https://localhost:44394/Login/authenticate',
            dataType: 'json',
            data: $('#loginForm').serialize(),
            error: function (data) {
                displayError();
                
            },
            success: function (data) {
                debugger;
               
                if (data === "admin") {
                    location.href = "HomeAdmin.html"
                }
                else {
                    location.href = "HomeUser.html"
                }
            }

        })
    }
    
}

function displayError(data) {
    $('#infoModal').modal('show');
}

$(document).on('keypress', function (e) {
    if (e.which == 13) {
        login(event)
    }
});


$(document).ready(function () {
    //Set Bootstrap classes for validation.
    jQuery.validator.setDefaults({
        errorElement: 'span',
        errorPlacement: function (error, element) {
            error.addClass('invalid-feedback');
            element.closest('.form-group').append(error);
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass('is-invalid');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass('is-invalid');
        }
    });

    $('#loginForm').validate({
        rules: {
            user: {
                required: true
            },
            password: {
                required: true
            }
        },
        messages: {
            user: {
                required: "Enter username"
            },
            password: {
                required: "Enter Password"
            }
        },


    })
})
