$(document).ready(function () {

    $("#email-form").validate({
        onfocusout: false,
        onclick: false,
        rules: {
            "email": {
                required: true,
                email: true
            },
            "content": {
                required: true,
                maxlength: 250
            }
        },
        messages: {
            "email": {
                required: "Email bat buộc nhập",
                email: "Email không đúng định dạng"
            },
            "content": {
                required: "Nội dung không được để trống",
                maxlength: "Nội dung không được quá 250 ký tự"
            }
        }
    });

    $("#send-email").click(function () {
        // 1 - validate
        if (!$("#email-form").valid()) {
            return;
        }

        // 2 - thu thập dữ liều từ form
        const formData = $("#email-form").serializeArray();
        const requestBody = {};
        for (let key in formData) {
            requestBody[formData[key].name] = formData[key].value;
        }

        // 3 - call ajax lên API backend
        $.ajax({
            url: "/api/v1/emails",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(requestBody),
            success: function (response) {
                alert("Gửi email thành công");
                $("#email-form").trigger("reset");
            },
            error: function (response) {
                alert("Gửi email thất bại");
            }
        });
    });

});