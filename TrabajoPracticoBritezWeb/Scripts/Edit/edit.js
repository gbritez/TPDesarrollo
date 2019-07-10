$(document).ready(function () {
    $('#infoModal').on('hidden.bs.modal', function () {
        location.reload();
    })
    $.ajax({
        url: "https://localhost:44394/Products/Get",
        dataType: 'json',
        type: 'GET',
        success: function (data) {
            initDataTable(data)
        }
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

    $('#editForm').validate({
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

});

function displayModal(data) {
    $('#info').html(data)
    $('#exampleModal').modal('hide');
    $('#infoModal').modal('show');
}

function initDataTable(data) {
    $('#dataTable').DataTable({
        select: true,
        data: data,
        dom: 'Bfrtip',
        buttons: [
            {
                text: 'Edit',
                className: 'btn btn-success',
                action: function (e, dt, node, config) {
                    let data = dt.rows({ selected: true }).data()[0];
                    fillModal(data);
                    $('#exampleModal').modal('show');
                }
            },
            {
                text: 'Delete',
                className: 'btn btn-danger',
                action: function (e, dt, node, config) {
                    let id = dt.rows({ selected: true }).data()[0].Id;
                    deleteItem(id)
                }
            },

        ],
        columns: [
            { data: "Id" },
            { data: "Nombre" },
            { data: "Marca" },
            { data: "Precio" },
            { data: "Descripcion" },
        ]
    });
}

function deleteItem(id, e) {
    $.ajax({
        type: 'GET',
        url: "https://localhost:44394/Products/Delete/" + id,
        dataType: 'json',
        data: id,
        success: function (data) {
            displayModal(data);
        }
    })
}

function editItem(e) {
    if ($('#editForm').valid()) {

        $.ajax({
            url: "https://localhost:44394/Products/Edit",
            dataType: 'json',
            data: $('#editForm').serialize(),
            type: 'POST',
            success: function (data) {
                displayModal(data);
            }
        })
    }
    e.preventDefault();
}

function fillModal(data) {
    $('#Id').val(data.Id);
    $('#Nombre').val(data.Nombre);
    $('#Marca').val(data.Marca);
    $('#Precio').val(data.Precio);
    $('#Descripcion').val(data.Descripcion);
}