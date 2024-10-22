$(document).ready(function () {

    let productId = null;

    $.validator.addMethod("positiveNumber", function (value, element) {
        return this.optional(element) || (parseFloat(value) > 0);
    }, "Không được âm.");

    $("#product-form").validate({
        onfocusout: false,
        onkeyup: false,
        onclick: false,
        rules: {
            "name": {
                required: true,
                maxlength: 255
            },
            "price": {
                required: true,
                ositiveNumber: true
            },
            "description": {
                required: false,
                maxlength: 1000
            },
            "imageFile": {
                required: true,
            }
        },
        messages: {
            "name": {
                required: "Tên sản phẩm không được để trống!",
                maxlength: "Tên bạn đọc không vượt quá 255 ký tự"
            },
            "price": {
                required: "Giá sản phẩm không được để trống!",
                ositiveNumber: "Gía không được âm",
            },
            "description": {
                maxlength: "Mô tả không vượt quá 1000 ký tự"
            },
            "imageFile": {
                required: "ảnh không được để trống!"
            }

        }
    });
    $("#btn-save-product").click(function (event) {
        const isValidForm = $("#product-form").valid();
        if (!isValidForm) {
            return;
        }
        if (productId) {
            updateProduct(productId);
        } else {
            createProduct();
        }
    });

    function createProduct() {
        const product = getDataForm();

        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price);
        formData.append("description", product.description);
        formData.append("image", $("#imageFile")[0].files[0]);

        // --> sử dụng AJAX, axios, fetch
        $.ajax({
            url: '/api/v1/products',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                showToast("Tạo mới sản phẩm thành công", "success");
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
        const formValues = $("#product-form").serializeArray();
        const product = {};
        formValues.forEach(input => {
            product[input.name] = input.value;
        });
        return product;
    }

    $("#imageFile").change(function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                $("#image").attr("src", e.target.result); // Hiển thị ảnh lên modal
            }
            reader.readAsDataURL(file);
        } else {
            $("#image").attr("src", ""); // Nếu không có file, reset ảnh
        }
    });

    $(".btn-update").click(function (event) {
        productId = $(event.currentTarget).attr("product-id");
        $("#product-form").validate().resetForm();
        $.ajax({
            url: '/api/v1/products/' + productId,
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                // đổ dữ liệu vào form
                $("#product-form input[name='name']").val(data.name);
                $("#product-form input[name='price']").val(data.price);
                $("#product-form textarea[name='description']").val(data.description);
                if (data.image) {
                    $("#image").attr("src", 'data:image/jpeg;base64,' + data.image);
                } else {
                    $("#image").attr("src", "");
                }

                $("#product-form #btn-save-product").attr("product-id", data.id);
                // hiển thị form
                $("#product-modal").modal('show');
            },
            error: function (data) {
                showToast(data.responseJSON.message, "error");
            }
        });

    });

    function updateProduct(id) {
        const product = getDataForm();

        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price);
        formData.append("description", product.description);
        formData.append("image", $("#imageFile")[0].files[0]);

        // --> sử dụng AJAX, axios, fetch
        $.ajax({
            url: '/api/v1/products/' + id,
            type: 'PUT',
            data: formData,
            contentType: false,
            processData: false,
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

    $("#product-modal").on("hidden.bs.modal", function () {
        $("#product-form").trigger("reset");
        $("#image").attr("src", "");
    });

})