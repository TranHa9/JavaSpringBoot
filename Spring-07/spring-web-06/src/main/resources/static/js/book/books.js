$(document).ready(function () {

    // xu ly luu sach (tao moi HOAC cap nhat)
    $("#btn-save-book").click(function (event) {
        const bookId = $(event.currentTarget).attr("book-id");
        if (bookId) {
            // cap nhat sach
            updateBook(bookId);
        } else {
            // tao moi sach
            createBook();
        }
    });

    // lấy thông tin 1 quyển sách
    $(".btn-update").click(function (event) {
        const bookId = $(event.currentTarget).attr("book-id");
        $.ajax({
            url: '/api/v1/books/' + bookId,
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                // đổ dữ liệu vào form
                $("#book-form input[name='name']").val(data.name);
                $("#book-form input[name='author']").val(data.author);
                $("#book-form input[name='publishedYear']").val(data.publishedYear);
                $("#book-form input[name='publisher']").val(data.publisher);
                $("#book-form input[name='totalPage']").val(data.totalPage);
                $("#book-form input[name='price']").val(data.price);
                $("#book-form input[name='category']").val(data.category);
                $("#book-form input[name='description']").val(data.description);

                $("#book-modal #btn-save-book").attr("book-id", data.id);
                // hiển thị form
                $('#book-modal').modal('show');
            },
            error: function (data) {
                showToast(data.responseJSON.message, "error");
            }
        });

    });

    // tao moi sach
    function createBook() {
        // b1: lấy tất cả các giá trị trên form mà người dùng nhập -> taạo thành 1 object book
        const book = getDataForm();

        // b2: đẩy dữ liệu lên backend (call API tạo mới sách)
        // --> sử dụng AJAX, axios, fetch
        $.ajax({
            url: '/api/v1/books',
            type: 'POST',
            data: JSON.stringify(book),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                showToast("Tạo mới sách thành công", "success");
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
    function updateBook(id) {
        // b1: lấy tất cả các giá trị trên form mà người dùng nhập -> taạo thành 1 object book
        const book = getDataForm();

        // b2: đẩy dữ liệu lên backend (call API tạo mới sách)
        // --> sử dụng AJAX, axios, fetch
        $.ajax({
            url: '/api/v1/books/' + id,
            type: 'PUT',
            data: JSON.stringify(book),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                showToast("Cập nhật sách thành công", "success");
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
        const formValues = $("#book-form").serializeArray();
        const book = {};
        formValues.forEach(input => {
            book[input.name] = input.value;
        });
        return book;
    }

    // bắt sự kiện modal đóng -> xoa het cac du lieu đang điền dở trong form
    $("#book-modal").on("hidden.bs.modal", function () {
        $("#book-form").trigger("reset");
    });

    // xoa sach
    $(".btn-delete").click(function (event) {
        const confirmResult = confirm("Bạn có chắc chắn muốn xóa quyển sách này không?");
        if (!confirmResult) {
            return;
        }
        const bookId = $(event.currentTarget).attr("book-id");
        $.ajax({
            url: '/api/v1/books/' + bookId,
            type: 'DELETE',
            success: function (data) {
                showToast("Xóa sách thành công", "success");
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









