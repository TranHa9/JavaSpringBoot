$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: '/api/v1/products',
        success: function (products) {
            products.forEach(product => {
                $("#product-list").append(`
                    <div class="col-md-4 product-card">
                        <div class="product-image-wrapper">
                            <img src="data:image/jpeg;base64,${product.imageBase64}" alt="${product.name}"> 
                         </div>
                        <div class="product-info">
                            <h2 class="text-center">${product.name}</h2>
                            <div class="text-center">
                                $${product.price}
                            </div>
                            <button class="btn btn-primary product-btn" data-product-id="${product.id}" 
                            data-bs-toggle="modal" data-bs-target="#order-modal">Buy Now</button>
                        </div>
                    </div>
                `);
            });
        },
        error: function (data) {
            showToast(data.responseJSON.message, "error");
        }
    });

    $.validator.addMethod("regex", function (value, element, regexpr) {
        return regexpr.test(value);
    }, "Số điện thoại không hợp lệ");

    $("#order-form").validate({
        onfocusout: false,
        onclick: false,
        rules: {
            "email": {
                required: true,
                email: true
            },
            "name": {
                required: true,
                maxlength: 250
            },
            "phone": {
                required: true,
                regex: /^0\d{9}$/
            }
        },
        messages: {
            "email": {
                required: "Email bat buộc nhập",
                email: "Email không đúng định dạng"
            },
            "name": {
                required: "Tên không được để trống",
                maxlength: "Tên không được quá 250 ký tự"
            },
            "phone": {
                required: "Số điện thoại không được để trống",
                maxlength: "Số điện thoại phải bắt đầu bằng số 0 và 10 ký tự"
            }
        }
    });

    $("#appointment-form").validate({
        onfocusout: false,
        onclick: false,
        rules: {
            "email": {
                required: true,
                email: true
            },
            "name": {
                required: true,
                maxlength: 250
            },
            "phone": {
                required: true,
                regex: /^0\d{9}$/
            },
            "description": {
                required: true,
                maxlength: 1000
            }

        },
        messages: {
            "email": {
                required: "Email bat buộc nhập",
                email: "Email không đúng định dạng"
            },
            "name": {
                required: "Tên không được để trống",
                maxlength: "Tên không được quá 250 ký tự"
            },
            "phone": {
                required: "Số điện thoại không được để trống",
                maxlength: "Số điện thoại phải bắt đầu bằng số 0 và 10 ký tự"
            },
            "description": {
                required: "Nội dung không được để trống",
                maxlength: "Nội dung không quá 100 ký tự"
            }
        }
    });

    $("#btn-order").click(function () {
        if (!$("#order-form").valid()) {
            return;
        }
        const formData = $("#order-form").serializeArray();
        const requestBody = {};
        for (let key in formData) {
            requestBody[formData[key].name] = formData[key].value;
        }
        $.ajax({
            url: "/api/v1/emails",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(requestBody),
            success: function (response) {
                showToast("Đặt hàng thành thành công", "success");
                $("#order-form").trigger("reset");
                location.reload();
            },
            error: function (response) {
                showToast("Đặt hàng thất bại", "error");
            }
        });
    });

    $("#btn-send").click(function () {
        if (!$("#appointment-form").valid()) {
            return;
        }
        const product = getDataForm();
        $.ajax({
            url: '/api/v1/appointments',
            type: 'POST',
            data: JSON.stringify(product),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                showToast("Đặt lịch thành công chờ email xác nhận", "success");
                setTimeout(() => {
                    location.reload();
                }, 1000);
            },
            error: function (data) {
                showToast(data.responseJSON.message, "error");
            }
        });
        x``
    })

    function getDataForm() {
        const formValues = $("#appointment-form").serializeArray();
        const appointment = {};
        formValues.forEach(input => {
            appointment[input.name] = input.value;
        });
        return appointment;
    }
})