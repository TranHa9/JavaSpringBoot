$(document).ready(function () {

    $("#btn-save-reader").click(function (event) {
        const readerId = $(event.currentTarget).attr("reader-id");
        if (readerId) {
            updateReader(readerId);
        } else {
            createReader();
        }
    });

    // lấy thông tin 1 bạn đọc
    $(".btn-update").click(function (event) {
        const readerId = $(event.currentTarget).attr("reader-id");
        $.ajax({
            url: '/api/v1/readers/' + readerId,
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                // đổ dữ liệu vào form
                $("#reader-form input[name='name']").val(data.name);
                $("#reader-form input[name='email']").val(data.email);
                $("#reader-form input[name='phone']").val(data.phone);
                $("#reader-form input[name='address']").val(data.address);

                $("#reader-modal #btn-save-reader").attr("reader-id", data.id);
                // hiển thị form
                $('#reader-modal').modal('show');
            },
            error: function (data) {
                showToast(data.responseJSON.message, "error");
            }
        });

    });

    function createReader() {
        const reader = getDataForm();

        // --> sử dụng AJAX, axios, fetch
        $.ajax({
            url: '/api/v1/readers',
            type: 'POST',
            data: JSON.stringify(reader),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                showToast("Tạo mới bạn đọc thành công", "success");
                setTimeout(() => {
                    location.reload();
                }, 1000);
            },
            error: function (data) {
                showToast(data.responseJSON.message, "error");
            }
        });
    }

    // cap nhat sach
    function updateReader(id) {
        const reader = getDataForm();

        // --> sử dụng AJAX, axios, fetch
        $.ajax({
            url: '/api/v1/readers/' + id,
            type: 'PUT',
            data: JSON.stringify(reader),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                showToast("Cập nhật bạn đọc thành công", "success");
                setTimeout(() => {
                    location.reload();
                }, 1000);
            },
            error: function (data) {
                showToast(data.responseJSON.message, "error");
            }
        });
    }

    function getDataForm() {
        const formValues = $("#reader-form").serializeArray();
        const reader = {};
        formValues.forEach(input => {
            reader[input.name] = input.value;
        });
        return reader;
    }

    // bắt sự kiện modal đóng -> xoa het cac du lieu đang điền dở trong form
    $("#reader-modal").on("hidden.bs.modal", function () {
        $("#reader-form").trigger("reset");
    });

// xoa sach
    $(".btn-delete").click(function (event) {
        const confirmResult = confirm("Bạn có chắc chắn muốn xóa bạn đọc này không?");
        if (!confirmResult) {
            return;
        }
        const readerId = $(event.currentTarget).attr("reader-id");
        $.ajax({
            url: '/api/v1/readers/' + readerId,
            type: 'DELETE',
            success: function (data) {
                showToast("Xóa bạn đọc thành công", "success");
                setTimeout(() => {
                    location.reload();
                }, 1000);
            },
            error: function (data) {
                showToast(data.responseJSON.message, "error");
            }
        });
    });
});