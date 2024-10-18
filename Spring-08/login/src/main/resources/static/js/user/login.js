$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();
        const loginData = {
            email: $('#email').val(),
            password: $('#password').val()
        };

        $.ajax({
            type: 'POST',
            url: '/api/v1/users/login',
            contentType: 'application/json',
            data: JSON.stringify(loginData),
            success: function(response) {
                showToast("Đăng nhập thành công", "success");
                window.location.href = 'users';
            },
            error: function(data) {
                showToast(data.responseJSON.message, "error");
            }
        });
    });
});