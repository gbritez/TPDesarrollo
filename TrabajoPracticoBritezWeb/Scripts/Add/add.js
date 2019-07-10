function SubmitProduct(e) {
    if ($('#productForm').valid()) {
        $.ajax({
            type: 'POST',
            url: 'https://localhost:44394/Products/Put',
            dataType: 'json',
            data: $('#productForm').serialize(),
            success: function (data) {
                displayModal();
            },
            error: function (data) {
            }
        })
    }
    e.preventDefault()
}

function displayModal() {
    $('#infoModal').modal('show');
}

$(document).ready(function () {
    $('#infoModal').on('hidden.bs.modal', function () {
        location.reload();
    })
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