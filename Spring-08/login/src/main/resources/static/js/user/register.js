$(document).ready(function() {
    $('#registerForm').on('submit', function(event) {
        event.preventDefault();
        const userData = {
            name: $('#name').val(),
            email: $('#email').val(),
            password: $('#password').val(),
            phone: $('#phone').val(),
            address: $('#address').val(),
            dob: $('#dob').val(),
            gender: $('#gender').val()
        };

        $.ajax({
            type: 'POST',
            url: '/api/v1/users/register',
            contentType: 'application/json',
            data: JSON.stringify(userData),
            success: function(response) {
                showToast("Đăng ký thành công! Vui lòng kiểm tra email để xác thực.","success")
                $('#registerForm')[0].reset();
            },
            error: function(data) {
                showToast(data.responseJSON.message, "error");
            }
        });
    });
});