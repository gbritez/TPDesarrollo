$(document).ready(function () {

    $.ajax({
        url: "https://localhost:44394/Products/Get",
        dataType: 'json',
        type: 'GET',
        success: function (data) {
            $('#dataTable').DataTable({

                data: data,
                columns: [
                    { data: "Id" },
                    { data: "Nombre" },
                    { data: "Marca" },
                    { data: "Precio" },
                    { data: "Descripcion" },
                ]
            });
        }
    })

});