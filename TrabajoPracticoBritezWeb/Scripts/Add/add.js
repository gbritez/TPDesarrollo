function SubmitProduct(e) {
    if ($('#productForm').valid()) {
        $.ajax({
            type: 'POST',
            url: 'https://localhost:44394/Products/Put',
            dataType: 'json',
            data: $('#productForm').serialize(),
            success: function (data) {
                alert(data)
                location.reload();
            },
            error: function (data) {
                alert(data.responseJSON.Message)
            }
        })
    }
    e.preventDefault()
}

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

    $('#productForm').validate({
        rules: {
            Nombre: {
                required: true
            },
            Marca: {
                required: true
            },
            Precio: {
                required: true
            }
        },
        messages: {
            Nombre: {
                required: "Ingresar Nombre del producto"
            },
            Marca: {
                required: "Ingresar Marca"
            },
            Precio: {
                required: "Ingresar Precio"
            }
        },


    })
})