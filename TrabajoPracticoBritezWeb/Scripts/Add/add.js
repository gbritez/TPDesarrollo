function SubmitProduct() {
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