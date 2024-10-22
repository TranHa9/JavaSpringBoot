$(document).ready(function () {
    let appointmentId = null;

    $("#appointment-form").validate({
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

    $("#btn-save-appointment").click(function (event) {
        if (!$("#appointment-form").valid()) {
            return;
        }
        updateAppointmentStatus(appointmentId, isApprove);
    })

    function updateAppointmentStatus(appointmentId, isApprove) {
        const formData = $("#appointment-form").serializeArray();
        const requestBody = {};
        for (let key in formData) {
            requestBody[formData[key].name] = formData[key].value;
        }
        const url = isApprove ? '/api/v1/appointments/approve/' + appointmentId : '/api/v1/appointments/reject/' + appointmentId;
        $.ajax({
            url: url,
            type: 'PUT',
            data: JSON.stringify(requestBody),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                showToast("Đã gửi email chấp thuận thành công", "success");
                setTimeout(() => {
                    location.reload();
                }, 1000);
            },
            error: function (data) {
                showToast(data.responseJSON.message, "error");
            }
        });
    }

    $(".btn-approve").click(function (event) {
        isApprove = true;
        appointmentId = $(event.currentTarget).attr("appointment-id");
        $.ajax({
            url: '/api/v1/appointments/' + appointmentId,
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                // đổ dữ liệu vào form
                $("#appointment-form input[name='email']").val(data.email);
                $("#appointment-form #btn-save-appointment").attr("appointment-id", data.id);
                // hiển thị form
                $("#appointment-modal").modal('show');
            },
            error: function (data) {
                showToast(data.responseJSON.message, "error");
            }
        });
    })

    $(".btn-reject").click(function (event) {
        isApprove = false;
        appointmentId = $(event.currentTarget).attr("appointment-id");
        $.ajax({
            url: '/api/v1/appointments/' + appointmentId,
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                // đổ dữ liệu vào form
                $("#appointment-form input[name='email']").val(data.email);
                $("#appointment-form #btn-save-appointment").attr("appointment-id", data.id);
                // hiển thị form
                $("#appointment-modal").modal('show');
            },
            error: function (data) {
                showToast(data.responseJSON.message, "error");
            }
        });
    })
})