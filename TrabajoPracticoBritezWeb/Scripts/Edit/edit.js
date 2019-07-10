$(document).ready(function () {
    $.ajax({
        url: "https://localhost:44394/Products/Get",
        dataType: 'json',
        type: 'GET',
        success: function (data) {
            initDataTable(data)
        }
    })

});

function initDataTable(data) {
    $('#dataTable').DataTable({
        select: true,
        data: data,
        dom: 'Bfrtip',
        buttons: [
            {
                text: 'Edit',
                className: 'btn',
                action: function (e, dt, node, config) {
                    let data = dt.rows({ selected: true }).data()[0];
                    fillModal(data);
                    $('#exampleModal').modal('show');
                }
            },
            {
                text: 'Delete',
                className: 'btn',
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

function deleteItem(id) {
    $.ajax({
        type: 'GET',
        url: "https://localhost:44394/Products/Delete/" + id,
        dataType: 'json',
        data: id,
        success: function (data) {
            alert(data);
            location.reload();
        }
    })
}

function editItem() {
    $.ajax({
        url: "https://localhost:44394/Products/Edit",
        dataType: 'json',
        data: $('#editForm').serialize(),
        type: 'POST',
        success: function (data) {
            alert(data);
            location.reload();
        }
    })
}

function fillModal(data) {
    $('#Id').val(data.Id);
    $('#Nombre').val(data.Nombre);
    $('#Marca').val(data.Marca);
    $('#Precio').val(data.Precio);
    $('#Descripcion').val(data.Descripcion);
}